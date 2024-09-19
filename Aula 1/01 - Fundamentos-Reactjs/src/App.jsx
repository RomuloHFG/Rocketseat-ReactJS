import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";
import { content } from "./components/Post.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/RomuloHFG.png',
      name: 'Rômulo Henrique',
      role: "FullStack Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋," },
      { type: 'paragraph', content: " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "href=>jane.design/doctorcare" }

    ],
  },

];


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Rômulo Henrique"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt minus nam tenetur, 
            velit molestiae expedita voluptatem adipisci maxime veritatis excepturi eaque dolore unde assumenda nihil neque nemo dignissimos. 
            Voluptatum, exercitationem?"
          />
          <Post
            author="Beatriz"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Inventore, illum, quos, cumque autem neque quia beatae fuga aut expedita 
            natus voluptatum quidem ea commodi atque non."
          />
        </main>
      </div>
    </div>
  );
}

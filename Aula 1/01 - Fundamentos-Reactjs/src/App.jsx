import Post from "./Post";
import Header from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        
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

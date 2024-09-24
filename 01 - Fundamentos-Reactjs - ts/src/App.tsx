import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [

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
      { type: 'link', content: "jane.design/doctorcare" }

    ],
    publishedAt: new Date('2024-09-18 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/Gaabezk.png',
      name: 'Gabriel Fernandes',
      role: "fullstack development instructor"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋," },
      { type: 'paragraph', content: " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "jane.design/doctorcare" }

    ],
    publishedAt: new Date('2024-09-19 21:00:00'),
  },

];


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
              post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

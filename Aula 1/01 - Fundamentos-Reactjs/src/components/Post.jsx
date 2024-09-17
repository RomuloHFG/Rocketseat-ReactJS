import styles from './Post.module.css';

export default function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/RomuloHFG.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rômulo Henrique</strong>
                        <span>FullStack Developer</span>
                    </div>
                </div>

                <time title='17 de setembro às 17:03' dateTime="2024-09-17 17:03:40">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href="">jane.design/doctorcare</a></p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}


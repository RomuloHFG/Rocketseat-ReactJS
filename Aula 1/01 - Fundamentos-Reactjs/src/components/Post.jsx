import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Post({ author, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, " d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR}) 

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='17 de setembro às 17:03' dateTime="2024-09-17 17:03:40">
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href="">jane.design/doctorcare</a></p>
                <p> <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />


            </div>
        </article>
    )
}


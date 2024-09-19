import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";


export default function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/RomuloHFG.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}></div>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Rômulo Henrique</strong>
                        <time title='17 de setembro às 17:03' dateTime="2024-09-17 17:03:40">Cerca de 1h atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                </header>
                <p>Muito bom devon, parabens</p>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";



export default function Comment({content, onDeleteComment}) {
    
    function handleDeleteComment () {
    
        onDeleteComment(content);
    }
    
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RomuloHFG.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Rômulo Henrique</strong>
                        <time title='17 de setembro às 17:03' dateTime="2024-09-17 17:03:40"></time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
                </div>
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
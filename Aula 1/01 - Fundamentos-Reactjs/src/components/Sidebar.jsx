import { PencilLine } from "phosphor-react"

import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images7.alphacoders.com/420/thumb-1920-420344.jpg" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/RomuloHFG.png" />

                <strong>Rômulo Henrique</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>

            </footer>
        </aside>
    );
}
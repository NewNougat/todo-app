import styles from "../style.module.css"
export default function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.componentWidth}>
                <h1 className={styles.logo}>Todo App</h1>
                <nav>
                    <ul className={styles.navbar}>
                        <li className={styles.navlist}><a href="" className={styles.link}>Home</a></li>
                        <li className={styles.navlist}><a href="" className={styles.link}>About</a></li>
                        <li className={styles.navlist}><a href="" className={styles.link}>Profile</a></li>
                        <li className={styles.navlist}><a href="" className={styles.link}>Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
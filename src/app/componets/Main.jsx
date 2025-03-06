import styles from "./css/main.module.css"

export default function Main(){
    return(
    <div>
        <div className={styles.container}>
            <div className={styles.textcontainer}>
             <ul className={styles.text}>
                <li className={styles.property}>Yuki Takagi</li>
               <li className={styles.property}>Web Developer</li>
               <li className={styles.property}>Yamato University</li>
               <li className={styles.property}>Graduate in 2027.</li>
            </ul>    
            </div>
        </div>  
    </div> 
    )
}
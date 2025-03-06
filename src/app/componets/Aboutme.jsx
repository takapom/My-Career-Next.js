import Image from "next/image"
import styles from "./css/aboutme.module.css"

export default function Aboutme(){
    return(
    <div>
        <div className={styles.icon}>
            <Image src="/picture/circular_icon.png" 
            alt="アイコン"
            width={200}
            height={200}
            />
        </div>
        </div>
    )
}
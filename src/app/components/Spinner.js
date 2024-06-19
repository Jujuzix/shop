import Image from 'next/image';
import styles from "../styles/Spinner.module.css";
export default function Spinner(){
    return(
        <Image className={styles.spinner} width={100} height={100} alt="" src={"/loading.svg"}/>
    )
}
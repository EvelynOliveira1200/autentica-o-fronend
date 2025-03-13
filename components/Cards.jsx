"use client"
import styles from "../styles/Cards.module.css";
import { useRouter } from "next/navigation";

export default function Cards({ horario, titulo, data, texto, text, button}) {
    const router = useRouter();

    return (
        <div className={styles.cards}>
            <div className={styles.cardsdiv}>
                <h1 className={styles.horario}>{horario}</h1>
                <p className={styles.text}>{texto}</p>
                <p className={styles.data}>{data}</p>
            </div>

            <div className={styles.card}>
                <h1 className={styles.titulo}>{titulo}</h1>
                <button onClick={() => router.push(button)} className={styles.button}>{text}</button>
            </div>
        </div>
)
}
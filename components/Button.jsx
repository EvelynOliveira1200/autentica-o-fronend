"use client"
import styles from "../styles/Button.module.css";

import { useRouter } from "next/navigation";

export default function Button({ text }) {
    const router = useRouter();

    return (
    <button onClick={() => router.push ("/")} className={styles.button}>{text}</button>
)
}
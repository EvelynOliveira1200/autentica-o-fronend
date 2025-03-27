"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Raiz.module.css";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    } , [router]);

    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
            <h3>Redirecting…</h3>
        </div>
    );
}
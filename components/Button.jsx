"use client";
import styles from "../styles/Button.module.css";
import { useRouter } from "next/navigation";

export default function Button({ text, onClick, disabled, route }) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) onClick(); 
        if (route) router.push(route); 
    };

    return (
        <button 
            onClick={handleClick} 
            className={styles.button} 
            disabled={disabled}
        >
            {text}
        </button>
    );
}

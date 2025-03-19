"use client";
import styles from "../styles/Publicacao.module.css";
import Image from "next/image";

export default function Publicacao({ perfilTitle, data, publicacaoimg }) {
    return (
        <div className={styles.publicacao}>
            <div className={styles.perfiluser}>
                <h3 className={styles.perfilTitle}>{perfilTitle}</h3>
                <p className={styles.date}>{data}</p>
            </div>
            <div className={styles.imagem}>
                <Image
                    className={styles.publicacaoimg}
                    src={publicacaoimg}
                    alt="Publicação"
                    width={288}
                    height={320}
                />
            </div>
        </div>
    );
}


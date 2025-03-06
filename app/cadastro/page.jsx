import styles from "../../styles/Cadastro.module.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";
import Button from "../../components/Button";

export default function CadastroPage() {
    return (
        <div className={styles.container}>

            <div className={styles.fundo}></div>

            <div className={styles.blococadastro}>
                <Image className={styles.logo} src={logo} alt="Logo" />

                <h1 className={styles.title}>Cadastro Ct Rapina</h1>

                <form className={styles.form}>
                    <label className={styles.label}>
                        <input type="tel" className={styles.input} placeholder="Numero de telefone" />
                    </label>
                    <label className={styles.label}>
                        <input type="email" className={styles.input} placeholder="Email" />
                    </label>
                    <label className={styles.label}>
                        <input type="text" className={styles.input} placeholder="Nome de Usuário" />
                    </label>
                    <label className={styles.label}>
                        <input type="password" className={styles.input} placeholder="Senha" />
                    </label>
                    <Button text="Cadastrar" />

                </form>

                <div className={styles.line}></div>
                
                <a className={styles.link} href="/">Já possui uma conta?<span className={styles.span}> Login</span></a>

            </div>
        </div>

    );
}
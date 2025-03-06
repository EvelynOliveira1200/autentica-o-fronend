import Button from "../components/Button";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import logo from "../public/logobranco.jpg";

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.fundo}></div>
            <div className={styles.blocologin}>
                <Image className={styles.logo} src={logo} alt="Logo" />
                <h1 className={styles.title}>Login Ct Rapina</h1>
                <form className={styles.form}>
                    <label className={styles.label}>
                        <input type="text" className={styles.input} placeholder="Nome de Usuário" />
                    </label>
                    <label className={styles.label}>
                        <input type="password" className={styles.input} placeholder="Senha" />
                    </label>
                    <Button text="Login" />
                    
                    <p className={styles.minitext}>Esqueceu a senha?</p>
                </form>
                <div className={styles.line}></div>
                <a className={styles.link} href="/cadastro">Não possui uma conta?<span className={styles.span}> Cadastrar-se</span></a>
            </div>
        </div>
    );
}
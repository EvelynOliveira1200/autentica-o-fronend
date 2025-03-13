import Button from "../../components/Button";
import "./login.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";

export default function Login() {
    return (
        <div className="container">
            <div className="fundo"></div>
            <div className="blocologin">
                <Image className="logo" src={logo} alt="Logo" />
                <h1 className="title">Login Ct Rapina</h1>
                <form className="form">
                    <label className="label">
                        <input type="text" className="input" placeholder="Nome de Usuário" />
                    </label>
                    <label className="label">
                        <input type="password" className="input" placeholder="Senha" />
                    </label>
                    <Button text="Login" />
                    <p className="minitext">Esqueceu a senha?</p>
                </form>
                <div className="line"></div>
                <a className="link" href="/cadastro">Não possui uma conta?<span className="span"> Cadastrar-se</span></a>
            </div>
        </div>
    );
}


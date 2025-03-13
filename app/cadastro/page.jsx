import "./cadastro.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";
import Button from "../../components/Button";

export default function CadastroPage() {
    return (
        <div className="container">

            <div className="fundo"></div>

            <div className="blococadastro">
                <Image className="logo" src={logo} alt="Logo" />

                <h1 className="styles.title">Cadastro Ct Rapina</h1>

                <form className="form">
                    <label className="label">
                        <input type="tel" className="input" placeholder="Numero de telefone" />
                    </label>
                    <label className="label">
                        <input type="email" className="input" placeholder="Email" />
                    </label>
                    <label className="label">
                        <input type="text" className="input" placeholder="Nome de Usuário" />
                    </label>
                    <label className="label">
                        <input type="password" className="input" placeholder="Senha" />
                    </label>
                    <Button text="Cadastrar" />

                </form>

                <div className="line"></div>
                
                <a className="link" href="/">Já possui uma conta?<span className="span"> Login</span></a>

            </div>
        </div>

    );
}
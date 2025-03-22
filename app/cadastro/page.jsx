"use client";

import "./cadastro.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";
import Button from "../../components/Button";
import { useState } from "react";


export default function CadastroPage() {
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (telefone.length < 11) {
            setError("Insira um número de telefone válido");
        } else if (!email.includes("@") || !email.includes(".")) {
            setError("Insira um email válido");
        } else if (usuario.length < 6) {
            setError("O nome de usuário deve ter no mínimo 6 caracteres");
        } else if (senha.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres");
        } else {
            setError("Sucesso");
        }
    }

    return (
        <div className="container">

            <div className="fundo"></div>

            <div className="blococadastro">
                <Image className="logo" src={logo} alt="Logo" />

                <h1 className="title">Cadastro Ct Rapina</h1>

                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <label className="label">
                        <input type="tel" className="input" placeholder="Numero de telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)} />
                    </label>
                    <label className="label">
                        <input type="email" className="input" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="label">
                        <input type="text" className="input" placeholder="Nome de Usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} />
                    </label>
                    <label className="label">
                        <input type="password" className="input" placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                    </label>
                    <Button text="Cadastrar"
                        onClick={handleCheck} />
                    {error && <p className="error-text">{error}</p>}

                </form>

                <div className="line"></div>

                <a className="link" href="/">Já possui uma conta?<span className="span"> Login</span></a>

            </div>
        </div>

    );
}
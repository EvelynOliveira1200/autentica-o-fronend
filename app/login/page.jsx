"use client";

import Button from "../../components/Button";
import "./login.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (!email.includes("@") || !email.includes(".")) {
            setError("Insira um email válido");
        } else if (senha.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres");
        } else {
            setError("Sucesso");
        }
    };

    return (
        <div className="container">
            <div className="fundo"></div>
            <div className="blocologin">
                <Image className="logo" src={logo} alt="Logo" />
                <h1 className="title">Login Ct Rapina</h1>
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <label className="label">
                        <input 
                            type="email" 
                            className="input" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="label">
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="Senha" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </label>
                    <Button text="Login" onClick={handleCheck} />
                    {error && <p className="error-text">{error}</p>}
                    <p className="minitext">Esqueceu a senha?</p>
                </form>
                <div className="line"></div>
                <a className="link" href="/cadastro">Não possui uma conta?<span className="span"> Cadastrar-se</span></a>
            </div>
        </div>
    );
}

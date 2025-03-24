"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../../components/Button";
import logo from "../../public/logobranco.jpg";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    const [confirmSenha, setConfirmSenha] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheck = () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        if (!email.includes("@") || !email.includes(".")) {
            setError("Insira um email válido");
            setIsSubmitting(false);
            return;
        }
        if (senha.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres");
            setIsSubmitting(false);
            return;
        }
        if (senha !== confirmSenha) {
            setError("As senhas não coincidem");
            setIsSubmitting(false);
            return;
        }

        setError("Sucesso");

        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
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
                    <label className="label">
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="Confirme sua senha" 
                            value={confirmSenha} 
                            onChange={(e) => setConfirmSenha(e.target.value)}
                        />
                    </label>
                    <Button 
                        text="Login" 
                        onClick={handleCheck} 
                        disabled={isSubmitting} 
                        route={error === "Sucesso" ? "/perfil" : null} 
                    />

                    {error && <p className={`error-text ${error === "Sucesso" ? "success" : ""}`}>{error}</p>}
                    <p className="minitext">Esqueceu a senha?</p>
                </form>
                <div className="line"></div>
                <a className="link" href="/cadastro">Não possui uma conta?<span className="span"> Cadastrar-se</span></a>
            </div>
        </div>
    );
}

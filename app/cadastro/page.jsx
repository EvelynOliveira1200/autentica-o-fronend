"use client";

import "./cadastro.css";
import Image from "next/image";
import logo from "../../public/logobranco.jpg";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function CadastroPage() {
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter(); 

    const handleCheck = () => {
        if (isSubmitting) return; 
        setIsSubmitting(true);

        if (telefone.length < 11) {
            setError("Insira um número de telefone válido");
            setIsSubmitting(false);
            return;
        } else if (!email.includes("@") || !email.includes(".")) {
            setError("Insira um email válido");
            setIsSubmitting(false);
            return;
        } else if (usuario.length < 6) {
            setError("O nome de usuário deve ter no mínimo 6 caracteres");
            setIsSubmitting(false);
            return;
        } else if (senha.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres");
            setIsSubmitting(false);
            return;
        } else {
            setError("Sucesso");

            setTimeout(() => {
                router.push("/perfil"); 
            }, 1000);
        }
    };

    return (
        <div className="container">
            <div className="fundo"></div>

            <div className="blococadastro">
                <Image className="logo" src={logo} alt="Logo" />

                <h1 className="title">Cadastro Ct Rapina</h1>

                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <label className="label">
                        <input
                            type="tel"
                            className="input"
                            placeholder="Número de telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </label>
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
                            type="text"
                            className="input"
                            placeholder="Nome de Usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
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

                    <Button
                        text="Cadastrar"
                        onClick={handleCheck}
                        disabled={isSubmitting}
                    />

                    {error && <p className={`error-text ${error === "Sucesso" ? "success" : ""}`}>{error}</p>}
                </form>

                <div className="line"></div>

                <a className="link" href="/">Já possui uma conta?<span className="span"> Login</span></a>
            </div>
        </div>
    );
}

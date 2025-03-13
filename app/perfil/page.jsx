import "./perfil.css";
import Image from "next/image";
import Cards from "../../components/Cards";
import perfil from "../../public/fotoperfil.webp";
import publicacao from "../../public/imagem5.jpg";

export default function HomePage() {
    return (
        <div className="container">
            <header className="perfilHeader">
                <div className="inf">
                    <Image className="perfilImage" src={perfil} alt="Perfil" />

                    <div className="dados">
                        <h1 className="perfilTitle">Evelyn Oliveira</h1>
                        <p className="perfilText">Email: evelynolliveira@gmail.com</p></div>
                </div>
            </header>

            <main className="main-content">
                <h1 className="titleaula">Próximas Aulas</h1>
                <div className="cards">
                    <Cards horario="19:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="20:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="17:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="16:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                </div>


                <div className="publicacao">
                    <div className="perfiluser">
                        <h3 className="perfilTitle">Evelyn Oliveira</h3>
                        <p>17 fev. 2025 - 20:15</p>
                    </div>
                    <div className="imagem">
                        <Image className="publicacaoimg" src={publicacao} alt="Publicação" />
                    </div>
                </div>

            </main>
        </div>
    );
}
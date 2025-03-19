import "./perfil.css";
import Image from "next/image";
import Cards from "../../components/Cards";
import perfil from "../../public/fotoperfil.webp";
import Publicacao from "../../components/Publicacao";
import publicacao1 from "../../public/imagem5.jpg";
import publicacao2 from "../../public/img1.jpg";
import publicacao3 from "../../public/img2.jpg";
import publicacao4 from "../../public/img3.jpg";

const publicacoes = [
    { perfilTitle: "Evelyn Oliveira", data: "17 fev. 2025 - 20:15", publicacaoimg: publicacao1 },
    { perfilTitle: "Evelyn Oliveira", data: "16 fev. 2025 - 18:30", publicacaoimg: publicacao2 },
    { perfilTitle: "Evelyn Oliveira", data: "15 fev. 2025 - 14:00", publicacaoimg: publicacao3 },
    { perfilTitle: "Evelyn Oliveira", data: "14 fev. 2025 - 10:45", publicacaoimg: publicacao4 }
];

export default function HomePage() {
    return (
        <div className="container">
            
            <div className="fundo"></div>

            <header className="perfilHeader">
                <div className="inf">
                    <Image
                        className="perfilImage"
                        src={perfil}
                        alt="Perfil"
                        width={150}
                        height={150}
                    />
                    <div className="dados">
                        <h1 className="perfilTitle">Evelyn Oliveira</h1>
                        <p className="perfilText">Email: evelynolliveira@gmail.com</p></div>
                </div>
            </header>
            <main className="main-content">
                <h1 className="titleAula">Próximas Aulas</h1>
                <div className="cards">
                    <Cards horario="19:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="20:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="17:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                    <Cards horario="16:15" data="17/02/2025" texto="Quinta-feira" titulo="Crossfit" text="Check-in" button="aula" />
                </div>
                <div className="publicacao">
                    {publicacoes.map((pub, index) => (
                        <Publicacao
                            key={index}
                            perfilTitle={pub.perfilTitle}
                            data={pub.data}
                            publicacaoimg={pub.publicacaoimg}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
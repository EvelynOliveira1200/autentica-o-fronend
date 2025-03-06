import styles from "../../styles/Home.module.css";
import Image from "next/image";
import perfil from "../../public/fotoperfil.webp";

export default function HomePage() {
    return (
        <div className={styles.container}> 
            <div className={styles.fundo}></div>   

            <div className={styles.informationuser}>

            <Image className={styles.perfil} src={perfil} alt="Perfil" />
            
                <h2 className={styles.subtitle}>Informações do Usuário</h2>
                <p className={styles.text}>Nome: Evelyn Oliveira</p>
                <p className={styles.text}>Email: eveelynOliveira@gmail.com</p>
                <p className={styles.text}>Idade: 16 anos</p>
                <p className={styles.text}>Telefone: (11) 99999-9999</p>
                <p className={styles.text}>Endereço: Rua das Flores, 123</p>
                <p className={styles.text}>Cidade: São Paulo</p>
                <p className={styles.text}>Estado: SP</p>
                <p className={styles.text}>CEP: 12345-678</p>
                <p className={styles.text}>País: Brasil</p>
                <p className={styles.text}>Data de Nascimento: 01/01/2005</p>
                <p className={styles.text}>Sexo: Feminino</p>
            </div>
            
        </div>
    );
}
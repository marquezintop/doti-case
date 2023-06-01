import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedUsers from "./Logged"
import HomeCarousel from "../../components/HomeCarousel"
import {StyledHome, StyledDivLogin, StyledLoggedNow, StyledDivTitulos, StyledMembrosTitulo, StyledOutrosTitulos, StyledModalidadeTitulo,StyledHorarioTitulo, StyledTempoTitulo, StyledDivReclamacoes, StyledLinkReclamacoes} from "./styles"
import HomeLogin from "./HomeLogin";
import perfil from "../../assets/perfil.png"
import { useEffect, useState } from "react";
import api from "../../services/api";

const users = [
    {
        nome: `Bernardo`,
        frase: `frase`,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Jefferson`,
        frase: ``,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Vitoria`,
        frase: `frase`,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    },

    {
        nome: `Lara`,
        frase: ``,
        imagem: perfil,
        modalidade: `Modalidade`,
        horario: `00:00`,
        tempo: `00:00`,
    }

]

export default function Home() {

    useEffect(() => {
        async function getSessions() {
            try {
                const res = await api.get("/sessoes");
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getSessions();
        setInterval(getSessions, 10000);
    }, []);

    const [members, setMembers] = useState(users);


    function searchMembers(e) {
        e.preventDefault();
        console.log(e.target.value)
        let findMembers = []
        setMembers(findMembers);
        users.find(user => {
            if (e.target.value === "") return setMembers(users)
            if (user.nome.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                findMembers = [...findMembers, user]
                setMembers(findMembers);
            }
        })
    }

    return (

        <>
            <Header underline="Home"></Header>
            <StyledHome>
            <HomeCarousel />
            <div>
                <StyledDivLogin>
                    <HomeLogin searchMembers={searchMembers} setMembers={setMembers}></HomeLogin>
                </StyledDivLogin>
                <StyledLoggedNow>
                    <StyledDivTitulos>
                        <StyledMembrosTitulo> <h2> Membros </h2> </StyledMembrosTitulo>
                        <StyledOutrosTitulos>
                            <StyledModalidadeTitulo> <h2> Modalidade </h2> </StyledModalidadeTitulo>
                            <StyledHorarioTitulo> <h2> Chegada </h2> </StyledHorarioTitulo>
                            <StyledTempoTitulo> <h2> Tempo </h2> </StyledTempoTitulo>
                            <div className="espacoLogout"/>
                        </StyledOutrosTitulos>
                    </StyledDivTitulos>
                    <div>
                        <LoggedUsers members={members}></LoggedUsers>
                    </div>
                </StyledLoggedNow>
            </div>
            </StyledHome>
            <Footer></Footer>
        </>

    )
}

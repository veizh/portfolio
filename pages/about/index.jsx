import Image from "next/image"
import Link from "next/link"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
const About =()=>{
    return(
        <>
            <NavBar />
            <Layout > </Layout>
            <main id='about' className="aboutCol">
                <div className="bigCard">
                       <div className="top">
                            <div className="name">Maxime Durville</div>
                            <div className="containerImg">
                                <img src="https://res.cloudinary.com/drku44nyg/image/upload/v1674149344/pp_u1xsq2.jpg" alt="photo de profil" />
                            </div>
                       </div>
                       <div className="bot">
                            <div className="description">
                                Passionnée depuis toujours par le web et l&apos;informatique en général, j&apos;ai commencé en 2019 a faire des sites internets personnels.<br/><br/>
                                Deux années plus tard j&apos;ai suivi une formation pour devenir intégrateur web full-stack avec une équivalence Bac+2.<br/><br/>
                                Actuellement freelance, je propose mes services afin d&apos;aider les particuliers ou les entreprises a créer un site internet bien référencer et qui a pour but de convertir un maximum de client.
                            </div>
                            <div className="containerContact">
                                <Link target="_blank" href="HTTPS://www.linkedin.com/in/maxime-durville"> <img src="lkd.svg" alt="navigation au profil linkedIn" /></Link>
                               
                            </div>
                       </div>
                </div>
            </main>
        </>
    )
}
export default About
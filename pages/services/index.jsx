import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
import { InView } from 'react-intersection-observer';

const Marketing =()=>{
    return(
        <article className="col-service" id="marketing">
            <h2 className="title">Le Marketing digital:</h2>
            <div className="textContent">
            Le marketing digital passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches, <em>le marketing d&apos;influence </em>ou encore <em>le SEO.</em><br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmenteront. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer cette image de marque </em> ou encore pour mettre en avant vos produits 
            je propose de gérer cette partie de votre buisness pour vous. 

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

        </article>
    )
}

const Inte =()=>{
    return(
        <article className="col-service" id="integration">
            <h2 className="title">L&apos;Intégration:</h2>
            <div className="textContent">
            Vous n&apos;avez pas encore de site internet ?<br/><br/> L&apos;intégration représente toute la création de la <em>partie fonctionelle </em>d&apos;un site.
            Aussi bien la partie visible <em>(Front-End)</em> que la partie des données <em>(Back-End).</em><br/><br/>
            Aprés l&apos;intégration votre site sera <em>accessible en ligne</em> et utilisable par les différents utilisateurs.<br/><br/>
            Je mets en place votre site<em> de A à Z</em>, en utilisant différents process pour arriver à obtenir un site à la navigation <em>fluide et agréable</em> comportant toutes les fonctionalitées dont vous avez besoins au sein votre projet. <br/><br/>
            

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </article>
    )
}
const Seo =()=>{
    return(
        <article className="col-service" id="seo">
            <h2 className="title">Le S.E.O:</h2>
            <div className="textContent">
            Le SEO littéralement <em>Search Engine Optimisation,</em> représente le référencement naturel sur les moteurs de recherches. C&apos;est à dire votre place dans la liste de site google sur une recherche particulière. <br/><br/>
            Lorque google analyse votre site, il lui attribue <em>une note de confiance.</em>Tout le travail concernant le SEO à pour objectif de faire augmenter cette note de confiance. <br/><br/> 
            Différents techniques sont utilisées: <em>Les backlinks</em> ,<em>Une sémantique propre et claire</em>, des articles pertinents avec un <em>taux de rétention et de clics élevé</em> sur votre site.<br/><br/>
            Une fois mis en place, il offre de la visibilité naturelle et vous permet d&apos;attirer donc des clients <em>sans débourser un centime. </em><br/><br/>
            Je propose d&apos;optimiser votre SEO avec toutes <em>les techniques à ma disposition.</em>
            

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </article>
    )
}
const Design =()=>{
    return(
        <article className="col-service" id="design">
            <h2 className="title">Le Design:</h2>
            <div className="textContent">
                <em>Un bon UX et un bon UI </em>sont les clés d&apos;un site qui convertie. <br/><br/> 
                Le design de votre site internet va jouer un rôle primordiale dans le 
                <em> taux de conversion </em> de vos clients et l&apos;image que vous allez leur renvoyer.<br/><br/> 
                Je me tourne généralement vers des schémas que l&apos;utilisateur connais déjà afin de faciliter
                sa navigation et lui laisser un bon souvenir de son experience sur le site.
            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </article>
    )
}
const Ecom =()=>{
    return(
        <>
        <article className="col-service" id="e-commerce">
            <h2 className="title">Le E-commerce:</h2>

            <div className="textContent">
                Le <em>commerce en ligne </em>est devenu si important qu&apos;on ne peut plus le négliger peu importe le produit que vous proposez.<br/> <br/> 
                L&apos;idée est simple, c&apos;est d&apos;avoir une boutique en ligne qui vous permet de faire des ventes de manières <em>presques automatiques</em> sans avoir 
                de maintenance particulière à faire une fois que le site est en place.<br/> <br/> 
                Mais malgrè ça, le site a besoin d&apos;<em>inspirer confiance </em>afin d&apos;aider le client <em>à valider son panier ou à souscrire a votre service. </em><br/><br/>
                De simple techniques de design ou d&apos;agencement qui aide a obtenir <em>des taux de conversion plus important</em> existent et je peux vous aider a les mettre en place.<br/><br/>
                J&apos;utilise le <em>CMS Shopify,</em> qui me permet d&apos;assurer des performances optimals pour votre boutique à moindre coût mais reste ouvert à d&apos;<em>autres technologies.</em>
            </div>
            <button className="navContact" ><Link href="./#contact"> Ca m&apos;intéresse</Link></button> 

        </article>
        
        </>
    )
}



 const Services = () => {
    const [viewed,setViewed]= useState(null)

    return (
        <>
            <NavBar />
            <Layout name="Services" > </Layout>
            <div className="containerServices" id="ser">
                <div className="introduction">
                    Le web est tout aussi incroyable qu&apos;il est complexe. <br/>Passer par une personne qualifiée qui fait parti de ce domaine est donc indispensable pour réaliser vos projets et pour obtenir de bons résultats.
                </div>
                <InView as="div" onChange={(inView, entry) => {
                    console.log('Inview:', inView)
                    if(inView){
                        setViewed(false)
                    }
                    else{
                        setViewed((true))
                    }
                    }} 
                    className="colSelection" > 
                    <Link className="cardNav" href="./services/#e-commerce">E-commerce</Link>
                    <Link className="cardNav" href="./services/#design">Design</Link>
                    <Link className="cardNav" href="./services/#integration">Intégration</Link>
                    <Link className="cardNav" href="./services/#marketing">Marketing</Link>
                    <Link className="cardNav" href="./services/#seo">SEO</Link>
                </InView>
                {viewed?<div className="scrollTop"><Link href="#ser"><img src="./up.svg" alt="fleche vers le haut"/></Link></div>:""}
                
                <Ecom />
                <div className="bandeau"/>

                <Design />
                <div className="bandeau" />
                <Inte />
                <div className="bandeau" />
                <Marketing />
                <div className="bandeau" />
                <Seo />


            </div>
        
        </>
        
    )
}
export default Services
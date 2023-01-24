import Link from "next/link"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
const Marketing =()=>{
    return(
        <section className="col-service" id="marketing">
            <h2 className="title">Le Marketing digital:</h2>
            <div className="textContent">
            Le marketing digital passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmenteront. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer cette image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

        </section>
    )
}

const Inte =()=>{
    return(
        <section className="col-service" id="integration">
            <h2 className="title">L&apos;Intégration:</h2>
            <div className="textContent">
            Le marketing digitale passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmentera. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer une image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </section>
    )
}
const Seo =()=>{
    return(
        <section className="col-service" id="seo">
            <h2 className="title">Le S.E.O:</h2>
            <div className="textContent">
            Le marketing digitale passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmenteront. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer cette image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </section>
    )
}
const Design =()=>{
    return(
        <section className="col-service" id="design">
            <h2 className="title">Le Design:</h2>
            <div className="textContent">
                <em>Un bon UX et un bon UI </em>sont les clés d&apos;un site qui fonctionne. <br/><br/> 
                Le design de votre site internet va jouer un rôle primordiale dans le 
                <em> taux de conversion </em> de vos clients et l&apos;image que vous allez leur renvoyer.<br/><br/> 
                Je me tourne généralement vers des schémas que l&apos;utilisateur connais déjà afin de faciliter
                sa navigation et lui laisser un bon souvenir de son experience sur le site.
            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </section>
    )
}
const Ecom =()=>{
    return(
        <>
        <section className="col-service" id="e-commerce">
            <h2 className="title">Le E-commerce:</h2>

            <div className="textContent">
                Le <em>commerce en ligne </em>est devenu si important qu&apos;on ne peut plus le négliger peu importe le produit que vous proposez.<br/> <br/> 
                L&apos;idée est simple, c&apos;est d&apos;avoir une boutique en ligne qui vous permet de faire des ventes de manières <em>presques automatiques</em> sans avoir 
                de maintenance particulière à faire une fois que le site est en place.<br/> <br/> 
                Je peux utiliser le CMS Shopify, qui me permet d&apos;assurer des performances optimals pour votre boutique à moindre coût.
            </div>
            <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

        </section>
        
        </>
    )
}



 const Services = () => {

   

    

    return (
        <>
            <NavBar />
            <Layout name="Services" > </Layout>
            <div className="containerServices">
                <div className="introduction">
                    Le web est vaste tout autant que les métiers qui le compose. Passer par un professionel est donc indispensable si votre objectif et d&apos;obtenir de bonnes performances.
                </div>
                <nav className="colSelection"> 
                    <Link className="cardNav" href="./services/#e-commerce">E-commerce</Link>
                    <Link className="cardNav" href="./services/#design">Design</Link>
                    <Link className="cardNav" href="./services/#integration">Intégration</Link>
                    <Link className="cardNav" href="./services/#marketing">Marketing</Link>
                    <Link className="cardNav" href="./services/#seo">SEO</Link>


                </nav>
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
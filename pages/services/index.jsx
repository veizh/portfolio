import Link from "next/link"
import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { NavBar } from "../components/navBar"
const Marketing =()=>{
    return(
        <>
            <h2 className="title">Marketing digital:</h2>
            <div className="textContent">
            Le marketing digital passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmenteront. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer cette image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
        </>
    )
}

const Inte =()=>{
    return(
        <>
            <h2 className="title">Intégration:</h2>
            <div className="textContent">
            Le marketing digitale passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmentera. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer une image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
        </>
    )
}
const Seo =()=>{
    return(
        <>
            <h2 className="title">S.E.O:</h2>
            <div className="textContent">
            Le marketing digitale passe par des <em>publicitées en ligne </em> via les réseaux sociaux, 
            la <em>mise en avant </em>de votre produit sur les plateformes de recherches ou encore par <em>le marketing d&apos;influence. </em> <br/><br/> 
            Il implique aussi la gestion votre image en ligne, plus vous êtes présent et formez une <em>communauté autour de votre 
            marque </em> plus la confiance et la fidélité de vos clients augmenteront. <br/><br/> 
            Etant trés familier des outils utilisés pour<em> développer cette image de marque </em> en ligne ou encore pour mettre en avant vos produits 
            je propose de gerer cette partie de votre buisness pour vous. 

            </div>
        </>
    )
}
const Design =()=>{
    return(
        <>
            <h2 className="title">Design:</h2>
            <div className="textContent">
                <em>Un bon UX et un bon UI </em>sont les clés d&apos;un site qui fonctionne. <br/><br/> 
                Le design de votre site internet va jouer un rôle primordiale dans le 
                <em> taux de conversion </em> de vos clients et l&apos;image que vous allez leur renvoyer.<br/><br/> 
                Je me tourne généralement vers des schémas que l&apos;utilisateur connais déjà afin de faciliter
                sa navigation et lui laisser un bon souvenir de son experience sur le site.
            </div>
        </>
    )
}
const Ecom =()=>{
    return(
        <>
            <h2 className="title">E-commerce:</h2>

            <div className="textContent">
                Le <em>commerce en ligne </em>est devenu si important qu&apos;on ne peut plus le négliger peu importe le produit que vous proposez.<br/> <br/> 
                L&apos;idée est simple, c&apos;est d&apos;avoir une boutique en ligne qui vous permet de faire des ventes de manières <em>presques automatiques</em> sans avoir 
                de maintenance particulière à faire une fois que le site est en place.<br/> <br/> 
                Je peux utiliser le CMS Shopify, qui me permet d&apos;assurer des performances optimals pour votre boutique à moindre coût.
            </div>
        </>
    )
}

const Service = (props)=>{

    function returnComponent (title){
        if(title==="design") return <Design />
        else if(title==="e-commerce") return<Ecom />
        else if(title==="marketing") return<Marketing />
        else if(title==="integration") return<Inte />
        else if(title==="seo") return<Seo />

    }
     return (
        <div className="colService">
             {returnComponent(props.title)}
        </div>
    )
 }

 const Services = () => {
    const [param,setParam] = useState()

    useEffect(()=>{

        const param =  new URLSearchParams(window.location.search)
        setParam(param.get("w"))
        console.log(param);
        if(!param){
            setParam("e-commerce")
        }
    },[])

    

    return (
        <>
            <NavBar />
            <Layout name="Services" > </Layout>
            <div className="containerServices">
                <div className="introduction">
                    Le web est vaste tout autant que les métiers qui le compose. Passer par un professionel est donc indispensable si votre objectif et d&apos;obtenir de bonnes performances.
                </div>
                <article className="colSelection"> 
                    {param!=="e-commerce"&&<Link className="cardNav" onClick={()=>setParam("e-commerce")}href="./services?w=e-commerce">E-commerce</Link>}
                    {param!=="marketing"&&<Link className="cardNav" onClick={()=>setParam("marketing")}href="./services?w=marketing">Marketing</Link>}
                    {param!=="integration"&&<Link className="cardNav" onClick={()=>setParam("integration")}href="./services?w=integration">Intégration</Link>}
                    {param!=="design"&&<Link className="cardNav"onClick={()=>setParam("design")} href="./services?w=design">Design</Link>}
                    {param!=="seo"&&<Link className="cardNav" onClick={()=>setParam("seo")}href="./services?w=seo">SEO</Link>}


                </article>
                <Service title={param}/>
                <button className="navContact" ><Link href="./#contact">Ca m&apos;intéresse</Link> </button>

            </div>
        
        </>
        
    )
}
export default Services
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "../components/card"
import { NavBar } from "../components/navBar"
import { Project } from "../components/Project"
const projects = [
  {
    source:"./projects/projet_ag.webp",
    name:"Ag-WorldCup"
  },
  {
    source:"./projects/projet_kasa.webp",
    name:"Kasa"
  },
  
]
export default function Home() {
  const [array,setArray] = useState(Array.from("EVOLUONS ENSEMBLE"))
  const [opa,setOpa] = useState(false)
  
  useEffect(()=>{
    const video = document.querySelector("video")
    video.playbackRate = 0.75
    setInterval(() => {
      const crt =video.currentTime;
      if(crt>5){
        setOpa(true)
      }
      else{
        setOpa(false)
      }
    }, 10);
  },[])

  useEffect(()=>{
    const canvas = document.querySelector(".deco");
    console.log(canvas);
  })
  return (
    <>
      <Head>
        <title>Maxime Durville Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="layout">
        <div className="background" />
        <div className="content">
          {array&&array.map((e,i)=>{
            return <p key={i} style={{animationDelay:i*0.075+"s"} }>{e}</p>
          })}
        </div>
        
        <div className="slogan"><div className="container">Je propose mon expertise pour vous aider à ameliorer votre projet  ! <br/>A travers<a> de l&apos;intégration, </a> <a> du web design </a>, <a> du SEO</a> ou encore du <a>digital marketing</a>.</div><Link href="./about" className="button">En apprendre plus sur moi <img src="arrowWhite.svg"/></Link></div>
        <img className="waves" src="./waves.svg"/>
        <video muted loop autoPlay playsInline preload="auto" className={opa? "opacity":""}> <source src="./fume.mp4" type="video/mp4" /></video>

      </div>
      <div className="presentation">
        <Card to="./services/#design" title="Design" content="Je m&apos;occupe de réaliser un design pour votre site internet en mettant un point d&apos;honneur sur l&apos;UX et l&apos;UI de celui-ci !" source="./brush.svg" />
        <Card to="./services/#seo" title="S.E.O" content="Je me charge d'augmenter votre visibilité grâce au référencement naturel en utilisant toute les techniques que j&apos;ai à ma disposition. " source="./SEO.svg" />
        <Card to="./services/#integration" title="Intégration" content="Je m&apos;applique à intégrer votre maquette afin de vous délivrer le site internet dont vous avez besoin et en le rendant utilisable sur toutes les plateformes. " source="./code.svg" />

      </div>
      <section id="projets">
      <div  className="projectsContainer" >
        <h1>Mes Projets</h1>
        {projects.map((e,i)=><Project key={i} source={e.source} name={e.name} />)}
      </div>
      </section>
      
      <section id="contact" className="backgroundSecond"><div className="first"></div><div className="second"></div></section>
      
      <section className="contactContainer" >
        <h1>Contactez-Moi</h1>
        <p>Expliquez moi votre projet ou demandez ce que vous voulez ! </p>
        <form action="https://formsubmit.co/durville.maxime.pro@gmail.com"  method="POST">
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="http:/localhost:3000/thankyou"></input>
          <div className="containerInput email">
            <label htmlFor="email">Adresse Email*</label>
            <input type="email" name="email"  required/>
          </div>
          
          <div className="containerInput firstName">
            <label htmlFor="firstName">Nom ou Marque*</label>
            <input type="text" name="firstName"  required/>
          </div>
          
          <div className="containerInput lastName">
            <label htmlFor="lastName">Prénom*</label>
            <input type="text" name="lastName" required/>
          </div>

          <div className="containerInput phone">
            <label  htmlFor="phone">Numéro de Téléphone</label>
            <input type="tel" name="phone" />
          </div>

          <div className="containerInput message">
            <label  htmlFor="message">Votre Message*</label>
            <textarea type="text" name="message" required/>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  )

}

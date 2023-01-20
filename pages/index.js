import Head from "next/head"
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
        <div className="slogan"><div className="container">J&apos;emploie mes compétences<a> d&apos;intégration, </a> <a> de web design</a> et de <a>digital marketing</a> pour vous aider à grandir.</div></div>
        <img className="waves" src="./waves.svg"/>
        <video muted loop autoPlay playsInline preload="auto" className={opa? "opacity":""}> <source src="./fume.mp4" type="video/mp4" /></video>

      </div>
      <div className="presentation">
        <Card to="./services?w=design" title="Design" content="Nous faisons le design de votre site en s&apos;appuyant sur une UX et Ui de qualité. Afin de vous aider a convertir un maximum de clients." source="./brush.svg" />
        <Card to="./services?w=seo" title="S.E.O" content="Nous faisons le design de votre site en s&apos;appuyant sur une UX et Ui de qualité. Afin de vous aider a convertir un maximum de clients. " source="./SEO.svg" />
        <Card to="./services?w=integration" title="Intégration" content="Nous faisons le design de votre site en s&apos;appuyant sur une UX et Ui de qualité. Afin de vous aider a convertir un maximum de clients. " source="./code.svg" />

      </div>
      <section id="projets" className="projectsContainer" >
        <h1>Mes Projets</h1>
        {projects.map((e,i)=><Project key={i} source={e.source} name={e.name} />)}
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
            <label htmlFor="lastName">Prenom*</label>
            <input type="text" name="lastName" required/>
          </div>

          <div className="containerInput phone">
            <label  htmlFor="phone">Numéro de Téléphone</label>
            <input type="tel" name="phone" />
          </div>

          <div className="containerInput message">
            <label  htmlFor="message">Vote Message*</label>
            <textarea type="text" name="message" required/>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  )

}

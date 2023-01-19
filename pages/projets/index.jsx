import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import { Layout } from "../components/Layout"
import { NavBar } from "../components/navBar"
const worldcup = {
    name:"AG-consulting WorldCup",
    src:"./projects/projet_ag.webp",
    tags:["HTML","Sass","React","mongodb"]
}
const Projet = ()=>{
    const [param,setParam] = useState()
    const [ImageIndex,setImageIndex] = useState(0)
    useEffect(()=>{

        const param =  new URLSearchParams(window.location.search)
        setParam(param.get("name"))
        console.log(param);
    },[])
    return(
        <>
        <NavBar />
        <Layout name="projet"/>
        <div className="colProject">
            <h1>{worldcup.name}</h1>
            <div className="colDescription languages">
                <h2 className="label">Languages :</h2>
                {worldcup.tags.map((w,i)=><div key={i} className="tag">{w}</div>)}
            </div>
            <div className="colDescription">
                <h2>Cadre:</h2>
                <p>je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre</p>
            </div>
            <div className="colDescription">
            <h2>Description:</h2>

            <p>je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre je suis la description ed cardre</p>
            </div>
            <div className="colDescription">
            <h2>lien:</h2>

            <p>{worldcup.link?worldcup.link:"Le lien de se site est privé."}</p>
            </div>
            <div className="colDescription ">
                <h2>images du projet:</h2>
                <div className="caroussel">
                    <p>g</p>
                    <Image src="https://res.cloudinary.com/dvntspebj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1674128148/Affiche_1_vc6ihb.jpg" alt="" />
                    <p>d</p>
                </div>
                <div className="count">{ImageIndex}/x</div>
            </div>
            <Link href="./" className="backHome">Retourner à l`&apos;acceuil</Link>
        </div>
        
        </>
    )
}
export default Projet
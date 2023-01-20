import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
const worldcup = {
    name:"AG-consulting WorldCup",
    src:["./projects/projet_ag.webp","./projects/projet_ag.webp","./projects/projet_ag.webp"],
    tags:["HTML","Sass","React","mongodb"]
}
const kasa = {
    name:"Kasa",
    src:["./projects/projet_kasa.webp","./projects/projet_kasa.webp","./projects/projet_kasa.webp","./projects/projet_kasa.webp","./projects/projet_kasa.webp"],
    tags:["HTML","Sass","React"]
}
const Projet = ()=>{
    const [param,setParam] = useState()
    const [ImageIndex,setImageIndex] = useState(0)
    const [thisOne,setThisOnes] = useState()
    useEffect(()=>{

        const params =  new URLSearchParams(window.location.search)
        setParam(params.get("name"))
        console.log(param);
        if(param==='Kasa'){
            console.log("Kasa");
            setThisOnes(kasa)
            console.log(thisOne);
        }
        if(param==='Ag-WorldCup'){
            console.log("ag");
            setThisOnes(worldcup)
            console.log(thisOne);
        }
    },[!param])

    function changeImage(i){

        
        if(ImageIndex+i +1> thisOne.src.length){
            setImageIndex(0)
            
        }
        else if(ImageIndex+i<0){
            setImageIndex(thisOne.src.length - 1)
        }
        else{

            setImageIndex(ImageIndex+i)
        }

    }

    return(
        <>
        <NavBar />
        <Layout name="projet"/>
        <div className="colProject">
            <h1>{thisOne && thisOne.name}</h1>
            <div className="colDescription languages">
                <h2 className="label">Languages :</h2>
                {thisOne && thisOne.tags.map((w,i)=><div key={i} className="tag">{w}</div>)}
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

            <p>{thisOne && thisOne.link?thisOne.link:"Le lien de se site est privé."}</p>
            </div>
            <div className="colDescription ">
                <h2>images du projet:</h2>
                <div className="caroussel">
                    <img src={thisOne && thisOne.src[ImageIndex]}  alt="" />
                    
                </div>
                <div className="rowNav">
                    <div className="fleche gauche" onClick={()=>changeImage(-1)}/>
                <div className="count">{ImageIndex + 1} / {thisOne && thisOne.src.length}</div>
                <div className="fleche " onClick={()=>changeImage(1)}/>
                </div>
                
            </div>
            <Link href="./" className="backHome">Retourner à l&apos;acceuil</Link>
        </div>
        
        </>
    )
    
}
export default Projet
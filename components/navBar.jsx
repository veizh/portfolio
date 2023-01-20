import Link from "next/link"
import { useState } from "react"

export const NavBar = () =>{
    const [toggle,setToggle]  =useState(false)

    return(
        <header className="sticky">
            <div className="navContainer">
                <div className="nav">
                    <img className="logo" src="logo.svg"></img>
                    <div className="menu" onClick={()=>setToggle(!toggle)}><img src="./menu.svg" className={toggle?"active":""} /></div>
                </div>
                <div className={toggle?"dropContainer active":"dropContainer"}>
                    <div className="drop">
                    <Link href="./">Acceuil</Link>
                        <Link href="./#projets">Projets</Link>

                        <Link href="./services">Services</Link>
                        <Link href="./#contact">Contact</Link>
                        <Link href="./about">A propos</Link>
                    </div>
                </div>    
            </div>
           
          
        </header>
        
    )
}
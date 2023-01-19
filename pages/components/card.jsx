import Link from "next/link"

export const Card = (props)=>{
    return (
        <Link href={props.to} className="card">
            <img className="image" src={props.source} />
            <h1 className="title"> {props.title}</h1>
            <div className="content">{props.content}</div>
            
            <div  className="arrow" ><p>See more</p><img src="./arrow.svg"  /> </div>
            
        </Link>
    )
}
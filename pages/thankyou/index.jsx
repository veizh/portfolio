import { NavBar } from '../../components/navBar'
import Link from 'next/link'
import Image from 'next/image'
 const thankyou = () => {
    
    return (
        <>
            <NavBar />
            <div className="layoutTy ">
                <div className='containerTop'>
                    <h1>Merci pour votre message !</h1>
                    <p>Je reviens vers vous dès que possible !</p>
                    <img className='waves' src='./waves.svg' />
                </div>
                <div className='containerBot'>
                    <p>En vous envoyant une estimation de la durée et du côut de votre projet.</p>
                    <Link href="/">Retournez à l&apos;acceuil <Image width='100' height="30" alt="home icon" src='./home.svg' /></Link>
                </div>
            </div>
        
        </>
        
    )
}
export default thankyou
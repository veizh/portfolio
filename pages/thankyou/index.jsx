import { NavBar } from '../../components/navBar'
import Link from 'next/link'
import Image from 'next/image'
 const thankyou = () => {
    
    return (
        <>
            <NavBar />
            <div className="layoutTy ">
                <div className='containerTop'>
                    <h1>Thank You !</h1>
                    <p>We come back to you fast as possible !</p>
                    <img className='waves' src='./waves.svg' />
                </div>
                <div className='containerBot'>
                    <p>we are going to send you an estimation of the duration and the cost to set your online project.</p>
                    <Link href="/">Let&apos;s back Home <Image width='100' height="30" alt="home icon" src='./home.svg' /></Link>
                </div>
            </div>
        
        </>
        
    )
}
export default thankyou
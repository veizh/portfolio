import { NavBar } from '../components/navBar'
import Link from 'next/link'
 
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
                    <Link href="/">Let's back Home <img src='./home.svg' /></Link>
                </div>
            </div>
        
        </>
        
    )
}
export default thankyou
import { Link } from 'react-router-dom';
import { PiShoppingCartSimple } from "react-icons/pi";


export function Header() {
    return(
        <header className='bg-slate-200 w-full px-1'>
            <nav className='flex flex-row justify-between items-center h-14 px-5 mx-auto w-full max-w-6xl'>
                <Link to='/' className='text-2xl font-bold'>Alex Shop</Link>
                <Link to='/cart' className='flex flex-col items-end relative'>
                    <span className='absolute -top-2 -right-2 bg-sky-400 px-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs'>0</span> 
                    <PiShoppingCartSimple size={25} color='#121215'/>   
                </Link>
            </nav>
        </header>
    )
}
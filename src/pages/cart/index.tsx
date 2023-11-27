import { useContext } from 'react';

import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

import { CartContext } from '../../context/products';



export function Cart() {
    const { cart } = useContext(CartContext);



    return(
        <div className='w-full max-w-6xl mx-auto px-4 my-3'>
            <h1 className='font-bold p-10 mx-auto text-center text-xl'>Meu carrinho</h1>

            <div className='w-full mt-5'>
                {cart.map(product => (
                    <section className='border-b-2 flex justify-between items-center' key={product.id}>
                        <img src={product.cover} alt="Logo do produto"
                        className='w-28'/>
                        <b>{product.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </b>
                        <div className='flex gap-3'>
                            <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'>
                                <CgMathMinus size={20}/>
                            </button>
                            <span>{product.amount}</span>
                            <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'>
                                <CgMathPlus size={20}/>
                            </button>
                        </div>
                        <b>Subtotal {product.total.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</b>
                    </section>
                ))}
            </div>
        </div>
    )
}
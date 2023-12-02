import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

import { CartContext } from '../../context/products';



export function Cart() {
    const { cart, handleAddProduct, handleRemoveProduct, total } = useContext(CartContext);


    return(
        <div className='w-full max-w-6xl mx-auto px-4 my-3'>
            <h1 className='font-bold pt-10 pb-6 mx-auto text-center text-2xl'>Meu carrinho</h1>
            { cart.length === 0 && (
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='font-semibold'>Ops... seu carrinho está vazio</p>
                    <Link to='/' className='bg-slate-500 py-2 px-3 font-semibold text-white rounded-lg hover:scale-105 hover:bg-sky-500 duration-300'>
                        Acessar produtos
                    </Link>
                </div>
            )}

            <div className='w-full mt-8'>
                {cart.map(product => (
                    <section className='border-b-2 flex justify-between items-center' key={product.id}>
                        <Link to={`/details/${product.id}`}>
                            <img src={product.cover} alt={product.title}
                            className='w-28'/>
                        </Link>
                        <b>Preço: {product.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </b>
                        <div className='flex gap-3'>
                            <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'
                                onClick={() => handleRemoveProduct(product)}>
                                <CgMathMinus size={20}/>
                            </button>
                            <span>{product.amount}</span>
                            <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'
                                onClick={() => handleAddProduct(product)}>
                                <CgMathPlus size={20}/>
                            </button>
                        </div>
                        <b>SubTotal: {product.total.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</b>
                    </section>
                ))}
                {cart.length !== 0 && <div className='font-bold'>Total: {total}</div>}
            </div>
        </div>
    )
}
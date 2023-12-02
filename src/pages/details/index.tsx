import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { CartContext, ProductCartProps } from '../../context/products';
import { api } from '../../services/api';

import { BsCartPlus } from "react-icons/bs";


export function Details() {
    const [product, setProduct] = useState<ProductCartProps>();
    const { handleAddProduct } = useContext(CartContext);
    const { id } = useParams();
    const numericId = Number(id);

    useEffect(() => {
        async function getProduct() {
            const productById = await api.get(`/products/${numericId}`);
            setProduct(productById.data);
        }

        getProduct();
    }, [])

    
    return(
        <div className='w-full max-w-6xl mx-auto my-16'>
            { product && (
                <div className='flex gap-24 mx-28 flex-wrap items-center max-rl:justify-center'>
                    <img src={product.cover} alt={product.title} className='w-72' />
                    <div className='w-7/12'>
                        <h1 className='font-bold mb-5 text-xl'>{product.title}</h1>
                        <p>{product.description}</p>
                        <div className='flex items-center gap-3 mr-1'>
                            <span className='font-semibold  text-gray-800'>
                                {product.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                            </span>
                            <Link to='/cart'>
                                <button className='bg-slate-900 p-1 rounded-lg' onClick={() => handleAddProduct(product)}>
                                        <BsCartPlus size={20} color='#fff'/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}
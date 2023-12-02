import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { BsCartPlus } from "react-icons/bs";

import toast from 'react-hot-toast';
import { CartContext } from '../../context/products';
import { api } from '../../services/api'; 

export default interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}


export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const { handleAddProduct } = useContext(CartContext);

    useEffect(() => {
        async function getProducts() {
            const products = await api.get('/products');
            setProducts(products.data);
        }
        getProducts();
    }, [])

    function handleAddProducts(product: ProductProps) {
        toast.success('Produto adicionado ao carrinho');
        handleAddProduct(product);
    }

    return(
        <main className='w-full max-w-6xl mx-auto my-3'>
            <h1 className='font-bold p-10 text-xl text-center'>Produtos em alta</h1>
            <div className='flex gap-12 mx-14 flex-wrap max-rl:justify-center'>
                {products.map(product => (
                        <section className='flex flex-col w-56 max-md:w-64' key={product.id}>
                            <Link to={`/details/${product.id}`}>
                                <img src={product.cover} alt={product.title} 
                                    className='w-full max-h-60 rounded-xl cursor-pointer'/>
                            </Link>
                            <p className='font-medium mt-1'>{product.title}</p>
                            <div className='mt-2 flex gap-2 items-center'>
                                <p className='font-medium text-gray-700 ml-1'>
                                    {product.price.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'})}
                                </p>
                                <button className='bg-slate-900 p-1 rounded-lg' onClick={() => handleAddProducts(product)}>
                                    <BsCartPlus size={20} color='#fff'/>
                                </button>
                            </div>
                        </section>
                    ))
                }
            </div>
        </main>
    )
}
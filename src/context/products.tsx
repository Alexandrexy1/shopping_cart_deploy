import { createContext, useState, ReactNode } from 'react';
import ProductProps from '../pages/home/index';


interface CartContextData {
    cart: ProductCartProps[];
    amount: number;
    total: string;
    addProduct: (product: ProductProps) => void;
    removeProduct: (product: ProductCartProps) => void;
}


interface CartProviderProps {
    children: ReactNode;
}


interface ProductCartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}


export const CartContext = createContext({} as CartContextData);


export default function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductCartProps[]>([])
    const [total, setTotal] = useState('');

    // Adiciona produtos na lista e aumenta a quantidade de produtos iguais.
    function addProduct(product: ProductProps) {
        const indexProduct = cart.findIndex(productCart => productCart.id === product.id);
        
        if (indexProduct !== -1) {
            const newCart = cart;
            newCart[indexProduct].amount = newCart[indexProduct].amount + 1;
            newCart[indexProduct].total = newCart[indexProduct].price * newCart[indexProduct].amount;
            setCart(newCart);
            totalPriceCart(newCart);
            return;
        }

        const newItem = {
            ...product,
            amount: 1,
            total: product.price
        }

        setCart(products => [...products, newItem]);
        totalPriceCart([...cart, newItem]);
    }

    // Remove o produto ou diminui a quantidade de produtos.
    function removeProduct (product: ProductCartProps) {
        const indexProduct = cart.findIndex(productCart => productCart.id === product.id);

        if (cart[indexProduct].amount > 1) {
            const newCart = cart;
            newCart[indexProduct].amount = newCart[indexProduct].amount - 1;
            newCart[indexProduct].total = newCart[indexProduct].price * newCart[indexProduct].amount;
            setCart(newCart);
            totalPriceCart(newCart);
            return;
        }
        const delItem = cart.filter(item => item.id !== product.id);
        setCart(delItem);
        totalPriceCart(delItem);
    }

    function totalPriceCart(items: ProductCartProps[]) {
        const totalPrice = items.reduce((ac, item) =>  ac + item.total, 0);
        const formated = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        setTotal(formated);
    }

    return(
        <CartContext.Provider value={{ 
            cart,
            amount: cart.length,
            addProduct,
            removeProduct,
            total
            }}>
            {children}
        </CartContext.Provider>
    )
}
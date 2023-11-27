import { createContext, useState, ReactNode } from 'react';
import ProductProps from '../pages/home/index';


interface CartContextData {
    cart: ProductCartProps[];
    amount: number;
    addProduct: (product: ProductProps) => void;
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
 
    function addProduct(product: ProductProps) {
        const indexProduct = cart.findIndex(productCart => productCart.id === product.id);
        
        if (indexProduct !== -1) {
            const newCart = cart;
            newCart[indexProduct].amount = newCart[indexProduct].amount + 1;
            newCart[indexProduct].total = newCart[indexProduct].price * newCart[indexProduct].amount;

            setCart(newCart);
            return;
        }

        const newItem = {
            ...product,
            amount: 1,
            total: product.price
        }

        setCart(products => [...products, newItem]);
    }


    return(
        <CartContext.Provider value={{ 
            cart,
            amount: cart.length,
            addProduct,
            
            }}>
            {children}
        </CartContext.Provider>
    )
}
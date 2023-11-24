import { createContext, useState, ReactNode } from 'react';


interface CartContextData {
    cart: ProductProps[];
    amount: number;
}


interface CartProviderProps {
    children: ReactNode;
}


interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    total: number;
}

export const CartContext = createContext({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>([])
    
    function addProduct(product: ProductProps) {
        setCart(product);
    }
    
    return(
        <CartContext.Provider value={{ 
            cart,
            amount: cart.length
            }}>
            {children}
        </CartContext.Provider>
    )
}
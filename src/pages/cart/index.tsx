import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";


export function Cart() {
    return(
        <div className='w-full max-w-6xl mx-auto px-4 my-3'>
            <h1 className='font-bold p-10 mx-auto text-center text-xl'>Meu carrinho</h1>

            <div className='w-full mt-5'>
                <section className='border-b-2 flex justify-between items-center'>
                    <img src="https://d1sfzvg6s5tf2e.cloudfront.net/Custom/Content/Products/49/95/4995_fone-airpods-pro-magsafe-mqd83am-2nd-imp_m1_638072372640312793.jpg" alt="Logo do produto"
                    className='w-28'/>
                    <b>R$ 199,90</b>
                    <div className='flex gap-3'>
                        <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'>
                            <CgMathMinus size={20}/>
                        </button>
                        <span>1</span>
                        <button className='bg-slate-600 hover:bg-slate-700 text-white rounded-md flex justify-center items-center p-1'>
                            <CgMathPlus size={20}/>
                        </button>
                    </div>
                    <b>Subtotal R$ 199,90</b>
                </section>
            </div>
        </div>
    )
}
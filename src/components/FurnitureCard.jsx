import React from 'react'

const FurnitureCard = ( props ) =>
{
    return (
        <div className='mx-auto py-6 px-4'>

            <div>
                <h3 className='font-bold lg:text-[20px] md:text-[16px] sm:text-[100%] text-[22px] text-left uppercase mb-4 w-full h-[65px]'>{props.articleName}</h3>
            </div>

            <div className='mx-auto'>
                <p className='text-left text-[15px] lg:text-[20px]'>
                    <span className='rounded py-1 px-2 font-bold' style={{ backgroundColor: 'lightblue', color: 'white' }}>{props.discount}</span>
                    <span className='md:ml-7 ml-3 rounded py-1 px-6 font-bold bg-orange-400'>{props.refNumber}</span>
                </p>
            </div>

            <p className='text-right text-[35px] font-bold lg:text-[45px] py-6 md:py-9'>{props.price} €</p>
            <span className='italic'>Disponível na Loja</span>

            <img src={props.image} alt={props.articleName} className='py-2 mb-5' />

            <div className='py-2'>
                <p className='text-[15px] leading-loose'> <strong> Altura:</strong> {props.altura} </p>
                <p className='text-[15px] leading-loose'> <strong> Largura:</strong> {props.largura} </p>
                <p className='text-[15px] leading-loose'> <strong> Profundidade:</strong> {props.profundidade}</p>
            </div>

            <button className='my-6 py-3 px-8 block mx-auto uppercase bg-orange-400 rounded-[35px] font-bold hover:bg-black hover:text-white'>Comprar</button>

        </div>
    )
}

export default FurnitureCard
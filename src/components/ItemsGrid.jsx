import React from 'react'
import FurnitureCard from './FurnitureCard'

const itemsGrid = () =>
{
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                <div> <FurnitureCard
                    articleName='Cadeira de Jardim Dobrável'
                    discount="-10%"
                    refNumber='102584'
                    price='49,50'
                    altura='86cm'
                    largura='57cm'
                    profundidade='58cm'
                    image='https://static.zarahome.net/8/photos4/2022/I/4/1/p/5306/073/700/5306073700_2_7_2.jpg?t=1656942185375&imwidth=1146&imformat=chrome' />
                </div> {/* Artigo 1 / */}

                <div> <FurnitureCard
                    articleName='candeeiro c/ base de madeira'
                    discount="-15%"
                    refNumber='325874'
                    price='79,99'
                    altura='63cm'
                    largura='9.50cm'
                    profundidade='9.50cm'
                    image='https://static.zarahome.net/8/photos4/2022/I/4/1/p/6145/047/052/6145047052_2_7_2.jpg?t=1664535915549&imwidth=1146&imformat=chrome' />
                </div> {/* Artigo 2 / */}

                <div> <FurnitureCard
                    articleName='espelho vertical'
                    discount="-5%"
                    refNumber='175854'
                    price='99,99'
                    altura='165cm'
                    largura='42cm'
                    profundidade='3cm'
                    image='https://static.zarahome.net/8/photos4/2022/I/4/1/p/1607/106/052/1607106052_2_7_2.jpg?t=1655218567365&imwidth=1145&imformat=chrome' />
                </div> {/* Artigo  / */}

            </div>
        </>
    )
}

export default itemsGrid
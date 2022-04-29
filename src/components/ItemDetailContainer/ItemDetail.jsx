import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemCount/ItemCount.css'

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(null)
  const {agregarCart, cartList} = useCartContext()
  const onAdd = (count) =>{
    setCount(count)
    agregarCart({...item, cantidad: count })
  }
  console.log(cartList)
  return (
    <div className='item-detail' key={item.id}>
        <div className='detail-img'>
            <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className='detail'>
            <h1 className='detail-title'>{item.title}</h1>
            <h2 className='detail-desc'>{item.description}</h2>
            <h2 className='detail-price'>$ {item.price}</h2>
            {
            count?
            <Link to={'/cart'}>
              <div>
                <button>Finalizar compra</button>
              </div>
            </Link>
            :
            <ItemCount stock={5} initial={1} onAdd={(onAdd)}/>
            }
        </div>
    </div>
  )
}
export default ItemDetail
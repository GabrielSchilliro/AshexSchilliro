import React from "react";
import { Link } from "react-router-dom";
import './ItemListContainer.css'
const Item = ({id, item, title, description, price, imgUrl, stock}) => {
    return (
      <div className='item' key={id}>
          <div className='title'>{title}</div>
          <img src={imgUrl} alt={title} />
          <div className='desc'>{description}</div>
          <div className='price'>Precio: $ {price}</div>
          <Link to={`/item/${id}`}><button className="btnDetalles">Detalles</button></Link>
      </div>
      )
}
  export default Item
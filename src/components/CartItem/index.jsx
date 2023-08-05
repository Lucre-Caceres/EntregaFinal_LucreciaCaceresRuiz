import React from 'react'
import styles from "./CartItem.module.css"

const CartItem = ({product,removeItem}) => {
  return (
    <div>
      <p className={styles.prodTitle}>{product.item.title}</p>
      <img className={styles.prodImage} src={product.item.pictureURL} />
      
      <p className={styles.prodPrice}>{product.item.price}</p>

      <button onClick={()=>addItem(product.id)}></button>
      
      <button onClick={()=>removeItem(product.item.id)}></button>
      
      <button onClick={()=>clear(product.id)}></button>
    </div>
  )
}

export default CartItem
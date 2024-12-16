import React, { useEffect, useContext, use } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

  const { handle} = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
  useEffect(() =>{
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if (!product) return <div>Loadings..</div>

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default ProductPage
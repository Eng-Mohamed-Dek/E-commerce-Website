import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/breadcrum/breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/descriptionBox/DescriptionBox'
import { RelatedProduts } from '../Components/Relatedproducts/RelatedProduts'

export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { addtoCarts } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((product) => product.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} addtoCarts={addtoCarts} />
      <DescriptionBox />
      <RelatedProduts />
     </div>
  )
}

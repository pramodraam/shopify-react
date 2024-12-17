import React, { useEffect, useContext, use } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from '@chakra-ui/react'


const ProductPage = () => {

  const { handle} = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
  useEffect(() =>{
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if (!product) return <div>Loadings..</div>

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        {product.images && product.images.length > 0 ? (
        <Image src={product.images[0].src} alt={product.title} />
        ) : (
        <Text>No Image Available</Text>
        )}
        <Box>
          <Heading>{product.title}</Heading>
          {product.variants ? (
          <Text>${product.variants[0].price.amount}</Text>
          ) : (
          <Text>No Variant Available</Text>
          )}
          <Text>{product.description}</Text>
          <Button
            onClick={()=> addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default ProductPage

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

  if (!product.title) return <div>Loadings..</div>

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} m="auto">
        {product.images && product.images.length > 0 ? (
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} alt={product.title} />
        </Flex>
        ) : (
        <Text>No Image Available</Text>
        )}
        <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
          <Heading pb="2rem">{product.title}</Heading>
          {product.variants ? (
          <Text fontWeight="bold" pb="2rem">${product.variants[0].price.amount}</Text>
          ) : (
          <Text pb="2rem">No Variant Available</Text>
          )}
          <Text pb="2rem" color="gray.500">{product.description}</Text>
          <Button
            onClick={()=> addItemToCheckout(product.variants[0].id, 1)}
            _hover=" opacity: 70% "
            w="10rem"
            backgroundColor="#FF38BD" color="white"
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default ProductPage

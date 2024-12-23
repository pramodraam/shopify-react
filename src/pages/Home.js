import React, { useContext, useEffect } from 'react'

import { ShopContext } from '../context/shopContext'

import { Link } from 'react-router-dom'

import { Box, Grid, Text, Image } from '@chakra-ui/react'

import Hero from '../Components/Hero'

import ImageWithText from '../Components/ImageWithText'

import RichText from '../Components/RichText'

const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if(!products) return <div>Loadings...</div>

  return (
    <Box>
      <Hero />
      <RichText 
        heading="Relaxation you are waiting for"
        text="Our bath bombs guarantee a fun"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%'}} textAlign="center" position="relative">
                {product.images && product.images.length > 0 ? (
                <Image src={product.images[0].src} alt={product.title} />
                ) : (
                <Text>No Image Available</Text>
                )}

                <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">{product.title}</Text>
                <Text position="absolute" bottom="5%" w="100%" color="gray.500">${product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          ))
        }
      </Grid>
      <RichText 
        heading="Treat Yourself"
        text="Our bath bombs guarantee a fun"
      />
      <ImageWithText 
      image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
      heading="heading"
      text="testing testingoooooooooooooooooo sfddddddddddddddddddddd" 
      />
      <ImageWithText 
      reverse 
      image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
      heading="Second heading"
      text="testing testingoooooooooooooooooo sfddddddddddddddddddddd" 
      />   
      </Box>
  )
}

export default Home

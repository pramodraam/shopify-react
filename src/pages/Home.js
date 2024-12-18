import React, { useContext, useEffect } from 'react'

import { ShopContext } from '../context/shopContext'

import { Link } from 'react-router-dom'

import { Box, Grid, Text, Image } from '@chakra-ui/react'

import Hero from '../Components/Hero'

const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if(!products) return <div>Loadings...</div>

  return (
    <Box>
      <Hero />
      <Grid templateColumns="repeat(3, 1fr)">
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%'}} textAlign="center">
                {product.images && product.images.length > 0 ? (
                <Image src={product.images[0].src} alt={product.title} />
                ) : (
                <Text>No Image Available</Text>
                )}

                <Text>{product.title}</Text>
                <Text>${product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home

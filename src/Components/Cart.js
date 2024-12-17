import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react"

import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

  console.log(checkout)

  return (
    <>
    <Drawer 
      isOpen={isCartOpen}
      placement='right'
      onClose={closeCart}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {
              checkout.lineItems && checkout.lineItems.map(item => (
                <Grid templateColumns="repeat(4,1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={item.variant.image.src} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price.amount}</Text>
                  </Flex>
                </Grid>
              ))
            }
          </DrawerBody>

          <DrawerFooter>
            <Button variante="outline" mr={3} onClick={closeCart}>
              Cancel
            </Button>
            <Button w="100%" color="Blue">
              <Link
                w="100%"
                href={checkout.webUrl}
              >Checkout</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    </>
  )
}

export default Cart
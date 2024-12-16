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
} from "@chakra-ui/react"

const Cart = () => {

  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

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
            This is your cart
          </DrawerBody>

          <DrawerFooter>
            <Button variante="outline" mr={3} onClick={closeCart}>
              Cancel
            </Button>
            <Button color="Blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    </>
  )
}

export default Cart

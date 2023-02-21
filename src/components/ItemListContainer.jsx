import React from 'react'
import { Box } from '@chakra-ui/react'


const ItemListContainer = ({greeting}, {slogan}) => {
  return (

    <Box bg = 'blue.300' color = 'white' w = '100%' m = '1' p = '5' justify = 'center' align = 'center' borderRadius = 'md'>
        {greeting}
        {slogan}
    </Box>
  )
}


export default ItemListContainer
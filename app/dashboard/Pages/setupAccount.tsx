import React from 'react'
import Box from '@component/general/Box'
import { Styles } from './styles'

export default function setupAccount() {
  return (
    <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
        <Box width={'95%'}>
            <Box height={'50%'}  backgroundColor={'errorColor'} >

            </Box>
            <Box height={'50%'}  backgroundColor={'successColor'}>

            </Box>

        </Box>
    </Box>
  )
}
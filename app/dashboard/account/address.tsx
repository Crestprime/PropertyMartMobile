import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import BankCard from '@component/wallet/BankCard'

const Address = () => {
  return (
   <Box flex={1} padding={'md'}>
    <CustomHeader title='Saved Address' />
    <Box marginTop={'md'} />
    <BankCard />
   </Box>
  )
}

export default Address
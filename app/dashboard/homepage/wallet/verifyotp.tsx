import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import CustomText from '@component/general/CustomText'
import { Theme } from '@theme/themes'
import { useTheme } from '@shopify/restyle'
import { useRouter } from 'expo-router'

const VerifyOtp = () => {
    const theme = useTheme<Theme>();
    const router = useRouter();
  return (
   <Box flex={1}>
    <Box width='100%' height={140} justifyContent={'flex-end'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>How much do you want to withdraw?</CustomText>
        </Box>
   </Box>
  )
}

export default VerifyOtp
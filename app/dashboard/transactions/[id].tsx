import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'
import { useRouter } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { RoundedButton } from '@component/general/RoundedButton'

const SingleTransaction = () => {
    const theme = useTheme<Theme>();
    const router = useRouter();
  return (
    <Box flex={1} padding={'md'} style={{
        backgroundColor: 'black'
    }}>
         <Box zIndex={2} width='100%' height={100} justifyContent={'flex-end'}>
            <Feather name='arrow-left' color={theme.colors.white} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'white'} fontSize={22} marginTop={'md'}>Transactions Details</CustomText>
        </Box>

        <Box flex={0.95} bg='white' borderRadius={10} marginVertical={'md'} paddingHorizontal={'md'} paddingVertical={'2xl'} alignItems={'center'}>
            <CustomText variant={'subheader'} fontSize={18} color={'black'} textAlign={'center'}>Widthdraw to firstbank</CustomText>
            <CustomText variant={'header'} fontSize={28} color={'primaryColor'} textAlign={'center'}>N30,000,000.00</CustomText>
            <Box width={'60%'} height={50} borderRadius={10} justifyContent={'center'} alignItems={'center'} borderWidth={1} borderColor={'lightGrey'} marginTop={'md'}>
                <CustomText variant={'subheader'} fontSize={14} color={'lightGrey'}>Nov 14th 04:09 am</CustomText>
            </Box>

            <Box width='100%' height={28} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'lg'} marginTop={'4xl'}>
                <CustomText variant={'body'} fontSize={16} style={{ color: 'grey' }}>Recipient Name</CustomText>
                <CustomText variant={'subheader'} fontSize={16} style={{ color: 'black' }}>Okon Okafwor</CustomText>
            </Box>

            <Box width='100%' height={28} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'lg'}>
                <CustomText variant={'body'} fontSize={16} style={{ color: 'grey' }}>Bank Account</CustomText>
                <CustomText variant={'subheader'} fontSize={16} style={{ color: 'black' }}>09384857848</CustomText>
            </Box>

            <Box width='100%' height={28} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'lg'}>
                <CustomText variant={'body'} fontSize={16} style={{ color: 'grey' }}>Bank Name</CustomText>
                <CustomText variant={'subheader'} fontSize={16} style={{ color: 'black' }}>Kuda</CustomText>
            </Box>

            <Box width='100%' height={28} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginBottom={'lg'}>
                <CustomText variant={'body'} fontSize={16} style={{ color: 'grey' }}>Status</CustomText>
                <CustomText variant={'subheader'} fontSize={16} style={{ color: 'black' }}>Successful</CustomText>
            </Box>
        </Box>
        <RoundedButton label='Share Recipt' onPress={() => {}} width={'100%'} height={48} backgroundColor={theme.colors.primaryColor} textColor='white' />
    </Box>
  )
}

export default SingleTransaction
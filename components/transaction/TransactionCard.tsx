import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const TransactionCard = () => {
    const router = useRouter();
  return (
    <Pressable onPress={() => router.push('/dashboard/transactions/234')} style={{ width: '100%', height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }} >
        <Box flex={1} flexDirection={'row'} alignItems={'center'}>
            <Box width={40} height={40} borderRadius={10} justifyContent={'center'} alignItems={'center'} backgroundColor={'lightGrey'} style={{
                backgroundColor: '#F2F4F7'
            }}>
                <Feather name='arrow-up-right' size={20} color={'grey'} />
            </Box>
            <Box marginLeft={'md'}>
                <CustomText variant={'subheader'} fontSize={18} color={'black'}>Account Funded</CustomText>
                <CustomText variant={'body'} fontSize={16} color={'lightGrey'}>Success</CustomText>
            </Box>
        </Box>
        <Box flex={1} alignItems={'flex-end'}>
            <CustomText variant={'body'} fontSize={14} style={{ color: 'green' }}>+N30000</CustomText>
            <CustomText variant={'body'} fontSize={14} color={'lightGrey'}>04:00PM</CustomText>
        </Box>
    </Pressable>
  )
}

export default TransactionCard
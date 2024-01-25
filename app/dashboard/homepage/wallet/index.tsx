import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/index'
import { RoundedButton } from '@component/general/RoundedButton'
import { MoneySend, MoneyRecive } from 'iconsax-react-native'
import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router'
const Wallets = () => {
  const [showBalance, setShowBalance] = React.useState(false);
  const [transactions, setTransactions] = React.useState<string[]>([])

  const theme = useTheme<Theme>();
  const navigation = useRouter();

  return (
    <Box flex={1} backgroundColor={'white'} paddingHorizontal={'md'}>
      <Box width='100%' height={80} backgroundColor={'white'}  justifyContent={'flex-end'} paddingBottom={'md'}>
        <CustomText variant={'subheader'} fontSize={18}>Wallet</CustomText>
      </Box>

      <Box width={'100%'} height={200} alignItems={'center'} justifyContent={'center'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <CustomText variant={'subheader'} fontSize={16} color={'lightGrey'}>Wallet balance</CustomText>
          <Feather name={showBalance ? 'eye-off':'eye'} onPress={() => setShowBalance((prev) => !prev)} size={20} style={{ marginLeft: theme.spacing.md }} color={'#98A2B3'} />
        </Box>

        <CustomText variant={'subheader'} color={'black'} fontSize={35} marginTop={'md'}>{showBalance ? 'N0.00':'****'}</CustomText>

        <Box flexDirection={'row'} justifyContent={'center'} marginTop={'2xl'}>
          <RoundedButton label='Deposit' width={138} height={48} borderRadius={40} onPress={() => navigation.push('/dashboard/homepage/wallet/deposit')} icon={<MoneyRecive color={theme.colors.white} size={15} variant='Linear' />} textColor='white'backgroundColor={theme.colors.primaryColor} />
            <Box width={10} />
          <RoundedButton label='Withdraw' width={138} height={48} borderRadius={40} onPress={() => {}} icon={<MoneySend color={theme.colors.white} size={15} variant='Linear' />} textColor='white'backgroundColor={theme.colors.primaryColor} />
        </Box>
      </Box>


    <CustomText variant={'subheader'} color={'black'} fontSize={16}>Recent Transactions</CustomText>

    { transactions.length <  1 && (
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <Image source={require('../../../../assets/images/Stickers.png')} contentFit='contain' style={{ width: 100, height: 80 }} />
            <CustomText variant={'medium'} fontSize={18} color='black'>No Recent Transactions Yet</CustomText>
            <CustomText variant={'body'} style={{ color: 'grey' }} fontSize={16} marginTop={'xs'} textAlign={'center'}>Looks like your financial world is quiet for now – no recent transactions to report</CustomText>
        </Box>
    )}
      
    </Box>
  )
}

export default Wallets
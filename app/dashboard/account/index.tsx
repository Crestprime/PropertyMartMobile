import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

interface IProps {
  link: string;
  title: string
  icon: ReactNode;
}

const arr: IProps[] = [
  {
    link: '/dashboard/account/edit',
    icon: <Ionicons name='create-outline' size={24} color='black' />,
    title: 'Edit Profile'
  },
  {
    link: '/dashboard/account/change-password',
    icon: <Ionicons name='key-outline' size={24} color='black' />,
    title: 'Change Password'
  },
  {
    link: '/dashboard/account/banks',
    icon: <Ionicons name='cash-outline' size={24} color='black' />,
    title: 'Saved Banks'
  },
  {
    link: '/dashboard/account/address',
    icon: <Ionicons name='home-outline' size={24} color='black' />,
    title: 'Saved Addresses'
  }
]
const NavItem = ({ link, title, icon }: IProps) => {
  return (
    <Box width='100%' height={40} flexDirection={'row'} alignItems={'center'}marginBottom={'md'}>
      {icon}
      <Box width={20} />
      <Link href={link as any}>
        <CustomText variant={'subheader'} fontSize={16} color='black' marginLeft={'3xl'}>{title}</CustomText>
      </Link>
    </Box>
  )
}

const SettingsPage = () => {
  return (
    <Box flex={1} bg='white' padding='md'>
        <CustomHeader title='My Account' />
        <Box width='100%' height={150} flexDirection={'row'} alignItems={'center'}>
          <Box width={100} height={100} borderRadius={50} bg='lightGrey' />

          <Box marginLeft={'md'}>
            <CustomText variant={'subheader'} fontSize={18} color='black'>Daniel Emmanuel</CustomText>
            <CustomText variant={'xs'}>Danielemmanuel@gmail.com</CustomText>
          </Box>
        </Box>
        <ScrollView style={{ flex: 1 }}>
          { arr.map((item, indx) => (
            <NavItem key={indx} {...item} />
          ))}
        </ScrollView>
    </Box>
  )
}

export default SettingsPage
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'

const UpdateCard = ({title, desc}: {title: string, desc: string}) => {
  return (
      <Box height={98} width={'100%'}>
          <Box flexDirection={'row'} alignItems={'center'}>
              <Image source={require('../../assets/images/calendar.png')} />
              <CustomText>10-01-2024</CustomText>
          </Box>
          <CustomText fontSize={18} variant={'medium'}>{title}</CustomText>
          <CustomText>{desc}</CustomText>

   </Box>
  )
}

export default UpdateCard


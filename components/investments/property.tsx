import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText';

const backgroundImg = require('../../assets/images/bgDesign.png');
const pptIcon =require('../../assets/images/propertyIcon.png')
const markerIcon =require('../../assets/images/marker-pin.png')
const coinIcon =require('../../assets/images/coins-stacked-03.png')


const property = () => {
  return (
      <Box height={128} width={365} borderRadius={10} backgroundColor={'errorColor'} padding={'lg'} marginLeft={'sm'}>
           {/* <ImageBackground source={backgroundImg} resizeMode='cover' ><Text>Test</Text></ImageBackground> */}
          <CustomText variant={'medium'} fontSize={18} color={'white'} fontWeight={'400'}>Properties in Abuja</CustomText>
          <Box flexDirection={'row'} paddingTop={'lg'}>
              <Image source={pptIcon} />
              <CustomText color={'white'} paddingLeft={'sm'} fontSize={16}>5 Properties</CustomText>
          </Box>
          <Box flexDirection={'row'} paddingTop={'sm'}>
              <Image source={markerIcon} />
              <Box width={'94%'}  flexDirection={'row'} justifyContent={'space-between'} paddingRight={'sm'}>
                  <CustomText color={'white'} paddingLeft={'sm'} fontSize={16}>5 Properties</CustomText>
                  <Box flexDirection={'row'}>
                      <Image source={coinIcon}/>
                  <CustomText color={'white'} paddingLeft={'sm'} fontSize={18}>+4.5% per year</CustomText>
                 </Box>
              </Box>
          </Box>
    </Box>
  )
}

export default property


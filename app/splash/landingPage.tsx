import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Styles } from '../../styles/splash/styles'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'

const wave = require('../../assets/images/bg/Wave.png')
const logo = require('../../assets/images/logo/Pmart.png')

const LandingPage = () => {
    return (
      <Box style={Styles.martContainer} backgroundColor={'btnBlue'}>
        <Box style={Styles.martSplit55}>
            <Box style={Styles.logoContainer}>
                <View style={Styles.logoBox}>
                  <Image style={Styles.logoImage}  source={logo}/>
                </View>
            </Box>
        </Box>
        <Box style={Styles.martSplit48}>
         <ImageBackground source={wave} resizeMode="cover" style={Styles.bgImage}>
            <CustomText variant={'header'} textAlign={'center'} color={'white'}>
                Property Mart 
            </CustomText>
            <CustomText variant={'header'} textAlign={'center'} color={'white'}>
              (Buyer's App) 
            </CustomText>
         </ImageBackground>
        </Box>
      </Box>
    )
  }
  
  export default LandingPage;
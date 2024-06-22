import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Styles } from './styles'
import { OutlineButton } from '@component/general/OutlineButton'
import { PrimaryButton } from '@component/general/CustomButton'
import {
  useRouter  
} from 'expo-router';
import {Theme} from "@theme/index";
import {useTheme} from "@shopify/restyle";
const wave = require('../../assets/images/bg/Wave.png')

const Onboarding = () => {
  const router = useRouter();
  const theme = useTheme<Theme>();
  return (
    <Box backgroundColor={'white'} style={Styles.martContainer}>
        <Box style={Styles.martSplit55}>
            <Box style={[Styles.bgImage, { backgroundColor: theme.colors.primaryColor }]}></Box>
        {/*<ImageBackground source={wave} resizeMode="cover" style={Styles.bgImage}>*/}
        {/*    /!* <CustomText variant={'subheader'} textAlign={'center'} fontSize={36} lineHeight={44} color={'white'}>Property Mart</CustomText> *!/*/}
        {/* </ImageBackground>*/}
        </Box>
        <Box style={[Styles.martSplit45, Styles.flex]} >
            <Box style={[Styles.subContainer, Styles.flex]} >

                <Box style={[Styles.martSplit55, Styles.flex]} backgroundColor={'white'}>
                    <CustomText variant={'subheader'} textAlign={'center'} fontSize={26}
                    color={'black'} >Find Your Perfect Property Match</CustomText>
                    <Box style={[Styles.flex ]}>
                        <Box style={{width:'100%'}}>
                        <CustomText variant={'body'} textAlign={'center'} fontSize={18}
                         >
                            Discover, invest, and claim your space in the real estate market.</CustomText>
                        </Box>
                    </Box>
                </Box>

                <Box style={Styles.martSplit45}>
                    <Box width='100%' height={45} flexDirection={'column'} justifyContent={'space-between'}>
                        <Box width={'100%'}>
                            <PrimaryButton width={'100%'} isDisabled={false} label='Create an account' onPress={() => router.push('/auth/signup')} />
                        </Box>
                        <Box width={'100%'} style={{paddingTop:10}}>
                            <OutlineButton width={'100%'} isDisabled={false} label='Login' onPress={() => router.push('/auth/login')} />
                        </Box>
                    </Box>
                </Box>

            </Box>
        
        </Box>
    </Box>
  )
}

export default Onboarding;
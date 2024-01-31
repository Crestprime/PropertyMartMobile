import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { PrimaryButton } from '@component/general/CustomButton';

const detailedProperty = () => {
  return (
    <SafeAreaView>
      <Box>
              <Image source={require('../../../../assets/images/bgFlyer.png')} />
              
              <Box height={92} width={'100%'} marginTop={'xl'} padding={'sm'} >
                  <CustomText variant={'medium'} fontSize={24}>Lakeside Villas</CustomText>
                  <Box flexDirection={'row'} alignItems={'center'}>
                      <Image source={require('../../../../assets/images/marker-pin-02.png')}/>
                      <CustomText paddingLeft={'sm'}>Austin, Texas</CustomText>
                  </Box>
              </Box>

              <Box height={134} width={428} padding={'xl'}  top={-20} >
                  <CustomText variant={'medium'} fontSize={20}>About</CustomText>
                  <CustomText>CORAL GARDEN ESTATE is a well planned estate within a serene, beautiful environment suitable for all in the beautiful city of Awka, Anambra State. CORAL </CustomText>
                  <Box alignSelf={'center'}>
                  <PrimaryButton onPress={()=>('')} label={'Read More'} width={120}></PrimaryButton>
                 </Box>
              </Box>
              
      </Box>
    </SafeAreaView>
  );
};

export default detailedProperty;

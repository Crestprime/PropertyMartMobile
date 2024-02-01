import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { PrimaryButton } from '@component/general/CustomButton';
import { SubmitButton } from '@component/form/CustomButton';
import { ScrollView } from 'tamagui';

const detailedProperty = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box>
          <Image source={require('../../../../assets/images/bgFlyer.png')} />

          <Box height={92} width={'100%'} marginTop={'xl'} padding={'sm'}>
            <CustomText variant={'medium'} fontSize={24}>
              Lakeside Villas
            </CustomText>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Image
                source={require('../../../../assets/images/marker-pin-02.png')}
              />
              <CustomText paddingLeft={'sm'}>Austin, Texas</CustomText>
            </Box>
          </Box>

          <Box height={134} width={428} padding={'xl'} top={-20}>
            <CustomText variant={'medium'} fontSize={20}>
              About
            </CustomText>
            <CustomText>
              CORAL GARDEN ESTATE is a well planned estate within a serene,
              beautiful environment suitable for all in the beautiful city of
              Awka, Anambra State. CORAL{' '}
            </CustomText>
            <Box alignSelf={'center'}>
              <PrimaryButton
                onPress={() => ''}
                label={'Read More'}
                width={120}
              ></PrimaryButton>
            </Box>
                  </Box>
                  
                  <Box height={247} width={'100%'} marginTop={'xl'} padding={'xl'}>
                      <CustomText variant={'medium'}>Features</CustomText>

                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/nepa.png')}/>
                          <CustomText>Steady Electricity </CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/road.png')}/>
                          <CustomText>Good Road Network</CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/shop.png')}/>
                          <CustomText>3 minutes to Akwa Timber Market</CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/pump.png')}/>
                          <CustomText>Adequate and Reliable Water Supply </CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/nepa.png')}/>
                          <CustomText>Steady Electricity </CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/xpress.png')}/>
                          <CustomText>Steady Electricity </CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/nepa.png')}/>
                          <CustomText>Quick accessibility to Akwa Onitsha expressway</CustomText>
                      </Box>
                     
                  </Box>
                  <Box height={247} width={'100%'} marginTop={'10xl'} padding={'xl'}>
                      <CustomText variant={'medium'}>Landmarks</CustomText>

                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/police.png')}/>
                          <CustomText>Police Headquarters </CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/estate.png')}/>
                          <CustomText>Dubai Estate</CustomText>
                      </Box>
                      <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'sm'}>
                          <Image  source={require('../../../../assets/images/homes.png')}/>
                          <CustomText>Executive homes</CustomText>
                      </Box>
                      <Box>
                      <CustomText variant={'medium'}>Documentation</CustomText>
                      <CustomText>Deed of Conveyance</CustomText>
                      <CustomText>Registered Survey Plan</CustomText>
                     </Box>
                     
                  </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default detailedProperty;

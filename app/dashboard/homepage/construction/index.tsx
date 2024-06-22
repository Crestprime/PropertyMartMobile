import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '@component/general/CustomButton';
import { router } from 'expo-router';

const Construction = () => {
  return (
    <SafeAreaView>
      <Box padding={'2xl'}>
        <CustomText variant={'medium'}>Construction</CustomText>
      </Box>

      <Box  paddingLeft={'xs'} paddingRight={'xs'}
        alignSelf={'center'}
        top={20}
        width={'100%'}
        justifyContent={'center'}
      >
        <Box
          height={297}
          width={'100%'}
          alignItems={'center'}
          marginTop={'9xl'}
          justifyContent={'center'}
          //   marginBottom={'xl'}
        >
          <Image source={require('../../../../assets/images/cityLogo.png')} />
        </Box>

        <CustomText textAlign={'center'} fontSize={24} variant={'medium'}>
          No ongoing project yet
        </CustomText>
        <CustomText textAlign={'center'} fontSize={16} textAlignVertical={'center'}>
          You do not have any ongoing project yet, to hire a service for your
          project, send city capital development a proposal.
        </CustomText>
        <Box alignItems={'center'} paddingTop={'3xl'}>
           
          <PrimaryButton
            onPress={()=>router.push('/dashboard/homepage/construction/proposal')}
            label={'Send Proposal'}
            width={400}
          />
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Construction
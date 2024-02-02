import { View, Text, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

const VerifiedOppt = () => {
  return (
      <TouchableOpacity onPress={()=>router.push('/dashboard/homepage/investment/listedProperties')}>
          <Box
      height={128}
      width={396}
      backgroundColor={'btnBlue'}
      alignSelf={'center'}
      borderRadius={8}
          padding={'xl'}
          marginBottom={'sm'}
          
    >
      <CustomText variant={'medium'} fontSize={18} color={'white'} >
        Properties in Abuja
      </CustomText>
      <Box flexDirection={'row'} alignItems={'center'} marginBottom={'sm'} >
        <Image source={require('../../assets/images/whiteBuilding.png')} />
        <CustomText paddingLeft={'sm'} fontSize={16} color={'white'}>
          5 Properties
        </CustomText>
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
        <Box flexDirection={'row'}>
          <Image source={require('../../assets/images/location-pin.png')} />
          <CustomText paddingLeft={'sm'} color={'white'}>Lugbe, Abuja </CustomText>
        </Box>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image source={require('../../assets/images/coins-stacked-03.png')} />
          <CustomText color={'white'}> +4.5% per year</CustomText>
        </Box>
      </Box>
    </Box>
    </TouchableOpacity>
  );
};

export default VerifiedOppt;

import { StyleSheet, Text, Touchable, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const PropertyCard = () => {
  return (
    <TouchableOpacity onPress={()=>router.push('/dashboard/homepage/investment/detailedProperty')}>
      <Box flexDirection={'row'} alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
        <Box flexDirection={'row'}>
          <Image
            source={require('../../assets/images/cardAvi.png')}
            height={40}
            width={40}
          />
          <Box paddingLeft={'sm'} height={80} justifyContent={'space-between'}>
            <CustomText variant={'medium'}>Lakeside Villas</CustomText>
            <CustomText fontSize={18}>Lugbe, Abuja </CustomText>
            <CustomText fontSize={18}>+4.5% per year</CustomText>
          </Box>
        </Box>

        <Box>
          <Ionicons name="chevron-forward-outline" size={30} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default PropertyCard;

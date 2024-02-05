import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '@component/general/Box';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';
import CustomText from '@component/general/CustomText';
import PropertyCard from '@component/investments/propertyCard';



const listedProperties = () => {
  return (
    <SafeAreaView>
      <Box padding={'xl'}>
        <Ionicons
          name="arrow-back-outline"
          size={25}
          onPress={() =>
            router.push('/dashboard/homepage/investment/investmentData')
          }
        />
      </Box>
      <CustomText
        paddingLeft={'2xl'}
        variant={'medium'}
        fontSize={24}
        marginBottom={'xl'}
      >
        Properties in Abuja
      </CustomText>
          <Box />
          
          <Box paddingLeft={'xl'} minHeight={350} justifyContent={'space-between'}>
              <PropertyCard/>
              <PropertyCard/>
              <PropertyCard/>
              <PropertyCard/>
          </Box>
    </SafeAreaView>
  );
};

export default listedProperties;

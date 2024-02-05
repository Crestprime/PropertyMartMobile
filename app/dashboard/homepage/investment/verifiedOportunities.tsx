import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';
import VerifiedOppt from '@component/investments/VerifiedOppt';

const verifiedOpportunities = () => {
  return (
    <SafeAreaView>
      <Box>
        <Box padding={'xl'}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            onPress={() =>
              router.push('/dashboard/homepage/investment/investmentData')
            }
          />
        </Box>
        <CustomText paddingLeft={'2xl'} variant={'medium'} fontSize={24} marginBottom={'xl'}>
          Verified Opportunities
              </CustomText>
              
              <Box>
                  <VerifiedOppt/>
                  <VerifiedOppt/>
                  <VerifiedOppt/>
                  <VerifiedOppt/>
              </Box>
      </Box>
    </SafeAreaView>
  );
};

export default verifiedOpportunities;

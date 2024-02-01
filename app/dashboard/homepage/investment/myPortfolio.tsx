import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '@component/general/CustomText';
import ListProperty from '@component/investments/ListProperty';
import { router } from 'expo-router';

const myPortfolio = () => {
  return (
    <SafeAreaView>
      <Box padding={'xl'}>
        <Ionicons name="arrow-back-outline" size={19} onPress={()=> router.push('/dashboard/homepage/investment/investmentData')} />
          </Box>
          <CustomText paddingLeft={'2xl'} variant={'medium'} >My Portfolio</CustomText>

          <Box minHeight={400}justifyContent={'space-between'} >
              <ListProperty/>
              <ListProperty/>
              <ListProperty/>
              <ListProperty/>
              <ListProperty/>
              <ListProperty/>
              <ListProperty/>
          </Box>
    </SafeAreaView>
  );
};

export default myPortfolio;

const styles = StyleSheet.create({});

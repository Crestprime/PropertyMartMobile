import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '@component/general/CustomText';
import Box from '@component/general/Box';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';
import { PrimaryButton } from '@component/general/CustomButton';

const singleProperty = () => {
  return (
    <SafeAreaView>
      <Box padding={'2xl'} width={'100%'}>
        <Box padding={'xl'}>
          <Ionicons
            name="arrow-back-outline"
            size={19}
            onPress={() =>
              router.push('/dashboard/homepage/investment/investmentData')
            }
          />
        </Box>
        <CustomText paddingLeft={'2xl'} variant={'medium'} fontSize={21}>
          Lakeside Villas
        </CustomText>
        <Image
          source={require('../../../../assets/images/avi.png')}
          height={80}
          width={20}
        />

        <Box
          height={84}
          width={'100%'}
          backgroundColor={'textInputBorderColor'}
          borderRadius={10}
          marginTop={'xl'}
          padding={'lg'}
        >
          <CustomText variant={'medium'} fontSize={24}>
            $10,023
          </CustomText>
          <Box flexDirection={'row'}>
            <CustomText color={'successColor'}>+$23 (0.23%)</CustomText>
            <CustomText> Today</CustomText>
          </Box>
        </Box>

        <Box paddingTop={'xl'} paddingBottom={'lg'}>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Location</CustomText>
            <CustomText variant={'medium'}>Austin, Texas</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>ROI Plan</CustomText>
            <CustomText variant={'medium'}>Buy-Back</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Location</CustomText>
            <CustomText variant={'medium'}>Value-Add Strategy</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Duration</CustomText>
            <CustomText variant={'medium'}>1 year</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Amount Invested</CustomText>
            <CustomText variant={'medium'}>$100,000</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Investment Date</CustomText>
            <CustomText variant={'medium'}>November 27th, 2023</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Total Expected ROI</CustomText>
            <CustomText variant={'medium'}>8%</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>ROI Received to Date</CustomText>
            <CustomText variant={'medium'}>$8,000</CustomText>
          </Box>
          <Box
            width={'100%'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <CustomText>Status</CustomText>
            <CustomText variant={'medium'} color={'successColor'}>
              Active
            </CustomText>
          </Box>
        </Box>

        <PrimaryButton
          onPress={() => router.push('/dashboard/homepage/investment/detailedProperty')}
          label={'View Property Information'}
          width={'auto'}
        />
      </Box>
    </SafeAreaView>
  );
};

export default singleProperty;

const styles = StyleSheet.create({});

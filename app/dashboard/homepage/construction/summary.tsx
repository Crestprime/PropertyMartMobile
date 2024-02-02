import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';
import CustomText from '@component/general/CustomText';
import { Styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const summary = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box padding={'lg'}>
          <Box padding={'sm'}>
            <Ionicons
              name="arrow-back-outline"
              size={25}
              onPress={() => router.back()}
            />
          </Box>
          <Box
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <CustomText paddingLeft={'sm'} variant={'medium'}>
              Family House
            </CustomText>
            <Box style={[Styles.decline]}>
              <CustomText color={'errorColor'}>Declined</CustomText>
            </Box>
          </Box>

          <Box width={'100%'} paddingTop={'xl'}>
            <Box>
              <CustomText>Project Description</CustomText>
              <CustomText variant={'medium'}>2 bedroom duplex</CustomText>
            </Box>
            <Box paddingTop={'sm'}>
              <CustomText>Location</CustomText>
              <CustomText variant={'medium'}>Lagos, Nigeria</CustomText>
            </Box>
          </Box>

          <Box flexDirection={'row'}>
            <Box
              width={'50%'}
              minHeight={52}
              flexDirection={'column'}
              justifyContent={'space-between'}
              marginTop={'xl'}
              marginBottom={'sm'}
            >
              <Box marginBottom={'xl'}>
                <CustomText>Project Type</CustomText>
                <CustomText variant={'medium'}>Commercial</CustomText>
              </Box>
              <Box>
                <CustomText>Preferred start date</CustomText>
                <CustomText variant={'medium'}>27-01-2024</CustomText>
              </Box>
            </Box>

            <Box
              width={'50%'}
              minHeight={52}
              flexDirection={'column'}
              justifyContent={'space-between'}
              paddingTop={'xl'}
              marginBottom={'sm'}
            >
              <Box>
                <CustomText>Estimated budgete</CustomText>
                <CustomText variant={'medium'}>$100</CustomText>
              </Box>
              <Box>
                <CustomText>Preferred completion date</CustomText>
                <CustomText variant={'medium'}>27-12-2024</CustomText>
              </Box>
            </Box>
          </Box>

          <Box
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-between'}
          >
            <Box>
              <CustomText>Duration</CustomText>
              <CustomText variant={'medium'}>1 Year</CustomText>
            </Box>
            <Box paddingRight={'10xl'}>
              <CustomText>Payment Structure</CustomText>
              <CustomText variant={'medium'}>By Milestones</CustomText>
            </Box>
          </Box>

          <Box paddingTop={'5xl'}>
            <CustomText variant={'medium'}>
              Specification Requirements
            </CustomText>
            <CustomText paddingTop={'sm'} fontSize={16}>
              Wheelchair Access
            </CustomText>
            <CustomText paddingTop={'sm'} fontSize={16}>
              Safe room installations
            </CustomText>
            <CustomText paddingTop={'sm'} fontSize={16}>
              Smart home technology
            </CustomText>
          </Box>

          <Box paddingTop={'xl'}>
            <CustomText variant={'medium'}>Attachments</CustomText>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Image
                source={require('../../../../assets/images/folderIcon.png')}
              />
              <CustomText>Survey Plan</CustomText>
            </Box>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Image
                source={require('../../../../assets/images/folderIcon.png')}
              />
              <CustomText>Architectural design </CustomText>
            </Box>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Image
                source={require('../../../../assets/images/folderIcon.png')}
              />
              <CustomText>C of O</CustomText>
            </Box>
          </Box>

          <Box paddingTop={'3xl'} height={140} justifyContent={'space-between'}>
            <CustomText variant={'medium'}>Contact Information</CustomText>
            <CustomText>Stefan Jude Williams</CustomText>
            <CustomText>Stephanjude@gmail.com</CustomText>
            <CustomText>081345678912</CustomText>
          </Box>

          <Box style={[Styles.declineCard]}>
                      <CustomText style={[Styles.declineText]} variant={'medium'} fontSize={18}>Reason for decline</CustomText>
                      <CustomText style={[Styles.subText]}>Lack of man-power and resources to carry out this project</CustomText>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default summary;

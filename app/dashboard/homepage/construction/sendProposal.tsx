import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomText from '@component/general/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomTextInput } from '@component/form/CustomInput';
import { TextInput } from 'react-native-gesture-handler';

const sendProposal = () => {
  return (
    <SafeAreaView>
      <Box padding={'xl'}>
        <Ionicons
          name="arrow-back-outline"
          size={25}
          onPress={() =>
            router.back()
          }
        />
      </Box>
      <CustomText
        paddingLeft={'2xl'}
        variant={'medium'}
        fontSize={24}
        marginBottom={'xl'}
      >
        Send Proposal
      </CustomText>

      <Box flexDirection={'column'} padding={'sm'} height={80}  justifyContent={'space-between'}>
        <CustomText paddingBottom={'sm'}> Project Title</CustomText>
        <Box height={40} width={396} borderWidth={1} borderColor={'lightGrey'} borderRadius={8} justifyContent={'center'} paddingLeft={'sm'}>
          <TextInput  />
        </Box>
      </Box>
      <Box flexDirection={'column'} padding={'sm'} height={80}  justifyContent={'space-between'}>
        <CustomText paddingBottom={'sm'}>Project Description</CustomText>
        <Box height={40} width={396} borderWidth={1} borderColor={'lightGrey'} borderRadius={8} justifyContent={'center'} paddingLeft={'sm'}>
          <TextInput  />
        </Box>
      </Box>
      <Box flexDirection={'column'} padding={'sm'} height={80}  justifyContent={'space-between'}>
        <CustomText paddingBottom={'sm'}> Location</CustomText>
        <Box height={40} width={396} borderWidth={1} borderColor={'lightGrey'} borderRadius={8} justifyContent={'center'} paddingLeft={'sm'}>
          <TextInput  />
        </Box>
      </Box> 
     
    </SafeAreaView>
  );
};

export default sendProposal;

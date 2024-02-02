import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { Styles } from 'app/dashboard/homepage/construction/styles';

const ConstructionCard2 = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => router.push('/dashboard/homepage/construction/ongoingDetail')}
      >
        <Box style={[Styles.cardContainer]}>
          <Box flexDirection={'row'} padding={'sm'}>
            <Box>
              <Image source={require('../../assets/images/settingIcon.png')} />
            </Box>
            <Box paddingLeft={'sm'} width={'100%'}>
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                width={'90%'}
                alignItems={'flex-end'}
              >
                <CustomText variant={'medium'}>Build a Duplex</CustomText>
               
              </Box>

              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={185}
              >
                <CustomText>07-12-2023</CustomText>
                <Image source={require('../../assets/images/dot.png')} />
                <CustomText>02:30 pm</CustomText>
              </Box>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConstructionCard2;

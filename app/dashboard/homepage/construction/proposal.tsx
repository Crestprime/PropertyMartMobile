import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';
import { PrimaryButton } from '@component/general/CustomButton';
import ConstructionCard from '@component/construction/ConstructionCard';
import { TouchableOpacity } from 'react-native-ui-lib/src/incubator';

const proposal = () => {
  return (
    <SafeAreaView>
      <Box width={'100%'} padding={'sm'}>
        <Box>
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
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={'sm'}
          >
            <CustomText paddingLeft={'2xl'} variant={'medium'} fontSize={24}>
              Construction
            </CustomText>
            <PrimaryButton
              onPress={undefined}
              label={'Send Proposal'}
              width={120}
              height={35}
            />
          </Box>

          <Box paddingLeft={'xl'} flexDirection={'row'} paddingTop={'xl'}>
            <Box
              height={42}
              width={126}
              backgroundColor={'btnBlue'}
              borderTopLeftRadius={8}
              borderBottomLeftRadius={8}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText variant={'medium'} fontSize={14} color={'white'}>
                Proposal
              </CustomText>
            </Box>
            <TouchableOpacity onPress={()=>router.push('/dashboard/homepage/construction/ongoing')}>
              <Box
                height={42}
                width={85}
                borderWidth={1}
                borderColor={'lightGrey'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <CustomText variant={'medium'} fontSize={14} color={'black'}>
                  Ongoing
                </CustomText>
              </Box>
            </TouchableOpacity>
            <Box
              height={42}
              width={102}
              borderWidth={1}
              borderColor={'lightGrey'}
              borderTopRightRadius={8}
              borderBottomRightRadius={8}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText variant={'medium'} fontSize={14} color={'black'}>
                Proposal
              </CustomText>
            </Box>
          </Box>

          <Box>
            <ConstructionCard />
            {/* <ConstructionCard /> */}
            {/* <ConstructionCard /> */}
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default proposal;

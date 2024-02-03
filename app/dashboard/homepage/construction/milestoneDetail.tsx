import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from '@component/general/Box';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '@component/general/CustomText';
import OngoingBtn from '@component/construction/OngoingBtn';
import { router } from 'expo-router';
import UpdateCard from '@component/construction/UpdateCard';
import { Styles } from './styles';

const milestoneDetail = () => {
  const [update, setUpdates] = useState(true);
  return (
    <SafeAreaView>
      <Box padding={'sm'}>
        <Ionicons
          name="arrow-back-outline"
          size={25}
          onPress={() => router.back()}
        />
      </Box>
      <Box
        flexDirection={'column'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        paddingLeft={'2xl'}
      >
        <CustomText paddingLeft={'sm'} variant={'medium'}>
          Site preparation & foundation
        </CustomText>
        <OngoingBtn label={'Ongoing'} />
      </Box>

      <Box paddingTop={'lg'}>
        <Image source={require('../../../../assets/images/landArea.png')} />
      </Box>
      <Box paddingLeft={'xl'} flexDirection={'row'} paddingTop={'xl'}>
        <TouchableOpacity onPress={() => setUpdates(true)}>
                  <Box
                       style={
                        update ? [Styles.activeBtn] : [Styles.inactiveBtn]
                      }
            height={42}
            width={85}
            borderWidth={1}
            borderColor={'lightGrey'}
            borderTopLeftRadius={8}
            borderBottomLeftRadius={8}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <CustomText variant={'medium'} fontSize={14} style={update ? [Styles.activeBtnTxt] : [Styles.inActiveBtnTxt]}>
              Updates
            </CustomText>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setUpdates(false)}
        >
          <Box
            height={42}
            width={106}
            borderTopRightRadius={8}
            borderBottomRightRadius={8}
            style={
                !update ? [Styles.activeBtn] : [Styles.inactiveBtn]
              }
            justifyContent={'center'}
            alignItems={'center'}
          >
            <CustomText variant={'medium'} fontSize={14} style={update ? [Styles.inActiveBtnTxt]: [Styles.activeBtnTxt]}>
              Ongoing
            </CustomText>
          </Box>
        </TouchableOpacity>
      </Box>

      {update && (
        <Box height={280} width={'100%'} padding={'xl'}>
          <UpdateCard
            title={'Excavation and Foundation Preparation'}
            desc={'Excavation and Foundation Preparation'}
          />
          <UpdateCard
            title={'Foundation Pouring and Curing'}
            desc={'Poured concrete for footings and basement walls.'}
          />
        </Box>
      )}

      {!update && (
        <Box padding={'xl'}>
          <CustomText>
            This phase involves clearing the site, excavating, and crafting the
            structural base upon which the entire construction rests.
                  </CustomText>
                  
                  <Box minHeight={104} width={'100%'} marginTop={'xl'} alignItems={'flex-start'}>
                      <CustomText variant={'medium'}>Duration</CustomText>
                      <Box height={75} width={369}  style={[Styles.bgDuration]}  marginTop={'2xl'}justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} padding={'sm'}>
                          <Box>
                              <CustomText>Start Date</CustomText>
                              <CustomText variant={'medium'}>10-12-2023</CustomText>
                          </Box>
                          <Box height={75} borderWidth={0.5} borderColor={'lightGrey'} opacity={0.5}></Box>
                          <Box>
                              <CustomText>Start Date</CustomText>
                              <CustomText variant={'medium'}>10-12-2023</CustomText>
                          </Box>
                      </Box>
                  </Box>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default milestoneDetail;

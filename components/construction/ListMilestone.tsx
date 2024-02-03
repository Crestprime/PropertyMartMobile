import { View, Text, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import OngoingBtn from './OngoingBtn';
import CustomText from '@component/general/CustomText';
import { TouchableOpacity } from 'react-native-ui-lib/src/incubator';
import { router } from 'expo-router';

const ListMilestone = ({
  projectInfo,
    label,
}: {
  projectInfo: string;
  label: string;
}) => {
  return (
    <TouchableOpacity onPress={()=>router.push('/dashboard/homepage/construction/milestoneDetail')}>
      <Box
        marginTop={'xl'}
        width={'100%'}
        flexDirection={'row'}
        alignSelf={'center'}
      >
        <Box>
          <Image
            borderRadius={8}
            source={require('../../assets/images/land.png')}
          />
        </Box>
        <Box justifyContent={'center'} paddingLeft={'xl'}>
          <CustomText fontSize={16} variant={'medium'}>
            {projectInfo}
          </CustomText>
          <Box flexDirection={'row'}>
            <OngoingBtn label={label} />

            <Box flexDirection={'row'} alignItems={'center'}>
              <Image source={require('../../assets/images/calendar.png')} />
              <CustomText paddingLeft={'sm'}>10-12-2023</CustomText>
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ListMilestone;

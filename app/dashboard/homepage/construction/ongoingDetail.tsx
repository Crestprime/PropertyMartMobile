import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CustomText from '@component/general/CustomText';
import { router } from 'expo-router';
import { Styles } from './styles';
import Box from '@component/general/Box';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ListMilestone from '@component/construction/ListMilestone';
import OngoingBtn from '@component/construction/OngoingBtn';

const ongoingDetail = () => {
  const [overview, setOverview] = React.useState(true);

  return (
    <SafeAreaView>
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
            Build a Duplex
          </CustomText>
          <OngoingBtn label={'Ongoing'} />
        </Box>

        <Box paddingLeft={'xl'} flexDirection={'row'} paddingTop={'xl'}>
          <TouchableOpacity onPress={() => setOverview(!overview)}>
            <Box
              style={overview ? [Styles.activeBtn] : [Styles.inactiveBtn]}
              height={42}
              width={92}
              borderTopLeftRadius={8}
              borderBottomLeftRadius={8}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText
                variant={'medium'}
                fontSize={14}
                style={
                  overview ? [Styles.activeBtnTxt] : [Styles.inActiveBtnTxt]
                }
              >
                Overview
              </CustomText>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOverview(!overview)}>
            <Box
              style={overview ? [Styles.inactiveBtn] : [Styles.activeBtn]}
              height={42}
              width={101}
              borderColor={'lightGrey'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText
                variant={'medium'}
                fontSize={14}
                color={'black'}
                style={
                  overview ? [Styles.inActiveBtnTxt] : [Styles.activeBtnTxt]
                }
              >
                Milestones
              </CustomText>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOverview(false)}>
            <Box
              style={overview ? [Styles.inactiveBtn] : [Styles.activeBtn]}
              height={42}
              width={154}
              borderWidth={1}
              borderColor={'lightGrey'}
              borderTopRightRadius={8}
              borderBottomRightRadius={8}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText
                variant={'medium'}
                fontSize={14}
                color={'black'}
                style={
                  overview ? [Styles.inActiveBtnTxt] : [Styles.activeBtnTxt]
                }
              >
                Transaction history
              </CustomText>
            </Box>
          </TouchableOpacity>
        </Box>
        <ScrollView>
          {overview ? (
            <Box>
              <Box width={'100%'} paddingTop={'xl'}>
                <Box paddingBottom={'xl'}>
                  <CustomText>
                    The proposed project entails the construction of a modern
                    and functional two-bedroom duplex. Located in Abuja.
                  </CustomText>
                </Box>
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

              <Box
                paddingTop={'3xl'}
                height={140}
                justifyContent={'space-between'}
              >
                <CustomText variant={'medium'}>Contact Information</CustomText>
                <CustomText>Stefan Jude Williams</CustomText>
                <CustomText>Stephanjude@gmail.com</CustomText>
                <CustomText>081345678912</CustomText>
              </Box>

              <Box style={[Styles.declineCard]}>
                <CustomText
                  style={[Styles.declineText]}
                  variant={'medium'}
                  fontSize={18}
                >
                  Reason for decline
                </CustomText>
                <CustomText style={[Styles.subText]}>
                  Lack of man-power and resources to carry out this project
                </CustomText>
              </Box>
            </Box>
          ) : (
            <Box>
              <ListMilestone
                projectInfo={'Site preparation & foundation'}
                label={'Ongoing'}
              />
              <ListMilestone
                projectInfo={'Framework and Structural Work'}
                label={'Not Started'}
              />
              <ListMilestone
                projectInfo={'Exterior Work'}
                label={'Not Started'}
              />
              <ListMilestone
                projectInfo={'Utilities and Infrastructure'}
                label={'Not Started'}
              />
            </Box>
          )}
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default ongoingDetail;
function useState() {
  throw new Error('Function not implemented.');
}

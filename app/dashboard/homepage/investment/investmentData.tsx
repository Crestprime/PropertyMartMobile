import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '@component/general/CustomText';
import { PrimaryButton } from '@component/general/CustomButton';
import Property from '@component/investments/property';
import { router } from 'expo-router';

const Investment = () => {
  const [amount, setAmount] = React.useState('6,000,000.00');
  const [remaining, setRemaining] = React.useState('0.00');

  return (
    <SafeAreaView>
      <ScrollView>
        <Box justifyContent={'center'} padding={'sm'}>
          <Box
            height={36}
            width={396}
            flexDirection={'row'}
            justifyContent={'space-between'}
          >
            <CustomText variant={'medium'}>Investment</CustomText>
            <PrimaryButton
              onPress={undefined}
              label={'Invest Now'}
              width={97}
            />
          </Box>

          <Box
            height={124}
            width={428}
            marginTop={'5xl'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <CustomText>Total Portfolio</CustomText>
            <Box
              width={'100%'}
              height={100}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText variant={'header'} fontSize={46} color={'black'}>
                ₦{amount}
              </CustomText>
            </Box>
            <Box>
              <CustomText fontSize={16}>Your profit is ${remaining}</CustomText>
            </Box>
          </Box>

          {/* Property cards //////////////////////////// */}
          <Box height={164} width={396} marginTop={'2xl'}>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
              <CustomText variant={'medium'} fontSize={18}>
                Verified Opportunities
              </CustomText>
              <CustomText variant={'medium'} color={'btnBlue'} fontSize={16}>
                View all
              </CustomText>
            </Box>

            <ScrollView horizontal={true}>
              <Property />
              <Property />
            </ScrollView>
          </Box>

          <Box paddingLeft={'sm'} paddingTop={'2xl'}>
            <CustomText onPress={()=>router.push('/dashboard/homepage/investment/investmentData')} variant={'medium'}>My Portfolio</CustomText>

            <Box
              height={185}
              width={'100%'}
              justifyContent={'center'}
                          alignItems={'center'}
                          

              // alignSelf={'center'}
            >
              <Image source={require('../../../../assets/images/shinyCoin.png')} />
            </Box>

            <Box width={'100%'} alignItems={'center'} top={20}>
              <CustomText>You haven’t invested in any property</CustomText>
            </Box>
          </Box>

          {/* Matured Investment section  //////////////////////////// */}

          <Box paddingLeft={'sm'} paddingTop={'5xl'}>
            <CustomText variant={'medium'}>Matured Investment</CustomText>

            <Box
              height={185}
              width={'100%'}
              justifyContent={'center'}
              alignItems={'center'}

              // alignSelf={'center'}
            >
              <Image source={require('../../../../assets/images/shinyCoin.png')} />
            </Box>

            <Box width={'100%'} alignItems={'center'} top={20}>
              <CustomText>You have nothing to harvest at the moment</CustomText>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Investment;

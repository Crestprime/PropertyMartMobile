import { View, Text } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '@component/general/CustomText';
import { PrimaryButton } from '@component/general/CustomButton';

const Investment = () => {
  const [amount, setAmount] = React.useState('0.00');
  const [remaining, setRemaining] = React.useState('00.00');

  return (
    <SafeAreaView>
      <Box justifyContent={'center'} alignItems={'center'} paddingTop={'2xl'}>
        <Box
          height={36}
          width={396}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <CustomText variant={'medium'}>Investment</CustomText>
          <PrimaryButton onPress={undefined} label={'Invest Now'} width={97} />
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
      </Box>
    </SafeAreaView>
  );
};

export default Investment;

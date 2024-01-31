import { View, Text, Image } from 'react-native';
import React from 'react';

import CustomText from '@component/general/CustomText';
import Box from '@component/general/Box';

const pptAvi = require('../../assets/images/aviHouse.png');

const ListProperty = () => {
  return (
    <Box
      height={48}
      width={'100%'}
      flexDirection={'row'}
      alignItems={'center'}
          padding={'sm'}
          top={20}
    >
      <Box>
        <Image height={20} width={20} source={pptAvi} />
      </Box>
      <Box
        paddingLeft={'sm'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        width={335}
      >
        <Box>
          <CustomText variant={'medium'} fontSize={16}>
            Lakeside Villas
          </CustomText>
          <CustomText>Austin, Texas</CustomText>
        </Box>
        <Box>
          <CustomText textAlign={'right'} variant={'medium'} fontSize={16}>
            $100,000.00
          </CustomText>
          <CustomText>4.5% ROI in 5 years</CustomText>
        </Box>
      </Box>
    </Box>
  );
};

export default ListProperty;

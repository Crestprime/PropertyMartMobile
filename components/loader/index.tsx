import React from 'react'
import CustomText from '@component/general/CustomText'
import Box from '@component/general/Box'


const Loader = () => {
  return (
    <Box height={'100%'} width={'100%'}
      style={{zIndex:9999, position:'absolute', backgroundColor:'#000000c0'}} 
       flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <CustomText color={'secondaryBackgroundColor'}>Loading...
        </CustomText>
    </Box>
  )
}

export default Loader;

import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Styles } from 'app/dashboard/homepage/construction/styles'

const OngoingBtn = ({ label }: { label: string}) => {
  return (
    <Box style={[Styles.decline]}>
          <CustomText color={'errorColor'}>{label}</CustomText>
            </Box>
  )
}

export default OngoingBtn
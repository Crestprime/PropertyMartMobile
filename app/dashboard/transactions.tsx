import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Theme } from '@theme/themes';
import { useTheme } from '@shopify/restyle';
import { useRouter } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import CustomText from '@component/general/CustomText';
import SearchBar from '@component/form/SearchBar';

const Transactions = () => {
    const [val, setVal] = React.useState('');

    const { height, width } = useWindowDimensions();
    const theme = useTheme<Theme>();
    const router = useRouter();
  return (
    <Box flex={1} padding={'md'} bg='white'>

        {/* <Box flex={1} alignItems={'flex-end'} zIndex={10} position={'absolute'} left={0} top={0} width={width} height={height+37} style={{ backgroundColor: '#000000b4' }} >
            <Box width={'80%'} height={'100%'} bg='white'></Box>
        </Box> */}

        <Box zIndex={2} width='100%' height={100} justifyContent={'flex-end'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Recent Transactions</CustomText>
        </Box>

        <Box zIndex={1} flexDirection={'row'} width={'100%'} justifyContent={'space-between'} marginTop={'md'}>
            <Box flex={0.95}>
                <SearchBar value={val} onChange={(e) => setVal(e)} borderColor='lightgrey' />
            </Box>

            <Pressable style={{
                width: 48,
                height: 48,
                borderWidth: 1,
                borderColor: '#EAECF0',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EAECF0',
                borderRadius: 10,
            }}>
                <Ionicons name='filter-outline' size={24} color='grey' />
            </Pressable>
        </Box>
    </Box>
  )
}

export default Transactions
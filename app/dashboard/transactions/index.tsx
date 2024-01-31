import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Theme } from '@theme/themes';
import { useTheme } from '@shopify/restyle';
import { useRouter } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import CustomText from '@component/general/CustomText';
import SearchBar from '@component/form/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';
import TransactionCard from '@component/transaction/TransactionCard';
import {MotiView, AnimatePresence} from 'moti'
import { RadioButton } from 'react-native-ui-lib';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const arr = [1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6];

const Transactions = () => {
    const [val, setVal] = React.useState('');
    const [showFilter, setShowFilter] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date())

    const { height, width } = useWindowDimensions();
    const theme = useTheme<Theme>();
    const router = useRouter();

    const pickData = () => {
        DateTimePickerAndroid.open({
            onChange: (e, date) => setStartDate(new Date(date as Date)),
            mode: 'date',
            value: startDate
        })
    }
  return (
    <Box flex={1} padding={'md'} bg='white'>

        <AnimatePresence>
            {showFilter && (
                <MotiView style={{ width, height:height+36, position: 'absolute', backgroundColor: '#000000b4', zIndex: 20, top: 0 }} from={{ opacity: 0, left: width }} animate={{ opacity: 1, left: 0 }} exit={{ opacity: 0, left: width }} transition={{ type: 'timing', duration: 700 }}>
                    <Box flex={1} alignItems={'flex-end'}  >
                        <Box width={'80%'} height={'100%'} bg='white' padding='md'>
                            {/* FILTER SECTION */}
                            <Box width={'100%'} height={50} flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                                <CustomText variant={'subheader'} fontSize={20} color={'black'}>Filter</CustomText>
                                <Feather name='x' size={25} color={'black'} onPress={() => setShowFilter(false)} />
                            </Box>

                            <Box marginTop={'lg'}>
                                <CustomText variant={'subheader'} fontSize={16} color={'black'}>Type</CustomText>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} color='black' marginLeft={'md'}>All</CustomText>
                                </Box>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} color='black' marginLeft={'md'}>Deposit</CustomText>
                                </Box>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} color='black' marginLeft={'md'}>Withdrawal</CustomText>
                                </Box>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} color='black' marginLeft={'md'}>Purchase</CustomText>
                                </Box>

                            </Box>

                            <CustomText variant={'subheader'} fontSize={16} color={'black'}>Start Date</CustomText>
                            <Box>
                               <Pressable onPress={pickData} style={{ width: '100%', height: 48, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <CustomText variant={'subheader'} fontSize={14} color='black'>{startDate.toLocaleDateString()}</CustomText>
                                <Feather name='calendar' size={20} color={'grey'} />
                               </Pressable>
                            </Box>

                            <CustomText variant={'subheader'} fontSize={16} color={'black'} marginTop={'md'}>End Date</CustomText>
                            <Box>
                               <Pressable onPress={pickData} style={{ width: '100%', height: 48, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <CustomText variant={'subheader'} fontSize={14} color='black'>{startDate.toLocaleDateString()}</CustomText>
                                <Feather name='calendar' size={20} color={'grey'} />
                               </Pressable>
                            </Box>

                            <Box marginTop={'lg'}>
                                <CustomText variant={'subheader'} fontSize={16} color={'black'}>Payment method</CustomText>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} marginLeft={'md'}>Card</CustomText>
                                </Box>

                                <Box flexDirection={'row'} width={'100%'} alignItems={'center'} marginBottom={'md'}>
                                    <RadioButton />
                                    <CustomText variant={'subheader'} fontSize={14} color='black' marginLeft={'md'}>Wallet</CustomText>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </MotiView>
            )}
        </AnimatePresence>

        <Box zIndex={2} width='100%' height={100} justifyContent={'flex-end'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Recent Transactions</CustomText>
        </Box>

        <Box zIndex={1} flexDirection={'row'} width={'100%'} justifyContent={'space-between'} marginTop={'md'}>
            <Box flex={0.95}>
                <SearchBar value={val} onChange={(e) => setVal(e)} borderColor='lightgrey' />
            </Box>

            <Pressable 
            onPress={() => setShowFilter(true)}
            style={{
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

        <Box flex={1}>
            <ScrollView style={{ flex: 1 }}>
                { arr.map((item, indx) => (
                    <TransactionCard key={indx.toString()} />
                ))}
            </ScrollView>
        </Box>
    </Box>
  )
}

export default Transactions
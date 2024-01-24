import React, { useState } from 'react'
import Box from '@component/general/Box'
import { Styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
import { Pressable } from 'react-native'


export default function setupAccount() {
 const [selectAddress, setSelectAddress ] = useState(0)
 const [selectBVN, setSelectBVN ] = useState(0)
 const [selectNIN, setSelectNIN ] = useState(0)
 const [homeInput, sethomeInput ] = useState(false)
 
  return (
    <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
        <Box width={'90%'} height={'95%'}>
            <Box height={'60%'} >
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href='/dashboard/Pages/home'>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                        </Link>
                    </TouchableOpacity>
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Set up Account
                    </CustomText> 
                </Box>
                <Box height={50}>
                    <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                        We need a little more information about you to enable us setup your account
                    </CustomText>
                </Box>
                {/* stepper Form */}
                <Box style={{height:'60%'}}  marginTop={'lg'}>
                   <Pressable onPress={()=>router.push('/dashboard/Pages/setAddress')}>
                        <Box height={50} flexDirection={'row'}>
                                <Box width={'10%'} alignItems={'center'} paddingTop={'xs'}>
                                        <Box height={20} width={20} borderRadius={100} borderWidth={selectAddress === 1?2:1} style={{backgroundColor:selectAddress ===1?'#e6f2ff':'transparent'}}
                                        borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' } alignItems={'center'} justifyContent={'center'}>
                                            {selectAddress === 1 &&
                                            <Ionicons name="checkmark-outline" size={15} color={'#2D66DD'} />
                                            }   
                                        </Box>
                                        <Box style={{height:'100%'}} width={1} borderWidth={1} borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' }></Box>
                                </Box>
                                <Box width={'90%'}>
                                        <Box>
                                            <Box height={20}>
                                                <CustomText variant={'subheader'} textAlign={'left'} fontSize={14} lineHeight={25} 
                                                        color={'black'} fontWeight={'800'}>Home Address
                                                </CustomText> 
                                            </Box>
                                            <Box>
                                                <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={20}  marginTop={'xs'}
                                                    color={'black'} fontWeight={'200'}>
                                                    We need your home address to ensure your identity and prevent fraudulent activities.
                                                </CustomText>
                                            </Box>
                                        </Box>
                                </Box>
                        </Box>
                    </Pressable>
                    <Pressable onPress={()=>router.push('/dashboard/Pages/setBVN')}>
                        <Box height={50} flexDirection={'row'} marginTop={'xl'}>
                                <Box width={'10%'} alignItems={'center'} paddingTop={'xs'}>
                                    <Box height={20} width={20} borderRadius={100} borderWidth={selectAddress === 1?2:1} style={{backgroundColor:selectAddress ===1 ?'#e6f2ff':'transparent'}}
                                    borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' } alignItems={'center'} justifyContent={'center'}>
                                        {selectAddress ===1 ? 
                                        <>
                                        <Box height={5} width={5} borderRadius={100} backgroundColor={'btnBlue'}></Box>
                                        </> : null
                                        // <Ionicons name="checkmark-outline" size={15} color={'#2D66DD'} />
                                        }   
                                    </Box>
                                    <Box style={{height:'100%'}} width={1} borderWidth={1} borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' }></Box>
                                </Box>
                                <Box width={'90%'}>
                                    <Box>
                                        <Box height={20}>
                                            <CustomText variant={'subheader'} textAlign={'left'} fontSize={14} lineHeight={25} 
                                                    color={'black'} fontWeight={'800'}>Bank Verification Number
                                            </CustomText> 
                                        </Box>
                                        <Box>
                                            <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={20}  marginTop={'xs'}
                                                color={'black'} fontWeight={'200'}>
                                            We need your BVN to add extra layer of security for financial transactions.
                                            </CustomText>
                                        </Box>
                                    </Box>

                                </Box>
                        </Box>
                    </Pressable>
                    <Pressable onPress={()=>router.push('/dashboard/Pages/setNIN')}>
                        <Box height={50} flexDirection={'row'} marginTop={'xl'}>
                                    <Box width={'10%'} alignItems={'center'} paddingTop={'xs'}>
                                        <Box height={20} width={20} borderRadius={100} borderWidth={selectAddress === 1?2:1} style={{backgroundColor:selectAddress === 1?'#e6f2ff':'transparent'}}
                                        borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' } alignItems={'center'} justifyContent={'center'}>
                                            {selectAddress? 
                                            <>
                                            <Box height={5} width={5} borderRadius={100} backgroundColor={'btnBlue'}></Box>
                                            </> : null
                                            // <Ionicons name="checkmark-outline" size={15} color={'#2D66DD'} />
                                            }   
                                        </Box>
                                        <Box style={{height:'100%'}} width={1} borderWidth={1} borderColor={selectAddress?'btnBlue' : 'textInputBorderColor' }></Box>
                                    </Box>
                                    <Box width={'90%'}>
                                        <Box>
                                            <Box height={20}>
                                                <CustomText variant={'subheader'} textAlign={'left'} fontSize={14} lineHeight={25} 
                                                        color={'black'} fontWeight={'800'}>National Identification Number
                                                </CustomText> 
                                            </Box>
                                            <Box>
                                                <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={20}  marginTop={'xs'}
                                                    color={'black'} fontWeight={'200'}>
                                                    We need your NIN to add extra layer of security for financial transactions.
                                                </CustomText>
                                            </Box>
                                        </Box>

                                    </Box>
                        </Box>
                    </Pressable>
                </Box>
            </Box>
            <Box height={'40%'} justifyContent={'flex-end'}>
                <Box>
                  <TouchableOpacity>
                    <PrimaryButton label='continue' onPress={()=>window.alert('yes')} width={''}/>
                  </TouchableOpacity>
                </Box>
                <Box marginTop={'14xl'}>
                 <Box height={'5%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
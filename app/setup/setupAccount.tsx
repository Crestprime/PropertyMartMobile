import React, { useState } from 'react'
import Box from '@component/general/Box'
import {Styles}  from 'styles/setup/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
import { Pressable } from 'react-native'
import SetAddress from './setAddress'
import SetBVN from './setBVN'
import SetNIN from './setNIN'
import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed';

export default function setupAccount() {
 const [selectAddress, setSelectAddress ] = useState(0)
 const [selectBVN, setSelectBVN ] = useState(0)
 const [selectNIN, setSelectNIN ] = useState(0)
 const [homeInput, showHomeInput ] = useState(0)
 const [BVNInput, showBVNinput ] = useState(0)
 const [NINInput, showNINinput ] = useState(0)

 const [success, isSuccess] = React.useState(false)
 const [failed, isFailed] = React.useState(false)
 const [message, setMessage] = React.useState('')

 const displayHomeInput = () => {
    showHomeInput(1)
    setSelectAddress(0)
 }
 const displayBVNInput = () => {
    showBVNinput(1)
    setSelectBVN(0)
 }
 const displayNINInput = () => {
    showNINinput(1)
    setSelectNIN(0)
 }
 const toggleHome = () => { 
    showHomeInput(0)
  }
 const toggleBVN = () => { 
    showBVNinput(0)
  }
 const toggleNIN = () => { 
    showNINinput(0)
  }
 const setStep1 = () =>(
    setSelectAddress(1)
 )
 const setStep2 = () =>(
    setSelectBVN(1)
 )
 const setStep3 = () =>(
    setSelectNIN(1)
 )
 
  return (
    <>
    {homeInput === 0 && BVNInput === 0 && NINInput === 0?
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'} >
        <Box width={'90%'} height={'90%'}>
            <Box height={'60%'} >
                <Box marginTop={'xs'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href='/dashboard/homepage/home/'>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                        </Link>
                      
                    </TouchableOpacity>
                </Box>
                <Box height={'auto'}>
                    <CustomText variant={'subheader'} textAlign={'left'}
                            color={'black'}>Set up Account
                    </CustomText> 
                </Box>
                <Box height={'auto'}>
                    <CustomText variant={'xs'} textAlign={'left'}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                        We need a little more information about you to enable us setup your account
                    </CustomText>
                </Box>

                {/* stepper Form */}
                <Box style={{height:'80%'}}  marginTop={'lg'}>
                <Box >
                    <Pressable onPress={()=> displayHomeInput()}>
                            <Box height={90} flexDirection={'row'}>
                                    <Box width={'10%'} alignItems={'center'} paddingTop={'xs'} height={'100%'}>
                                            <Box height={20} width={20} borderRadius={100} borderWidth={selectAddress === 1?2:1} style={{backgroundColor:selectAddress ===1?'#e6f2ff':'transparent'}}
                                            borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' } alignItems={'center'} justifyContent={'center'}>
                                                {selectAddress === 1 &&
                                                <Ionicons name="checkmark-outline" size={15} color={'#2D66DD'} />
                                                }   
                                            </Box>
                                            <Box style={{height:'80%'}} width={1} borderWidth={1} borderColor={selectAddress === 1?'btnBlue' : 'textInputBorderColor' }></Box>
                                    </Box>
                                    <Box width={'90%'}>
                                            <Box>
                                                <Box height={30}>
                                                    <CustomText variant={'medium'} textAlign={'left'} 
                                                            color={'black'} >Home Address
                                                    </CustomText> 
                                                </Box>
                                                <Box>
                                                    <CustomText variant={'xs'} textAlign={'left'} marginTop={'xs'}
                                                        color={'black'}>
                                                        We need your home address to ensure your identity and prevent fraudulent activities.
                                                    </CustomText>
                                                </Box>
                                            </Box>
                                    </Box>
                            </Box>
                        </Pressable>
                    </Box>

                    <Pressable onPress={()=>displayBVNInput()} >
                        <Box height={90} flexDirection={'row'}>
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
                                    <Box style={{height:'80%'}} width={1} borderWidth={1} borderColor={selectBVN === 1?'btnBlue' : 'textInputBorderColor' }></Box>
                                </Box>
                                <Box width={'90%'}>
                                    <Box> 
                                        <Box height={30}>
                                            <CustomText variant={'medium'} textAlign={'left'}
                                                    color={'black'}>Bank Verification Number
                                            </CustomText> 
                                        </Box>
                                        <Box>
                                            <CustomText variant={'xs'} textAlign={'left'} 
                                                color={'black'} >
                                            We need your BVN to add extra layer of security for financial transactions.
                                            </CustomText>
                                        </Box>
                                    </Box>

                                </Box>
                        </Box>
                    </Pressable>
                    <Pressable onPress={()=>displayNINInput()}>
                        <Box height={90} flexDirection={'row'}>
                                    <Box width={'10%'} alignItems={'center'} paddingTop={'xs'}>
                                        <Box height={20} width={20} borderRadius={100} borderWidth={selectBVN === 1?2:1} style={{backgroundColor:selectBVN === 1?'#e6f2ff':'transparent'}}
                                        borderColor={selectBVN === 1?'btnBlue' : 'textInputBorderColor' } alignItems={'center'} justifyContent={'center'}>
                                            {selectBVN? 
                                            <>
                                            <Box height={5} width={5} borderRadius={100} backgroundColor={'btnBlue'}></Box>
                                            </> : null
                                            // <Ionicons name="checkmark-outline" size={15} color={'#2D66DD'} />
                                            }   
                                        </Box>
                                        <Box style={{height:'80%'}} width={1} borderWidth={1} borderColor={selectNIN?'btnBlue' : 'textInputBorderColor' }></Box>
                                    </Box>
                                    <Box width={'90%'}>
                                        <Box>
                                            <Box height={30}>
                                                <CustomText variant={'medium'} textAlign={'left'} 
                                                        color={'black'}> National Identification Number
                                                </CustomText> 
                                            </Box>
                                            <Box>
                                                <CustomText variant={'xs'} textAlign={'left'} marginTop={'xs'}
                                                    color={'black'} >
                                                    We need your NIN to add extra layer of security for financial transactions.
                                                </CustomText>
                                            </Box>
                                        </Box>

                                    </Box>
                        </Box>
                    </Pressable>
                </Box>
            </Box>
            <Box height={'46%'} justifyContent={'flex-end'}>
                <Box height={50}>
                  <TouchableOpacity>
                    <PrimaryButton label='continue' onPress={()=> router.push('/dashboard/homepage/home/')} width={''}/>
                  </TouchableOpacity>
                </Box>
                <Box marginTop={'lg'}>
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
   : homeInput === 1?
    <Box>
        <SetAddress isSuccess={isSuccess} setMessage={setMessage} isFailed={isFailed} toggleHome={toggleHome} setStep1={setStep1}/> 
    </Box>
    : BVNInput === 1? 
    <>
     <SetBVN isSuccess={isSuccess} setMessage={setMessage} isFailed={isFailed}  toggleBVN={toggleBVN} setStep2={setStep2}/>
    </> 
    : NINInput === 1 ?
    <>
    <SetNIN toggleNIN={toggleNIN} setStep3={setStep3}/>
    </>
    : null 
   }

{
      success && (
        <>
         <AlertSuccess message={message}/>
        </>
      )
    }
    {
      failed && (
        <>
         <AlertFailed message={message}/>
        </>
      )
    }
 
   
    </>
  )
}
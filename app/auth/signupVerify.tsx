import { Pressable, TextInput, Alert } from 'react-native'
import React, {useRef, useState} from 'react'
import Box from '@component/general/Box'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@component/general/CustomText'
import { Styles } from './styles'
import Countdown, { CountdownRef } from '@component/general/Countdown'
import { PrimaryButton } from '@component/general/CustomButton'

import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import { router } from 'expo-router'
import { SubmitButton } from '@component/form/CustomButton'


const SignupVerify = ({userEmail, step, setStep, userId, }:any) => {

    // OTP form Values
    const [otpInput_1, setOtpInput_1] = useState('');
    const [otpInput_2, setOtpInput_2] = useState('');
    const [otpInput_3, setOtpInput_3] = useState('');
    const [otpInput_4, setOtpInput_4] = useState('');
    const [otpInput_5, setOtpInput_5] = useState('');
    const [otpInput_6, setOtpInput_6] = useState('');

    const countdownRef = useRef<CountdownRef>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const { isLoading: signupMutationLoading, mutate } = useMutation({
      mutationFn: (data: any) => httpService.put(`/authentication/user/verify-email-otp/${data}/${userId}`,),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        Alert.alert(message);
        setIsLoading(false)
        router.push('/auth/signupSuccess')
      },
      onError: (error: any) => {
        alert(error?.message)
      },
    })
    const { isLoading: Loading, mutateAsync } = useMutation({
      mutationFn: (data: any) => httpService.get(`/authentication/user/resend-email-verification-otp/${userEmail}`),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        Alert.alert(message);
        handleRestartClick()
        setIsLoading(false)
      },
      onError: (error: any) => {
        alert(error?.message)
      },
    })
  
    const handleVerify = async (data: any) => {
    let otpData = otpInput_1 + otpInput_2 + otpInput_3 + otpInput_4 + otpInput_5 + otpInput_6 ;
    console.log(otpData)
    if(otpData.length < 6){
      Alert.alert('You must enter 6 digits')
     } else {
      const formdata = otpData;
      let data = formdata
      Alert.alert(data)
      mutate(data)
     }
    };

    const handleResend = async ({data}:any) => {
      mutateAsync(data) 
    }

    const handleTimerEnd = () => {
        console.log('Time ended') 
    };

  const handleRestartClick = () => {
    if (countdownRef.current) {
      countdownRef.current.restart();
    }
  };
  
  const handleOtpInput_1Change = (text: any) => {
    // Ensure that the input contains only numbers
    const sanitizedText = text.replace(/[^0-9]/g, '');
    // Limit the input to 5 characters
    if (sanitizedText.length <= 5) {
      setOtpInput_1(sanitizedText);
    }
  };
  const handleOtpInput_2Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_2(sanitizedText);
    }
  };
  const handleOtpInput_3Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_3(sanitizedText);
    }
  };
  const handleOtpInput_4Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_4(sanitizedText);
    }
  };
  const handleOtpInput_5Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_5(sanitizedText);
    }
  };
  const handleOtpInput_6Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_6(sanitizedText);
    }
  };
  
  return (
    <Box>
       <Box>
              
              <CustomText variant={'subheader'} textAlign={'left'} fontSize={25} lineHeight={25} marginTop={'xl'} 
                    color={'black'} fontWeight={'800'}>Verify your Email
              </CustomText>
               <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                    color={'black'} fontWeight={'400'}>
                     Please enter the OTP code sent to {userEmail}
               </CustomText>

                <Box marginTop={'lg'} marginBottom={'lg'}>
                <Box style={Styles.container}>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_1}
                      onChangeText={handleOtpInput_1Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_2}
                      onChangeText={handleOtpInput_2Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_3}
                      onChangeText={handleOtpInput_3Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_4}
                      onChangeText={handleOtpInput_4Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_5}
                      onChangeText={handleOtpInput_5Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_6}
                      onChangeText={handleOtpInput_6Change}
                    />
                  </Box>
                </Box>
                </Box>
                <TouchableOpacity>
                    <Box width='100%' marginTop={'xl'} height={50} justifyContent={'center'} alignItems={'center'}>
                    {/* <SubmitButton label='Verify' width='100%' onSubmit={(data) => handleVerify(data)} isLoading={isLoading} /> */}
                    <PrimaryButton label='Verify' width='100%' onPress={(data:any) => handleVerify(data)} isLoading={isLoading}/>
                    </Box>
                </TouchableOpacity>
                <Box width='100%' marginTop={'xs'} flexDirection={'row'} height={50} justifyContent={'center'} alignItems={'center'}>
                  <CustomText variant={'xs'} marginRight={'xs'}>Didn’t get a code?</CustomText>
                  <TouchableOpacity>
                    <Pressable onPress={handleResend}>
                        <CustomText variant={'xs'} fontSize={14} style={{color:'#2D66DD', fontWeight:'800'}}>Resend</CustomText>
                    </Pressable>
                  </TouchableOpacity>
                  <CustomText>
                    <Countdown ref={countdownRef} initialTime={60} onTimerEnd={handleTimerEnd} />
                  </CustomText>
                  {/* <Button title="Restart" onPress={handleRestartClick} /> */}
                  {/* <Text>(0:05s)</Text> */}
                </Box>
                <Box height={'45%'} flexDirection={'row'} alignItems={'flex-end'}>
                <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                    <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                        <CustomText>Hello</CustomText>
                    </Box>
                </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default SignupVerify;
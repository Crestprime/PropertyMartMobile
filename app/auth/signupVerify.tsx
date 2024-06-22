import { Pressable, TextInput, Alert } from 'react-native'
import React, {useRef, useState} from 'react'
import Box from '@component/general/Box'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@component/general/CustomText'
import { Styles } from './styles'
import Countdown, { CountdownRef } from '@component/general/Countdown'
import { PrimaryButton } from '@component/general/CustomButton'
import OTPTextInput from "react-native-otp-textinput";

import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import { router } from 'expo-router'
import { SubmitButton } from '@component/form/CustomButton'
import {URLS} from "@services/Urls";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@theme/index";


const SignupVerify = ({userEmail, step, setStep, userId, }:any) => {

    // OTP form Values
    const [code, setCode] = React.useState('');
    const ref = React.useRef();
    const theme = useTheme<Theme>();


    const countdownRef = useRef<CountdownRef>(null);

    const { isLoading, mutate } = useMutation({
      mutationFn: (data: any) => httpService.put(`${URLS.verify_email}`,{ token: data, id: userId }),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        Alert.alert(message);
        router.push('/auth/signupSuccess')
      },
      onError: (error: any) => {
        alert(error?.message)
      },
    })
    const { isLoading: Loading, mutateAsync } = useMutation({
      mutationFn: (data: any) => httpService.get(`${URLS.resend_email_verification_code}/${userEmail}`),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        Alert.alert(message);
        handleRestartClick()
      },
      onError: (error: any) => {
        alert(error?.message)
      },
    })

    const handleInputChange = React.useCallback(
        (code: string) => {
            if (code.length === 6) {
                // make api call
                //mutate(code);
            } else {
                setCode(code);
            }
        },
        [code]
    );

    const handleVerify = () => {
        mutate(code);
    }

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
  
  return (
       <Box flex={1} backgroundColor={'white'}>
              
              <CustomText variant={'subheader'} textAlign={'left'} fontSize={25} marginTop={'xl'}
                    color={'black'}>Verify your Email
              </CustomText>
               <CustomText variant={'body'} textAlign={'left'} fontSize={16} marginTop={'xs'}
                    color={'black'} >
                     Please enter the OTP code sent to {userEmail}
               </CustomText>

                <Box marginTop={'lg'} marginBottom={'lg'} width={'100%'} >

                    <OTPTextInput
                        inputCount={6}
                        ref={(e: any) => (ref.current = e)}
                        handleTextChange={handleInputChange}
                        keyboardType="phone-pad"
                        tintColor={"transparent"}
                        offTintColor={"transparent"}
                        containerStyle={{
                            marginVertical: 10,
                            marginTop: 20,

                        }}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: theme.colors.lightGrey,
                            height: 50,
                            width: 50,
                            borderRadius: 3,
                            backgroundColor: 'whitesmoke',
                            flex: 1,
                            color: theme.colors.textColor,
                            fontFamily: 'BasierMedium',
                        } as any}

                    />

                </Box>

               <PrimaryButton label='Verify' width='100%' onPress={(data:any) => handleVerify()} isLoading={isLoading}/>

                <Box width='100%' marginTop={'xs'} flexDirection={'row'} height={50} justifyContent={'center'} alignItems={'center'}>
                  <CustomText variant={'xs'} marginRight={'xs'}>Didn’t get a code?</CustomText>
                    <Pressable onPress={handleResend}>
                        <CustomText variant={'xs'} fontSize={16} color={'primaryColor'}>Resend</CustomText>
                    </Pressable>
                    <Countdown ref={countdownRef} initialTime={60} onTimerEnd={handleTimerEnd} />
                </Box>


       </Box>

  )
}

export default SignupVerify;
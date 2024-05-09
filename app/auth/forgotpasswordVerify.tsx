import { Pressable} from 'react-native'
import React, {useRef, useState} from 'react'
import Box from '@component/general/Box'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@component/general/CustomText'
import Countdown, { CountdownRef } from '@component/general/Countdown'
import { PrimaryButton } from '@component/general/CustomButton'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import OtpInput from '@component/form/OtpInput'

const ForgotPasswordVerify = ({userEmail, userId, setIsLoading, isLoading,isFailed, isSuccess, setMessage, setStep }:any) => {
 
    const [code, setCode] = useState('');
    const [pinReady, setPinReady] = useState<boolean>(false);
    const Max_Pin_Length = 6;
    const countdownRef = useRef<CountdownRef>(null);

    const turnOffAlert = () =>{
      function setFalse(){
        isFailed(false);
        isSuccess(false);
        setIsLoading(false);
       }
      const timeoutId = setTimeout(setFalse, 3000);
    }
    const { isLoading: signupMutationLoading, mutate:verifyMutate } = useMutation({
      mutationFn: (data: any) => httpService.put(`authentication/user/verify-email`, data),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        setMessage(message)
        isSuccess(true)
        turnOffAlert()
        setIsLoading(false)
        setStep(0)
        router.push('/auth/newpassword')
      },
      onError: (error: any) => {
        const message = error?.message
        setIsLoading(false)
        setMessage(message)
        isFailed(true)
        turnOffAlert()
      },
    })
    const { isLoading: Loading, mutate:resendMutate } = useMutation({
      mutationFn: (data: any) => httpService.post(`authentication/user/resend-reset-email`,data),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        setMessage(message)
        isSuccess(true)
        turnOffAlert()
        handleRestartClick()
        setIsLoading(false)
      },
      onError: (error: any) => {
        const message = error?.message
        setMessage(message)
        isFailed(true)
        turnOffAlert()
      },
    })
  
    const handleVerify = async (data: any) => {
      let otpData = code;
      console.log(otpData)
      if(otpData.length < 6){
        setMessage("Enter complete OTP code!!")
        isFailed(true)
        turnOffAlert()
       } else {
        const token = otpData;
        const id = userId
        const data = {
          "token": token,
          "id": id,
        }
        setIsLoading(true)
        console.log(data)
        verifyMutate(data)
       }
      };

    const handleResend = async () => {
      const email = userEmail
      const data = {
        "email": email
      }
      console.log(data)
      resendMutate(data) 

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
    <>
    <Box>
       <Box >     
              <CustomText variant={'subheader'} marginTop={'xl'}>Verify your Email
              </CustomText>
               <CustomText variant={'xs'}  marginTop={'xs'}>
                     Please enter the OTP code sent to {userEmail}
               </CustomText>

                <Box marginTop={'lg'} marginBottom={'lg'} height={80} alignItems={'center'} justifyContent={'center'}>
                  <OtpInput
                  setPinReady={setPinReady}
                  code={code}
                  setCode={setCode}
                  maxLength={Max_Pin_Length}
                  onLogOtp={handleVerify}
                  />
                </Box>

                <TouchableOpacity>
                    <Box width='100%' marginTop={'xl'} height={50} justifyContent={'center'} alignItems={'center'}>
                    <PrimaryButton label='Verify' width='100%' onPress={(data:any) => handleVerify(data)} isLoading={isLoading}/>
                    </Box>
                </TouchableOpacity>

                <Box width='100%' marginTop={'xs'} flexDirection={'row'} height={50} justifyContent={'center'} alignItems={'center'}>
                  <CustomText variant={'xs'} marginRight={'xs'}>Didn’t get a code?</CustomText>
                  <TouchableOpacity>
                    <Pressable onPress={handleResend}>
                        <CustomText variant={'xs'} style={{color:'#2D66DD', fontWeight:'800'}}>Resend</CustomText>
                    </Pressable>
                  </TouchableOpacity>
                  <CustomText>
                    <Countdown ref={countdownRef} initialTime={60} onTimerEnd={handleTimerEnd} />
                  </CustomText>
                </Box>
                
                <Box height={'61%'} flexDirection={'row'} alignItems={'flex-end'}>
                <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                    <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                        <CustomText>Hello</CustomText>
                    </Box>
                </Box>
        </Box>
       </Box>

    </Box>
    
  </>
  )
}

export default ForgotPasswordVerify;
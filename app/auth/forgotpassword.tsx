import { Alert, Text, Image, TextInput, Pressable } from 'react-native'
import React, {useRef, useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import Countdown, { CountdownRef } from '@component/general/Countdown'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
import HttpClient from '../../utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewPassword from './newpassword'

const palmfone = require('../../assets/images/foreground/acctcreated.png')

const  ForgotPassword = () => {
  // OTP Form
  const [otpInput_1, setOtpInput_1] = useState('');
  const [otpInput_2, setOtpInput_2] = useState('');
  const [otpInput_3, setOtpInput_3] = useState('');
  const [otpInput_4, setOtpInput_4] = useState('');
  const [otpInput_5, setOtpInput_5] = useState('');
  const [otpInput_6, setOtpInput_6] = useState('');
  // Email Form
  const { renderForm, formState: { isValid }, values } = useForm({
    defaultValues: {
      email: ''
    },
    validationSchema: loginSchema,
  })
  // UI States  
  const [step, setStep] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  // Functions
  const countdownRef = useRef<CountdownRef>(null);
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

  const handleRequest = async () => {
      try {
        const formdata = values()
        const resetEmail = formdata.email
        console.log(resetEmail);
        setIsLoading(true)
        const response = await HttpClient.get(`/authentication/user/request-password-reset-otp/${resetEmail}`,);
        const { message } = response.data;
        const { id } = response.data.data;
        console.log(id, message)
      
        setUserId(id)
        setUserEmail(resetEmail)
        if (userId) {
          console.log('userID stored:', userId);
        } else {
          console.log('userID not stored');
        }
  
        if (userEmail) {
          console.log('userEmail stored:', userEmail);
        } else {
          console.log('userEmail not stored');
        }
        Alert.alert('Success', message);
        setIsLoading(false)
        setStep(1);
        
      } catch (error) {
        setIsLoading(false)
        // Handle errors
        console.error('Error:', error);
        Alert.alert('Error', 'Failed');
      }
  };

  const ProceedToReset = async () => {
    let otpData = otpInput_1 + otpInput_2 + otpInput_3 + otpInput_4 + otpInput_5 + otpInput_6 ;
    console.log(otpData)
    if(otpData.length < 6){
     Alert.alert('You must enter 6 digits')
    } else {
     const formdata = otpData
     Alert.alert(formdata)
     try {
       const response = await HttpClient.put(`/authentication/user/verify-passwordreset-otp/${formdata}/${userId}`,);
       console.log('Response:', response.data);
       const {message} = response.data;
       Alert.alert( message);
       setIsLoading(false)
       setStep(2);
       
     } catch (error:any) {
       setIsLoading(false)
        console.error(error);
       Alert.alert('Invalid OTP code');
     }
    }
 }

 const handleResend = async () => {
  try {
    const response = await HttpClient.get(`/authentication/user/request-password-reset-otp/${userEmail}`);;
    const {message} = response.data
    console.log(message)
    Alert.alert(message)
    handleRestartClick() 
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    Alert.alert('Error', 'Failed to resend');
  }  
}
 const handleTimerEnd = () => {
  // Alert.alert('Countdown Finished', 'The countdown has reached zero!');
  console.log('Time ended') 
};

const handleRestartClick = () => {
  if (countdownRef.current) {
    countdownRef.current.restart();
  }
};

  return renderForm(
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}  marginTop={'xl'}>
        <Box height={'80%'}>
          <Box height={'100%'} width={'100%'}>   
            
            {step == 0?
            <>
              <Box marginTop={'xl'}>
              <TouchableOpacity>
                <Link href='/auth/login'>
                <Ionicons 
                  name="arrow-back-outline"
                  size={25}
                  /></Link>
                </TouchableOpacity>
              </Box>
              <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'xl'} 
                    color={'black'} fontWeight={'800'}>Forgot Password
              </CustomText> 
            </>
                 :
            step == 1 ||  
            step == 2?
            <>
            <Box marginTop={'lg'}>
              <TouchableOpacity>
                  <Pressable onPress={()=>{setStep(0)}}>
                    <Ionicons 
                      name="arrow-back-outline"
                      size={25}
                      />
                  </Pressable>
              </TouchableOpacity>
              </Box>
           </>
            : null

            }
          {
            step === 0? 
            <>
              <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'lg'}
                    color={'black'} fontWeight={'400'}>Please enter the email connected to your account to reset your password.
              </CustomText>

              <Box marginTop={'xl'} marginBottom={'xs'}>
              <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
              </Box>

              <TouchableOpacity>
                  <Box width='100%' marginTop={'xs'} height={50} justifyContent={'center'} alignItems={'flex-end'}>
                      {/* <SubmitButton label='Verify' width='100%'  onSubmit={() => {}} /> */}
                      <PrimaryButton label='Request OTP' width='100%' onPress={handleRequest} isLoading={isLoading}/>
                  </Box>
              </TouchableOpacity>

              <Box height={'62%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
              </Box>
            </> 
            :
            step === 1?
            <Box>
               <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'md'}
                    color={'black'} fontWeight={'400'}>
                      An OTP was sent to {userEmail} kindly enter the code to reset your password.
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
                    <Box width='100%' marginTop={'xs'} height={50} justifyContent={'center'} alignItems={'center'}>
                      {/* <SubmitButton label='Verify' width='100%'  onSubmit={() => {}} /> */}
                        <PrimaryButton label='Reset Password' width='100%' onPress={ProceedToReset} isLoading={isLoading}/>
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
                
                </Box>
              <Box height={'50%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
            </Box>
            :
            step === 2?
            // <Box>
            //   <Box style={[Styles.martContainer, Styles.flex]} >
            //     <Box style={Styles.subContainer}  marginTop={'xs'}>
            //       <Box height={'80%'}>
            //         <Box height={'100%'} width={'100%'}>   
            //           <Box marginTop={'xs'} marginBottom={'xs'}>
            //               <CustomTextInput name='newPassword' placeholder='****' label='New Password' isPassword  />
            //           </Box>

            //           <Box marginTop={'xl'} marginBottom={'xs'}>
            //               <CustomTextInput name='confirmPassword' placeholder='****' label='Confirm Password' isPassword  />
            //           </Box>

            //           <Box width='100%' marginTop={'xl'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
            //           <SubmitButton label='Save Changes' width='100%'  onSubmit={() => {}} />
            //           </Box>
            //       </Box>
            //     </Box>
            //     <Box height={'20%'} flexDirection={'row'} alignItems={'flex-end'}>
            //           <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
            //               <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
            //                   <CustomText>Hello</CustomText>
            //               </Box>
            //           </Box>
            //         </Box>           
            //     </Box>
            //   </Box>
            // </Box>
            <>
            <NewPassword userId={userId}/>
            </>
            : 
            // step == 3?
            //    <>
            //      <Box width={'100%'} height={'100%'}>
            //       <Box height={'30%'} width={'100%'} >
            //         <CustomText variant={'xs'} textAlign={'right'} fontSize={12} lineHeight={20} 
            //           color={'btnBlue'} fontWeight={'800'}>
            //             {/* I’ll do this later */}
            //         </CustomText>
            //       </Box> 
            //     <Box height={'80%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
            //       <Box height={'20%'} paddingBottom={'xl'}>
            //         <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
            //       </Box>
            //       <Box height={10}></Box>
            //       <Box height={'10%'} marginTop={'xl'}>
            //         <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
            //             color={'black'} fontWeight={'800'}>Password Reset Successful!
            //         </CustomText>
            //       </Box>
            //       <Box height={'10%'}>
            //         <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
            //           color={'black'} fontWeight={'400'}>
            //             Your password reset was successful. Please Login to continue.
            //         </CustomText>
            //       </Box>
            //       <Box width={'100%'} marginTop={'xl'}>
            //         <PrimaryButton onPress={()=>{}} label={'Login'} width={'100%'} 
            //               /> 
            //       </Box>
            //       <Box height={'60%'} flexDirection={'row'} alignItems={'flex-end'}>
            //         <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
            //             <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
            //                 <CustomText>Hello</CustomText>
            //             </Box>
            //         </Box>
            //       </Box>
            //     </Box>
                
            // </Box>
            //    </>
            //    :
            null
          }     
          </Box>
        </Box>
       
      </Box>
    </Box>
  )
}

export default ForgotPassword
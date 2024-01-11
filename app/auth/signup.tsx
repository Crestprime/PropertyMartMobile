import { View, Text, Image, TextInput, Pressable,  Alert, Button  } from 'react-native'
import React, { useState, useRef } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { signupSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { PrimaryButton } from '@component/general/CustomButton'
import { Separator } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import Countdown, { CountdownRef } from '@component/general/Countdown'

const logo = require('../../assets/images/logo/logo.png')
const palmfone = require('../../assets/images/foreground/acctcreated.png')
import { TouchableOpacity } from 'react-native-gesture-handler'

import HttpClient from '../../utils/httpService'

const Signup: React.FC = () => {
// OTP form Values
  const [otpInput_1, setOtpInput_1] = useState('');
  const [otpInput_2, setOtpInput_2] = useState('');
  const [otpInput_3, setOtpInput_3] = useState('');
  const [otpInput_4, setOtpInput_4] = useState('');
  const [otpInput_5, setOtpInput_5] = useState('');
  const [otpInput_6, setOtpInput_6] = useState('');
  const [otpNumber, setOtpNumber] = useState('your email');
 // UI states
  const [step,setStep ] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)
  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const countdownRef = useRef<CountdownRef>(null);
  
  const { renderForm, formState: { isValid }, values, } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: signupSchema,
  });

  const handleTimerEnd = () => {
    // Alert.alert('Countdown Finished', 'The countdown has reached zero!');
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
  const back = () => {
     setStep(0);
  }
  // const showToast = useToast
  const handleSubmit = async () => {
    if(!checked){
      Alert.alert('You have to accept our term & conditions to continue')
    } else{
      try {
        const formdata = values()
        // console.log(formdata);
        setIsLoading(true)
        const response = await HttpClient.post('/authentication/create-account', formdata);;
        // Handle the response as needed
        // console.log('Response', response.data.data);
        const { message } = response.data;
        const { _id, email } = response.data.data;
        console.log(_id, message, email)
      
        setUserId(_id)
        setUserEmail(email)

        // if (userId) {
        //   console.log('userID stored:', userId);
        // } else {
        //   console.log('userID not stored');
        // }
  
        // if (userEmail) {
        //   console.log('userEmail stored:', userEmail);
        // } else {
        //   console.log('userEmail not stored');
        // }

        Alert.alert('Success', message);
        setIsLoading(false)
        setStep(1);
        
      } catch (error) {
        setIsLoading(false)
        // Handle errors
        console.error('Error:', error);
        Alert.alert('Error', 'An account with that email already exist');
      }

    }
    
  };
  const handleVerify = async () => {
     let otpData = otpInput_1 + otpInput_2 + otpInput_3 + otpInput_4 + otpInput_5 + otpInput_6 ;
     console.log(otpData)

     if(otpData.length < 6){
      Alert.alert('You must enter 6 digits')
     } else {
      const formdata = otpData
      Alert.alert(formdata)
      try {
        // const userId = "659fbdabb46bac0d71e953cd";
        // console.log(userId)
        const response = await HttpClient.put(`/authentication/user/verify-email-otp/${formdata}/${userId}`,);
        // Handle the response as needed
        console.log('Response:', response.data);
        const {message} = response.data;
        Alert.alert( message);
        setIsLoading(false)
        setStep(2);
        
      } catch (error:any) {
        setIsLoading(false)
        // Handle errors
        console.error(error);
        // const {message} = error;
        // console.log('message',message)
        
        Alert.alert('Invalid OTP code');
        
      }
     }
  }
  const handleResend = async () => {
    try {
      // const userMail = 'xenxei46@gmail.com'
      const response = await HttpClient.get(`/authentication/user/resend-email-verification-otp/${userEmail}`);;
      // Handle the response as needed
      console.log('Resend init:', response.data);
      const {message} = response.data
      console.log(message)
      // console.log(response)
      Alert.alert('We have sent you a code again')
      handleRestartClick() 
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to resend');
    }  
  }
  
  return renderForm(
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}>
        <Box height={'100%'}>
          {
             step === 0? 
            <>
            <Box height={'100%'} width={'100%'}>
                <Image source={logo} resizeMode="cover" style={Styles.logo} />
                  <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                      color={'black'} fontWeight={'800'}>Welcome to Property Mart
                  </CustomText>
                  
                  <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={25} 
                        color={'black'} fontWeight={'400'}>Finding your perfect home, one dream at a Time.
                  </CustomText>

                  <Box width={'100%'} flexDirection={'row'} justifyContent={'space-between'} marginTop={'lg'}>
                    <Box width={'100%'}>
                      <CustomTextInput name='name' placeholder='Name' label='Name' isPassword={false} />
                    </Box>
                    {/* <Box width={'48%'}>
                      <CustomTextInput name='lastname' placeholder='Last Name' label='Last Name' isPassword={false}  />
                    </Box> */}
                  </Box>

                  <Box marginTop={'sm'}>
                      <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                      <CustomTextInput name='phone' placeholder='+234' label='Phone Number' />
                        <Box marginBottom={'sm'} />

                      <CustomTextInput name='password' placeholder='Password' label='Password' isPassword 
                       />
                      <Box height={5} width={'100%'} marginTop={'md'}  flexDirection={'row'} justifyContent={'flex-start'} >
                        <Box height={5} width={'5%'} backgroundColor={'errorColor'} borderRadius={10}>
                            <CustomText>length</CustomText>  
                        </Box>
                      </Box>
                      
                  </Box>

                  <Box width='100%' marginBottom={'sm'} height={40} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                {/* <Link href="/auth/forgotpassword"> */}

                 <Box borderRadius={5} borderColor={'primaryColor'} 
                   borderWidth={1.5} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <TouchableOpacity>
                      <Pressable onPress={() => setChecked((prev) => !prev)}>
                        <Box style={{height:15, width:15,}} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Ionicons
                            name={checked? "checkmark" : "remove"}
                            size={checked?14:14}
                            color={checked? "#2D66DD":"#FFFFFF"}
                          />
                        </Box>
                      </Pressable>
                    </TouchableOpacity>
                  </Box> 

                  <CustomText variant={'xs'}  fontSize={12} fontWeight={'800'} marginLeft={'xs'} >
                      I agree to our  <Link href="/" style={{color:'#2D66DD'}}> Terms of Service & Privacy Policy </Link> 
                  </CustomText>
                {/* </Link> */}
                  </Box>

                  {
                    isValid?
                    <>
                      <Text>is valid</Text>
                      </>
                    : 
                    <>
                    {/* <SubmitButton label='Create an Account' width='100%'  onSubmit={() => {}} /> */}
                    <TouchableOpacity>
                        <PrimaryButton label='Create an Account' width='100%' onPress={handleSubmit} isLoading={isLoading}/>
                        {/* <SubmitButton label='Create an Account' width='100%' onSubmit={onsubmit} /> */}
                    </TouchableOpacity>
                    </>
                  }

                  <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                  </Box>

                  <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
                    <CustomText variant={'xs'} fontSize={12}>Already a user?</CustomText>
                    <Link href={'/auth/test'} style={{ marginLeft: 4 }}>
                    <CustomText variant={'body'} fontSize={12} fontWeight={'800'} color={'primaryColor'} marginLeft={'xs'}>Log in</CustomText>
                    </Link>
                  </Box>

                  {/* <Box height={'5%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box> */}
            </Box>
            </> 
            : step === 1?
            <>     
            <Box>
              <Box marginTop={'xl'}>
                <TouchableOpacity>
                  <Pressable   onPress={back} >
                  <Ionicons
                    name="arrow-back-outline"
                    size={25}
                    />
                    </Pressable>
                 </TouchableOpacity>
              </Box>
              <CustomText variant={'subheader'} textAlign={'left'} fontSize={25} lineHeight={25} marginTop={'xl'} 
                    color={'black'} fontWeight={'800'}>Verify your Email
              </CustomText>
               <CustomText variant={'xs'} textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                    color={'black'} fontWeight={'400'}>
                     Please enter the OTP code sent to {otpNumber}
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
                      {/* <SubmitButton label='Verify' width='100%'  onSubmit={() => {}} /> */}
                        <PrimaryButton label='Verify' width='100%' onPress={handleVerify} isLoading={isLoading}/>
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
            </>
            : step === 2?
            <>
             <Box width={'100%'} height={'100%'}>
                  <Box height={'30%'} width={'100%'} flexDirection={'row'} justifyContent={'flex-end'} >
                    <Link href={'/auth/login'}>
                      <TouchableOpacity>
                        <CustomText variant={'xs'} fontSize={12} lineHeight={20} 
                          color={'btnBlue'} fontWeight={'800'}>I’ll do this later
                        </CustomText>
                      </TouchableOpacity>
                    </Link>
                  </Box> 
                <Box height={'70%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
                  <Box height={'20%'} paddingBottom={'xl'}>
                    <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
                  </Box>
                  <Box height={10}></Box>
                  <Box height={'10%'} marginTop={'xl'}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                        color={'black'} fontWeight={'800'}>Account created successfully!
                    </CustomText>
                  </Box>
                  <Box height={'10%'}>
                    <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
                      color={'black'} fontWeight={'400'}>We’re so happy to have you! Let’s get your account up and running
                    </CustomText>
                  </Box>
                  <Box width={'100%'} marginTop={'xl'}>
                    <PrimaryButton onPress={()=>{console.log('not yet up')}}
                           label={'Continue to account set up'} width={'100%'} />
                  </Box>
                  <Box height={'40%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
                </Box>
                
            </Box>
            </> 
            : null
          }
        </Box>

      </Box>
    </Box>
  )
}

export default Signup
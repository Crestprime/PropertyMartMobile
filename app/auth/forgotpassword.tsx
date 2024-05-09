import { Alert, Pressable } from 'react-native'
import React, { useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import {  requestOTPSchema } from '@services/validation'
import { Styles } from '../../styles/auth/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import ForgotPasswordVerify from './forgotpasswordVerify'
import Loader from '@component/loader'
import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed';
import NewPassword from './newpassword'

const  ForgotPassword = () => {

  const { renderForm, formState: { isValid }, values } = useForm({
    defaultValues: {
      email: ''
    },
    validationSchema: requestOTPSchema,
  })
 
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [success, isSuccess] = React.useState(false)
  const [failed, isFailed] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }

  const { isLoading: signupMutationLoading, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/authentication/user/reset-password-request`,data),
    onSuccess: (data) => {
      setStep(1)
      setIsLoading(false)
      const {message} = data.data;
      console.log(data.data);
      const id = data.data.data.id;
      console.log(id)
      setUserId(id)
      setMessage(message)
      isSuccess(true)
      turnOffAlert()
    },
    onError: (error: any) => {
      setMessage(error?.message)
      isFailed(true)
      turnOffAlert()
    },
  })

  const handleRequest = async ({data}:any) => {
    const formdata = values()
    const resetEmail = formdata.email
    if(formdata){
      let data = {
        email: resetEmail
      }
      console.log(data)
      setIsLoading(true)
      setUserEmail(resetEmail)
      mutate(data)
    } else {
      Alert.alert('Enter email')
    }
  };

  return renderForm(
  <>
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
              <CustomText variant={'subheader'} textAlign={'left'} marginTop={'xl'} 
                    color={'black'} >Forgot Password
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
              <CustomText variant={'body'} textAlign={'left'}  marginTop={'lg'}
                    color={'black'} >Please enter the email connected to your account to reset your password.
              </CustomText>

              <Box marginTop={'xl'} marginBottom={'xs'}>
              <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
              </Box>

              <TouchableOpacity>
                  <Box width='100%' marginTop={'xs'} height={50} justifyContent={'center'} alignItems={'flex-end'}>
                      {/* <PrimaryButton label='Request OTP' width='100%' onPress={handleRequest} isLoading={isLoading}/> */}
                      <SubmitButton label='Request OTP' width='100%' onSubmit={(data) => handleRequest(data)} isLoading={isLoading} /> 
                  </Box>
              </TouchableOpacity>

              <Box height={'80%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
              </Box>
            </> 
            :
            step === 1?
              <>
              <ForgotPasswordVerify userEmail={userEmail} userId={userId} setIsLoading={setIsLoading} isLoading={isLoading} setStep={setStep}
             isFailed={isFailed} isSuccess={isSuccess} setMessage={setMessage} />
              </>
            : 
            step === 2?
            <>
              <NewPassword userEmail={userEmail} setIsLoading={setIsLoading} isLoading={isLoading} setStep={setStep}
              isFailed={isFailed} isSuccess={isSuccess} setMessage={setMessage} />
            </> :
             null
          }     
          </Box>
        </Box>
       
      </Box>
    </Box>
    {
      isLoading && (
        <>
          <Loader/>
        </>
      )
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

export default ForgotPassword
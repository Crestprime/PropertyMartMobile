import { Image, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
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
import { Checkbox } from 'tamagui'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import SignupVerify from './signupVerify'

const logo = require('../../assets/images/logo/logo.png')

const Signup: React.FC = () => {

  const [step,setStep ] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)

  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
   
  const { renderForm, formState: { isValid }, values, } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: signupSchema,
  });

  // This is the method we use for mutation
  // do not use the httpService directly
  // we use react-query for all queries and mutations
  // signup mutation
  const { isLoading: signupMutationLoading, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/authentication/create-account`, data),
    onSuccess: (data) => {
      setStep(1)
      console.log(data.data);
      const {email} = data.data;
      console.log(email)
      setUserEmail(data.data.data.email);
      setUserId(data.data.data._id);
    },
    onError: (error: any) => {
      alert(error?.message)
    },
  })

  // const showToast = useToast
  const handleSubmit = async (data: any) => {
    if(!checked){
      Alert.alert('You have to accept our term & conditions to continue')
    } else{
      mutate(data);
    } 
  };

  const back = () => {
    setStep(0);
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

                 <Checkbox onCheckedChange={(checked)=> setChecked(checked as boolean)} checked={checked}>
                  <Checkbox.Indicator>
                    <Ionicons name="checkmark-circle" size={20} color="#2D66DD" />
                  </Checkbox.Indicator>
                 </Checkbox>

                  <CustomText variant={'xs'}  fontSize={12} fontWeight={'800'} marginLeft={'xs'} >
                      I agree to our  <Link href="/" style={{color:'#2D66DD'}}> Terms of Service & Privacy Policy </Link> 
                  </CustomText>

                  </Box>
                  <TouchableOpacity>
                    <SubmitButton label='Create an Account' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                  </TouchableOpacity>
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
            <SignupVerify userEmail={userEmail} userId={userId} />
            </>
            : null
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Signup
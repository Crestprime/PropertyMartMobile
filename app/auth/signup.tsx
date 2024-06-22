import { Image, Alert, Pressable, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { signupSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Separator } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import SignupVerify from './signupVerify'
import {URLS} from "@services/Urls";
import { Checkbox } from 'react-native-ui-lib'
import {Theme} from "@theme/themes";
import {useTheme} from "@shopify/restyle";

const logo = require('../../assets/images/logo/logo.png')

const Signup: React.FC = () => {
  const { height } = useWindowDimensions();
  const theme = useTheme<Theme>();

  const [step,setStep ] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)

  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
   
  const { renderForm, formState: { isValid }, values, } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
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
    mutationFn: (data: any) => httpService.post(URLS.signup, data),
    onSuccess: (data) => {
      setStep(1)
      console.log(data.data);
      const {email} = data.data;
      console.log(email)
      setUserEmail(data.data.data.email);
      setUserId(data.data.data.id);
    },
    onError: (error: any) => {
      alert(error?.message)
    },
  })

  // const showToast = useToast
  const handleSubmit = async (data: any) => {
    if(!checked){
      Alert.alert('warning', 'You have to accept our term & conditions to continue');
      return;
    } else{
      mutate(data);
    } 
  };

  const back = () => {
    setStep(0);
 }

  return renderForm(
    <ScrollView style={[{ minHeight: height, flex: 1, backgroundColor: 'white' }]} contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 30, backgroundColor: 'white'  }} >
      <Box style={Styles.subContainer}>

          {
             step === 0? 

            <Box height={'100%'} width={'100%'}>
                <Image source={logo} resizeMode="cover" style={Styles.logo} />
                  <CustomText variant={'subheader'} textAlign={'left'} fontSize={20}  marginTop={'sm'}
                      color={'black'} >Welcome to Property Mart
                  </CustomText>
                  
                  <CustomText variant={'body'} textAlign={'left'} fontSize={16}
                  >Finding your perfect home, one dream at a Time.
                  </CustomText>

                  <Box marginTop={'2xl'}>

                      <Box width={'100%'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Box width={"47%"}>
                          <CustomTextInput name='firstName' placeholder='First name' label='First Name' isPassword={false} />
                        </Box>
                        <Box width={'47%'}>
                          <CustomTextInput name='lastName' placeholder='Last name' label='Last Name' isPassword={false} />
                        </Box>
                      </Box>

                    <Box marginBottom={'sm'} />

                    <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                    <Box marginBottom={'sm'} />

                    <CustomTextInput name='phone' placeholder='+234' label='Phone Number' />
                    <Box marginBottom={'sm'} />

                    <CustomTextInput name='password' placeholder='Password' label='Password' isPassword />

                  <Box flexDirection={'row'} marginTop={'md'} marginBottom={'md'} alignItems={'center'}>

                   <Checkbox value={checked} onValueChange={() => setChecked((prev) => !prev)} color={theme.colors.primaryColor} />

                    <CustomText variant={'xs'}  fontSize={14}  marginLeft={'xs'} >
                      I agree to our  <Link href="/" style={{color:'#2D66DD'}}> Terms of Service & Privacy Policy </Link>
                    </CustomText>
                  </Box>

                  </Box>

                    <SubmitButton label='Create an Account' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={signupMutationLoading} />

                  <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} color={'black'} marginHorizontal={'xl'}>OR</CustomText>
                    <Separator />
                  </Box>

                  <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
                    <CustomText variant={'xs'} fontSize={16}>Already a user?</CustomText>
                    <Link href={'/auth/login'} style={{ marginLeft: 4 }}>
                    <CustomText variant={'body'} fontSize={16} color={'primaryColor'} marginLeft={'xs'}>Log in</CustomText>
                    </Link>
                  </Box>


            </Box>
            : step === 1?
            <>
            <Box marginTop={'xl'}>
                  <Pressable   onPress={back} >
                  <Ionicons
                    name="arrow-back-outline"
                    size={25}
                    />
                    </Pressable>
              </Box>
            <SignupVerify userEmail={userEmail} userId={userId} />
            </>
            : null
          }
      </Box>
    </ScrollView>
  )
}

export default Signup
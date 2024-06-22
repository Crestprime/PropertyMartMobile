import { View, Text, Image } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import {URLS} from "@services/Urls";
const logo = require('../../assets/images/logo/logo.png')
import * as SecureStore from 'expo-secure-store';
import {useDetails} from "../../states/useDetails";


const Login = () => {
  const { setAll } = useDetails((state) => state);
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  })

  // login mutation
  const { isLoading, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(URLS.login, data),
    onSuccess: async(data) => {
      console.log(data.data.data);
      await SecureStore.setItemAsync('details', JSON.stringify(data.data.data.user));
      await SecureStore.setItemAsync('token', data.data.data.token);
      setAll({ ...data.data.data.user, token: data.data.data.token });
      router.push('/dashboard/homepage/home/');
    },
    onError: (error: any) => {
      alert(error?.message)
    },
  })
  return renderForm(

    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer} marginTop={'lg'}>
        <Box height={'80%'} borderColor={'successColor'}>
          <Box height={'100%'} width={'100%'}>

            <Image source={logo} resizeMode="cover" style={Styles.logo} />
            <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} marginTop={'md'}
              color={'black'}>Welcome Back
            </CustomText>
            <CustomText variant={'body'} textAlign={'left'} fontSize={16}
              >Enter your email address and password to gain access.
            </CustomText>

            <Box marginTop={'xl'}>
              <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false} />
              <Box marginBottom={'xl'} />
              <CustomTextInput name='password' placeholder='Password' label='Password' isPassword />
            </Box>

            <Box width='100%' marginBottom={'md'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
              <Link href="/auth/forgotpassword">
                <CustomText variant={'xs'} color={'primaryColor'} fontSize={14} >Forgot Password?</CustomText>
              </Link>
            </Box>
            <SubmitButton label='Log in' width='100%' isLoading={isLoading} onSubmit={(data) => {
              mutate(data)
            }} />

            <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
              <Separator />
              <CustomText variant={'xs'} fontSize={14}>OR</CustomText>
              <Separator />
            </Box>

            <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={14}>Don't have an account?</CustomText>
              <Link href={'/auth/signup'} style={{ marginLeft: 4 }}>
                <CustomText variant={'body'} fontSize={14} color={'primaryColor'} marginLeft={'xs'}>Create Account</CustomText>
              </Link>
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Login
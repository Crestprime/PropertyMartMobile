import { View, Text, Image } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Separator } from 'tamagui'
const logo = require('../../assets/images/logo/logo.png')

const Login = () => {
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  })
  return renderForm(
    // <Box flex={1} backgroundColor={'background'} padding={'md'}>
    //   <Box height={10} width={'100%'} backgroundColor={'errorColor'}>
    //     {/* <Image source={logo} resizeMode="cover" /> */}
    //   </Box>
    //   <Box width='100%' height={100} bg='background' />
    //   <CustomText variant={'subheader'}>Welcome Back</CustomText>
    //   <CustomText variant={'xs'} marginTop={'md'} marginBottom={'3xl'}>Enter your email address and password to gain access.</CustomText>

    //   <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false} />
    //   <Box marginBottom={'xl'} />
    //   <CustomTextInput name='password' placeholder='Password' label='Password' isPassword />

    //   <Box width='100%' marginBottom={'md'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
    //     <Link href="/auth/forgotpassword">
    //       <CustomText variant={'xs'} color={'primaryColor'}>Forgot Passwrd?</CustomText>
    //     </Link>
    //   </Box>

    //   <SubmitButton label='Log in' width='100%'  onSubmit={() => {}} />
      
    //   <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
    //     <Separator />
    //     <CustomText variant={'body'} color={'black'}>OR</CustomText>
    //     <Separator />
    //   </Box>

    //   <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
    //     <CustomText variant={'xs'}>Don't have an account?</CustomText>
    //     <Link href={'/auth/signup'} style={{ marginLeft: 4 }}>
    //       <CustomText variant={'body'} color={'primaryColor'} marginLeft={'xs'}>Create Account</CustomText>
    //     </Link>
    //   </Box>

    // </Box>
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer} >
        <Box height={'60%'} backgroundColor={'primaryColor'}>
          <Box height={'10%'} width={'100%'}>
            <Image source={logo} resizeMode="cover" style={Styles.logo} />
          </Box>
        </Box>
        <Box height={'40%'}>

        </Box>
      </Box>
    </Box>
  )
}

export default Login
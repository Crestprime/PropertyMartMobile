import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { bvnSchema } from '@services/validation'
import { Styles } from 'styles/setup/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { getUserDetails } from '@utils/getUser'


const SetNIN = ({toggleNIN, setStep3, isSuccess, isFailed, setMessage }:any) => {
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUserProps] = useState<any>()

  const { renderForm, formState: { isValid }, values } = useForm({
    defaultValues: {
      bvn: '',  
    },
    validationSchema: bvnSchema,
  })


  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
    }
    getUser()
  }, []);
  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }

  const token = user?.token
  const userId = user?.id
  console.log('token', token, 'userId', userId)
  
  const { mutate } = useMutation({
    mutationFn: (data: any) => httpService.put(`/user/upload_bvn`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  }),
    onSuccess: (data) => {
      console.log(data.data);
      const {message} = data.data
      toggleNIN()
       setStep3()
       setMessage(message)
       isSuccess(true)
       turnOffAlert()

    },
    onError: (error: any) => {
      const message = error?.message
      setMessage(message)
      isFailed(true)
      turnOffAlert()

    },
  })


  const handleSubmit = async (data: any) => {
    const formvalues = values()
    console.log(formvalues)
    data = formvalues;
    mutate(data)
  };

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'}>
        <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Pressable onPress={()=> toggleNIN()}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Pressable>
                    </TouchableOpacity> 
                </Box>
                <Box height={'auto'}>
                    <CustomText variant={'subheader'} textAlign={'left'} 
                            color={'black'} >Set NIN
                    </CustomText> 
                </Box>
                <Box height={'auto'}>
                    <CustomText textAlign={'left'} 
                        color={'black'} variant={'body'}>
                        We need a little more information about you to enable us setup your account
                    </CustomText>
                </Box>

                <Box marginTop={'lg'}>
                      <CustomTextInput name='bvn' placeholder='Enter your NIN'  label='NIN' keyboardType="number-pad"
                            textContentType="oneTimeCode" isPassword={false}  />
                        <Box marginBottom={'lg'} />
                        <TouchableOpacity>  
                          <SubmitButton label='Save & Continue' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                        </TouchableOpacity>
                  </Box>  
        </Box>
    </Box>
  )
}
export default SetNIN;
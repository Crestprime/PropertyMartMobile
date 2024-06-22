import {  Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { setAddressSchema } from '@services/validation'
import { Styles } from 'styles/setup/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { getUserDetails } from '@utils/getUser'


const SetAddress = ({toggleHome, setStep1,isSuccess, isFailed, setMessage }:any) => {
  
  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
    }
    getUser()
  }, []); 
  
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUserProps] = useState<any>()

  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }

  const { renderForm, formState: { isValid }, values } = useForm({
    defaultValues: {
      phone:  '', // Assuming minimum length of 1 for phone number
      country: '',
      address: '',
      state: '',
      city: '',
      street_name: '',
      postal_code: '',
    },
    validationSchema: setAddressSchema,
  })

  const token = user?.token
  const userId = user?.id
  console.log('token', token, 'userId', userId)
  
  const { mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/address/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  }),
    onSuccess: (data) => {
      console.log(data.data);
      const email = data.data.data.email
      const userId = data.data.data.id
      const {message} = data.data
      toggleHome()
       setStep1()
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
    if(!checked){
      Alert.alert('You have to accept our term & conditions to continue')
     
    } else{
      mutate(data);
      const formvalues = values()
      console.log(formvalues)
      setIsLoading(true)
    } 
  };
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'}>
        <ScrollView>
        <Box marginTop={'xl'} height={'auto'} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Pressable onPress={()=> toggleHome()}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Pressable>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'}
                            color={'black'} >Home Addresss
                    </CustomText> 
                </Box>
                <Box height={'auto'}>
                    <CustomText textAlign={'left'} variant={'xs'}  marginTop={'xs'}
                        color={'black'} >
                        We need a little more information about you to enable us setup your account
                    </CustomText>
                </Box>
                {/* <Box marginTop={'xl'}>
                  <Pressable>
                    <Box height={40} style={{backgroundColor:'#F5F8FF'}} borderRadius={8}
                     justifyContent={'center'} flexDirection={'row'} alignItems={'center'}>
                      <Ionicons 
                            name="locate-outline" color={'#2D66DD'}
                            size={25}
                            />
                      <CustomText marginLeft={'xs'}>Use current location</CustomText>
                    </Box>
                  </Pressable>
                </Box> */}
                {/* <Box width='100%' flexDirection={'row'} height={50} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                </Box> */}
            
                <Box marginTop={'sm'}>
                  
                      <CustomTextInput name='country' placeholder='Country' label='Country' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='address' placeholder='Address' label='Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='phone' placeholder='Phone Number' label='Phone Number' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='state' placeholder='State' label='State' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='city' placeholder='City' label='Town/City' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='street_name' placeholder='Street' label='Street Name' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='postal_code' placeholder='Postal Code' label='Postal Code' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        
                        <Box flexDirection={'row'} alignItems={'center'} paddingBottom={'md'}>
                          <Checkbox onCheckedChange={(checked)=> setChecked(checked as boolean)} checked={checked}>
                          <Checkbox.Indicator>
                            <Ionicons name="checkmark-circle" size={20} color="#2D66DD" />
                          </Checkbox.Indicator>
                          
                          </Checkbox>
                          <CustomText marginLeft={'xs'}>Accept Terms and conditions</CustomText>
                        </Box>
                        <TouchableOpacity>
                          <SubmitButton label='Save & Continue' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                        </TouchableOpacity>
                  </Box>    
                  </ScrollView>      
          </Box>
    </Box>
  )
}
export default SetAddress;
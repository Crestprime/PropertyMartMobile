import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { setAddressSchema } from '@services/validation'
import { Styles } from '../styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
// const logo = require('../../assets/images/logo/logo.png')

const addAddress = ({toggleHome, setStep1}:any) => {
    
  
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      country: '',
      email: '',
      state: '',
      city: '',
      street: '',
      postalCode: '',
      apartmentNo: '',
      landMark: '',
    },
    validationSchema: setAddressSchema,
  })

  const handleSubmit = (data: any) => {
    toggleHome()
    setStep1()
  }
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'95%'}>
        <Box marginTop={'xl'} height={40} justifyContent={'center'} >
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
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Add Addresss
                    </CustomText> 
                </Box>
                <Box height={50}>
                    <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                        Please enter your delivery address. Incorrect address may cause order cancellation or delay.
                    </CustomText>
                </Box>
                <Box marginTop={'xl'}>
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
                </Box>
                <Box width='100%' flexDirection={'row'} height={50} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                </Box>
                <ScrollView>
                <Box marginTop={'sm'}>
                  
                      <CustomTextInput name='country' placeholder='Country' label='Country' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='state' placeholder='State' label='State' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='city' placeholder='City' label='City' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='street' placeholder='Street' label='Street' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='postalCode' placeholder='Postal Code' label='Postal Code' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='appartmentNo' placeholder='Apartment No' label='Apartment No (Optional)' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='landMark' placeholder='Land Mark' label='Land Mark (Optional)' isPassword={false} 
                        /><Box marginBottom={'sm'} />
                        <Box flexDirection={'row'} paddingBottom={'md'}>
                          <Checkbox onCheckedChange={(checked)=> setChecked(checked as boolean)} checked={checked}>
                          <Checkbox.Indicator>
                            <Ionicons name="checkmark-circle" size={20} color="#2D66DD" />
                          </Checkbox.Indicator>
                          {/* <CustomText>Make default Address</CustomText> */}
                          </Checkbox>
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
export default addAddress;


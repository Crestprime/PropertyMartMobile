import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { reservationSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
// const logo = require('../../assets/images/logo/logo.png')

const ReservationForm = () => {
  
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      country: '',
      state: '',
      dob: '',
      gender: '',
      occupation: '',
      
    },
    validationSchema: reservationSchema ,
  })

  const handleSubmit = (data: any) => {
    // toggleHome()
    // setStep1()
  }
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'95%'}>
        <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/Pages/makeReservations'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                      </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Who are you buying For
                    </CustomText> 
                </Box>
                <Box height={50}>
                    <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                        Ensure that the information below is correct
                    </CustomText>
                </Box>
                <Box width='100%' flexDirection={'row'} height={50} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                </Box>
                <ScrollView>
                <Box marginTop={'sm'}>
                  
                      <CustomTextInput name='name' placeholder='Enter Full Name' label='Buyers FullName' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />
                        <CustomTextInput name='phone' placeholder='Phone' label='Mobile Number' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='country' placeholder='Country' label='Country' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='state' placeholder='State of Origin' label='State' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='dob' placeholder='Date of Birth' label='Date' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='gender' placeholder='Gender' label='Gender' isPassword={false} 
                        /><Box marginBottom={'sm'} />

                        <CustomTextInput name='occupation' placeholder='Occupation' label='Occupation' isPassword={false} 
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
                          <SubmitButton label='Continue' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                        </TouchableOpacity>
                  </Box>
                  </ScrollView> 
        </Box>
    </Box>
  )
}
export default ReservationForm;
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { reservationSchema } from '@services/validation'
import { Styles } from '../../../../styles/dashboard/homepage/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
import { OutlineButton } from '@component/general/OutlineButton'
// const logo = require('../../assets/images/logo/logo.png')

const ReservationForm = () => {
  
  const [summary, setSummary] = React.useState(true);
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

  const sumList = [
    {id:567, title:'Buyer’s Name', desc:'Jude Williams Stefan' },
    {id:527, title:'Email Address', desc:'Propertymart@gmail.com' },
    {id:777, title:'Phone Number', desc:'08132581551' },
    {id:707, title:'Home Address', desc:'24 Afaha Eket, Eket Akwa Ibom ' },
    {id:407, title:'Country', desc:'Nigeria' },
    {id:417, title:'State of Origin', desc:'Akwa Ibom' },
    {id:427, title:'Date of Birth', desc:'15/11/2023' },
    {id:437, title:'Gender', desc:'Male' },
    {id:467, title:'Occupation', desc:'Radiographer' },
  ]

  const handleSubmit = (data: any) => {
    // toggleHome()
    // setStep1()
  }
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
          {!summary?
           <Box width={'90%'} height={'95%'}>
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                            <TouchableOpacity>
                                <Link href={'/dashboard/homepage/home/makeReservations'}>
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

                            <CustomTextInput name='state' placeholder='State ' label='State of Origin' isPassword={false} 
                            /><Box marginBottom={'sm'} />

                            <CustomTextInput name='dob' placeholder='Date' label='Date of Birth' isPassword={false} 
                            /><Box marginBottom={'sm'} />

                            <CustomTextInput name='gender' placeholder='Gender' label='Gender' isPassword={false} 
                            /><Box marginBottom={'sm'} />

                            <CustomTextInput name='occupation' placeholder='Occupation' label='Occupation' isPassword={false} 
                            /><Box marginBottom={'sm'} />

                            <TouchableOpacity>
                              <SubmitButton label='Continue' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                            </TouchableOpacity>
                </Box>
                </ScrollView>
           </Box>
              :
              <Box width={'90%'} height={'95%'}>
                <Box marginTop={'md'} height={30} justifyContent={'center'} >
                            <TouchableOpacity>
                                <Link href={'/dashboard/homepage/home/makeReservations'}>
                                    <Ionicons 
                                    name="arrow-back-outline"
                                    size={25}
                                    />
                              </Link>
                            </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                                color={'black'} fontWeight={'800'}>Summary
                    </CustomText>      
                </Box>
                <Box height={45}>
                        <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                            color={'black'} fontWeight={'400'}>
                              Here is a quick summary of your reservation at Coral Garden Estate Awka Prime
                        </CustomText>
                </Box>

                <Box marginTop={'xs'}>
                  <CustomText color={'btnBlue'} variant={'header'} lineHeight={20} fontSize={16} >₦5,000,000</CustomText>
                </Box>
                <Box marginTop={'xs'}>
                  <CustomText style={{color:'grey'}} fontWeight={'600'} fontSize={12} >Details</CustomText>
                </Box>

                <Box marginTop={'sm'} borderRadius={8} borderWidth={1.5} borderColor={'textInputBorderColor'} height={35} justifyContent={'center'} alignItems={'center'}>
                  <CustomText fontSize={12}>1 plot at Coral Garden Estate Akwa (PRIME)</CustomText>
                </Box>
                <Box marginTop={'sm'}  borderRadius={8} borderWidth={1.5} borderColor={'textInputBorderColor'} height={'50%'} justifyContent={'center'} alignItems={'center'}>
                  <Box height={'95%'} width={'95%'}>
                    <ScrollView>
                        {
                          sumList.map((item)=>{
                            return(
                              <Box key={item.id} paddingTop={'xs'} paddingBottom={'xs'}>
                                <CustomText fontSize={12} style={{color:'grey'}}>{item.title}</CustomText>
                                <CustomText fontSize={14} fontWeight={'600'} >{item.desc}</CustomText>
                              </Box>
                            )
                          })
                        }
                    </ScrollView>
                  </Box>
                </Box>
                <Box>
                  <Box marginTop={'xl'}>
                    <PrimaryButton onPress={()=>router.push('/dashboard/homepage/home/makePayment')} label='Continue' width='100%'/>
                  </Box>
                  <Box marginTop={'sm'}>
                          <OutlineButton onPress={()=>console.log('helo')} label='Reserve and continue later' width='100%'/>
                  </Box>
                </Box>            
                
           </Box>
            
          }
    </Box>
  )
}
export default ReservationForm;
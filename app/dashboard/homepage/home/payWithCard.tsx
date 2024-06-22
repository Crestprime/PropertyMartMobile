import { View,Text,StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { PaymentSchema } from '@services/validation'
import { Styles } from '../../../../styles/dashboard/homepage/styles'
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown';
import { PrimaryButton } from '@component/general/CustomButton';
import { CustomTextInput } from '@component/form/CustomInput';
// import {Picker} from '@react-native-picker/picker';

const PayWithCard = () => {
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      mode_of_payment: '',
      method_of_payment: '',
      amount: '',      
    },
    validationSchema:  PaymentSchema,
  })
  
  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
           
           <Box width={'90%'} height={'90%'}>
                <Box marginTop={'md'} height={30} justifyContent={'center'} >
                      <TouchableOpacity>
                                <Link href={'/dashboard/homepage/home/reservationForm'}>
                                    <Ionicons 
                                    name="arrow-back-outline"
                                    size={25}
                                    />
                              </Link>
                      </TouchableOpacity>        
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                                color={'black'} fontWeight={'800'}>Pay with Debit Card
                    </CustomText>      
                </Box>
                <Box height={45}>
                        <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                            color={'black'} fontWeight={'400'}>
                            Please enter your debit card details securely to complete the transaction.
                        </CustomText>
                </Box>
                  
                <Box marginTop={'xl'}>
                    <CustomTextInput name='cardname' placeholder='Holders Name' label='Name on Card' isPassword={false}  />
                    <Box marginBottom={'sm'} />
                    <CustomTextInput name='cardnumber' placeholder='Card Number' label='Debit Card Number' isPassword={false}  />
                    <Box marginBottom={'sm'} />
                    <Box flexDirection={'row'} justifyContent={'space-between'} marginTop={'md'}>
                        <Box width={'49%'}>
                            <CustomTextInput name='expDate' placeholder='Enter Exp Date' label='Expiration Date' isPassword={false}  />
                        </Box>
                        <Box width={'49%'}>
                            <CustomTextInput name='cvv' placeholder='CVV' label='CVV' isPassword={false}  />
                        </Box>
                    </Box>
                </Box>               
              
                <Box marginTop={'xl'}>
                  <TouchableOpacity>
                    <PrimaryButton label='Pay Now (₦5,000,000)' onPress={()=>window.alert('hullo')} width={'100%'}/>
                  </TouchableOpacity>
                </Box> 
                <Box height={'30%'} width={'100%'}  alignItems={'center'}>
                    <Box flexDirection={'row'} alignItems={'center'} marginTop={'sm'}>
                        <Ionicons name='lock-closed-outline'/>
                        <CustomText fontSize={12}>Secured by <CustomText fontSize={12} fontWeight={'800'}>PAYSTACK</CustomText></CustomText>
                    </Box>
                    <Box marginTop={'sm'}>
                        <Pressable style={{width:'50%', height:30, padding:5, borderWidth:1,borderColor:'#2D66DD', borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <CustomText fontWeight={'600'} fontSize={10}>What is PAY STACK</CustomText>
                        </Pressable>
                    </Box>
                    <Box height={'60%'} width={'100%'} justifyContent={'flex-end'}>
                        <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'flex-end'} >
                            <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                                <CustomText>Hello</CustomText>
                            </Box>
                        </Box>
                    </Box>
                </Box>
           </Box>
    </Box>
  )
}
export default PayWithCard;

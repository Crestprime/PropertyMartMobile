import { View,Text,StyleSheet } from 'react-native';
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
// import {Picker} from '@react-native-picker/picker';

const MakePayment = () => {

  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const [byCard, setbyCard] = useState(false);

  const [oneOffPay, setOneOffPay] = useState(false);
  const [halfpay, setHalfPay] = useState(false);
  const [quarterly, setQuartely] = useState(false);

  const [isFocus, setIsFocus] = useState(false);
  const [Focus, setFocus] = useState(false);

  const data = [
    { label: 'One-Off Payment', value: 'once' },
    { label: '6 months Payment', value: 'part' },
    { label: '3 months Payment', value: 'quarterly' },
  ]
  const data2 = [
    { label: 'My Wallet', value: 'wallet' },
    { label: 'Debit/Credit Card', value: 'card' },
  ]
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      mode_of_payment: '',
      method_of_payment: '',
      amount: '',      
    },
    validationSchema:  PaymentSchema,
  })
 
  const renderLabel = () => {
    if (value || !isFocus  ) {
      return (
        <CustomText variant={'subheader'} style={[Styles.label, isFocus && { color: 'grey' }]}>
          Mode of Payment
        </CustomText>
      );
    }
    return null;
  };
  const renderLabel2 = () => {
    if (value1 || !Focus  ) {
      return (
        <CustomText variant={'subheader'} style={[Styles.label, isFocus && { color: 'grey' }]}>
          Method of Payment
        </CustomText>
      );
    }
    return null;
  };

  const showValue = () => {
    console.log(value)
  }

  
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
                                color={'black'} fontWeight={'800'}>Make Payment
                    </CustomText>      
                </Box>
                <Box height={45}>
                        <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                            color={'black'} fontWeight={'400'}>
                             Click on the following drop down to select mode and method of payment
                        </CustomText>
                </Box>
                {oneOffPay?
                 <Box height={'20%'} marginTop={'md'}>
                        <Box borderRadius={10} style={{ backgroundColor: '#FFFCF5' }} padding={'xs'} height={'90%'}>
                          <Box borderRadius={10} borderWidth={1} style={{borderColor: '#FEC84B'}}  height={'100%'} justifyContent={'center'}>
                               <Box paddingLeft={'sm'}>
                                <Ionicons name='alert-circle-outline' size={25} color={'#DC6803'}/>
                               </Box> 
                               <Box paddingLeft={'sm'} paddingRight={'sm'} >
                                <CustomText fontSize={14}>One-off Payment attracts <CustomText fontSize={14} fontWeight={'800'}>no charge.</CustomText> Click Pay now button to make your payment.</CustomText>
                               </Box>      
                          </Box>
                        </Box>
                 </Box> 
                   :
                  halfpay?
                  <Box height={'20%'} marginTop={'md'}>
                        <Box borderRadius={10} style={{ backgroundColor: '#FFFCF5' }} padding={'xs'} height={'90%'}>
                          <Box borderRadius={10} borderWidth={1} style={{borderColor: '#FEC84B'}}  height={'100%'} justifyContent={'center'}>
                               <Box paddingLeft={'sm'}>
                                <Ionicons name='alert-circle-outline' size={25} color={'#DC6803'}/>
                               </Box> 
                               <Box paddingLeft={'sm'} paddingRight={'sm'} >
                                <CustomText fontSize={14}>Splitting payment for 6 months attracts <CustomText fontSize={14} fontWeight={'800'}>₦500,000</CustomText>charge, Click Pay now button to make your payment.</CustomText>
                               </Box>      
                          </Box>
                        </Box>
                 </Box>
                 : 
                 quarterly?
                  <Box height={'20%'} marginTop={'md'}>
                  <Box borderRadius={10} style={{ backgroundColor: '#FFFCF5' }} padding={'xs'} height={'90%'}>
                    <Box borderRadius={10} borderWidth={1} style={{borderColor: '#FEC84B'}}  height={'100%'} justifyContent={'center'}>
                          <Box paddingLeft={'sm'}>
                          <Ionicons name='alert-circle-outline' size={25} color={'#DC6803'}/>
                          </Box> 
                          <Box paddingLeft={'sm'} paddingRight={'sm'} >
                          <CustomText fontSize={14}>Splitting payment for 3 months attracts <CustomText fontSize={14} fontWeight={'800'}>₦250,000</CustomText>charge, Click Pay now button to make your payment.</CustomText>
                          </Box>      
                    </Box>
                  </Box>
                  </Box> : null
                 }           
                                
                <Box marginTop={'xs'}>
                  <CustomText style={{color:'grey'}} fontWeight={'600'} fontSize={12}>Plot Details</CustomText>
                </Box>

                <Box marginTop={'sm'} borderRadius={8} borderWidth={1.5} borderColor={'textInputBorderColor'} height={35} justifyContent={'center'} alignItems={'center'}>
                  <CustomText fontSize={12}>1 plot at Coral Garden Estate Akwa (PRIME)</CustomText>
                </Box>
                <Box style={Styles.selectCont} >
                    {renderLabel()}
                  <Dropdown
                    style={[Styles.dropdown, isFocus && { borderColor: '#2D66DD', borderWidth:1 }]}
                    selectedTextStyle={Styles.selectedTextStyle}
                    iconStyle={Styles.iconStyle}
                    data={data}
                    maxHeight={200}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                      showValue();
                      if (item.value === 'once') {
                        setOneOffPay(true);
                      } else if (item.value === 'part'){
                        setHalfPay(true)
                      } else if (item.value === 'quarterly'){
                        setQuartely(true)
                      }
                      
                    }}
                    renderRightIcon={() => (
                      <Ionicons
                        style={Styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name='chevron-down-outline'
                        size={20}
                      />
                    )}
                  />
                </Box>
                <Box style={Styles.selectCont} >
                    {renderLabel2()}
                  <Dropdown
                    style={[Styles.dropdown, Focus && { borderColor: '#2D66DD', borderWidth:1 }]}
                    selectedTextStyle={Styles.selectedTextStyle}
                    iconStyle={Styles.iconStyle}
                    data={data2}
                    maxHeight={200}
                    labelField="label"
                    valueField="value"
                    value={value1}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={item => {
                      setValue1(item.value);
                      setFocus(false);
                      showValue();
                      if (item.value === 'card') {
                        // setbyCard(true);
                        router.push('/dashboard/homepage/home/payWithCard')

                      }
                    }}
                    renderRightIcon={() => (
                      <Ionicons
                        style={Styles.icon}
                        color={Focus ? 'blue' : 'black'}
                        name='chevron-down-outline'
                        size={20}
                      />
                    )}
                  />
                </Box>
                <Box marginTop={'lg'}>
                  <TouchableOpacity>
                    <PrimaryButton label='Pay Now (₦5,000,000)' onPress={()=>window.alert('hullo')} width={'100%'}/>
                  </TouchableOpacity>
                </Box> 
                <Box height={oneOffPay || halfpay || quarterly?'15%':'40%'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'flex-end'} >
                            <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                                <CustomText>Hello</CustomText>
                            </Box>
                    </Box>
                </Box>
           </Box>
    </Box>
  )
}
export default MakePayment;

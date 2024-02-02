import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from '../styles'
// import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
// import { SubmitButton } from '@component/form/CustomButton'
// import { Checkbox, Label, ScrollView, Separator } from 'tamagui'
// import { useMutation } from 'react-query'
// import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { PrimaryButton } from '@component/general/CustomButton'
import { Dropdown } from 'react-native-element-dropdown';


const MakeReservation = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const [byCard, setbyCard] = useState(false);
  
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      date: '',
      time: '',
      notes: '',
    },
    validationSchema: InspectionSchema,
  })

  const handleSubmit = (data: any) => {
    window.alert('hullo')
  }

  const handleItemPress = (itemId: number) => {
    // Check if the item is already selected
    const isSelected = selectedItems.includes(itemId);

    // Update the selected items state
    setSelectedItems((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  const reservations = [
    {id: 22457, method:'Doorstep Delivery', desc:'Your order would be delivered to your doorstep by capital city development agent' },
    {id: 12452,  method:'Pickup', desc:'You’ll be required to pickup your order at any of our location close to you.'},
    
  ]

  const paymentOption = [
    { label: 'My Wallet', value: 'wallet' },
    { label: 'Debit/Credit Card', value: 'card' },
  ]
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'}>
            <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/homepage/home/propertyDetails'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Delivery Method
                    </CustomText> 
                </Box>
                <Box height={50}>
                    <CustomText textAlign={'left'} fontSize={14} lineHeight={22}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                          Kindly select how you want your materials delivered to you.

                    </CustomText>
                </Box>
                <Box marginTop={'xl'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} height={200} flexWrap={'wrap'} >
                   {
                    reservations.map((item)=>{
                        return(
                            <>
                            <Box width={'100%'} key={item.id} height={100}>
                              <Pressable onPress={() => handleItemPress(item.id)}>
                                <Box borderRadius={10} style={{ backgroundColor: selectedItems.includes(item.id) ? '#EAF1FE' : '#EAECF0',}} height={'90%'}>
                                    <Box borderRadius={10} borderWidth={2} style={{borderColor: selectedItems.includes(item.id) ? '#2D66DD' : 'grey',}}  
                                      height={'100%'} justifyContent={'center'} alignItems={'center'}>
                                      <Box width={'90%'} height={'90%'}>
                                        <Box flexDirection={'row'} alignItems={'center'} height={'50%'} >
                                          <Box height={18} width={18} borderWidth={1} borderColor={selectedItems.includes(item.id) ? 'btnBlue' : 'textInputBorderColor'} borderRadius={100} 
                                            justifyContent={'center'} alignItems={'center'}>
                                             { selectedItems.includes(item.id) &&
                                              <Box height={8} width={8} backgroundColor={'btnBlue'} borderRadius={100} >
                                              </Box>}
                                          </Box>
                                          <Box marginLeft={'sm'}>
                                            <CustomText variant={'subheader'} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={14}>{item.method}</CustomText>
                                          </Box>
                                          
                                        </Box>
                                        <Box marginLeft={'xl'}>
                                          <CustomText lineHeight={12} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={12}>{item.desc}</CustomText>
                                        </Box>
                                    </Box>
                                    </Box>
                                </Box>
                              </Pressable>
                            </Box>
                            </>
                        )
                    })
                   }
                </Box>
                <Box>
                <Box flexDirection={'row'} justifyContent={'space-between'}>
                    <Box width={'45%'}>
                       <CustomText variant={'subheader'} fontSize={14}>Shipping Address</CustomText>
                    </Box>
 
                    <Box width={'45%'} flexDirection={'row'} justifyContent={'flex-end'}>
                      <Link href='/dashboard/homepage/marketplace/changeAddress'>
                        <CustomText variant={'subheader'} color={'btnBlue'} fontSize={14}>
                          Change address
                        </CustomText>
                      </Link>
                    </Box>
 
                  </Box>
                  <Box>
                    <CustomText fontSize={14}>123 Main Street, Apartment 4B Eket, Akwa Ibom State, Nigeria
                    </CustomText>
                  </Box>
                </Box>
                <Box>
                  <Box marginTop={'xs'}>
                     <CustomText variant={'subheader'} fontSize={14}>Payment Options</CustomText>
                     <CustomText fontSize={12}>Please select your payment option</CustomText>
                     <Box marginTop={'sm'}>
                    <Box style={{paddingTop:5}} >
                    {/* {renderLabel()} */}
                    <Dropdown
                      style={[Styles.dropdown, isFocus && { borderColor: '#2D66DD', borderWidth:1 }]}
                      selectedTextStyle={Styles.selectedTextStyle}
                      iconStyle={Styles.iconStyle}
                      data={paymentOption}
                      maxHeight={200}
                      labelField="label"
                      valueField="value"
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                        // showValue();
                        if (item.value === 'card') {
                          // setbyCard(true);
                          router.push('/dashboard/homepage/marketplace/payWithCard')
  
                        }
                         
                      }}
                      renderRightIcon={() => (
                        <Ionicons
                          style={Styles.icon}
                          color={isFocus ? 'blue' : 'black'}
                          name='chevron-forward-outline'
                          size={20}
                        />
                      )}
                    />
                    </Box>

                   </Box>
                  </Box>
                  <Box height={100} justifyContent={'flex-end'}>
                    <TouchableOpacity>
                      <PrimaryButton onPress={() => console.log('hhh')} label={'checkout'} width={''}/>
                    </TouchableOpacity>  
                  </Box>

                </Box>   
        </Box>
        
    </Box>
  )
}
export default MakeReservation;
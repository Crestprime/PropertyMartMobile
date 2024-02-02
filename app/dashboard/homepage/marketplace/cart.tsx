import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from '../styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { OutlineButton } from '@component/general/OutlineButton'
import { ErrorButton } from '@component/general/ErrorButton'
import { PrimaryButton } from '@component/general/CustomButton'

const emptycart = require('../../../../assets/images/foreground/emptycart.png')
const cement = require('../../../../assets/images/foreground/cement.png')
const del = require('../../../../assets/images/foreground/delete.png')


const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [cart, setCart] = useState(true);
  const [delet, setDelete] = useState(true)
  const [count, setCount] = useState(0)
  
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      date: '',
      time: '',
      notes: '',
    },
    validationSchema: InspectionSchema,
  })

  const increment = () => {
    setCount(count + 1);
  }

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

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

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'} >
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/homepage/marketplace/productDetails'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Cart Summary
                    </CustomText> 
                </Box>  
                {
                    !cart?
                    <>
                        <Box height={'60%'} alignItems={'center'} justifyContent={'center'} >
                            <Box height={'40%'} width={'80%'} alignItems={'center'}>
                                <Image source={emptycart} resizeMode='cover'/>
                                <CustomText fontSize={16} paddingTop={'2xl'} fontWeight={'800'}>Your Cart is Empty</CustomText>

                                <CustomText fontSize={12} paddingTop={'sm'} paddingBottom={'md'}>Items added to cart would appear here.</CustomText>

                                    <Box borderRadius={20} width={'50%'} height={30} justifyContent={'center'} alignItems={'center'} backgroundColor={'btnBlue'}>
                                        <TouchableOpacity>
                                           <Pressable onPress={()=>null}>
                                            <CustomText fontSize={12} color={'secondaryBackgroundColor'}>Tap to Update</CustomText>
                                           </Pressable>
                                        </TouchableOpacity>
                                    </Box>
                                   
                                
                            </Box>
                        </Box>
                        <Box height={'30%'} alignItems={'center'} justifyContent={'flex-end'}>
                            <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'center'} >
                                <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                                    <CustomText>Hello</CustomText>
                                </Box>
                            </Box>
                        </Box>
                    </>
                    : 
                    <Box>
                      <Box height={'70%'}>
                        <Box height={80} justifyContent={'space-between'} flexDirection={'row'}>
                          <Box width={'25%'}>
                           <Image borderTopLeftRadius={10} borderBottomLeftRadius={10} style={{width:'auto', height:'100%'}} 
                            source={cement} resizeMode='cover'/>
                          </Box>
                          <Box width={'50%'}>
                            <CustomText paddingBottom={'sm'} variant={'subheader'} fontSize={12}>Deform Bar Steel Rod</CustomText>
                            <Box alignItems={'center'} marginTop={'xs'}>
                                <Box width={'100%'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} >
                                <TouchableOpacity>
                                    <Pressable onPress={()=>decrement()}>
                                        <Box height={25} width={25} borderRadius={100} borderWidth={1.5} borderColor=  {'textInputBorderColor'} justifyContent={'center'} alignItems={'center'} >
                                            <Ionicons name='remove-outline' size={20}/>                        
                                        </Box>
                                        </Pressable>
                                    </TouchableOpacity>

                                    <CustomText fontSize={16} paddingLeft={'sm'} paddingRight={'sm'} variant={'subheader'}>{count}</CustomText>

                                    <TouchableOpacity>
                                        <Pressable onPress={()=>increment()}>
                                        <Box height={25} width={25} borderRadius={100} borderWidth={1.5} borderColor=  {'textInputBorderColor'} justifyContent={'center'} alignItems={'center'} >
                                            <Ionicons name='add-outline' size={20}/>                        
                                        </Box>
                                        </Pressable>
                                    </TouchableOpacity>
                                </Box>
                            </Box>
                          </Box>
                          <Box width={'20%'} alignItems={'flex-end'}>
                            <CustomText paddingBottom={'sm'} variant={'subheader'} fontSize={12}>₦40,000</CustomText>
                              <TouchableOpacity>
                                <Box borderRadius={80} borderWidth={0} justifyContent={'center'} alignItems={'center'} height={40} width={40} style={{backgroundColor:'#FEF3F2'}}>
                                    <Pressable onPress={()=>setDelete(true)}>
                                      <Image source={del} resizeMode='contain'/>
                                    </Pressable>
                                </Box>
                              </TouchableOpacity>
                          </Box>
                        </Box>
                      </Box>
                      <Box height={'30%'}>
                        <Box flexDirection={'row'}>
                            <Box width={'50%'}>
                               <CustomText fontSize={14}>Order</CustomText>
                            </Box>
                            <Box width={'50%'} alignItems={'flex-end'}>
                            <CustomText fontSize={14}>2 Orders</CustomText>
                            </Box>
                        </Box>
                        <Box flexDirection={'row'}>
                            <Box width={'50%'}>
                               <CustomText fontSize={14}>Subtotal</CustomText>
                            </Box>
                            <Box width={'50%'} alignItems={'flex-end'}>
                            <CustomText variant={'subheader'} lineHeight={20} fontSize={12}>₦540,000</CustomText>
                            </Box>
                        </Box>
                        <Box marginTop={'md'}>
                            <TouchableOpacity>
                                <PrimaryButton onPress={undefined} label={'checkout'} width={''}/>
                            </TouchableOpacity>
                        </Box>
                      </Box>
                    </Box>
                }
                
        </Box>
        {
            delet &&
          <Box style={Styles.sidebar}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'95%'} height={'40%'} justifyContent={'center'} alignItems={'center'} marginBottom={'lg'} borderRadius={14} backgroundColor={'secondaryBackgroundColor'}>
                    <Box width={'90%'} height={'90%'} justifyContent={'center'}>
                        <Box marginTop={'sm'}>
                                <Box borderRadius={80} borderWidth={0} justifyContent={'center'} alignItems={'center'} height={40} width={40} style={{backgroundColor:'#FEF3F2'}}>
                                      <Image source={del} resizeMode='contain' style={{width:'50%'}}/>   
                                </Box>
                      </Box>
                      <Box marginTop={'xs'}>
                        <CustomText variant='header' fontSize={16} lineHeight={20}>Remove </CustomText>
                      </Box>
                      <Box marginTop={'xs'}>
                        <CustomText fontSize={14} style={{color:'grey'}}>Do you want to remove “Deform Bar Steel Rod” from cart?</CustomText>
                      </Box>
                        <Box marginTop={'sm'}>
                          <ErrorButton onPress={()=>setDelete(false)} label='Yes, remove' width='100%' />
                        </Box>
                        <Box marginTop={'sm'}>
                          <OutlineButton onPress={()=>setDelete(false)} label='No, keep it' width='100%'/>
                        </Box>
                    </Box>
                  </Box>   
            </Box>
          </Box>
          }
    </Box>
  )
}
export default Cart;
import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from '../styles'
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
const del = require('../../../../assets/images/foreground/delete.png')
const edit = require('../../../../assets/images/foreground/edit-01.png')


const MakeReservation = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  
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
    {id: 22457,  method:'Default', desc:'123 Main Street, Apartment 4B Eket, Akwa Ibom State.', country:'Nigeria' },
    {id: 12452,  method:'Address 1', desc:'123 Main Street, Apartment 4B Eket, Akwa Ibom State.', country:'Nigeria'},
    
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
                        <Link href={'/dashboard/homepage/marketplace/changeAddress'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30} flexDirection={'row'}>
                      <Box width={'60%'} justifyContent={'center'}>
                        <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Change Address
                        </CustomText> 
                      </Box>
                      <Box width={'40%'} justifyContent={'center'}>
                        <PrimaryButton label='Add New' onPress={()=>router.push('/dashboard/homepage/marketplace/addAddress')} width={'100%'}/>
                      </Box>
                  </Box>
                <Box marginTop={'xl'} flexDirection={'row'} alignItems={'center'} height={200} flexWrap={'wrap'} >
                   {
                    reservations.map((item)=>{
                        return(
                            <>
                            <Box width={'100%'} key={item.id} height={130}>
                              <Pressable onPress={() => handleItemPress(item.id)}>
                                <Box borderRadius={10} style={{ backgroundColor: selectedItems.includes(item.id) ? '#EAF1FE' : '#EAECF0',}} height={'90%'}>
                                    <Box borderRadius={10} borderWidth={2} style={{borderColor: selectedItems.includes(item.id) ? '#2D66DD' : 'grey',}}  
                                      height={'100%'} justifyContent={'center'} alignItems={'center'}>
                                      <Box width={'90%'} height={'90%'}>
                                        <Box flexDirection={'row'} alignItems={'center'} height={'45%'} >
                                          <Box width={'10%'}>
                                            <Box height={18} width={18} borderWidth={1} borderColor={selectedItems.includes(item.id) ? 'btnBlue' : 'textInputBorderColor'} borderRadius={100} 
                                                justifyContent={'center'} alignItems={'center'}>
                                                { selectedItems.includes(item.id) &&
                                                <Box height={8} width={8} backgroundColor={'btnBlue'} borderRadius={100} >
                                                </Box>}
                                            </Box>
                                          </Box>
                                          <Box width={'70%'}>
                                            <CustomText variant={'subheader'} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={14}>{item.method}</CustomText>
                                          </Box>
                                          <Box width={'20%'} flexDirection={'row'}>
                                           <Image source={edit} resizeMode='cover' style={{ width:20, height:20}}  />
                                           <Image source={del} resizeMode='cover' style={{marginLeft:5, width:20, height:20}}  />
                                          </Box>
                                          
                                        </Box>
                                        <Box marginLeft={'xl'}>
                                          <CustomText lineHeight={12} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={12}>{item.desc}</CustomText>
                                          <CustomText lineHeight={12} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={12}>{item.country}</CustomText>
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
               </Box>
        </Box>
        
    </Box>
  )
}
export default MakeReservation;
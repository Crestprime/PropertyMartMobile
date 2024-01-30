import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { PrimaryButton } from '@component/general/CustomButton'


const MakeReservation = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
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
    {id: 62457, plot:'469.94', price:'5,000,000'},
    {id: 62452, plot:'469.94', price:'5,000,000'},
    {id: 62451, plot:'469.94', price:'5,000,000'},
    {id: 62450, plot:'469.94', price:'5,000,000'},
    {id: 620573, plot:'469.94', price:'5,000,000'},
    {id: 620572, plot:'469.94', price:'5,000,000'},
    {id: 62857, plot:'469.94', price:'5,000,000'},
    {id: 69827, plot:'469.94', price:'5,000,000'},
  ]
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'70%'} >
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/Pages/propertyDetails'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Make Reservation
                    </CustomText> 
                </Box>
                <Box height={50}>
                    <CustomText textAlign={'left'} fontSize={14} lineHeight={22}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                       How many plots of lands in <CustomText fontWeight={'800'}> Coral Garden Estate Awka Prime</CustomText> do you want to purchase?
                    </CustomText>
                </Box>
                <Box marginTop={'xl'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} height={80} flexWrap={'wrap'} >
                   {
                    reservations.map((item)=>{
                        return(
                            <>
                            <Box width={'49%'} key={item.id}>
                              <Pressable onPress={() => handleItemPress(item.id)}>
                                <Box borderRadius={10} style={{
                                            backgroundColor: selectedItems.includes(item.id) ? '#EAF1FE' : '#EAECF0',
                                            }} padding={'xs'} height={'90%'}>
                                    <Box borderRadius={10} borderWidth={2} style={{borderColor: selectedItems.includes(item.id) ? '#2D66DD' : 'grey',}}  height={'100%'} justifyContent={'center'}>
                                    <CustomText fontSize={11} paddingLeft={'xs'}>{item.plot} SQM. (OW-H 12)</CustomText>
                                    <CustomText fontSize={12} paddingLeft={'xs'} fontWeight={'800'}>{'\u20A6'}{item.price}</CustomText>
                                    </Box>
                                </Box>
                              </Pressable>
                            </Box>
                            </>
                        )
                    })
                   }
                </Box>   
        </Box>
        <Box height={'20%'} width={'100%'} alignItems={'center'} justifyContent={'center'}> 
            <Box width={'90%'} height={'90%'}>
                <PrimaryButton onPress={() => console.log('err')} label={'continue'} width={'100%'}/>
                
                <Box height={'60%'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'center'} >
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
export default MakeReservation;
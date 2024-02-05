import React, { useState, } from 'react'
import { Image , Pressable} from 'react-native'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const text = require('../../../assets/images/foreground/tcon.png')
const moon = require('../../../assets/images/foreground/moon.png')
// const star = require('../../../../assets/images/foreground/star.png')



const Settings = () => {
  
  const [appSettings, setAppSettings] = useState(2)
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [xs,setXs] = useState(true)
  const [sm,setSm] = useState(true)
  const [md,setMd] = useState(true)
  const [lg,setLg] = useState(false)
  const [xl,setXl] = useState(false)

  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      date: '',
      time: '',
      notes: '',
    },
    validationSchema: InspectionSchema,
  })

  const settings = [
    {id:1, icon:text, title:'Display Size'},
    {id:2, icon:moon, title:'App Appearance'},
  ]

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
    {id: 22457, method:'Device Settings', desc:'Use your device’s default mode' },
    {id: 12452,  method:'Light', desc:'Always use light mode'},
    {id: 12452,  method:'Dark', desc:'Always use Dark mode'},
  ]

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'75%'} >
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
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>{appSettings == 0? 'Settings': appSettings == 1? 'Display Size': appSettings == 2? 'Appearance' : null}
                    </CustomText> 
                </Box>
                <Box marginTop={'xl'}>
                  {
                    appSettings==0?
                  <>
                    {
                      settings.map((item)=>{
                        return(
                          <Box flexDirection={'row'} alignItems={'center'} key={item.id}>
                            <Box width={'15%'}>
                              <Image source={item.icon}/>
                            </Box>
                            <Box width={'80%'}>
                              <CustomText variant={'subheader'} fontSize={16}>{item.title}</CustomText>
                            </Box>
                          </Box>
                        )
                      })
                    }
                  </>
                    :
                    appSettings === 1?
                    <Box height={'100%'}>
                        <CustomText textAlign={'center'}>Preview</CustomText>
                        <Box width={'100%'} height={100} alignItems={'flex-end'} marginTop={'xl'}>
                          <Box backgroundColor={'btnBlue'} justifyContent={'center'} alignItems={'center'} borderRadius={20} width={'60%'} height={60}>
                            <CustomText color={'secondaryBackgroundColor'}>How do i adjust Text Size</CustomText>
                          </Box>
                        </Box>
                        <Box width={'100%'} height={100} marginTop={'xs'}>
                          <Box backgroundColor={'secondaryBackgroundColor'} justifyContent={'center'} padding={'sm'} alignItems={'center'} borderRadius={20} width={'60%'} height={60}>
                            <CustomText color={'black'}>Try adjusting text size using the slider below!</CustomText>
                          </Box>
                        </Box>
                        <Box height={'60%'} justifyContent={'flex-end'}>
                             <CustomText textAlign={'center'} color={'btnBlue'} marginBottom={'lg'}>Medium</CustomText>
                              <Box flexDirection={'row'} height={40} marginBottom={'md'}  borderRadius={10} backgroundColor={'secondaryBackgroundColor'} justifyContent={'center'}>
                                <Box width={'15%'} alignItems={'center'} justifyContent={'center'}>
                                  <Ionicons name='text-outline' size={15}/>
                                </Box>
                                <Box width={'70%'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                                  <Box height={12} width={12} borderRadius={100} backgroundColor={xs?'btnBlue':'disabledButtonColor'}></Box>
                                  <Box height={5} width={'15%'} backgroundColor={xs?'btnBlue':'disabledButtonColor'}></Box>

                                  <Box height={16} width={16} borderRadius={100} backgroundColor={sm?'btnBlue':'disabledButtonColor'}></Box>
                                  <Box height={5} width={'16%'} backgroundColor={sm?'btnBlue':'disabledButtonColor'}></Box>

                                  <Box height={20} width={20} borderRadius={100} backgroundColor={md?'btnBlue':'disabledButtonColor'}></Box>
                                  <Box height={5} width={'16%'} backgroundColor={lg?'btnBlue':'disabledButtonColor'}></Box>

                                  <Box height={22} width={22} borderRadius={100} backgroundColor={lg?'btnBlue':'disabledButtonColor'}></Box>
                                  <Box height={5} width={'18%'} backgroundColor={xl?'btnBlue':'disabledButtonColor'}></Box>

                                  <Box height={25} width={25} borderRadius={100} backgroundColor={xl?'btnBlue':'disabledButtonColor'}></Box>
                                </Box>
                                <Box width={'15%'} justifyContent={'center'}  alignItems={'center'}>
                                    <Ionicons name='text-outline' size={20}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    :
                    appSettings === 2?
                    <>
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
                    </>
                    :
                    null
                  }
                 
                </Box>
        </Box>
        <Box height={'15%'} width={'100%'} alignItems={'center'} justifyContent={'flex-end'}> 
          <Box height={5} width={'100%'} flexDirection={'row'} justifyContent={'center'} >
            <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
              <CustomText>Hello</CustomText>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
export default Settings;
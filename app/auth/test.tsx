import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Box from '@component/general/Box'

export default class test extends Component {
  render() {
    return (
      <Box width={'100%'} height={'100%'}  flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
       
      <Text>This is a test screen that shows that the user is logged successfully logged in</Text>
      
      </Box>
    )
  }
}
// import react, { useRef } from 'react'
// import { View, TextInput,NativeSyntheticEvent,TextInputKeyPressEventData, StyleSheet, Text, Button } from 'react-native';
// import { useForm, Controller, useController } from 'react-hook-form';
// import { nullable } from 'zod';


// type OTPInputProps = {
//   length: number,
//   value: Array<string>,
//   disabled: boolean,
//   onChange(value: Array<string>): void
// }

// const PasswordInput: React.FunctionComponent<OTPInputProps> = ({
//   length,
//   disabled,
//   value,
//   onChange
// }) => {
//   const inputRefs = useRef<Array<TextInput>>([])

//   const onChangeValue = (text: string, index: number) => {
//     const newValue = value.map((item, valueIndex) => {
//         if (valueIndex === index) {
//             return text
//         }

//         return item
//     })

//     onChange(newValue)
// }

// const handleChange = (text: string, index: number) => {
//   onChangeValue(text, index)

//   if (text.length !== 0) {
//       return inputRefs?.current[index + 1]?.focus()
//   }

//   return inputRefs?.current[index - 1]?.focus()
// }

// const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
//   const { nativeEvent } = event

//   if (nativeEvent.key === 'Backspace') {
//       handleChange('', index)
//   }
// }


//   return (
//     <View style={styles.container}>
//             {[...new Array(length)].map((item, index) => (
//                 <TextInput
//                     ref={ref => {
//                         if (ref && !inputRefs.current.includes(ref)) {
//                             inputRefs.current = [...inputRefs.current, ref]
//                         }
//                     }}
//                     key={index}
//                     maxLength={1}
//                     contextMenuHidden
//                     selectTextOnFocus
//                     editable={!disabled}
//                     style={styles.input}
//                     keyboardType="decimal-pad"
//                     testID={`OTPInput-${index}`}
//                     onChangeText={text => handleChange(text, index)}
//                     onKeyPress={event => handleBackspace(event, index)}
//                 />
//             ))}
//         </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between'
// },
// input: {
//     fontSize: 24,
//     color: 'blue',
//     textAlign: 'center',
//     width: 45,
//     height: 55,
//     backgroundColor: 'gray',
//     borderRadius: 20,
   
// }
// });

// export default PasswordInput;
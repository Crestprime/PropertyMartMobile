import Box from '@component/general/Box';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

const OtpInput = ({ setPinReady, code, setCode, maxLength, onLogOtp }:any) => {
  const codeDigitsArray = new Array(maxLength).fill(0);

  const textInputRef = useRef<any>(null);

  const handleOnBlur = () => {};

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleFocus = () => {
    setInputContainerIsFocused(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => {
      setPinReady(false);
    };
  }, [code, setPinReady, maxLength]);

  const toCodeDigitInput = ({ index }: any) => {
    const emptyInputChar = ' ';
    const digit = code[index] || emptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const isActive = inputContainerIsFocused && isDigitFocused;

    const styledCodeInput = isActive ? styles.codeInputActive : styles.codeInput;

    return (
      <Box style={styles.codeInputContainer} key={index}>
        <Text style={styledCodeInput}>{digit}</Text>
      </Box>
    );
  };

  return (
    <Box>
      <Pressable style={styles.pressableContainer} onPress={handleFocus}>
        <View style={styles.codeInputSection}>{codeDigitsArray.map((_, index) => toCodeDigitInput({ index }))}</View>
      </Pressable>
      
      <TextInput
        ref={textInputRef}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        maxLength={maxLength}
        style={styles.hiddenTextInput}
        caretHidden={true}   
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  codeInputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: '80%',
  },
  
  codeInputContainer: {
    width: '15%',
    height: 45,
    borderRadius: 5,
    borderWidth: 1.5,
    margin: 5,
    borderColor: '#D0D5DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeInput: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  codeInputActive: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 1.5,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 6,
  },
  
  hiddenTextInput: {
    position: 'absolute',
    opacity: 0,
  },
  pressableContainer: {
    width: '70%',
  },
});

export default OtpInput;

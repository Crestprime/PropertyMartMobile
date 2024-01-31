import { View, Text, Modal } from 'react-native'
import React, { ReactNode } from 'react'
import Box from '@component/general/Box';

interface IProps {
    isOpen: boolean;
    toggle: () => void;
    height?: number;
    children: ReactNode;
    isRounded?: boolean;
}

const ModalWarpper = ({ isOpen, toggle, height = 150, children, isRounded = true }: IProps) => {
  return (
    <Modal visible={isOpen} onDismiss={toggle} transparent style={{ flex: 1, backgroundColor: 'red' }} animationType='slide'>
       <Box flex={1} style={{ backgroundColor:'#000000b3'}} justifyContent={'flex-end'}>
        <Box width='100%' height={height} bg='white' borderTopLeftRadius={ isRounded ? 20:0} borderTopRightRadius={isRounded ? 20:0}>
            {children}
        </Box>
       </Box>
    </Modal>
  )
}

export default ModalWarpper
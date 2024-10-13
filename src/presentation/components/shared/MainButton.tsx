import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../../../../../react-native/FormOne/src/presentation/theme/theme'

interface Props{
    label: string;
    onPress: () => void;
}
export const MainButton = ({label, onPress}:Props) => {
  return (
    <Pressable 
    onPress={onPress}
    style={globalStyles.PrimaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}

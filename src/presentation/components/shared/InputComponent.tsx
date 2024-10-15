import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '../../theme/theme';
interface Props {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;  
  handleBlur: () => void;  
  values: string | string[] | undefined;
}

export const InputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {
  const [height, setHeight] = useState(40); // Initial height of TextInput

  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';
  
  const handleContentSizeChange = (event: any) => {
    setHeight(event.nativeEvent.contentSize.height);
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={handleChange}
        onBlur={handleBlur} 
        value={stringValue}  
        style={[globalStyles.input, globalStyles.expandingInput, { height: Math.max(40, height) }]}
        placeholder={info}
        placeholderTextColor="#888"
        multiline
        onContentSizeChange={handleContentSizeChange}
      />
    </View>
  )
};
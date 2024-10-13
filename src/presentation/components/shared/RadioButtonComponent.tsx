import { Field, useField } from 'formik'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../../../../../react-native/FormOne/src/presentation/theme/theme';

interface RadioButtonProps {
  options : {label: string, value: string}[];
  name:string;
  qTitle : string;
  errors?: any;
  touched?: any;
  radioStyle?: any;
}

export const RadioButton = ({options, name, qTitle, errors, touched, radioStyle}:RadioButtonProps) => {

  const [field, meta, helpers] = useField(name);

  const { value } = field;
  const { setValue } = helpers;

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View style={radioStyle}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={globalStyles.radioButton}
            onPress={() => setValue(option.value)}
          >
            <View style={globalStyles.ButtonSelector}>
              {value === option.value && (
                <View style={globalStyles.ButtonSelectorSelected} />
              )}
            </View>
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
        {errors && touched && errors[name] && touched[name] && (
          <Text style={globalStyles.errorText}>{errors[name]}</Text>
        )}
      </View>
    </View>
  )
}
import { useField } from 'formik';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { globalStyles } from '../../../../../../react-native/FormOne/src/presentation/theme/theme';

interface CheckboxProps {
  options: { label: string, value: string }[];
  name: string;
  qTitle: string;
}

export const MultiCheckBox = ({ options: initialOptions, name, qTitle }: CheckboxProps) => {
  const [field, meta, helpers] = useField(name);  
  const { value } = field;  
  const { setValue } = helpers;  

  const [options, setOptions] = useState(initialOptions);
  const [otherValue, setOtherValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleCheckboxChange = (selectedValue: string) => {
    const currentValues = value || [];  
    if (currentValues.includes(selectedValue)) {
      setValue(currentValues.filter((item: string) => item !== selectedValue));
      if (selectedValue === '61') {
        setShowOtherInput(false);
        setOtherValue('');
      }
    } else {
      setValue([...currentValues, selectedValue]);
      if (selectedValue === '61') {
        setShowOtherInput(true);
      }
    }
  };

  const handleAddOther = () => {
    if (otherValue.trim()) {
      const newOption = { label: otherValue, value: otherValue.toLowerCase().replace(/\s+/g, '-') };
      setOptions([...options, newOption]);
      const updatedValues = value.filter((item: string) => item !== '61');
      setValue([...updatedValues, newOption.value]);
      setOtherValue('');
      setShowOtherInput(false);
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View style={globalStyles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={globalStyles.checkboxContainer}
            onPress={() => handleCheckboxChange(option.value)}
          >
            <View style={globalStyles.checkbox}>
              {value?.includes(option.value) && (
                <View style={globalStyles.checkboxSelected} />
              )}
            </View>
            <Text style={globalStyles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {showOtherInput && (
        <View style={globalStyles.otherInputContainer}>
          <TextInput
            style={globalStyles.otherInput}
            value={otherValue}
            onChangeText={setOtherValue}
            placeholder="cuál?"
          />
          <TouchableOpacity
            style={globalStyles.addButton}
            onPress={handleAddOther}
          >
            <Text style={globalStyles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
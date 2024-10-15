import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useField } from 'formik';
import { globalStyles } from '../../theme/theme';

interface Option {
  label: string;
  value: string;
}

interface ConditionalMultiCheckBoxProps {
  checkboxName: string;
  dropdownName: string;
  qTitle: string;
  description : string;
  checkboxOptions: Option[];
  dropdownOptions: Option[];
}

export const ConditionalMultiCheckBox = ({ 
  checkboxName, 
  dropdownName, 
  qTitle, 
  checkboxOptions, 
  dropdownOptions,
  description 
}: ConditionalMultiCheckBoxProps) => {
  const [checkboxField, checkboxMeta, checkboxHelpers] = useField(checkboxName);
  const [dropdownField, dropdownMeta, dropdownHelpers] = useField(dropdownName);

  const [showMultiCheckBox, setShowMultiCheckBox] = useState(false);
  const [options, setOptions] = useState(checkboxOptions);
  const [otherValue, setOtherValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleDropDownChange = (selectedValue: string) => {
    dropdownHelpers.setValue(selectedValue);
    setShowMultiCheckBox(selectedValue === dropdownOptions.find(option => option.label === 'Si')?.value);
    if (selectedValue !== dropdownOptions.find(option => option.label === 'Si')?.value) {
      checkboxHelpers.setValue([]);
    }
  };

  const handleCheckboxChange = (selectedValue: string) => {
    const currentValues = checkboxField.value || [];
    if (currentValues.includes(selectedValue)) {
      checkboxHelpers.setValue(currentValues.filter((item: string) => item !== selectedValue));
      if (selectedValue === '61') {
        setShowOtherInput(false);
        setOtherValue('');
      }
    } else {
      checkboxHelpers.setValue([...currentValues, selectedValue]);
      if (selectedValue === '61') {
        setShowOtherInput(true);
      }
    }
  };

  const handleAddOther = () => {
    if (otherValue.trim()) {
      const newOption = { label: otherValue, value: otherValue.toLowerCase().replace(/\s+/g, '-') };
      setOptions([...options, newOption]);
      const currentValues = checkboxField.value || [];
      const updatedValues = currentValues.filter((item: string) => item !== '61');
      checkboxHelpers.setValue([...updatedValues, newOption.value]);
      setOtherValue('');
      setShowOtherInput(false);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text style={globalStyles.questionTitle}>{qTitle}</Text>
        <Text style = {globalStyles.descriptioText}>{description}</Text>
        <View style={globalStyles.picker}>
          <Picker
            selectedValue={dropdownField.value}
            onValueChange={handleDropDownChange}
          >
            <Picker.Item label="Seleccione una opción" value="" />
            {dropdownOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
        {showMultiCheckBox && (
          <View>
            <Text style={globalStyles.questionTitle}>
              P. 16. ¿Cuáles de las siguientes subcategorías de barreras de acceso 
              a la justicia se presentan en el municipio? Marcar con X
            </Text>
            <View style={globalStyles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={globalStyles.checkboxContainer}
                  onPress={() => handleCheckboxChange(option.value)}
                >
                  <View style={globalStyles.checkbox}>
                    {checkboxField.value?.includes(option.value) && (
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
        )}
      </View>
    </ScrollView>
  );
};
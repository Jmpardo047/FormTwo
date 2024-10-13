import { useField } from 'formik';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { globalStyles } from '../../../../../../react-native/FormOne/src/presentation/theme/theme';

export interface SubOption {
  label: string;
  value: string;
}

interface NestedCheckboxProps {
  mainOptions: { label: string; value: string }[];
  subOptions: [SubOption[], SubOption[], SubOption[]];
  mainName: string;
  subNames: [string, string, string];
  counterName: string;
  mainQTitle: string;
  subQTitles: [string, string, string];
  counterQTitle: string;
}

export const NestedCheckBox = ({ 
  mainOptions, 
  subOptions, 
  mainName, 
  subNames, 
  counterName,
  mainQTitle, 
  subQTitles,
  counterQTitle
}: NestedCheckboxProps) => {
  const [mainField, mainMeta, mainHelpers] = useField(mainName);
  const subFields = subNames.map(name => useField(name));
  const [counterField, counterMeta, counterHelpers] = useField(counterName);

  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleMainCheckboxChange = (selectedValue: string) => {
    const currentValues = mainField.value || [];
    if (currentValues.includes(selectedValue)) {
      mainHelpers.setValue(currentValues.filter((item: string) => item !== selectedValue));
      setExpandedOption(null);
      subFields.forEach(([_, __, subHelper]) => {
        subHelper.setValue([]);
      });
      counterHelpers.setValue('');
    } else {
      mainHelpers.setValue([...currentValues, selectedValue]);
      setExpandedOption(selectedValue);
    }
  };

  const handleSubCheckboxChange = (subIndex: number, selectedValue: string) => {
    const [subField, _, subHelper] = subFields[subIndex];
    const currentValues = subField.value || [];
    if (currentValues.includes(selectedValue)) {
      subHelper.setValue(currentValues.filter((item: string) => item !== selectedValue));
    } else {
      subHelper.setValue([...currentValues, selectedValue]);
    }
  };

  const handleCounterChange = (value: string) => {
    counterHelpers.setValue(value);
  };

  const renderMainCheckbox = (option: { label: string; value: string }) => (
    <View key={option.value}>
      <TouchableOpacity
        style={globalStyles.nestedOptionWrapper}
        onPress={() => handleMainCheckboxChange(option.value)}
      >
        <View style={globalStyles.nestedCheckmark}>
          {mainField.value?.includes(option.value) && (
            <View style={globalStyles.nestedCheckmarkSelected} />
          )}
        </View>
        <Text style={globalStyles.nestedOptionLabel}>{option.label}</Text>
      </TouchableOpacity>
      {expandedOption === option.value && renderSubOptions()}
    </View>
  );

  const renderSubOptions = () => (
    <View style={globalStyles.nestedSubOptionsContainer}>
      {subNames.map((subName, index) => (
        <View key={subName}>
          <Text style={globalStyles.nestedQuestionHeader}>{subQTitles[index]}</Text>
          {subOptions[index].map((subOption) => (
            <TouchableOpacity
              key={`${subName}-${subOption.value}`}
              style={globalStyles.nestedOptionWrapper}
              onPress={() => handleSubCheckboxChange(index, subOption.value)}
            >
              <View style={globalStyles.nestedCheckmark}>
                {subFields[index][0].value?.includes(subOption.value) && (
                  <View style={globalStyles.nestedCheckmarkSelected} />
                )}
              </View>
              <Text style={globalStyles.nestedOptionLabel}>{subOption.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View>
        <Text style={globalStyles.nestedQuestionHeader}>{counterQTitle}</Text>
        <TextInput
          style={globalStyles.nestedCounterField}
          keyboardType="numeric"
          value={counterField.value}
          onChangeText={handleCounterChange}
        />
      </View>
    </View>
  );

  return (
    <View>
      <Text style={globalStyles.nestedQuestionHeader}>{mainQTitle}</Text>
      <View>
        {mainOptions.map(renderMainCheckbox)}
      </View>
    </View>
  );
};
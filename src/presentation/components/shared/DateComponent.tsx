import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../../theme/theme';
import { FormTemplate } from '../../../../../../react-native/FormOne/src/utils/FormInterfaces';

interface InputComponentProps {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;
  handleBlur: () => void;
  value: string;
  isTextInput?: boolean;
}

const InputComponent = ({ textTitle, info, handleBlur, handleChange, value, isTextInput = false }: InputComponentProps) => {
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      {isTextInput ? (
        <TextInput
          style={[globalStyles.input, globalStyles.expandingInput]}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={info}
          placeholderTextColor="#888"
        />
      ) : (
        <TouchableOpacity
          style={[globalStyles.input, globalStyles.expandingInput]}
          onPress={() => handleChange(value)}
          onBlur={handleBlur}
        >
          <Text style={value ? globalStyles.inputText : globalStyles.placeholderText}>
            {value || info}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

interface SurveyFormProps {
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (field: string) => void;
  values: {
    PA1: FormTemplate;
    PA2: FormTemplate;
    PA3: FormTemplate;
    PA4: FormTemplate;
    PA5: FormTemplate;
  };
}

type QuestionId = 'PA1' | 'PA2' | 'PA3' | 'PA4' | 'PA5';

export const SurveyForm = ({ setFieldValue, setFieldTouched, values }: SurveyFormProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [datePickerQuestionId, setDatePickerQuestionId] = useState<QuestionId | null>(null);

  const handleChange = (questionId: QuestionId) => (value: string) => {
    setFieldValue(`${questionId}.response[0].responseuser[0]`, value);
  };

  const handleBlur = (questionId: QuestionId) => () => {
    setFieldTouched(`${questionId}.response`);
  };

  const renderInput = (questionId: QuestionId, textTitle: string, info: string, isTextInput = false) => (
    <InputComponent
      textTitle={textTitle}
      info={info}
      handleChange={handleChange(questionId)}
      handleBlur={handleBlur(questionId)}
      value={values[questionId].response[0].responseuser[0] || ''}
      isTextInput={isTextInput}
    />
  );

  const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const renderDateInput = (questionId: QuestionId) => {
    const currentDate = values[questionId].response[0].responseuser[0]
      ? new Date(values[questionId].response[0].responseuser[0])
      : new Date();

    return (
      <View>
        <TouchableOpacity
          style={globalStyles.inputDate}
          onPress={() => {
            setDatePickerQuestionId(questionId);
            setShowDatePicker(true);
          }}
        >
          <Text style={globalStyles.inputText}>
            {values[questionId].response[0].responseuser[0] || 'Seleccionar fecha'}
          </Text>
        </TouchableOpacity>
        {showDatePicker && datePickerQuestionId === questionId && (
          <DateTimePicker
            value={currentDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(Platform.OS === 'ios');
              if (selectedDate) {
                setFieldValue(`${questionId}.response[0].responseuser[0]`, formatDate(selectedDate));
              }
            }}
          />
        )}
      </View>
    );
  };

  const renderTimeInput = (questionId: QuestionId, showPicker: boolean, setShowPicker: (show: boolean) => void) => {
    const currentTime = values[questionId].response[0].responseuser[0]
      ? new Date(`1970-01-01T${values[questionId].response[0].responseuser[0]}`)
      : new Date();

    return (
      <View>
        <TouchableOpacity
          style={globalStyles.inputDate}
          onPress={() => setShowPicker(true)}
        >
          <Text style={globalStyles.inputText}>
            {values[questionId].response[0].responseuser[0] || 'Seleccionar hora'}
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={currentTime}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              setShowPicker(Platform.OS === 'ios');
              if (selectedDate) {
                setFieldValue(`${questionId}.response[0].responseuser[0]`, formatTime(selectedDate));
              }
            }}
          />
        )}
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        {renderInput('PA1', 'PA1. Si aplica, consignar el nombre completo del encuestador:', 'Nombre del encuestador', true)}

        <Text style={globalStyles.questionTitle}>PA2. Fecha</Text>
        {renderDateInput('PA2')}

        <Text style={globalStyles.questionTitle}>PA3. Hora de inicio</Text>
        {renderTimeInput('PA3', showStartTimePicker, setShowStartTimePicker)}

        <Text style={globalStyles.questionTitle}>PA4. Hora de finalización</Text>
        {renderTimeInput('PA4', showEndTimePicker, setShowEndTimePicker)}

        <Text style={globalStyles.questionTitle}>PA5. Novedades en campo</Text>
        <View style={globalStyles.radioContainer}>
          {['Completa', 'Incompleta', 'Rechazó'].map((option) => (
            <TouchableOpacity
              key={option}
              style={globalStyles.radioButton}
              onPress={() => setFieldValue('PA5.response[0].responseuser[0]', option)}
            >
              <View style={globalStyles.radio}>
                {values.PA5.response[0].responseuser[0] === option && <View style={globalStyles.radioSelected} />}
              </View>
              <Text style={globalStyles.radioLabel}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';

interface DoubleDropdownProps {
  categoryTitle: string;
  textTitle: string;
  categories: { label: string; value: string }[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  info: string;
  handleChange: (value: string) => void;
  handleBlur: () => void;
  values: string | string[] | undefined;
  errors?: any;
  touched?: any;
}

export const DropDownInputComponent = ({
  categoryTitle,
  textTitle,
  categories,
  selectedCategory,
  onCategoryChange,
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  info
}: DoubleDropdownProps) => {

  const [inputValue, setInputValue] = useState(""); // Estado para el TextInput
  const [showTextInput, setShowTextInput] = useState(false); // Estado para controlar si se muestra el TextInput

  // Manejador para el cambio de categoría
  const handlePickerChange = (value: string) => {
    onCategoryChange(value);

    // Si seleccionamos "61", mostramos el TextInput permanentemente
    if (value === "61") {
      setInputValue("");  // El TextInput empieza vacío cuando seleccionamos "61"
      setShowTextInput(true);  // Activa mostrar el TextInput de forma permanente
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{categoryTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handlePickerChange}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          {categories.map((category) => (
            <Picker.Item key={category.value} label={category.label} value={category.value} />
          ))}
        </Picker>
        {errors?.category && touched?.category && (
          <Text style={{ color: 'red' }}>{errors.category}</Text>
        )}
      </View>

      {/* Mostrar el TextInput solo si se seleccionó "61" o si se activó permanentemente */}
      {showTextInput && (
        <>
          <Text style={globalStyles.questionTitle}>{textTitle}</Text>
          <TextInput
            onChangeText={(text) => {
              setInputValue(text); // Actualiza el valor del input
              handleChange(text);  // Llamada opcional para actualizar globalmente
            }}
            onBlur={handleBlur}
            value={inputValue}  // El valor del input controlado por el estado inputValue
            style={globalStyles.input}
            placeholder={info}
            placeholderTextColor="#888"
          />
        </>
      )}
    </View>
  );
};

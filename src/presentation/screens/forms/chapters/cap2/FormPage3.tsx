import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';   
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { getInitialValuesPage3 } from '../../../../../utils/initialValues';
import { ConditionalMultiCheckBox } from '../../../../components/shared/ConditionalCheckBoxComponent';
import { opt15_1, opt15_2, opt15_3, opt15_4, opt15_5, opt15_6, opt15_7, opt15_8, opt16_1, opt16_2, opt16_3, opt16_4, opt16_5, opt16_6, opt16_7, opt16_8 } from '../../../../../utils/cap2/categoriesPage3';

export interface FormValues{
    P15_1: FormTemplate;
    P16_1: FormTemplate;
    P15_2: FormTemplate;
    P16_2: FormTemplate;
    P15_3: FormTemplate;
    P16_3: FormTemplate;
    P15_4: FormTemplate;
    P16_4: FormTemplate;
    P15_5: FormTemplate;
    P16_5: FormTemplate;
    P15_6: FormTemplate;
    P16_6: FormTemplate;
    P15_7: FormTemplate;
    P16_7: FormTemplate;
    P15_8: FormTemplate;
    P16_8: FormTemplate;
}


export const FormPage3 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage3();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 2. Barreras de acceso a la justicia</Text>
            </View>
            

            <Formik
                initialValues={initialValues}
                onSubmit={ async(
                values: FormValues,
                {setSubmitting} : FormikHelpers<FormValues>
                ) => {
                try{
                    await saveAllData(`${fileName}.json`,values,finalSurveyId);
                }
                finally{
                    setSubmitting(false);
                    navigation.navigate('page4' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    
                    
                    <View>
                        <Text style={globalStyles.questionTitle}>P15. Del siguiente listado, ¿Cuáles considera desde su competencia que son las principales 
                        barreras de acceso a la justicia que se presentan en este municipio?
                        </Text>
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_1.response[0].responseuser'
                            dropdownName='P15_1.response[0].responseuser'
                            dropdownOptions={opt15_1}
                            qTitle='1.Culturales y lingüísticas'
                            checkboxOptions={opt16_1}
                            description='Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la pertenencia a grupos culturales o lingüísticos minoritarios. '
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_2.response[0].responseuser'
                            dropdownName='P15_2.response[0].responseuser'
                            dropdownOptions={opt15_2}
                            qTitle='2.De Género '
                            checkboxOptions={opt16_2}
                            description='Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas, en razón del sexo, la identidad de género, orientación sexual o expresión de género.'
                        />

                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_3.response[0].responseuser'
                            dropdownName='P15_3.response[0].responseuser'
                            dropdownOptions={opt15_3}
                            qTitle='3. De seguridad, orden público o asociadas al conflicto armado'
                            checkboxOptions={opt16_3}
                            description='Definición. Obstáculos o dificultades para la satisfacción de una necesidad jurídica debido a la percepción de peligro frente la vida o la integridad personal.'
                        />
  
                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_4.response[0].responseuser'
                            dropdownName='P15_4.response[0].responseuser'
                            dropdownOptions={opt15_4}
                            qTitle='4. Discapacidad'
                            checkboxOptions={opt16_4}
                            description='Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la condición de discapacidad de las personas.'
                        />
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_5.response[0].responseuser'
                            dropdownName='P15_5.response[0].responseuser'
                            dropdownOptions={opt15_5}
                            qTitle='5. Económicas'
                            checkboxOptions={opt16_5}
                            description='Definición. Se refiere a las dificultades de las personas para asumir los costos que implica el acceso a los servicios de justicia o los obstáculos que enfrentan al encontrarse en situación de marginalidad económica. '
                        />
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_6.response[0].responseuser'
                            dropdownName='P15_6.response[0].responseuser'
                            dropdownOptions={opt15_6}
                            qTitle='6. Geográficas'
                            checkboxOptions={opt16_6}
                            description='Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la ubicación geográfica, las distancias, medios y vías de comunicación o transporte.'
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_7.response[0].responseuser'
                            dropdownName='P15_7.response[0].responseuser'
                            dropdownOptions={opt15_7}
                            qTitle='7. Institucionales'
                            checkboxOptions={opt16_7}
                            description='Definición. Se refieren a dificultades en el acceso en razón a la estructura, políticas, procesos y dinámicas de los sistemas de justicia.'
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P16_8.response[0].responseuser'
                            dropdownName='P15_8.response[0].responseuser'
                            dropdownOptions={opt15_8}
                            qTitle='8. Tecnológicas '
                            checkboxOptions={opt16_8}
                            description='Definición. Dificultades en el acceso a la justicia por la falta de equipos, sistemas tecnológicos, redes o infraestructura de conectividad.'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page2' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
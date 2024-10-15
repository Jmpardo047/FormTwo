import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage10 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_7_1, opt18_7_2, opt18_7_3, opt18_7_4, opt18_8_1, opt18_8_2, opt18_8_3, opt18_8_4, opt18_8_5, opt18_8_6, opt19_7_1, opt19_7_2, opt19_7_3, opt19_7_4, opt19_8_1, opt19_8_2, opt19_8_3, opt19_8_4, opt19_8_5, opt19_8_6, opt21_7_1, opt21_7_2, opt21_7_3, opt21_7_4, opt21_8_1, opt21_8_2, opt21_8_3, opt21_8_4, opt21_8_5, opt21_8_6, opt22_7_1, opt22_7_2, opt22_7_3, opt22_7_4, opt22_8_1, opt22_8_2, opt22_8_3, opt22_8_4, opt22_8_5, opt22_8_6 } from '../../../../../utils/cap3/categoriesPage10';

export interface FormValues{
    P18_7_1: FormTemplate;
    P19_7_1: FormTemplate;
    P20_7_1: FormTemplate;
    P21_7_1: FormTemplate;
    P22_7_1: FormTemplate;
    P23_7_1: FormTemplate;
    P18_7_2: FormTemplate;
    P19_7_2: FormTemplate;
    P20_7_2: FormTemplate;
    P21_7_2: FormTemplate;
    P22_7_2: FormTemplate;
    P23_7_2: FormTemplate;
    P18_7_3: FormTemplate;
    P19_7_3: FormTemplate;
    P20_7_3: FormTemplate;
    P21_7_3: FormTemplate;
    P22_7_3: FormTemplate;
    P23_7_3: FormTemplate;
    P18_7_4: FormTemplate;
    P19_7_4: FormTemplate;
    P20_7_4: FormTemplate;
    P21_7_4: FormTemplate;
    P22_7_4: FormTemplate;
    P23_7_4: FormTemplate;
    P18_8_1: FormTemplate;
    P19_8_1: FormTemplate;
    P20_8_1: FormTemplate;
    P21_8_1: FormTemplate;
    P22_8_1: FormTemplate;
    P23_8_1: FormTemplate;
    P18_8_2: FormTemplate;
    P19_8_2: FormTemplate;
    P20_8_2: FormTemplate;
    P21_8_2: FormTemplate;
    P22_8_2: FormTemplate;
    P23_8_2: FormTemplate;
    P18_8_3: FormTemplate;
    P19_8_3: FormTemplate;
    P20_8_3: FormTemplate;
    P21_8_3: FormTemplate;
    P22_8_3: FormTemplate;
    P23_8_3: FormTemplate;
    P18_8_4: FormTemplate;
    P19_8_4: FormTemplate;
    P20_8_4: FormTemplate;
    P21_8_4: FormTemplate;
    P22_8_4: FormTemplate;
    P23_8_4: FormTemplate;
    P18_8_5: FormTemplate;
    P19_8_5: FormTemplate;
    P20_8_5: FormTemplate;
    P21_8_5: FormTemplate;
    P22_8_5: FormTemplate;
    P23_8_5: FormTemplate;
    P18_8_6: FormTemplate;
    P19_8_6: FormTemplate;
    P20_8_6: FormTemplate;
    P21_8_6: FormTemplate;
    P22_8_6: FormTemplate;
    P23_8_6: FormTemplate;
}


export const FormPage10 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage10();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>7. Entorno y espacio público</Text>
            </View>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaPage3}
                onSubmit={ async(
                values: FormValues,
                {setSubmitting} : FormikHelpers<FormValues>
                ) => {
                try{
                    await saveAllData(`${fileName}.json`,values,finalSurveyId);
                }
                finally{
                    setSubmitting(false);
                    navigation.navigate('page11' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_7_1}
                            subOptions={[opt19_7_1, opt21_7_1, opt22_7_1]}
                            mainName='P18_7_1.response[0].responseuser'
                            subNames={['P19_7_1.response[0].responseuser','P21_7_1.response[0].responseuser','P22_7_1.response[0].responseuser']}
                            inputNames={['P20_7_1.response[0].responseuser','P23_7_1.response[0].responseuser']}
                            mainQTitle='7.1 Invasión, ocupación indebida'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_7_2}
                            subOptions={[opt19_7_2, opt21_7_2, opt22_7_2]}
                            mainName='P18_7_2.response[0].responseuser'
                            subNames={['P19_7_2.response[0].responseuser','P21_7_2.response[0].responseuser','P22_7_2.response[0].responseuser']}
                            inputNames={['P20_7_2.response[0].responseuser','P23_7_2.response[0].responseuser']}
                            mainQTitle='7.2 Perjuicios ocasionados por las condiciones o ausencia de equipamiento y mobiliario urbano (puentes peatonales, calles, andenes, paraderos, botes de basura, escaños, bancas, materas, luminarias, bolardos, jardineras, juegos infantiles y de ejercicio, semáforos, etc.)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_7_3}
                            subOptions={[opt19_7_3, opt21_7_3, opt22_7_3]}
                            mainName='P18_7_3.response[0].responseuser'
                            subNames={['P19_7_3.response[0].responseuser','P21_7_3.response[0].responseuser','P22_7_3.response[0].responseuser']}
                            inputNames={['P20_7_3.response[0].responseuser','P23_7_3.response[0].responseuser']}
                            mainQTitle='7.3 Perjuicios ocasionados por obras públicas (rampas, señalización, ruidos, escombros, duración)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_7_4}
                            subOptions={[opt19_7_4, opt21_7_4, opt22_7_4]}
                            mainName='P18_7_4.response[0].responseuser'
                            subNames={['P19_7_4.response[0].responseuser','P21_7_4.response[0].responseuser','P22_7_4.response[0].responseuser']}
                            inputNames={['P20_7_4.response[0].responseuser','P23_7_4.response[0].responseuser']}
                            mainQTitle='7.4 Mal uso de espacios de uso común (parques, calles, plazas, playas, andenes)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>8. Propiedad uso y tenencia de la tierra</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt18_8_1}
                            subOptions={[opt19_8_1, opt21_8_1, opt22_8_1]}
                            mainName='P18_8_1.response[0].responseuser'
                            subNames={['P19_8_1.response[0].responseuser','P21_8_1.response[0].responseuser','P22_8_1.response[0].responseuser']}
                            inputNames={['P20_8_1.response[0].responseuser','P23_8_1.response[0].responseuser']}
                            mainQTitle='8.1 Conflictos derivados de la inexistencia de información o desactualización de los registros catastrales y registrales (mercado inmobiliario)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_8_2}
                            subOptions={[opt19_8_2, opt21_8_2, opt22_8_2]}
                            mainName='P18_8_2.response[0].responseuser'
                            subNames={['P19_8_2.response[0].responseuser','P21_8_2.response[0].responseuser','P22_8_2.response[0].responseuser']}
                            inputNames={['P20_8_2.response[0].responseuser','P23_8_2.response[0].responseuser']}
                            mainQTitle='8.2 Formalización, adjudicación o titulación de tierras, mojones y definición de linderos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_8_3}
                            subOptions={[opt19_8_3, opt21_8_3, opt22_8_3]}
                            mainName='P18_8_3.response[0].responseuser'
                            subNames={['P19_8_3.response[0].responseuser','P21_8_3.response[0].responseuser','P22_8_3.response[0].responseuser']}
                            inputNames={['P20_8_3.response[0].responseuser','P23_8_3.response[0].responseuser']}
                            mainQTitle='8.3 Servidumbre sobre un predio (de paso de agua, servicios públicos)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_8_4}
                            subOptions={[opt19_8_4, opt21_8_4, opt22_8_4]}
                            mainName='P18_8_4.response[0].responseuser'
                            subNames={['P19_8_4.response[0].responseuser','P21_8_4.response[0].responseuser','P22_8_4.response[0].responseuser']}
                            inputNames={['P20_8_4.response[0].responseuser','P23_8_4.response[0].responseuser']}
                            mainQTitle='8.4 Invasión, ocupación indebida del terreno'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_8_5}
                            subOptions={[opt19_8_5, opt21_8_5, opt22_8_5]}
                            mainName='P18_8_5.response[0].responseuser'
                            subNames={['P19_8_5.response[0].responseuser','P21_8_5.response[0].responseuser','P22_8_5.response[0].responseuser']}
                            inputNames={['P20_8_5.response[0].responseuser','P23_8_5.response[0].responseuser']}
                            mainQTitle='8.5 Recuperación de terrenos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_8_6}
                            subOptions={[opt19_8_6, opt21_8_6, opt22_8_6]}
                            mainName='P18_8_6.response[0].responseuser'
                            subNames={['P19_8_6.response[0].responseuser','P21_8_6.response[0].responseuser','P22_8_6.response[0].responseuser']}
                            inputNames={['P20_8_6.response[0].responseuser','P23_8_6.response[0].responseuser']}
                            mainQTitle='8.6 Extinción de dominio'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />


                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page9' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
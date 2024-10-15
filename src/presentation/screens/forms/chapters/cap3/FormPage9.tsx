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
import { getInitialValuesPage9 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_6_1, opt18_6_2, opt18_6_3, opt18_6_4, opt18_6_5, opt18_6_6, opt18_6_7, opt18_6_8, opt18_6_9, opt19_6_1, opt19_6_2, opt19_6_3, opt19_6_4, opt19_6_5, opt19_6_6, opt19_6_7, opt19_6_8, opt19_6_9, opt21_6_1, opt21_6_2, opt21_6_3, opt21_6_4, opt21_6_5, opt21_6_6, opt21_6_7, opt21_6_8, opt21_6_9, opt22_6_1, opt22_6_2, opt22_6_3, opt22_6_4, opt22_6_5, opt22_6_6, opt22_6_7, opt22_6_8, opt22_6_9 } from '../../../../../utils/cap3/categoriesPage9';

export interface FormValues{
    P18_6_1: FormTemplate;
    P19_6_1: FormTemplate;
    P20_6_1: FormTemplate;
    P21_6_1: FormTemplate;
    P22_6_1: FormTemplate;
    P23_6_1: FormTemplate;
    P18_6_2: FormTemplate;
    P19_6_2: FormTemplate;
    P20_6_2: FormTemplate;
    P21_6_2: FormTemplate;
    P22_6_2: FormTemplate;
    P23_6_2: FormTemplate;
    P18_6_3: FormTemplate;
    P19_6_3: FormTemplate;
    P20_6_3: FormTemplate;
    P21_6_3: FormTemplate;
    P22_6_3: FormTemplate;
    P23_6_3: FormTemplate;
    P18_6_4: FormTemplate;
    P19_6_4: FormTemplate;
    P20_6_4: FormTemplate;
    P21_6_4: FormTemplate;
    P22_6_4: FormTemplate;
    P23_6_4: FormTemplate;
    P18_6_5: FormTemplate;
    P19_6_5: FormTemplate;
    P20_6_5: FormTemplate;
    P21_6_5: FormTemplate;
    P22_6_5: FormTemplate;
    P23_6_5: FormTemplate;
    P18_6_6: FormTemplate;
    P19_6_6: FormTemplate;
    P20_6_6: FormTemplate;
    P21_6_6: FormTemplate;
    P22_6_6: FormTemplate;
    P23_6_6: FormTemplate;
    P18_6_7: FormTemplate;
    P19_6_7: FormTemplate;
    P20_6_7: FormTemplate;
    P21_6_7: FormTemplate;
    P22_6_7: FormTemplate;
    P23_6_7: FormTemplate;
    P18_6_8: FormTemplate;
    P19_6_8: FormTemplate;
    P20_6_8: FormTemplate;
    P21_6_8: FormTemplate;
    P22_6_8: FormTemplate;
    P23_6_8: FormTemplate;
    P18_6_9: FormTemplate;
    P19_6_9: FormTemplate;
    P20_6_9: FormTemplate;
    P21_6_9: FormTemplate;
    P22_6_9: FormTemplate;
    P23_6_9: FormTemplate;
    
}


export const FormPage9 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage9();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>6. Vivienda y vecinos</Text>
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
                    navigation.navigate('page10' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_6_1}
                            subOptions={[opt19_6_1, opt21_6_1, opt22_6_1]}
                            mainName='P18_6_1.response[0].responseuser'
                            subNames={['P19_6_1.response[0].responseuser','P21_6_1.response[0].responseuser','P22_6_1.response[0].responseuser']}
                            inputNames={['P20_6_1.response[0].responseuser','P23_6_1.response[0].responseuser']}
                            mainQTitle='6.1 Propiedad'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_2}
                            subOptions={[opt19_6_2, opt21_6_2, opt22_6_2]}
                            mainName='P18_6_2.response[0].responseuser'
                            subNames={['P19_6_2.response[0].responseuser','P21_6_2.response[0].responseuser','P22_6_2.response[0].responseuser']}
                            inputNames={['P20_6_2.response[0].responseuser','P23_6_2.response[0].responseuser']}
                            mainQTitle='6.2 Invasión, ocupación indebida'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_3}
                            subOptions={[opt19_6_3, opt21_6_3, opt22_6_3]}
                            mainName='P18_6_3.response[0].responseuser'
                            subNames={['P19_6_3.response[0].responseuser','P21_6_3.response[0].responseuser','P22_6_3.response[0].responseuser']}
                            inputNames={['P20_6_3.response[0].responseuser','P23_6_3.response[0].responseuser']}
                            mainQTitle='6.3 Daños, afectaciones, calidad del inmueble'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_4}
                            subOptions={[opt19_6_4, opt21_6_4, opt22_6_4]}
                            mainName='P18_6_4.response[0].responseuser'
                            subNames={['P19_6_4.response[0].responseuser','P21_6_4.response[0].responseuser','P22_6_4.response[0].responseuser']}
                            inputNames={['P20_6_4.response[0].responseuser','P23_6_4.response[0].responseuser']}
                            mainQTitle='6.4 Arrendamiento'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_5}
                            subOptions={[opt19_6_5, opt21_6_5, opt22_6_5]}
                            mainName='P18_6_5.response[0].responseuser'
                            subNames={['P19_6_5.response[0].responseuser','P21_6_5.response[0].responseuser','P22_6_5.response[0].responseuser']}
                            inputNames={['P20_6_5.response[0].responseuser','P23_6_5.response[0].responseuser']}
                            mainQTitle='6.5 Administración'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_6}
                            subOptions={[opt19_6_6, opt21_6_6, opt22_6_6]}
                            mainName='P18_6_6.response[0].responseuser'
                            subNames={['P19_6_6.response[0].responseuser','P21_6_6.response[0].responseuser','P22_6_6.response[0].responseuser']}
                            inputNames={['P20_6_6.response[0].responseuser','P23_6_6.response[0].responseuser']}
                            mainQTitle='6.6 Ruidos, malos olores y basuras'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_7}
                            subOptions={[opt19_6_7, opt21_6_7, opt22_6_7]}
                            mainName='P18_6_7.response[0].responseuser'
                            subNames={['P19_6_7.response[0].responseuser','P21_6_7.response[0].responseuser','P22_6_7.response[0].responseuser']}
                            inputNames={['P20_6_7.response[0].responseuser','P23_6_7.response[0].responseuser']}
                            mainQTitle='6.7 Problemas relacionados con mascotas u otros animales domésticos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_8}
                            subOptions={[opt19_6_8, opt21_6_8, opt22_6_8]}
                            mainName='P18_6_8.response[0].responseuser'
                            subNames={['P19_6_8.response[0].responseuser','P21_6_8.response[0].responseuser','P22_6_8.response[0].responseuser']}
                            inputNames={['P20_6_8.response[0].responseuser','P23_6_8.response[0].responseuser']}
                            mainQTitle='6.8 Buen nombre, rumores, chismes'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_6_9}
                            subOptions={[opt19_6_9, opt21_6_9, opt22_6_9]}
                            mainName='P18_6_9.response[0].responseuser'
                            subNames={['P19_6_9.response[0].responseuser','P21_6_9.response[0].responseuser','P22_6_9.response[0].responseuser']}
                            inputNames={['P20_6_9.response[0].responseuser','P23_6_9.response[0].responseuser']}
                            mainQTitle='6.9 Daños a cultivos, conflictos por fuentes y acceso al agua'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page8' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
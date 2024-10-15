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
import { getInitialValuesPage14 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_13_1, opt18_13_10, opt18_13_11, opt18_13_2, opt18_13_3, opt18_13_4, opt18_13_5, opt18_13_6, opt18_13_7, opt18_13_8, opt18_13_9, opt19_13_1, opt19_13_10, opt19_13_11, opt19_13_2, opt19_13_3, opt19_13_4, opt19_13_5, opt19_13_6, opt19_13_7, opt19_13_8, opt19_13_9, opt21_13_1, opt21_13_10, opt21_13_11, opt21_13_2, opt21_13_3, opt21_13_4, opt21_13_5, opt21_13_6, opt21_13_7, opt21_13_8, opt21_13_9, opt22_13_1, opt22_13_10, opt22_13_11, opt22_13_2, opt22_13_3, opt22_13_4, opt22_13_5, opt22_13_6, opt22_13_7, opt22_13_8, opt22_13_9, opt24_13_1, opt24_13_10, opt24_13_11, opt24_13_2, opt24_13_3, opt24_13_4, opt24_13_5, opt24_13_6, opt24_13_7, opt24_13_8, opt24_13_9 } from '../../../../../utils/cap3/categoriesPage14';

export interface FormValues{
    P18_13_1: FormTemplate;
    P19_13_1: FormTemplate;
    P20_13_1: FormTemplate;
    P21_13_1: FormTemplate;
    P22_13_1: FormTemplate;
    P23_13_1: FormTemplate;
    P18_13_2: FormTemplate;
    P19_13_2: FormTemplate;
    P20_13_2: FormTemplate;
    P21_13_2: FormTemplate;
    P22_13_2: FormTemplate;
    P23_13_2: FormTemplate;
    P18_13_3: FormTemplate;
    P19_13_3: FormTemplate;
    P20_13_3: FormTemplate;
    P21_13_3: FormTemplate;
    P22_13_3: FormTemplate;
    P23_13_3: FormTemplate;
    P18_13_4: FormTemplate;
    P19_13_4: FormTemplate;
    P20_13_4: FormTemplate;
    P21_13_4: FormTemplate;
    P22_13_4: FormTemplate;
    P23_13_4: FormTemplate;
    P18_13_5: FormTemplate;
    P19_13_5: FormTemplate;
    P20_13_5: FormTemplate;
    P21_13_5: FormTemplate;
    P22_13_5: FormTemplate;
    P23_13_5: FormTemplate;
    P18_13_6: FormTemplate;
    P19_13_6: FormTemplate;
    P20_13_6: FormTemplate;
    P21_13_6: FormTemplate;
    P22_13_6: FormTemplate;
    P23_13_6: FormTemplate;
    P18_13_7: FormTemplate;
    P19_13_7: FormTemplate;
    P20_13_7: FormTemplate;
    P21_13_7: FormTemplate;
    P22_13_7: FormTemplate;
    P23_13_7: FormTemplate;
    P18_13_8: FormTemplate;
    P19_13_8: FormTemplate;
    P20_13_8: FormTemplate;
    P21_13_8: FormTemplate;
    P22_13_8: FormTemplate;
    P23_13_8: FormTemplate;
    P18_13_9: FormTemplate;
    P19_13_9: FormTemplate;
    P20_13_9: FormTemplate;
    P21_13_9: FormTemplate;
    P22_13_9: FormTemplate;
    P23_13_9: FormTemplate;
    P18_13_10: FormTemplate;
    P19_13_10: FormTemplate;
    P20_13_10: FormTemplate;
    P21_13_10: FormTemplate;
    P22_13_10: FormTemplate;
    P23_13_10: FormTemplate;
    P18_13_11: FormTemplate;
    P19_13_11: FormTemplate;
    P20_13_11: FormTemplate;
    P21_13_11: FormTemplate;
    P22_13_11: FormTemplate;
    P23_13_11: FormTemplate;
    
}


export const FormPage14 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage14();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>13. Afectaciones, daños o perjuicios causados o derivados de delitos</Text>
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
                    navigation.navigate('page15' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_13_1}
                            subOptions={[opt19_13_1, opt21_13_1, opt22_13_1, opt24_13_1]}
                            mainName='P18_13_1.response[0].responseuser'
                            subNames={['P19_13_1.response[0].responseuser','P21_13_1.response[0].responseuser','P22_13_1.response[0].responseuser','P24_13_1.response[0].responseuser']}
                            inputNames={['P20_13_1.response[0].responseuser','P23_13_1.response[0].responseuser']}
                            mainQTitle='13.1 Hurto, estafa, fraude, extorsión'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_2}
                            subOptions={[opt19_13_2, opt21_13_2, opt22_13_2, opt24_13_2]}
                            mainName='P18_13_2.response[0].responseuser'
                            subNames={['P19_13_2.response[0].responseuser','P21_13_2.response[0].responseuser','P22_13_2.response[0].responseuser','P24_13_2.response[0].responseuser']}
                            inputNames={['P20_13_2.response[0].responseuser','P23_13_2.response[0].responseuser']}
                            mainQTitle='13.2 Daño en bienes muebles y/o inmuebles (patrimonio como vehículos o oficina)'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_3}
                            subOptions={[opt19_13_3, opt21_13_3, opt22_13_3, opt24_13_3]}
                            mainName='P18_13_3.response[0].responseuser'
                            subNames={['P19_13_3.response[0].responseuser','P21_13_3.response[0].responseuser','P22_13_3.response[0].responseuser','P24_13_3.response[0].responseuser']}
                            inputNames={['P20_13_3.response[0].responseuser','P23_13_3.response[0].responseuser']}
                            mainQTitle='13.3 Amenazas, lesiones'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_4}
                            subOptions={[opt19_13_4, opt21_13_4, opt22_13_4, opt24_13_4]}
                            mainName='P18_13_4.response[0].responseuser'
                            subNames={['P19_13_4.response[0].responseuser','P21_13_4.response[0].responseuser','P22_13_4.response[0].responseuser','P24_13_4.response[0].responseuser']}
                            inputNames={['P20_13_4.response[0].responseuser','P23_13_4.response[0].responseuser']}
                            mainQTitle='13.4 Contra los derechos de autor.'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_5}
                            subOptions={[opt19_13_5, opt21_13_5, opt22_13_5, opt24_13_5]}
                            mainName='P18_13_5.response[0].responseuser'
                            subNames={['P19_13_5.response[0].responseuser','P21_13_5.response[0].responseuser','P22_13_5.response[0].responseuser','P24_13_5.response[0].responseuser']}
                            inputNames={['P20_13_5.response[0].responseuser','P23_13_5.response[0].responseuser']}
                            mainQTitle='13.5 Secuestros, tortura'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_6}
                            subOptions={[opt19_13_6, opt21_13_6, opt22_13_6, opt24_13_6]}
                            mainName='P18_13_6.response[0].responseuser'
                            subNames={['P19_13_6.response[0].responseuser','P21_13_6.response[0].responseuser','P22_13_6.response[0].responseuser','P24_13_6.response[0].responseuser']}
                            inputNames={['P20_13_6.response[0].responseuser','P23_13_6.response[0].responseuser']}
                            mainQTitle='13.6 Injurias, calumnias'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_7}
                            subOptions={[opt19_13_7, opt21_13_7, opt22_13_7, opt24_13_7]}
                            mainName='P18_13_7.response[0].responseuser'
                            subNames={['P19_13_7.response[0].responseuser','P21_13_7.response[0].responseuser','P22_13_7.response[0].responseuser','P24_13_7.response[0].responseuser']}
                            inputNames={['P20_13_7.response[0].responseuser','P23_13_7.response[0].responseuser']}
                            mainQTitle='13.7 Homicidio, feminicidio'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_8}
                            subOptions={[opt19_13_8, opt21_13_8, opt22_13_8, opt24_13_8]}
                            mainName='P18_13_8.response[0].responseuser'
                            subNames={['P19_13_8.response[0].responseuser','P21_13_8.response[0].responseuser','P22_13_8.response[0].responseuser','P24_13_8.response[0].responseuser']}
                            inputNames={['P20_13_8.response[0].responseuser','P23_13_8.response[0].responseuser']}
                            mainQTitle='13.8 Ciberdelitos (hurto por medios informáticos, violación de datos personales)'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_9}
                            subOptions={[opt19_13_9, opt21_13_9, opt22_13_9, opt24_13_9]}
                            mainName='P18_13_9.response[0].responseuser'
                            subNames={['P19_13_9.response[0].responseuser','P21_13_9.response[0].responseuser','P22_13_9.response[0].responseuser','P24_13_9.response[0].responseuser']}
                            inputNames={['P20_13_9.response[0].responseuser','P23_13_9.response[0].responseuser']}
                            mainQTitle='13.9 Plantaciones ilícitas, producción de drogas, tráfico de estupefacientes y sustancias químicas'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_10}
                            subOptions={[opt19_13_10, opt21_13_10, opt22_13_10, opt24_13_10]}
                            mainName='P18_13_10.response[0].responseuser'
                            subNames={['P19_13_10.response[0].responseuser','P21_13_10.response[0].responseuser','P22_13_10.response[0].responseuser','P24_13_10.response[0].responseuser']}
                            inputNames={['P20_13_10.response[0].responseuser','P23_13_10.response[0].responseuser']}
                            mainQTitle='13.10 Violencia sexual'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_13_11}
                            subOptions={[opt19_13_11, opt21_13_11, opt22_13_11, opt24_13_11]}
                            mainName='P18_13_11.response[0].responseuser'
                            subNames={['P19_13_11.response[0].responseuser','P21_13_11.response[0].responseuser','P22_13_11.response[0].responseuser','P24_13_11.response[0].responseuser']}
                            inputNames={['P20_13_11.response[0].responseuser','P23_13_11.response[0].responseuser']}
                            mainQTitle='13.11 Violencia intrafamiliar'
                            subQTitles={[
                                'P19. ¿Frente a este problema qué acción tomó?', 
                                'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 
                                'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?',
                                'P24. ¿El problema se solucionó?'
                            ]}
                            inputQTitles={[
                                'P20. ¿A qué institución acudió?', 
                                'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?'
                            ]}
                        />
                                                
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page13' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
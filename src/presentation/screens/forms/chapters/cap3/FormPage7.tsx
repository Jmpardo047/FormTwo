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
import { getInitialValuesPage7 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_4_1, opt18_4_2, opt18_4_3, opt18_4_4, opt18_4_5, opt18_4_6, opt18_4_7, opt19_4_1, opt19_4_2, opt19_4_3, opt19_4_4, opt19_4_5, opt19_4_6, opt19_4_7, opt21_4_1, opt21_4_2, opt21_4_3, opt21_4_4, opt21_4_5, opt21_4_6, opt21_4_7, opt22_4_1, opt22_4_2, opt22_4_3, opt22_4_4, opt22_4_5, opt22_4_6, opt22_4_7, opt24_4_1, opt24_4_2, opt24_4_3, opt24_4_4, opt24_4_5, opt24_4_6, opt24_4_7 } from '../../../../../utils/cap3/categoriesPage7';

export interface FormValues{
    P18_4_1: FormTemplate;
    P19_4_1: FormTemplate;
    P20_4_1: FormTemplate;
    P21_4_1: FormTemplate;
    P22_4_1: FormTemplate;
    P23_4_1: FormTemplate;
    P18_4_2: FormTemplate;
    P19_4_2: FormTemplate;
    P20_4_2: FormTemplate;
    P21_4_2: FormTemplate;
    P22_4_2: FormTemplate;
    P23_4_2: FormTemplate;
    P18_4_3: FormTemplate;
    P19_4_3: FormTemplate;
    P20_4_3: FormTemplate;
    P21_4_3: FormTemplate;
    P22_4_3: FormTemplate;
    P23_4_3: FormTemplate;
    P18_4_4: FormTemplate;
    P19_4_4: FormTemplate;
    P20_4_4: FormTemplate;
    P21_4_4: FormTemplate;
    P22_4_4: FormTemplate;
    P23_4_4: FormTemplate;
    P18_4_5: FormTemplate;
    P19_4_5: FormTemplate;
    P20_4_5: FormTemplate;
    P21_4_5: FormTemplate;
    P22_4_5: FormTemplate;
    P23_4_5: FormTemplate;
    P18_4_6: FormTemplate;
    P19_4_6: FormTemplate;
    P20_4_6: FormTemplate;
    P21_4_6: FormTemplate;
    P22_4_6: FormTemplate;
    P23_4_6: FormTemplate;
    P18_4_7: FormTemplate;
    P19_4_7: FormTemplate;
    P20_4_7: FormTemplate;
    P21_4_7: FormTemplate;
    P22_4_7: FormTemplate;
    P23_4_7: FormTemplate;    
    P24_4_1: FormTemplate;
    P24_4_2: FormTemplate;
    P24_4_3: FormTemplate;
    P24_4_4: FormTemplate;
    P24_4_5: FormTemplate;
    P24_4_6: FormTemplate;
    P24_4_7: FormTemplate;
}


export const FormPage7 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage7();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>4. Trabajo o empleo</Text>
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
                    navigation.navigate('page8' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_4_1}
                            subOptions={[opt19_4_1, opt21_4_1, opt22_4_1, opt24_4_1]}
                            mainName='P18_4_1.response[0].responseuser'
                            subNames={['P19_4_1.response[0].responseuser','P21_4_1.response[0].responseuser','P22_4_1.response[0].responseuser','P24_4_1.response[0].responseuser']}
                            inputNames={['P20_4_1.response[0].responseuser','P23_4_1.response[0].responseuser']}
                            mainQTitle='4.1 Reconocimiento y formalización de relación laboral o contractual'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_2}
                            subOptions={[opt19_4_2, opt21_4_2, opt22_4_2, opt24_4_2]}
                            mainName='P18_4_2.response[0].responseuser'
                            subNames={['P19_4_2.response[0].responseuser','P21_4_2.response[0].responseuser','P22_4_2.response[0].responseuser', 'P24_4_2.response[0].responseuser']}
                            inputNames={['P20_4_2.response[0].responseuser','P23_4_2.response[0].responseuser']}
                            mainQTitle='4.2 Despido y liquidación de relación laboral y contractual'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_3}
                            subOptions={[opt19_4_3, opt21_4_3, opt22_4_3, opt24_4_3]}
                            mainName='P18_4_3.response[0].responseuser'
                            subNames={['P19_4_3.response[0].responseuser','P21_4_3.response[0].responseuser','P22_4_3.response[0].responseuser','P24_4_3.response[0].responseuser']}
                            inputNames={['P20_4_3.response[0].responseuser','P23_4_3.response[0].responseuser']}
                            mainQTitle='4.3 Remuneración, pago de salario, jornal, pagos en especie, liquidación de prestaciones sociales (vacaciones, horas extra, cesantías, primas)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_4}
                            subOptions={[opt19_4_4, opt21_4_4, opt22_4_4, opt24_4_4]}
                            mainName='P18_4_4.response[0].responseuser'
                            subNames={['P19_4_4.response[0].responseuser','P21_4_4.response[0].responseuser','P22_4_4.response[0].responseuser', 'P24_4_4.response[0].responseuser']}
                            inputNames={['P20_4_4.response[0].responseuser','P23_4_4.response[0].responseuser']}
                            mainQTitle='4.4 Perjuicios ocasionados por las condiciones en el ejercicio del trabajo, lugar de trabajo, dotación, no pago de aportes a seguridad social y riesgos laborales'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_5}
                            subOptions={[opt19_4_5, opt21_4_5, opt22_4_5, opt24_4_5]}
                            mainName='P18_4_5.response[0].responseuser'
                            subNames={['P19_4_5.response[0].responseuser','P21_4_5.response[0].responseuser','P22_4_5.response[0].responseuser', 'P24_4_5.response[0].responseuser']}
                            inputNames={['P20_4_5.response[0].responseuser','P23_4_5.response[0].responseuser']}
                            mainQTitle='4.5 Pertenecer a un sindicato, participar en huelgas, incumplimiento de convenciones colectivas o pactos laborales'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_6}
                            subOptions={[opt19_4_6, opt21_4_6, opt22_4_6, opt24_4_6]}
                            mainName='P18_4_6.response[0].responseuser'
                            subNames={['P19_4_6.response[0].responseuser','P21_4_6.response[0].responseuser','P22_4_6.response[0].responseuser', 'P24_4_6.response[0].responseuser']}
                            inputNames={['P20_4_6.response[0].responseuser','P23_4_6.response[0].responseuser']}
                            mainQTitle='4.6 Maltrato y acoso laboral'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_4_7}
                            subOptions={[opt19_4_7, opt21_4_7, opt22_4_7, opt24_4_7]}
                            mainName='P18_4_7.response[0].responseuser'
                            subNames={['P19_4_7.response[0].responseuser','P21_4_7.response[0].responseuser','P22_4_7.response[0].responseuser', 'P24_4_7.response[0].responseuser']}
                            inputNames={['P20_4_7.response[0].responseuser','P23_4_7.response[0].responseuser']}
                            mainQTitle='4.7 Negación de licencias (maternidad, paternidad, luto, no remuneradas) o indemnizaciones.'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page6' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
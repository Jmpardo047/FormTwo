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
import { getInitialValuesPage8 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_5_1, opt18_5_10, opt18_5_2, opt18_5_3, opt18_5_4, opt18_5_5, opt18_5_6, opt18_5_7, opt18_5_8, opt18_5_9, opt19_5_1, opt19_5_10, opt19_5_2, opt19_5_3, opt19_5_4, opt19_5_5, opt19_5_6, opt19_5_7, opt19_5_8, opt19_5_9, opt21_5_1, opt21_5_10, opt21_5_2, opt21_5_3, opt21_5_4, opt21_5_5, opt21_5_6, opt21_5_7, opt21_5_8, opt21_5_9, opt22_5_1, opt22_5_10, opt22_5_2, opt22_5_3, opt22_5_4, opt22_5_5, opt22_5_6, opt22_5_7, opt22_5_8, opt22_5_9 } from '../../../../../utils/cap3/categoriesPage8';

export interface FormValues{
    P18_5_1: FormTemplate;
    P19_5_1: FormTemplate;
    P20_5_1: FormTemplate;
    P21_5_1: FormTemplate;
    P22_5_1: FormTemplate;
    P23_5_1: FormTemplate;
    P18_5_2: FormTemplate;
    P19_5_2: FormTemplate;
    P20_5_2: FormTemplate;
    P21_5_2: FormTemplate;
    P22_5_2: FormTemplate;
    P23_5_2: FormTemplate;
    P18_5_3: FormTemplate;
    P19_5_3: FormTemplate;
    P20_5_3: FormTemplate;
    P21_5_3: FormTemplate;
    P22_5_3: FormTemplate;
    P23_5_3: FormTemplate;
    P18_5_4: FormTemplate;
    P19_5_4: FormTemplate;
    P20_5_4: FormTemplate;
    P21_5_4: FormTemplate;
    P22_5_4: FormTemplate;
    P23_5_4: FormTemplate;
    P18_5_5: FormTemplate;
    P19_5_5: FormTemplate;
    P20_5_5: FormTemplate;
    P21_5_5: FormTemplate;
    P22_5_5: FormTemplate;
    P23_5_5: FormTemplate;
    P18_5_6: FormTemplate;
    P19_5_6: FormTemplate;
    P20_5_6: FormTemplate;
    P21_5_6: FormTemplate;
    P22_5_6: FormTemplate;
    P23_5_6: FormTemplate;
    P18_5_7: FormTemplate;
    P19_5_7: FormTemplate;
    P20_5_7: FormTemplate;
    P21_5_7: FormTemplate;
    P22_5_7: FormTemplate;
    P23_5_7: FormTemplate;
    P18_5_8: FormTemplate;
    P19_5_8: FormTemplate;
    P20_5_8: FormTemplate;
    P21_5_8: FormTemplate;
    P22_5_8: FormTemplate;
    P23_5_8: FormTemplate;
    P18_5_9: FormTemplate;
    P19_5_9: FormTemplate;
    P20_5_9: FormTemplate;
    P21_5_9: FormTemplate;
    P22_5_9: FormTemplate;
    P23_5_9: FormTemplate;
    P18_5_10: FormTemplate;
    P19_5_10: FormTemplate;
    P20_5_10: FormTemplate;
    P21_5_10: FormTemplate;
    P22_5_10: FormTemplate;
    P23_5_10: FormTemplate;
    
}


export const FormPage8 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage8();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>5. Deudas y dinero</Text>
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
                    navigation.navigate('page9' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_5_1}
                            subOptions={[opt19_5_1, opt21_5_1, opt22_5_1]}
                            mainName='P18_5_1.response[0].responseuser'
                            subNames={['P19_5_1.response[0].responseuser','P21_5_1.response[0].responseuser','P22_5_1.response[0].responseuser']}
                            inputNames={['P20_5_1.response[0].responseuser','P23_5_1.response[0].responseuser']}
                            mainQTitle='5.1 Deudas en forma de letras de cambio, pagarés u otros instrumentos contraídos con particulares'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_2}
                            subOptions={[opt19_5_2, opt21_5_2, opt22_5_2]}
                            mainName='P18_5_2.response[0].responseuser'
                            subNames={['P19_5_2.response[0].responseuser','P21_5_2.response[0].responseuser','P22_5_2.response[0].responseuser']}
                            inputNames={['P20_5_2.response[0].responseuser','P23_5_2.response[0].responseuser']}
                            mainQTitle='5.2 Usura o intereses elevados en préstamos con particulares'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_3}
                            subOptions={[opt19_5_3, opt21_5_3, opt22_5_3]}
                            mainName='P18_5_3.response[0].responseuser'
                            subNames={['P19_5_3.response[0].responseuser','P21_5_3.response[0].responseuser','P22_5_3.response[0].responseuser']}
                            inputNames={['P20_5_3.response[0].responseuser','P23_5_3.response[0].responseuser']}
                            mainQTitle='5.3 Embargo y secuestro del bien por deudas contraídas con particulares'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_4}
                            subOptions={[opt19_5_4, opt21_5_4, opt22_5_4]}
                            mainName='P18_5_4.response[0].responseuser'
                            subNames={['P19_5_4.response[0].responseuser','P21_5_4.response[0].responseuser','P22_5_4.response[0].responseuser']}
                            inputNames={['P20_5_4.response[0].responseuser','P23_5_4.response[0].responseuser']}
                            mainQTitle='5.4 Deudas como tarjetas de crédito, libre inversión, créditos hipotecarios y otras carteras con entidades financieras y solidarias'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_5}
                            subOptions={[opt19_5_5, opt21_5_5, opt22_5_5]}
                            mainName='P18_5_5.response[0].responseuser'
                            subNames={['P19_5_5.response[0].responseuser','P21_5_5.response[0].responseuser','P22_5_5.response[0].responseuser']}
                            inputNames={['P20_5_5.response[0].responseuser','P23_5_5.response[0].responseuser']}
                            mainQTitle='5.5 Usura o intereses elevados en préstamos con el sector financiero y solidario'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_6}
                            subOptions={[opt19_5_6, opt21_5_6, opt22_5_6]}
                            mainName='P18_5_6.response[0].responseuser'
                            subNames={['P19_5_6.response[0].responseuser','P21_5_6.response[0].responseuser','P22_5_6.response[0].responseuser']}
                            inputNames={['P20_5_6.response[0].responseuser','P23_5_6.response[0].responseuser']}
                            mainQTitle='5.6 Procesos ejecutivos, embargo, secuestro del bien, hipotecas, remates y lanzamientos con el sector financiero y solidario'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_7}
                            subOptions={[opt19_5_7, opt21_5_7, opt22_5_7]}
                            mainName='P18_5_7.response[0].responseuser'
                            subNames={['P19_5_7.response[0].responseuser','P21_5_7.response[0].responseuser','P22_5_7.response[0].responseuser']}
                            inputNames={['P20_5_7.response[0].responseuser','P23_5_7.response[0].responseuser']}
                            mainQTitle='5.7 Reportes a centrales de riesgo'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_8}
                            subOptions={[opt19_5_8, opt21_5_8, opt22_5_8]}
                            mainName='P18_5_8.response[0].responseuser'
                            subNames={['P19_5_8.response[0].responseuser','P21_5_8.response[0].responseuser','P22_5_8.response[0].responseuser']}
                            inputNames={['P20_5_8.response[0].responseuser','P23_5_8.response[0].responseuser']}
                            mainQTitle='5.8 Deudas por créditos educativos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_9}
                            subOptions={[opt19_5_9, opt21_5_9, opt22_5_9]}
                            mainName='P18_5_9.response[0].responseuser'
                            subNames={['P19_5_9.response[0].responseuser','P21_5_9.response[0].responseuser','P22_5_9.response[0].responseuser']}
                            inputNames={['P20_5_9.response[0].responseuser','P23_5_9.response[0].responseuser']}
                            mainQTitle='5.9 Pago de intereses por deudas educativas'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_5_10}
                            subOptions={[opt19_5_10, opt21_5_10, opt22_5_10]}
                            mainName='P18_5_10.response[0].responseuser'
                            subNames={['P19_5_10.response[0].responseuser','P21_5_10.response[0].responseuser','P22_5_10.response[0].responseuser']}
                            inputNames={['P20_5_10.response[0].responseuser','P23_5_10.response[0].responseuser']}
                            mainQTitle='5.10 Quiebra o insolvencia de personas naturales'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page7' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
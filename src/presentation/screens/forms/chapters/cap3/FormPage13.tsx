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
import { getInitialValuesPage13 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_12_1, opt18_12_2, opt18_12_3, opt18_12_4, opt18_12_5, opt18_12_6, opt19_12_1, opt19_12_2, opt19_12_3, opt19_12_4, opt19_12_5, opt19_12_6, opt21_12_1, opt21_12_2, opt21_12_3, opt21_12_4, opt21_12_5, opt21_12_6, opt22_12_1, opt22_12_2, opt22_12_3, opt22_12_4, opt22_12_5, opt22_12_6, opt24_12_1, opt24_12_2, opt24_12_3, opt24_12_4, opt24_12_5, opt24_12_6 } from '../../../../../utils/cap3/categoriesPage13';

export interface FormValues{
    P18_12_1: FormTemplate;
    P19_12_1: FormTemplate;
    P20_12_1: FormTemplate;
    P21_12_1: FormTemplate;
    P22_12_1: FormTemplate;
    P23_12_1: FormTemplate;
    P18_12_2: FormTemplate;
    P19_12_2: FormTemplate;
    P20_12_2: FormTemplate;
    P21_12_2: FormTemplate;
    P22_12_2: FormTemplate;
    P23_12_2: FormTemplate;
    P18_12_3: FormTemplate;
    P19_12_3: FormTemplate;
    P20_12_3: FormTemplate;
    P21_12_3: FormTemplate;
    P22_12_3: FormTemplate;
    P23_12_3: FormTemplate;
    P18_12_4: FormTemplate;
    P19_12_4: FormTemplate;
    P20_12_4: FormTemplate;
    P21_12_4: FormTemplate;
    P22_12_4: FormTemplate;
    P23_12_4: FormTemplate;
    P18_12_5: FormTemplate;
    P19_12_5: FormTemplate;
    P20_12_5: FormTemplate;
    P21_12_5: FormTemplate;
    P22_12_5: FormTemplate;
    P23_12_5: FormTemplate;
    P18_12_6: FormTemplate;
    P19_12_6: FormTemplate;
    P20_12_6: FormTemplate;
    P21_12_6: FormTemplate;
    P22_12_6: FormTemplate;
    P23_12_6: FormTemplate;
}


export const FormPage13 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage13();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>12. Educación y formación</Text>
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
                    navigation.navigate('page14' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_12_1}
                            subOptions={[opt19_12_1, opt21_12_1, opt22_12_1, opt24_12_1]}
                            mainName='P18_12_1.response[0].responseuser'
                            subNames={['P19_12_1.response[0].responseuser','P21_12_1.response[0].responseuser','P22_12_1.response[0].responseuser','P24_12_1.response[0].responseuser']}
                            inputNames={['P20_12_1.response[0].responseuser','P23_12_1.response[0].responseuser']}
                            mainQTitle='12.1 Problemas en el acceso a la educación básica y media'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_12_2}
                            subOptions={[opt19_12_2, opt21_12_2, opt22_12_2, opt24_12_2]}
                            mainName='P18_12_2.response[0].responseuser'
                            subNames={['P19_12_2.response[0].responseuser','P21_12_2.response[0].responseuser','P22_12_2.response[0].responseuser','P24_12_2.response[0].responseuser']}
                            inputNames={['P20_12_2.response[0].responseuser','P23_12_2.response[0].responseuser']}
                            mainQTitle='12.2 Problemas en el acceso a la educación superior'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_12_3}
                            subOptions={[opt19_12_3, opt21_12_3, opt22_12_3, opt24_12_3]}
                            mainName='P18_12_3.response[0].responseuser'
                            subNames={['P19_12_3.response[0].responseuser','P21_12_3.response[0].responseuser','P22_12_3.response[0].responseuser','P24_12_3.response[0].responseuser']}
                            inputNames={['P20_12_3.response[0].responseuser','P23_12_3.response[0].responseuser']}
                            mainQTitle='12.3 Condiciones de calidad en la prestación del servicio, negación'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_12_4}
                            subOptions={[opt19_12_4, opt21_12_4, opt22_12_4, opt24_12_4]}
                            mainName='P18_12_4.response[0].responseuser'
                            subNames={['P19_12_4.response[0].responseuser','P21_12_4.response[0].responseuser','P22_12_4.response[0].responseuser','P24_12_4.response[0].responseuser']}
                            inputNames={['P20_12_4.response[0].responseuser','P23_12_4.response[0].responseuser']}
                            mainQTitle='12.4 Derechos de gratuidad, matrícula de ingreso, materiales'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_12_5}
                            subOptions={[opt19_12_5, opt21_12_5, opt22_12_5, opt24_12_5]}
                            mainName='P18_12_5.response[0].responseuser'
                            subNames={['P19_12_5.response[0].responseuser','P21_12_5.response[0].responseuser','P22_12_5.response[0].responseuser','P24_12_5.response[0].responseuser']}
                            inputNames={['P20_12_5.response[0].responseuser','P23_12_5.response[0].responseuser']}
                            mainQTitle='12.5 Acceso y prestación inadecuada del servicio en relación con necesidades específicas de la persona'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_12_6}
                            subOptions={[opt19_12_6, opt21_12_6, opt22_12_6, opt24_12_6]}
                            mainName='P18_12_6.response[0].responseuser'
                            subNames={['P19_12_6.response[0].responseuser','P21_12_6.response[0].responseuser','P22_12_6.response[0].responseuser','P24_12_6.response[0].responseuser']}
                            inputNames={['P20_12_6.response[0].responseuser','P23_12_6.response[0].responseuser']}
                            mainQTitle='12.6 Ambiente educativo (matoneo, bullying, violencia).'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page12' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
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
import { getInitialValuesPage5 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_1_1, opt18_1_2, opt18_1_3, opt18_1_4, opt18_1_5, opt18_1_6, opt18_1_7, opt19_1_1, opt19_1_2, opt19_1_3, opt19_1_4, opt19_1_5, opt19_1_6, opt19_1_7, opt21_1_1, opt21_1_2, opt21_1_3, opt21_1_4, opt21_1_5, opt21_1_6, opt21_1_7, opt22_1_1, opt22_1_2, opt22_1_3, opt22_1_4, opt22_1_5, opt22_1_6, opt22_1_7, opt24_1_1, opt24_1_2, opt24_1_3, opt24_1_4, opt24_1_5, opt24_1_6, opt24_1_7 } from '../../../../../utils/cap3/categoriesPage5';

export interface FormValues{
    P18_1_1:FormTemplate;
    P19_1_1:FormTemplate;
    P20_1_1:FormTemplate;
    P21_1_1:FormTemplate;
    P22_1_1:FormTemplate;
    P23_1_1:FormTemplate;
    P18_1_2:FormTemplate;
    P19_1_2:FormTemplate;
    P20_1_2:FormTemplate;
    P21_1_2:FormTemplate;
    P22_1_2:FormTemplate;
    P23_1_2:FormTemplate;
    P18_1_3:FormTemplate;
    P19_1_3:FormTemplate;
    P20_1_3:FormTemplate;
    P21_1_3:FormTemplate;
    P22_1_3:FormTemplate;
    P23_1_3:FormTemplate;
    P18_1_4:FormTemplate;
    P19_1_4:FormTemplate;
    P20_1_4:FormTemplate;
    P21_1_4:FormTemplate;
    P22_1_4:FormTemplate;
    P23_1_4:FormTemplate;
    P18_1_5:FormTemplate;
    P19_1_5:FormTemplate;
    P20_1_5:FormTemplate;
    P21_1_5:FormTemplate;
    P22_1_5:FormTemplate;
    P23_1_5:FormTemplate;
    P18_1_6:FormTemplate;
    P19_1_6:FormTemplate;
    P20_1_6:FormTemplate;
    P21_1_6:FormTemplate;
    P22_1_6:FormTemplate;
    P23_1_6:FormTemplate;
    P18_1_7:FormTemplate;
    P19_1_7:FormTemplate;
    P20_1_7:FormTemplate;
    P21_1_7:FormTemplate;
    P22_1_7:FormTemplate;
    P23_1_7:FormTemplate;
    P24_1_1: FormTemplate;
    P24_1_2: FormTemplate;
    P24_1_3: FormTemplate;
    P24_1_4: FormTemplate;
    P24_1_5: FormTemplate;
    P24_1_6: FormTemplate;
    P24_1_7: FormTemplate;
}


export const FormPage5 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage5();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>1. Familiares</Text>
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
                    navigation.navigate('page6' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_1_1}
                            subOptions={[opt19_1_1, opt21_1_1, opt22_1_1, opt24_1_1]}
                            mainName='P18_1_1.response[0].responseuser'
                            subNames={['P19_1_1.response[0].responseuser','P21_1_1.response[0].responseuser','P22_1_1.response[0].responseuser', 'P24_1_1.response[0].responseuser']}
                            inputNames={['P20_1_1.response[0].responseuser','P23_1_1.response[0].responseuser']}
                            mainQTitle='1.1 Paternidad / maternidad o adopción'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_2}
                            subOptions={[opt19_1_2, opt21_1_2, opt22_1_2, opt24_1_2]}
                            mainName='P18_1_2.response[0].responseuser'
                            subNames={['P19_1_2.response[0].responseuser','P21_1_2.response[0].responseuser','P22_1_2.response[0].responseuser', 'P24_1_2.response[0].responseuser']}
                            inputNames={['P20_1_2.response[0].responseuser','P23_1_2.response[0].responseuser']}
                            mainQTitle='1.2 Cuota de alimentos, custodia, patria potestad, visitas'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_3}
                            subOptions={[opt19_1_3, opt21_1_3, opt22_1_3, opt24_1_3]}
                            mainName='P18_1_3.response[0].responseuser'
                            subNames={['P19_1_3.response[0].responseuser','P21_1_3.response[0].responseuser','P22_1_3.response[0].responseuser', 'P24_1_3.response[0].responseuser']}
                            inputNames={['P20_1_3.response[0].responseuser','P23_1_3.response[0].responseuser']}
                            mainQTitle='1.3 Separación, divorcio, liquidación, unión libre'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_4}
                            subOptions={[opt19_1_4, opt21_1_4, opt22_1_4, opt24_1_4]}
                            mainName='P18_1_4.response[0].responseuser'
                            subNames={['P19_1_4.response[0].responseuser','P21_1_4.response[0].responseuser','P22_1_4.response[0].responseuser', 'P24_1_4.response[0].responseuser']}
                            inputNames={['P20_1_4.response[0].responseuser','P23_1_4.response[0].responseuser']}
                            mainQTitle='1.4 División de propiedad / Separación de bienes'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_5}
                            subOptions={[opt19_1_5, opt21_1_5, opt22_1_5, opt24_1_5]}
                            mainName='P18_1_5.response[0].responseuser'
                            subNames={['P19_1_5.response[0].responseuser','P21_1_5.response[0].responseuser','P22_1_5.response[0].responseuser', 'P24_1_5.response[0].responseuser']}
                            inputNames={['P20_1_5.response[0].responseuser','P23_1_5.response[0].responseuser']}
                            mainQTitle='1.5 Herencias, sucesiones, testamentos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_6}
                            subOptions={[opt19_1_6, opt21_1_6, opt22_1_6, opt24_1_6]}
                            mainName='P18_1_6.response[0].responseuser'
                            subNames={['P19_1_6.response[0].responseuser','P21_1_6.response[0].responseuser','P22_1_6.response[0].responseuser', 'P24_1_6.response[0].responseuser']}
                            inputNames={['P20_1_6.response[0].responseuser','P23_1_6.response[0].responseuser']}
                            mainQTitle='1.6 Cuidado de personas que más lo requieren (niños, niñas y adolescentes, personas enfermas, personas con discapacidad, personas mayores)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_1_7}
                            subOptions={[opt19_1_7, opt21_1_7, opt22_1_7, opt24_1_7]}
                            mainName='P18_1_7.response[0].responseuser'
                            subNames={['P19_1_7.response[0].responseuser','P21_1_7.response[0].responseuser','P22_1_7.response[0].responseuser', 'P24_1_7.response[0].responseuser']}
                            inputNames={['P20_1_7.response[0].responseuser','P23_1_7.response[0].responseuser']}
                            mainQTitle='1.7 Quien asume los gastos del hogar'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />


                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
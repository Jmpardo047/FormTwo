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
import { getInitialValuesPage15 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_14_1, opt18_14_2, opt18_14_3, opt18_14_4, opt18_14_5, opt18_14_6, opt18_14_7, opt19_14_1, opt19_14_2, opt19_14_3, opt19_14_4, opt19_14_5, opt19_14_6, opt19_14_7, opt21_14_1, opt21_14_2, opt21_14_3, opt21_14_4, opt21_14_5, opt21_14_6, opt21_14_7, opt22_14_1, opt22_14_2, opt22_14_3, opt22_14_4, opt22_14_5, opt22_14_6, opt22_14_7, opt24_14_1, opt24_14_2, opt24_14_3, opt24_14_4, opt24_14_5, opt24_14_6, opt24_14_7 } from '../../../../../utils/cap3/categoriesPage15';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';

export interface FormValues{
    P18_14_1: FormTemplate;
    P19_14_1: FormTemplate;
    P20_14_1: FormTemplate;
    P21_14_1: FormTemplate;
    P22_14_1: FormTemplate;
    P23_14_1: FormTemplate;
    P18_14_2: FormTemplate;
    P19_14_2: FormTemplate;
    P20_14_2: FormTemplate;
    P21_14_2: FormTemplate;
    P22_14_2: FormTemplate;
    P23_14_2: FormTemplate;
    P18_14_3: FormTemplate;
    P19_14_3: FormTemplate;
    P20_14_3: FormTemplate;
    P21_14_3: FormTemplate;
    P22_14_3: FormTemplate;
    P23_14_3: FormTemplate;
    P18_14_4: FormTemplate;
    P19_14_4: FormTemplate;
    P20_14_4: FormTemplate;
    P21_14_4: FormTemplate;
    P22_14_4: FormTemplate;
    P23_14_4: FormTemplate;
    P18_14_5: FormTemplate;
    P19_14_5: FormTemplate;
    P20_14_5: FormTemplate;
    P21_14_5: FormTemplate;
    P22_14_5: FormTemplate;
    P23_14_5: FormTemplate;
    P18_14_6: FormTemplate;
    P19_14_6: FormTemplate;
    P20_14_6: FormTemplate;
    P21_14_6: FormTemplate;
    P22_14_6: FormTemplate;
    P23_14_6: FormTemplate;
    P18_14_7: FormTemplate;
    P19_14_7: FormTemplate;
    P20_14_7: FormTemplate;
    P21_14_7: FormTemplate;
    P22_14_7: FormTemplate;
    P23_14_7: FormTemplate;
    P25: FormTemplate;
}


export const FormPage15 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage15();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>14. Afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público</Text>
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
                    navigation.navigate('page16' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_14_1}
                            subOptions={[opt19_14_1, opt21_14_1, opt22_14_1, opt24_14_1]}
                            mainName='P18_14_1.response[0].responseuser'
                            subNames={['P19_14_1.response[0].responseuser','P21_14_1.response[0].responseuser','P22_14_1.response[0].responseuser','P24_14_1.response[0].responseuser']}
                            inputNames={['P20_14_1.response[0].responseuser','P23_14_1.response[0].responseuser']}
                            mainQTitle='14.1 Desplazamiento forzado y desaparición forzada'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_2}
                            subOptions={[opt19_14_2, opt21_14_2, opt22_14_2,opt24_14_2]}
                            mainName='P18_14_2.response[0].responseuser'
                            subNames={['P19_14_2.response[0].responseuser','P21_14_2.response[0].responseuser','P22_14_2.response[0].responseuser','P24_14_2.response[0].responseuser']}
                            inputNames={['P20_14_2.response[0].responseuser','P23_14_2.response[0].responseuser']}
                            mainQTitle='14.2 Agresiones por la Policía o las Fuerzas Militares (batidas ilegales, falsos positivos, ejecuciones extrajudiciales, etc.)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_3}
                            subOptions={[opt19_14_3, opt21_14_3, opt22_14_3, opt24_14_3]}
                            mainName='P18_14_3.response[0].responseuser'
                            subNames={['P19_14_3.response[0].responseuser','P21_14_3.response[0].responseuser','P22_14_3.response[0].responseuser','P24_14_3.response[0].responseuser']}
                            inputNames={['P20_14_3.response[0].responseuser','P23_14_3.response[0].responseuser']}
                            mainQTitle='14.3 Incumplimiento en la sustitución de cultivos ilícitos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_4}
                            subOptions={[opt19_14_4, opt21_14_4, opt22_14_4, opt24_14_4]}
                            mainName='P18_14_4.response[0].responseuser'
                            subNames={['P19_14_4.response[0].responseuser','P21_14_4.response[0].responseuser','P22_14_4.response[0].responseuser','P24_14_4.response[0].responseuser']}
                            inputNames={['P20_14_4.response[0].responseuser','P23_14_4.response[0].responseuser']}
                            mainQTitle='14.4 Delitos contra la vida y/o la integridad personal ocurridos con ocasión del conflicto armado (tortura, homicidio, secuestro, violencia sexual, minas antipersona)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_5}
                            subOptions={[opt19_14_5, opt21_14_5, opt22_14_5, opt24_14_5]}
                            mainName='P18_14_5.response[0].responseuser'
                            subNames={['P19_14_5.response[0].responseuser','P21_14_5.response[0].responseuser','P22_14_5.response[0].responseuser','P24_14_5.response[0].responseuser']}
                            inputNames={['P20_14_5.response[0].responseuser','P23_14_5.response[0].responseuser']}
                            mainQTitle='14.5 Delitos contra el patrimonio ocurridos con ocasión del conflicto armado (extorsión, hurto, daño en bien ajeno)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_6}
                            subOptions={[opt19_14_6, opt21_14_6, opt22_14_6, opt24_14_6]}
                            mainName='P18_14_6.response[0].responseuser'
                            subNames={['P19_14_6.response[0].responseuser','P21_14_6.response[0].responseuser','P22_14_6.response[0].responseuser','P24_14_6.response[0].responseuser']}
                            inputNames={['P20_14_6.response[0].responseuser','P23_14_6.response[0].responseuser']}
                            mainQTitle='14.6 Terrorismo y amenazas'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_14_7}
                            subOptions={[opt19_14_7, opt21_14_7, opt22_14_7, opt24_14_7]}
                            mainName='P18_14_7.response[0].responseuser'
                            subNames={['P19_14_7.response[0].responseuser','P21_14_7.response[0].responseuser','P22_14_7.response[0].responseuser','P24_14_7.response[0].responseuser']}
                            inputNames={['P20_14_7.response[0].responseuser','P23_14_7.response[0].responseuser']}
                            mainQTitle='14.7 Despojo de tierras'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?','P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <InputComponent
                            info='P25' 
                            textTitle=' 25. ¿Cuál sería su principal recomendación para mejorar el acceso a la justicia en el municipio donde reside?'
                            handleChange={(value: string) => setFieldValue('P25.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P25.response[0].responseuser[0]')}
                            values={values.P25.response[0].responseuser} 
                        />
                        <ErrorMessage errors={errors} touched={touched} fieldName="P25" />
                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page14' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
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
import { getInitialValuesPage12 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_11_1, opt18_11_10, opt18_11_2, opt18_11_3, opt18_11_4, opt18_11_5, opt18_11_6, opt18_11_7, opt18_11_8, opt18_11_9, opt19_11_1, opt19_11_10, opt19_11_2, opt19_11_3, opt19_11_4, opt19_11_5, opt19_11_6, opt19_11_7, opt19_11_8, opt19_11_9, opt21_11_1, opt21_11_10, opt21_11_2, opt21_11_3, opt21_11_4, opt21_11_5, opt21_11_6, opt21_11_7, opt21_11_8, opt21_11_9, opt22_11_1, opt22_11_10, opt22_11_2, opt22_11_3, opt22_11_4, opt22_11_5, opt22_11_6, opt22_11_7, opt22_11_8, opt22_11_9, opt24_11_1, opt24_11_10, opt24_11_2, opt24_11_3, opt24_11_4, opt24_11_5, opt24_11_6, opt24_11_7, opt24_11_8, opt24_11_9 } from '../../../../../utils/cap3/categoriesPage12';

export interface FormValues{
    P18_11_1: FormTemplate;
    P19_11_1: FormTemplate;
    P20_11_1: FormTemplate;
    P21_11_1: FormTemplate;
    P22_11_1: FormTemplate;
    P23_11_1: FormTemplate;
    P18_11_2: FormTemplate;
    P19_11_2: FormTemplate;
    P20_11_2: FormTemplate;
    P21_11_2: FormTemplate;
    P22_11_2: FormTemplate;
    P23_11_2: FormTemplate;
    P18_11_3: FormTemplate;
    P19_11_3: FormTemplate;
    P20_11_3: FormTemplate;
    P21_11_3: FormTemplate;
    P22_11_3: FormTemplate;
    P23_11_3: FormTemplate;
    P18_11_4: FormTemplate;
    P19_11_4: FormTemplate;
    P20_11_4: FormTemplate;
    P21_11_4: FormTemplate;
    P22_11_4: FormTemplate;
    P23_11_4: FormTemplate;
    P18_11_5: FormTemplate;
    P19_11_5: FormTemplate;
    P20_11_5: FormTemplate;
    P21_11_5: FormTemplate;
    P22_11_5: FormTemplate;
    P23_11_5: FormTemplate;
    P18_11_6: FormTemplate;
    P19_11_6: FormTemplate;
    P20_11_6: FormTemplate;
    P21_11_6: FormTemplate;
    P22_11_6: FormTemplate;
    P23_11_6: FormTemplate;
    P18_11_7: FormTemplate;
    P19_11_7: FormTemplate;
    P20_11_7: FormTemplate;
    P21_11_7: FormTemplate;
    P22_11_7: FormTemplate;
    P23_11_7: FormTemplate;
    P18_11_8: FormTemplate;
    P19_11_8: FormTemplate;
    P20_11_8: FormTemplate;
    P21_11_8: FormTemplate;
    P22_11_8: FormTemplate;
    P23_11_8: FormTemplate;
    P18_11_9: FormTemplate;
    P19_11_9: FormTemplate;
    P20_11_9: FormTemplate;
    P21_11_9: FormTemplate;
    P22_11_9: FormTemplate;
    P23_11_9: FormTemplate;
    P18_11_10: FormTemplate;
    P19_11_10: FormTemplate;
    P20_11_10: FormTemplate;
    P21_11_10: FormTemplate;
    P22_11_10: FormTemplate;
    P23_11_10: FormTemplate;
    

}


export const FormPage12 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage12();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>11. Relación con el Estado</Text>
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
                    navigation.navigate('page13' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_11_1}
                            subOptions={[opt19_11_1, opt21_11_1, opt22_11_1, opt24_11_1]}
                            mainName='P18_11_1.response[0].responseuser'
                            subNames={['P19_11_1.response[0].responseuser','P21_11_1.response[0].responseuser','P22_11_1.response[0].responseuser','P24_11_1.response[0].responseuser']}
                            inputNames={['P20_11_1.response[0].responseuser','P23_11_1.response[0].responseuser']}
                            mainQTitle='11.1 Daños o perjuicios ocasionados por actuaciones de instituciones públicas o autoridades del Estado'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_2}
                            subOptions={[opt19_11_2, opt21_11_2, opt22_11_2, opt24_11_2]}
                            mainName='P18_11_2.response[0].responseuser'
                            subNames={['P19_11_2.response[0].responseuser','P21_11_2.response[0].responseuser','P22_11_2.response[0].responseuser','P24_11_2.response[0].responseuser']}
                            inputNames={['P20_11_2.response[0].responseuser','P23_11_2.response[0].responseuser']}
                            mainQTitle='11.2 Expropiaciones'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_3}
                            subOptions={[opt19_11_3, opt21_11_3, opt22_11_3, opt24_11_3]}
                            mainName='P18_11_3.response[0].responseuser'
                            subNames={['P19_11_3.response[0].responseuser','P21_11_3.response[0].responseuser','P22_11_3.response[0].responseuser','P24_11_3.response[0].responseuser']}
                            inputNames={['P20_11_3.response[0].responseuser','P23_11_3.response[0].responseuser']}
                            mainQTitle='11.3 Deficiencia en los servicios prestados por el Estado diferentes de los servicios públicos domiciliarios.'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_4}
                            subOptions={[opt19_11_4, opt21_11_4, opt22_11_4, opt24_11_4]}
                            mainName='P18_11_4.response[0].responseuser'
                            subNames={['P19_11_4.response[0].responseuser','P21_11_4.response[0].responseuser','P22_11_4.response[0].responseuser','P24_11_4.response[0].responseuser']}
                            inputNames={['P20_11_4.response[0].responseuser','P23_11_4.response[0].responseuser']}
                            mainQTitle='11.4 Abuso de la autoridad estatal'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_5}
                            subOptions={[opt19_11_5, opt21_11_5, opt22_11_5, opt24_11_5]}
                            mainName='P18_11_5.response[0].responseuser'
                            subNames={['P19_11_5.response[0].responseuser','P21_11_5.response[0].responseuser','P22_11_5.response[0].responseuser','P24_11_5.response[0].responseuser']}
                            inputNames={['P20_11_5.response[0].responseuser','P23_11_5.response[0].responseuser']}
                            mainQTitle='11.5 Pago y/o cobro de impuesto, multas y sanciones (asuntos de carácter tributario)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_6}
                            subOptions={[opt19_11_6, opt21_11_6, opt22_11_6, opt24_11_6]}
                            mainName='P18_11_6.response[0].responseuser'
                            subNames={['P19_11_6.response[0].responseuser','P21_11_6.response[0].responseuser','P22_11_6.response[0].responseuser','P24_11_6.response[0].responseuser']}
                            inputNames={['P20_11_6.response[0].responseuser','P23_11_6.response[0].responseuser']}
                            mainQTitle='11.6 Negación en obtención de documentos, en la realización de trámites, procesos ante el Estado'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_7}
                            subOptions={[opt19_11_7, opt21_11_7, opt22_11_7, opt24_11_7]}
                            mainName='P18_11_7.response[0].responseuser'
                            subNames={['P19_11_7.response[0].responseuser','P21_11_7.response[0].responseuser','P22_11_7.response[0].responseuser','P24_11_7.response[0].responseuser']}
                            inputNames={['P20_11_7.response[0].responseuser','P23_11_7.response[0].responseuser']}
                            mainQTitle='11.7 Problemas relacionados con comparendos de tránsito, por contravenciones (notificación tardía, no conformidad)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_8}
                            subOptions={[opt19_11_8, opt21_11_8, opt22_11_8, opt24_11_8]}
                            mainName='P18_11_8.response[0].responseuser'
                            subNames={['P19_11_8.response[0].responseuser','P21_11_8.response[0].responseuser','P22_11_8.response[0].responseuser','P24_11_8.response[0].responseuser']}
                            inputNames={['P20_11_8.response[0].responseuser','P23_11_8.response[0].responseuser']}
                            mainQTitle='11.8 Ejecución o incumplimiento de un contrato estatal (menos contratos laborales)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_9}
                            subOptions={[opt19_11_9, opt21_11_9, opt22_11_9, opt24_11_9]}
                            mainName='P18_11_9.response[0].responseuser'
                            subNames={['P19_11_9.response[0].responseuser','P21_11_9.response[0].responseuser','P22_11_9.response[0].responseuser','P24_11_9.response[0].responseuser']}
                            inputNames={['P20_11_9.response[0].responseuser','P23_11_9.response[0].responseuser']}
                            mainQTitle='11.9 Trámites de naturalización de migrantes y expedición de documentos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_11_10}
                            subOptions={[opt19_11_10, opt21_11_10, opt22_11_10, opt24_11_10]}
                            mainName='P18_11_10.response[0].responseuser'
                            subNames={['P19_11_10.response[0].responseuser','P21_11_10.response[0].responseuser','P22_11_10.response[0].responseuser','P24_11_10.response[0].responseuser']}
                            inputNames={['P20_11_10.response[0].responseuser','P23_11_10.response[0].responseuser']}
                            mainQTitle='11.10 Daños o perjuicios ocasionados por actuaciones de funcionarios judiciales, auxiliares de la justicia y abogados litigantes.'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page11' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
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
import { getInitialValuesPage6 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_2_1, opt18_2_2, opt18_2_3, opt18_2_4, opt18_2_5, opt18_3_1, opt18_3_2, opt18_3_3, opt19_2_1, opt19_2_2, opt19_2_3, opt19_2_4, opt19_2_5, opt19_3_1, opt19_3_2, opt19_3_3, opt21_2_1, opt21_2_2, opt21_2_3, opt21_2_4, opt21_2_5, opt21_3_1, opt21_3_2, opt21_3_3, opt22_2_1, opt22_2_2, opt22_2_3, opt22_2_4, opt22_2_5, opt22_3_1, opt22_3_2, opt22_3_3, opt24_2_1, opt24_2_2, opt24_2_3, opt24_2_4, opt24_2_5, opt24_3_1, opt24_3_2, opt24_3_3 } from '../../../../../utils/cap3/categoriesPage6';

export interface FormValues{
    P18_2_1: FormTemplate;
    P19_2_1: FormTemplate;
    P20_2_1: FormTemplate;
    P21_2_1: FormTemplate;
    P22_2_1: FormTemplate;
    P23_2_1: FormTemplate;
    P18_2_2: FormTemplate;
    P19_2_2: FormTemplate;
    P20_2_2: FormTemplate;
    P21_2_2: FormTemplate;
    P22_2_2: FormTemplate;
    P23_2_2: FormTemplate;
    P18_2_3: FormTemplate;
    P19_2_3: FormTemplate;
    P20_2_3: FormTemplate;
    P21_2_3: FormTemplate;
    P22_2_3: FormTemplate;
    P23_2_3: FormTemplate;  
    P18_2_4: FormTemplate;
    P19_2_4: FormTemplate;
    P20_2_4: FormTemplate;
    P21_2_4: FormTemplate;
    P22_2_4: FormTemplate;
    P23_2_4: FormTemplate;  
    P18_2_5: FormTemplate;
    P19_2_5: FormTemplate;
    P20_2_5: FormTemplate;
    P21_2_5: FormTemplate;
    P22_2_5: FormTemplate;
    P23_2_5: FormTemplate; 
    P18_3_1: FormTemplate;
    P19_3_1: FormTemplate;
    P20_3_1: FormTemplate;
    P21_3_1: FormTemplate;
    P22_3_1: FormTemplate;
    P23_3_1: FormTemplate;
    P18_3_2: FormTemplate;
    P19_3_2: FormTemplate;
    P20_3_2: FormTemplate;
    P21_3_2: FormTemplate;
    P22_3_2: FormTemplate;
    P23_3_2: FormTemplate;
    P18_3_3: FormTemplate;
    P19_3_3: FormTemplate;
    P20_3_3: FormTemplate;
    P21_3_3: FormTemplate;
    P22_3_3: FormTemplate;
    P23_3_3: FormTemplate;
    P24_2_1: FormTemplate;
    P24_2_2: FormTemplate;
    P24_2_3: FormTemplate;
    P24_2_4: FormTemplate;
    P24_2_5: FormTemplate;
    P24_3_1: FormTemplate;
    P24_3_2: FormTemplate;
    P24_3_3: FormTemplate; 
}


export const FormPage6 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage6();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>2. Consumo de producto, bien o servicio</Text>
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
                    navigation.navigate('page7' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_2_1}
                            subOptions={[opt19_2_1, opt21_2_1, opt22_2_1, opt24_2_1]}
                            mainName='P18_2_1.response[0].responseuser'
                            subNames={['P19_2_1.response[0].responseuser','P21_2_1.response[0].responseuser','P22_2_1.response[0].responseuser','P24_2_1.response[0].responseuser']}
                            inputNames={['P20_2_1.response[0].responseuser','P23_2_1.response[0].responseuser']}
                            mainQTitle='2.1 Mala calidad de los productos o servicios adquiridos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_2_2}
                            subOptions={[opt19_2_2, opt21_2_2, opt22_2_2, opt24_2_2]}
                            mainName='P18_2_2.response[0].responseuser'
                            subNames={['P19_2_2.response[0].responseuser','P21_2_2.response[0].responseuser','P22_2_2.response[0].responseuser','P24_2_2.response[0].responseuser']}
                            inputNames={['P20_2_2.response[0].responseuser','P23_2_2.response[0].responseuser']}
                            mainQTitle='2.2 Incumplimiento de contratos o garantías de productos o servicios'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_2_3}
                            subOptions={[opt19_2_3, opt21_2_3, opt22_2_3, opt24_2_3]}
                            mainName='P18_2_3.response[0].responseuser'
                            subNames={['P19_2_3.response[0].responseuser','P21_2_3.response[0].responseuser','P22_2_3.response[0].responseuser','P24_2_3.response[0].responseuser']}
                            inputNames={['P20_2_3.response[0].responseuser','P23_2_3.response[0].responseuser']}
                            mainQTitle='2.3 Manejo de datos personales'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_2_4}
                            subOptions={[opt19_2_4, opt21_2_4, opt22_2_4, opt24_2_4]}
                            mainName='P18_2_4.response[0].responseuser'
                            subNames={['P19_2_4.response[0].responseuser','P21_2_4.response[0].responseuser','P22_2_4.response[0].responseuser','P24_2_4.response[0].responseuser']}
                            inputNames={['P20_2_4.response[0].responseuser','P23_2_4.response[0].responseuser']}
                            mainQTitle='2.4 Publicidad engañosa'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_2_5}
                            subOptions={[opt19_2_5, opt21_2_5, opt22_2_5, opt24_2_5]}
                            mainName='P18_2_5.response[0].responseuser'
                            subNames={['P19_2_5.response[0].responseuser','P21_2_5.response[0].responseuser','P22_2_5.response[0].responseuser','P24_2_5.response[0].responseuser']}
                            inputNames={['P20_2_5.response[0].responseuser','P23_2_5.response[0].responseuser']}
                            mainQTitle='2.5 Sobrecostos en tarifas'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />
                        
                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>3. Prestación de un servicio público domiciliario</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt18_3_1}
                            subOptions={[opt19_3_1, opt21_3_1, opt22_3_1, opt24_3_1]}
                            mainName='P18_3_1.response[0].responseuser'
                            subNames={['P19_3_1.response[0].responseuser','P21_3_1.response[0].responseuser','P22_3_1.response[0].responseuser','P24_3_1.response[0].responseuser']}
                            inputNames={['P20_3_1.response[0].responseuser','P23_3_1.response[0].responseuser']}
                            mainQTitle='3.1 Carencia, desconexión, prestación inadecuada del servicio'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_3_2}
                            subOptions={[opt19_3_2, opt21_3_2, opt22_3_2, opt24_3_2]}
                            mainName='P18_3_2.response[0].responseuser'
                            subNames={['P19_3_2.response[0].responseuser','P21_3_2.response[0].responseuser','P22_3_2.response[0].responseuser','P24_3_2.response[0].responseuser']}
                            inputNames={['P20_3_2.response[0].responseuser','P23_3_2.response[0].responseuser']}
                            mainQTitle='3.2 Facturación, tarifa y sobrecostos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_3_3}
                            subOptions={[opt19_3_3, opt21_3_3, opt22_3_3, opt24_3_3]}
                            mainName='P18_3_3.response[0].responseuser'
                            subNames={['P19_3_3.response[0].responseuser','P21_3_3.response[0].responseuser','P22_3_3.response[0].responseuser','P24_3_3.response[0].responseuser']}
                            inputNames={['P20_3_3.response[0].responseuser','P23_3_3.response[0].responseuser']}
                            mainQTitle='3.3 Instalación, uso ilegal de la instalación'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page5' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
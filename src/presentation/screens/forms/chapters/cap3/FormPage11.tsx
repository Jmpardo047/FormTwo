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
import { getInitialValuesPage11 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt18_10_1, opt18_10_10, opt18_10_11, opt18_10_12, opt18_10_2, opt18_10_3, opt18_10_4, opt18_10_5, opt18_10_6, opt18_10_7, opt18_10_8, opt18_10_9, opt18_9_1, opt18_9_2, opt18_9_3, opt18_9_4, opt19_10_1, opt19_10_10, opt19_10_11, opt19_10_12, opt19_10_2, opt19_10_3, opt19_10_4, opt19_10_5, opt19_10_6, opt19_10_7, opt19_10_8, opt19_10_9, opt19_9_1, opt19_9_2, opt19_9_3, opt19_9_4, opt21_10_1, opt21_10_10, opt21_10_11, opt21_10_12, opt21_10_2, opt21_10_3, opt21_10_4, opt21_10_5, opt21_10_6, opt21_10_7, opt21_10_8, opt21_10_9, opt21_9_1, opt21_9_2, opt21_9_3, opt21_9_4, opt22_10_1, opt22_10_10, opt22_10_11, opt22_10_12, opt22_10_2, opt22_10_3, opt22_10_4, opt22_10_5, opt22_10_6, opt22_10_7, opt22_10_8, opt22_10_9, opt22_9_1, opt22_9_2, opt22_9_3, opt22_9_4, opt24_10_1, opt24_10_10, opt24_10_11, opt24_10_12, opt24_10_2, opt24_10_3, opt24_10_4, opt24_10_5, opt24_10_6, opt24_10_7, opt24_10_8, opt24_10_9, opt24_9_1, opt24_9_2, opt24_9_3, opt24_9_4 } from '../../../../../utils/cap3/categoriesPage11';

export interface FormValues{
    P18_9_1: FormTemplate;
    P19_9_1: FormTemplate;
    P20_9_1: FormTemplate;
    P21_9_1: FormTemplate;
    P22_9_1: FormTemplate;
    P23_9_1: FormTemplate;
    P18_9_2: FormTemplate;
    P19_9_2: FormTemplate;
    P20_9_2: FormTemplate;
    P21_9_2: FormTemplate;
    P22_9_2: FormTemplate;
    P23_9_2: FormTemplate;
    P18_9_3: FormTemplate;
    P19_9_3: FormTemplate;
    P20_9_3: FormTemplate;
    P21_9_3: FormTemplate;
    P22_9_3: FormTemplate;
    P23_9_3: FormTemplate;
    P18_9_4: FormTemplate;
    P19_9_4: FormTemplate;
    P20_9_4: FormTemplate;
    P21_9_4: FormTemplate;
    P22_9_4: FormTemplate;
    P23_9_4: FormTemplate;
    P18_10_1: FormTemplate;
    P19_10_1: FormTemplate;
    P20_10_1: FormTemplate;
    P21_10_1: FormTemplate;
    P22_10_1: FormTemplate;
    P23_10_1: FormTemplate;
    P18_10_2: FormTemplate;
    P19_10_2: FormTemplate;
    P20_10_2: FormTemplate;
    P21_10_2: FormTemplate;
    P22_10_2: FormTemplate;
    P23_10_2: FormTemplate;
    P18_10_3: FormTemplate;
    P19_10_3: FormTemplate;
    P20_10_3: FormTemplate;
    P21_10_3: FormTemplate;
    P22_10_3: FormTemplate;
    P23_10_3: FormTemplate;
    P18_10_4: FormTemplate;
    P19_10_4: FormTemplate;
    P20_10_4: FormTemplate;
    P21_10_4: FormTemplate;
    P22_10_4: FormTemplate;
    P23_10_4: FormTemplate;
    P18_10_5: FormTemplate;
    P19_10_5: FormTemplate;
    P20_10_5: FormTemplate;
    P21_10_5: FormTemplate;
    P22_10_5: FormTemplate;
    P23_10_5: FormTemplate;
    P18_10_6: FormTemplate;
    P19_10_6: FormTemplate;
    P20_10_6: FormTemplate;
    P21_10_6: FormTemplate;
    P22_10_6: FormTemplate;
    P23_10_6: FormTemplate;
    P18_10_7: FormTemplate;
    P19_10_7: FormTemplate;
    P20_10_7: FormTemplate;
    P21_10_7: FormTemplate;
    P22_10_7: FormTemplate;
    P23_10_7: FormTemplate;
    P18_10_8: FormTemplate;
    P19_10_8: FormTemplate;
    P20_10_8: FormTemplate;
    P21_10_8: FormTemplate;
    P22_10_8: FormTemplate;
    P23_10_8: FormTemplate;
    P18_10_9: FormTemplate;
    P19_10_9: FormTemplate;
    P20_10_9: FormTemplate;
    P21_10_9: FormTemplate;
    P22_10_9: FormTemplate;
    P23_10_9: FormTemplate;
    P18_10_10: FormTemplate;
    P19_10_10: FormTemplate;
    P20_10_10: FormTemplate;
    P21_10_10: FormTemplate;
    P22_10_10: FormTemplate;
    P23_10_10: FormTemplate;
    P18_10_11: FormTemplate;
    P19_10_11: FormTemplate;
    P20_10_11: FormTemplate;
    P21_10_11: FormTemplate;
    P22_10_11: FormTemplate;
    P23_10_11: FormTemplate;
    P18_10_12: FormTemplate;
    P19_10_12: FormTemplate;
    P20_10_12: FormTemplate;
    P21_10_12: FormTemplate;
    P22_10_12: FormTemplate;
    P23_10_12: FormTemplate;
        
}


export const FormPage11 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage11();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>9. Medio ambiente y acceso a recursos comunitarios</Text>
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
                    navigation.navigate('page12' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <Text>
                            P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt18_9_1}
                            subOptions={[opt19_9_1, opt21_9_1, opt22_9_1, opt24_9_1]}
                            mainName='P18_9_1.response[0].responseuser'
                            subNames={['P19_9_1.response[0].responseuser','P21_9_1.response[0].responseuser','P22_9_1.response[0].responseuser','P24_9_1.response[0].responseuser']}
                            inputNames={['P20_9_1.response[0].responseuser','P23_9_1.response[0].responseuser']}
                            mainQTitle='9.1 Impacto ambiental producido por la actividad minero-energética'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_9_2}
                            subOptions={[opt19_9_2, opt21_9_2, opt22_9_2, opt24_9_2]}
                            mainName='P18_9_2.response[0].responseuser'
                            subNames={['P19_9_2.response[0].responseuser','P21_9_2.response[0].responseuser','P22_9_2.response[0].responseuser','P24_9_2.response[0].responseuser']}
                            inputNames={['P20_9_2.response[0].responseuser','P23_9_2.response[0].responseuser']}
                            mainQTitle='9.2 Contaminación o deforestación ambiental (fumigaciones, aspersión con glifosato, tala de árboles, aguas, incendios, pesca)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_9_3}
                            subOptions={[opt19_9_3, opt21_9_3, opt22_9_3, opt24_9_3]}
                            mainName='P18_9_3.response[0].responseuser'
                            subNames={['P19_9_3.response[0].responseuser','P21_9_3.response[0].responseuser','P22_9_3.response[0].responseuser','P24_9_3.response[0].responseuser']}
                            inputNames={['P20_9_3.response[0].responseuser','P23_9_3.response[0].responseuser']}
                            mainQTitle='9.3 Extracción y explotación ilícita de recursos ambientales (minerales, madera, hidrocarburos, fuentes hídricas)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_9_4}
                            subOptions={[opt19_9_4, opt21_9_4, opt22_9_4, opt24_9_4]}
                            mainName='P18_9_4.response[0].responseuser'
                            subNames={['P19_9_4.response[0].responseuser','P21_9_4.response[0].responseuser','P22_9_4.response[0].responseuser','P24_9_4.response[0].responseuser']}
                            inputNames={['P20_9_4.response[0].responseuser','P23_9_4.response[0].responseuser']}
                            mainQTitle='9.4 Acceso a recursos comunitarios (agua, pesca, caza, vías terciarias)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>10. Prestación de los servicios de salud, pensión y riesgos laborales</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt18_10_1}
                            subOptions={[opt19_10_1, opt21_10_1, opt22_10_1, opt24_10_1]}
                            mainName='P18_10_1.response[0].responseuser'
                            subNames={['P19_10_1.response[0].responseuser','P21_10_1.response[0].responseuser','P22_10_1.response[0].responseuser','P24_10_1.response[0].responseuser']}
                            inputNames={['P20_10_1.response[0].responseuser','P23_10_1.response[0].responseuser']}
                            mainQTitle='10.1 Afiliación (Sistema general de seguridad social en salud y pensión, ARL y riesgos laborales)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_2}
                            subOptions={[opt19_10_2, opt21_10_2, opt22_10_2, opt24_10_2]}
                            mainName='P18_10_2.response[0].responseuser'
                            subNames={['P19_10_2.response[0].responseuser','P21_10_2.response[0].responseuser','P22_10_2.response[0].responseuser','P24_10_2.response[0].responseuser']}
                            inputNames={['P20_10_2.response[0].responseuser','P23_10_2.response[0].responseuser']}
                            mainQTitle='10.2 Registro y categorización del SISBEN / régimen subsidiado'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_3}
                            subOptions={[opt19_10_3, opt21_10_3, opt22_10_3, opt24_10_3]}
                            mainName='P18_10_3.response[0].responseuser'
                            subNames={['P19_10_3.response[0].responseuser','P21_10_3.response[0].responseuser','P22_10_3.response[0].responseuser','P24_10_3.response[0].responseuser']}
                            inputNames={['P20_10_3.response[0].responseuser','P23_10_3.response[0].responseuser']}
                            mainQTitle='10.3 Servicios básicos (citas, autorizaciones de procedimientos y/o medicamentos, pagos)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_4}
                            subOptions={[opt19_10_4, opt21_10_4, opt22_10_4, opt24_10_4]}
                            mainName='P18_10_4.response[0].responseuser'
                            subNames={['P19_10_4.response[0].responseuser','P21_10_4.response[0].responseuser','P22_10_4.response[0].responseuser','P24_10_4.response[0].responseuser']}
                            inputNames={['P20_10_4.response[0].responseuser','P23_10_4.response[0].responseuser']}
                            mainQTitle='10.4 Servicio por enfermedades crónicas y enfermedades de alto costo (autorizaciones de procedimientos y/o cirugías, medicamentos, pagos)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_5}
                            subOptions={[opt19_10_5, opt21_10_5, opt22_10_5, opt24_10_5]}
                            mainName='P18_10_5.response[0].responseuser'
                            subNames={['P19_10_5.response[0].responseuser','P21_10_5.response[0].responseuser','P22_10_5.response[0].responseuser','P24_10_5.response[0].responseuser']}
                            inputNames={['P20_10_5.response[0].responseuser','P23_10_5.response[0].responseuser']}
                            mainQTitle='10.5 Negación del servicio'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_6}
                            subOptions={[opt19_10_6, opt21_10_6, opt22_10_6, opt24_10_6]}
                            mainName='P18_10_6.response[0].responseuser'
                            subNames={['P19_10_6.response[0].responseuser','P21_10_6.response[0].responseuser','P22_10_6.response[0].responseuser','P24_10_6.response[0].responseuser']}
                            inputNames={['P20_10_6.response[0].responseuser','P23_10_6.response[0].responseuser']}
                            mainQTitle='10.6 Demora en la atención del servicio (citas, autorizaciones de procedimientos y/o medicamentos, pagos)'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_7}
                            subOptions={[opt19_10_7, opt21_10_7, opt22_10_7, opt24_10_7]}
                            mainName='P18_10_7.response[0].responseuser'
                            subNames={['P19_10_7.response[0].responseuser','P21_10_7.response[0].responseuser','P22_10_7.response[0].responseuser','P24_10_7.response[0].responseuser']}
                            inputNames={['P20_10_7.response[0].responseuser','P23_10_7.response[0].responseuser']}
                            mainQTitle='10.7 Calidad del servicio'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_8}
                            subOptions={[opt19_10_8, opt21_10_8, opt22_10_8, opt24_10_8]}
                            mainName='P18_10_8.response[0].responseuser'
                            subNames={['P19_10_8.response[0].responseuser','P21_10_8.response[0].responseuser','P22_10_8.response[0].responseuser','P24_10_8.response[0].responseuser']}
                            inputNames={['P20_10_8.response[0].responseuser','P23_10_8.response[0].responseuser']}
                            mainQTitle='10.8 Daños y perjuicios ocasionados por el uso de medicamentos o suplementos adulterados'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_9}
                            subOptions={[opt19_10_9, opt21_10_9, opt22_10_9, opt24_10_9]}
                            mainName='P18_10_9.response[0].responseuser'
                            subNames={['P19_10_9.response[0].responseuser','P21_10_9.response[0].responseuser','P22_10_9.response[0].responseuser','P24_10_9.response[0].responseuser']}
                            inputNames={['P20_10_9.response[0].responseuser','P23_10_9.response[0].responseuser']}
                            mainQTitle='10.9 Errores médicos, equivocación del tratamiento'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_10}
                            subOptions={[opt19_10_10, opt21_10_10, opt22_10_10, opt24_10_10]}
                            mainName='P18_10_10.response[0].responseuser'
                            subNames={['P19_10_10.response[0].responseuser','P21_10_10.response[0].responseuser','P22_10_10.response[0].responseuser','P24_10_10.response[0].responseuser']}
                            inputNames={['P20_10_10.response[0].responseuser','P23_10_10.response[0].responseuser']}
                            mainQTitle='10.10 Pago de la mesada pensional'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_11}
                            subOptions={[opt19_10_11, opt21_10_11, opt22_10_11, opt24_10_11]}
                            mainName='P18_10_11.response[0].responseuser'
                            subNames={['P19_10_11.response[0].responseuser','P21_10_11.response[0].responseuser','P22_10_11.response[0].responseuser','P24_10_11.response[0].responseuser']}
                            inputNames={['P20_10_11.response[0].responseuser','P23_10_11.response[0].responseuser']}
                            mainQTitle='10.11 Acceso a pensión y reconocimiento de requisitos'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />

                        <NestedCheckBox
                            mainOptions={opt18_10_12}
                            subOptions={[opt19_10_12, opt21_10_12, opt22_10_12, opt24_10_12]}
                            mainName='P18_10_12.response[0].responseuser'
                            subNames={['P19_10_12.response[0].responseuser','P21_10_12.response[0].responseuser','P22_10_12.response[0].responseuser','P24_10_12.response[0].responseuser']}
                            inputNames={['P20_10_12.response[0].responseuser','P23_10_12.response[0].responseuser']}
                            mainQTitle='10.12 Traslados entre regímenes'
                            subQTitles={['P19. ¿Frente a este problema qué acción tomó?', 'P21. ¿Le brindaron información suficiente para entender y resolver el problema?', 'P22. Según la siguiente escala ¿Cuál es el nivel de afectación que le causó el problema?', 'P24. ¿El problema se solucionó?']}
                            inputQTitles={['P20. ¿A qué institución acudió?', 'P23. ¿Cuánto dinero gastó en total para intentar resolver el problema?']}
                        />
                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page10' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
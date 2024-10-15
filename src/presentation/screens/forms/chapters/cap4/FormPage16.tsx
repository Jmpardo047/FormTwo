import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage20 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { SurveyForm } from '../../../../components/shared/DateComponent';

export interface FormValues {
    PA1: FormTemplate;
    PA2: FormTemplate;
    PA3: FormTemplate;
    PA4: FormTemplate;
    PA5: FormTemplate;
}

export const FormPage16 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage20();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>¡Muchas gracias por su colaboración!</Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage3}
                    onSubmit={async (
                        values: FormValues,
                        { setSubmitting }: FormikHelpers<FormValues>
                    ) => {
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('Home' as never)
                            Alert.alert(`Encuesta terminada, muchas gracias`)
                        }
                    }}
                >
                    {({ handleSubmit, values, setFieldValue, setFieldTouched }) => (
                        <View>
                            <Text style={globalStyles.Titleout}>A. Información del encuestador y novedades en campo</Text>
                            <Text style={globalStyles.descriptioText}>El objetivo de esta sección es obtener el nombre del encuestador y aspectos de fecha, hora y novedad derivada de la aplicación de la encuesta.</Text>
                            <SurveyForm
                                values={values}
                                setFieldValue={setFieldValue}
                                setFieldTouched={setFieldTouched}
                            />

                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page19' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
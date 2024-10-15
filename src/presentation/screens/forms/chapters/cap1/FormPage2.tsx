import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { DoubleDropdown } from '../../../../components/shared/DoubleDropComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage2 } from '../../../../../utils/initialValues';
import { opt7, opt8, opt9, opt10, opt11, opt12, opt13, opt14 } from '../../../../../utils/cap1/categoriesPage2';
import { fileName } from '../../../../../utils/generateFilename';
import { validationSchemaPage2 } from '../../../../../utils/cap1/validationSchemas';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { ErrorIdMessage } from '../../../../components/shared/ErrorIdComponent';

export interface FormValues {
  P7: FormTemplate;
  P8: FormTemplate;
  P9: FormTemplate;
  P10: FormTemplate;
  P11: FormTemplate;
  P12: FormTemplate;
  P13: FormTemplate;
  P14: FormTemplate;
}


export const FormPage2 = () => {

  const { surveyId } = useContext(SurveyContext);
  const { saveAllData } = UseSaveData();
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const navigation = useNavigation();
  const initialValues: FormValues = getInitialValuesPage2();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <Formik
          initialValues={initialValues}
          //validationSchema={validationSchemaPage2}
          onSubmit={async (
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            try {
              await saveAllData(`${fileName}.json`, values, finalSurveyId);
            }
            finally {
              setSubmitting(false);
              navigation.navigate('page3' as never)
            }
          }}>

          {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => (
            <View>
                <DropDownComponent
                    values={values.P7.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P7.response[0].responseuser[0]', value)}
                    qTitle='P7. ¿Nos autoriza a realizarle la encuesta?'
                    opValues={opt7}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P7" />

                <DropDownComponent
                    values={values.P8.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P8.response[0].responseuser[0]', value)}
                    qTitle='P8. Señale su rango de edad'
                    opValues={opt8}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P8" />
    
                <DropDownComponent
                    values={values.P9.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P9.response[0].responseuser[0]', value)}
                    qTitle='P9. De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:'
                    opValues={opt9}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P9" />

                <DropDownComponent
                    values={values.P10.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P10.response[0].responseuser[0]', value)}
                    qTitle='P10. ¿Cuál es su nivel educativo más alto alcanzado?'
                    opValues={opt10}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P10" />

                <DropDownComponent
                    values={values.P11.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P11.response[0].responseuser[0]', value)}
                    qTitle='P11. ¿Cuánto tiempo lleva… viviendo en el municipio de ……….?'
                    opValues={opt11}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P11" />

                <DropDownComponent
                    values={values.P12.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P12.response[0].responseuser[0]', value)}
                    qTitle='P12. ¿Actualmente en qué zona del municipio vive?'
                    opValues={opt12}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P12" />

                <DropDownComponent
                    values={values.P13.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P13.response[0].responseuser[0]', value)}
                    qTitle='P13. ¿Usted se reconoce como:'
                    opValues={opt13}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P13" />

                <DropDownComponent
                    values={values.P14.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P14.response[0].responseuser[0]', value)}
                    qTitle='P14. Sexo:'
                    opValues={opt14}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P14" />

                <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent onPrevPressed={() => navigation.navigate('page1' as never)} />
                    <NextComponent onNextPress={handleSubmit} />
                </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
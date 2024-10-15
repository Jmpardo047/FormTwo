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
import { getInitialValuesPage4 } from '../../../../../utils/initialValues';
import { fileName } from '../../../../../utils/generateFilename';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { opt17_1, opt17_10, opt17_11, opt17_12, opt17_13, opt17_14, opt17_2, opt17_3, opt17_4, opt17_5, opt17_6, opt17_7, opt17_8, opt17_9 } from '../../../../../utils/cap3/categoriesPage3';

export interface FormValues {
  P17_1: FormTemplate;
  P17_2: FormTemplate;
  P17_3: FormTemplate;
  P17_4: FormTemplate;
  P17_5: FormTemplate;
  P17_6: FormTemplate;
  P17_7: FormTemplate;
  P17_8: FormTemplate;
  P17_9: FormTemplate;
  P17_10: FormTemplate;
  P17_11: FormTemplate;
  P17_12: FormTemplate;
  P17_13: FormTemplate;
  P17_14: FormTemplate;
}


export const FormPage4 = () => {

  const { surveyId } = useContext(SurveyContext);
  const { saveAllData } = UseSaveData();
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const navigation = useNavigation();
  const initialValues: FormValues = getInitialValuesPage4();

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
              navigation.navigate('page5' as never)
            }
          }}>

          {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => (
            <View>
                <Text style={globalStyles.questionTitle}>P17. Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Para cada caso puede decirme si usted ha experimentado personalmente alguno de esos problemas entre enero 2020 hasta junio de 2024? 
                    Por favor solo incluya los problemas que experimentó usted mismo, no los que le ocurrieron a sus familiares, a sus amigos, a su negocio, o a su empleador, ni las situaciones 
                    en las que usted representó o ayudó a alguien con un problema. Y por favor solo mencione los problemas una vez:
                </Text>

                <DropDownComponent
                    values={values.P17_1.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_1.response[0].responseuser[0]', value)}
                    qTitle='P17.1 Problemas relacionados con familiares como separación o divorcio, cuotas de alimentos, herencias o sucesiones, paternidad / maternidad, cuidado de personas que más lo requieren y gastos del hogar.'
                    opValues={opt17_1}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_1" />

                <DropDownComponent
                    values={values.P17_2.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_2.response[0].responseuser[0]', value)}
                    qTitle='P17.2 Problemas relacionados con el consumo de un producto, bien o servicio (telefonía celular, televisión por cable, internet, transporte, alimentos, electrodomésticos y servicios técnicos o profesionales). Se excluyen los servicios públicos domiciliarios.'
                    opValues={opt17_2}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_2" />

                <DropDownComponent
                    values={values.P17_3.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_3.response[0].responseuser[0]', value)}
                    qTitle='17.3 Problemas relacionados con la prestación de un servicio público domiciliario como agua, luz, gas, alcantarillado o basuras.'
                    opValues={opt17_3}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_3" />

                <DropDownComponent
                    values={values.P17_4.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_4.response[0].responseuser[0]', value)}
                    qTitle='17.4 Problemas relacionados con su trabajo o empleo, como falta de pago de salarios, reconocimiento o formalización de la relación laboral, cambio en las condiciones laborales, despido, acoso.'
                    opValues={opt17_4}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_4" />

                <DropDownComponent
                    values={values.P17_5.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_5.response[0].responseuser[0]', value)}
                    qTitle='17.5 Problemas relacionados con deudas contraídas con el sector financiero, solidario o particulares, respecto a intereses elevados, hipotecas, embargos, quiebras, reportes a centrales de riesgo, deudas educativas.'
                    opValues={opt17_5}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_5" />

                <DropDownComponent
                    values={values.P17_6.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_6.response[0].responseuser[0]', value)}
                    qTitle='17.6 Problemas relacionados con la vivienda en la que habita o de la que es dueño, o problemas con vecinos por ruidos, malos olores, mascotas, chismes y otros.'
                    opValues={opt17_6}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_6" />

                <DropDownComponent
                    values={values.P17_7.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_7.response[0].responseuser[0]', value)}
                    qTitle='17.7 Problemas relacionados con el entorno o el espacio público, como el daño, deterioro o falta de paraderos, bancas, calles, puentes; invasión, uso indebido del espacio público o perjuicios por la ejecución de obras públicas.'
                    opValues={opt17_7}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_7" />

                <DropDownComponent
                    values={values.P17_8.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_8.response[0].responseuser[0]', value)}
                    qTitle='17.8 Problemas relacionados con la propiedad, uso y tenencia de la tierra como disputas sobre títulos, linderos, registro catastral o extinción de dominio.'
                    opValues={opt17_8}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_8" />

                <DropDownComponent
                    values={values.P17_9.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_9.response[0].responseuser[0]', value)}
                    qTitle='17.9 Problemas relacionados con el medio ambiente o el acceso a recursos comunitarios, como conflictos por el acceso a fuentes de agua, explotación ilegal de recursos ambientales o contaminación.'
                    opValues={opt17_9}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_9" />

                <DropDownComponent
                    values={values.P17_10.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_10.response[0].responseuser[0]', value)}
                    qTitle='17.10 Problemas relacionados con la prestación de los servicios de salud, pensión, riesgos laborales, como en la asignación de citas, medicamentos, calidad, oportunidad, afiliación, negación, reconocimiento o pago de la mesada pensional.'
                    opValues={opt17_10}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_10" />

                <DropDownComponent
                    values={values.P17_11.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_11.response[0].responseuser[0]', value)}
                    qTitle='17.11 Problemas en su relación con el Estado, referentes a multas, comparendos, pago de impuestos, expropiaciones, deficiencia en los servicios prestados, abuso de autoridad por policía y ejército o trámites de migrantes.'
                    opValues={opt17_11}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_11" />

                <DropDownComponent
                    values={values.P17_12.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_12.response[0].responseuser[0]', value)}
                    qTitle='17.12 Problemas relacionados con el servicio de educación y formación, como el acceso, la calidad, y el ambiente educativo (matoneo).'
                    opValues={opt17_12}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_12" />

                <DropDownComponent
                    values={values.P17_13.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_13.response[0].responseuser[0]', value)}
                    qTitle='17.13 Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de delitos, como hurto, lesiones, calumnias, daños a la propiedad, secuestro, homicidio, ciberdelito, violencia sexual y violencia intrafamiliar.'
                    opValues={opt17_13}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_13" />

                <DropDownComponent
                    values={values.P17_14.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P17_14.response[0].responseuser[0]', value)}
                    qTitle='17.14 Problemas relacionados con afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público como desplazamiento forzado, terrorismo, despojo de tierras, extorsión.'
                    opValues={opt17_14}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P17_14" />

                <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent onPrevPressed={() => navigation.navigate('page3' as never)} />
                    <NextComponent onNextPress={handleSubmit} />
                </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
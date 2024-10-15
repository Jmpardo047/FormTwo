import * as Yup from 'yup';

export const validationSchemaPage1 = Yup.object().shape({
    P14: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P2: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P3: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P4: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P5: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P6: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
});

export const validationSchemaPage2 = Yup.object().shape({
  P7: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
      .notOneOf([""], "Seleccionar una Opción válida")
      .notOneOf(["24"], "Debe aceptar si desea continuar la encuesta"))
      })
    )
  }),
  P8: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P9: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P10: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P11: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P12: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P13: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
  P14: Yup.object().shape({
    response: Yup.array().of(
      Yup.object().shape({
        responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
        .notOneOf([""], "Seleccionar una Opción válida"))
      })
    )
  }),
});
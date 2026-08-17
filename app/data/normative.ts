import type {
  NormativeDocument,
} from '~/types/normative'

export const normativeDocuments: NormativeDocument[] = [
  {
    id: 1,

    title:
      'Ley Marco de Autonomías y Descentralización',

    description:
      'Documento normativo de referencia para el régimen autonómico.',

    type: 'Ley',

    year: 2010,

    file:
      '/documents/normativa/ley-marco-autonomias.pdf',
  },

  {
    id: 2,

    title:
      'Normativa relacionada con gobiernos autónomos',

    description:
      'Documento de consulta para la gestión autonómica.',

    type: 'Normativa',

    file:
      '/documents/normativa/normativa-gobiernos-autonomos.pdf',
  },

  {
    id: 3,

    title:
      'Guía institucional para la gestión autonómica',

    description:
      'Material de referencia y orientación institucional.',

    type: 'Guía',

    file:
      '/documents/normativa/guia-gestion-autonomica.pdf',
  },

  {
    id: 4,

    title:
      'Documento técnico de organización territorial',

    description:
      'Documento técnico de consulta territorial.',

    type: 'Documento técnico',

    file:
      '/documents/normativa/organizacion-territorial.pdf',
  },
]
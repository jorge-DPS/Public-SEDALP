import type { NewsItem } from '~/types/news'

export const mockNews: NewsItem[] = [
  {
    id: 1,

    slug: 'capacitacion-mocomoco',

    title:
      'SEDALP desarrolló una jornada de capacitación en el municipio de Mocomoco',

    subtitle:
      'Fortalecimiento de capacidades para autoridades y técnicos municipales',

    excerpt:
      'Autoridades y técnicos participaron en una jornada orientada al fortalecimiento de la gestión autonómica y territorial.',

    description:
      'El Servicio Departamental de Autonomías de La Paz desarrolló una jornada de capacitación en el municipio de Mocomoco con la participación de autoridades, técnicos y representantes municipales.',

    content: [
      'Durante la actividad se abordaron aspectos relacionados con autonomías, normativa vigente, organización territorial y fortalecimiento institucional.',

      'La capacitación permitió generar un espacio de intercambio de experiencias y atención de consultas técnicas de los participantes.',

      'Estas actividades forman parte de las acciones que desarrolla SEDALP para acompañar y fortalecer la gestión de los gobiernos autónomos del departamento de La Paz.',
    ],

    publishedAt: '2026-08-10',

    images: [
      {
        id: 1,
        url: '/images/news/news-01.webp',
        alt: 'Capacitación desarrollada por SEDALP',
      },
      {
        id: 2,
        url: '/images/news/news-02.webp',
        alt: 'Participantes durante la capacitación',
      },
      {
        id: 3,
        url: '/images/news/news-03.webp',
        alt: 'Exposición técnica durante la actividad',
      },
    ],

    videos: [
      {
        id: 1,
        youtubeUrl:
          'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        title: 'Resumen audiovisual de la actividad',
      },
      {
        id: 2,
        youtubeUrl:
          'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        title: 'Entrevista sobre la actividad',
      },
    ],
  },

  {
    id: 2,

    slug: 'asistencia-tecnica-altiplano-norte',

    title:
      'SEDALP brindó asistencia técnica a municipios del Altiplano Norte',

    subtitle:
      'Acompañamiento técnico para fortalecer la gestión municipal',

    excerpt:
      'Municipios de la región recibieron asistencia técnica en planificación y gestión autonómica.',

    description:
      'SEDALP desarrolló actividades de asistencia técnica orientadas al fortalecimiento de las capacidades de gestión de los gobiernos autónomos municipales.',

    content: [
      'El acompañamiento permitió atender diferentes consultas relacionadas con procesos administrativos, planificación territorial y ejercicio de competencias.',

      'La asistencia técnica constituye una de las principales líneas de trabajo institucional desarrolladas por SEDALP.',
    ],

    publishedAt: '2026-08-05',

    images: [
      {
        id: 1,
        url: '/images/news/news-04.webp',
        alt: 'Asistencia técnica municipal',
      },
      {
        id: 2,
        url: '/images/news/news-05.webp',
        alt: 'Reunión técnica con representantes municipales',
      },
    ],

    videos: [
      {
        id: 1,
        youtubeUrl:
          'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        title: 'Video de la jornada',
      },
    ],
  },

  {
    id: 3,

    slug: 'fortalecimiento-gestion-autonomica',

    title:
      'Acciones institucionales fortalecen la gestión autonómica en La Paz',

    subtitle:
      'SEDALP continúa trabajando con los gobiernos autónomos',

    excerpt:
      'La institución desarrolla acciones de coordinación y acompañamiento en diferentes regiones del departamento.',

    description:
      'El fortalecimiento de las capacidades institucionales constituye uno de los principales ejes de trabajo del Servicio Departamental de Autonomías de La Paz.',

    content: [
      'Las acciones permiten generar espacios de coordinación entre la institución y los diferentes gobiernos autónomos.',

      'El trabajo territorial permite identificar necesidades específicas y fortalecer la capacidad de respuesta institucional.',
    ],

    publishedAt: '2026-07-30',

    images: [
      {
        id: 1,
        url: '/images/news/news-06.webp',
        alt: 'Actividad institucional de SEDALP',
      },
    ],

    videos: [],
  },

  {
    id: 4,

    slug: 'coordinacion-gobiernos-municipales',

    title:
      'SEDALP impulsa espacios de coordinación con gobiernos municipales',

    subtitle:
      'Coordinación institucional para fortalecer el desarrollo territorial',

    excerpt:
      'Representantes municipales participaron en reuniones de coordinación y asistencia institucional.',

    description:
      'Los espacios de coordinación permiten identificar necesidades y definir acciones de acompañamiento técnico para los municipios.',

    content: [
      'La coordinación directa con las autoridades municipales permite fortalecer el trabajo territorial de la institución.',

      'SEDALP continuará desarrollando actividades de acompañamiento en las diferentes regiones del departamento.',
    ],

    publishedAt: '2026-07-22',

    images: [
      {
        id: 1,
        url: '/images/news/news-07.webp',
        alt: 'Reunión con representantes municipales',
      },
      {
        id: 2,
        url: '/images/news/news-08.webp',
        alt: 'Espacio de coordinación institucional',
      },
    ],

    videos: [
      {
        id: 1,
        youtubeUrl:
          'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        title: 'Video institucional',
      },
    ],
  },
]
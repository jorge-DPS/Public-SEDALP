import type { NewsItem } from '~/types/news'

export const mockNews: NewsItem[] = [
{
  id: 1,

  slug: 'capacitacion-mocomoco',

  title:
    'SEDALP desarrolló una jornada de capacitación en el municipio de Mocomoco',

  excerpt:
    'Autoridades y técnicos participaron en una actividad de fortalecimiento autonómico.',

  publishedAt: '2026-07-24',

  coverImage: '/images/hero/sedalp-hero.webp',

  coverImageAlt:
    'Capacitación institucional desarrollada en Mocomoco',

  content: [
    'El Servicio Departamental de Autonomías de La Paz desarrolló...',
    'Durante la actividad se abordaron...',
    'La jornada permitió fortalecer...',
  ],

  images: [
    {
      id: 1,
      url: '/images/news/mocomoco/image-01.webp',
      alt: 'Participantes de la capacitación',
    },

    {
      id: 2,
      url: '/images/news/mocomoco/image-02.webp',
      alt: 'Exposición durante la jornada',
    },
  ],

  videos: [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=XXXXXXXX',
      title: 'Resumen de la actividad',
    },
  ],
}
]

import type {
  AssistanceItem,
} from '~/types/assistance'

export const assistanceItems: AssistanceItem[] = [
  {
    id: 1,
    title: 'Asistencia técnica municipal',
    image: '/images/assistance/assistance-01.webp',
    alt: 'Material gráfico de asistencia técnica municipal',
  },
  {
    id: 2,
    title: 'Fortalecimiento autonómico',
    image: '/images/assistance/assistance-02.webp',
    alt: 'Material gráfico sobre fortalecimiento autonómico',
  },
  {
    id: 3,
    title: 'Gestión territorial',
    image: '/images/assistance/assistance-03.webp',
    alt: 'Material gráfico relacionado con gestión territorial',
  },
  {
    id: 4,
    title: 'Gestión municipal',
    image: '/images/assistance/assistance-04.webp',
    alt: 'Material gráfico sobre gestión municipal',
  },

  // Luego agregaremos las demás hasta aproximadamente 15.
]
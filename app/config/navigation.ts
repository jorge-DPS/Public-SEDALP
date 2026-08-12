export interface NavigationItem {
  label: string
  to: string
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Noticias',
    to: '/noticias',
  },
  {
    label: 'Cursos',
    to: '/#cursos',
  },
  {
    label: 'Eventos',
    to: '/#eventos',
  },
  {
    label: 'Normativas',
    to: '/#normativas',
  },
  {
    label: 'SIMRED',
    to: '/simred',
  },
]
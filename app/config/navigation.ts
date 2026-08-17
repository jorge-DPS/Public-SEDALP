export interface NavigationItem {
  label: string;
  to: string;
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Asistencia Técnica',
    to: '/asistencia-tecnica',
  },  
  {
    label: 'Comunicación',
    to: '/noticias',
  },
  {
    label: 'SIMRED',
    to: '/#simred',
  },
];

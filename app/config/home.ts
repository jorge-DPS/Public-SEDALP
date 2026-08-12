

export interface HeroContent {
  eyebrow: string
  title: string
  highlightedText: string
  description: string
  buttonLabel: string
  buttonTo: string
  image: string
  imageAlt: string
}

export const heroContent: HeroContent = {
  eyebrow: 'Servicio Departamental de Autonomías',

  title: 'Construimos autonomía,',
  highlightedText: 'promovemos desarrollo',

  description:
    'Fortalecemos la gestión autonómica y acompañamos a los gobiernos autónomos del departamento de La Paz mediante asistencia técnica, información y herramientas para su desarrollo.',

  buttonLabel: 'Conócenos más',

  buttonTo: '#institucional',

  image: '/images/hero/sedalp-hero.webp',

  imageAlt:
    'Vista de la ciudad de La Paz, el Illimani y el teleférico junto a ciudadanos paceños',
}

export type InstitutionalPillarIcon =
  | 'mission'
  | 'vision'
  | 'objective'

export interface InstitutionalPillar {
  id: string
  title: string
  description: string
  icon: InstitutionalPillarIcon
}

export const institutionalPillars: InstitutionalPillar[] = [
  {
    id: 'mision',
    title: 'Misión',
    description:
      'Fortalecer la gestión autonómica de los gobiernos autónomos del departamento de La Paz mediante asistencia técnica, acompañamiento institucional y generación de herramientas que contribuyan al ejercicio efectivo de sus competencias.',
    icon: 'mission',
  },
  {
    id: 'vision',
    title: 'Visión',
    description:
      'Consolidarnos como una institución referente en el fortalecimiento de las autonomías, promoviendo una gestión pública articulada, eficiente y orientada al desarrollo integral del departamento de La Paz.',
    icon: 'vision',
  },
  {
    id: 'objetivo-general',
    title: 'Objetivo General',
    description:
      'Impulsar el fortalecimiento institucional y el desarrollo autonómico mediante procesos de asistencia técnica, coordinación y generación de información para los gobiernos autónomos.',
    icon: 'objective',
  },
]
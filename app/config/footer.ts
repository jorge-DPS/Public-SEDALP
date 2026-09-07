export interface FooterLink {
  label: string;
  to: string;
}

export type SocialIcon = "facebook" | "youtube" | "tiktok";

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export const footerNavigation: FooterLink[] = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Asistencia Técnica",
    to: "/asistencia-tecnica",
  },
  {
    label: "Comunicación",
    to: "/news",
  },
  {
    label: "SIMRED",
    to: "/simred",
  },
];

export const footerResources: FooterLink[] = [
  {
    label: "Normativa",
    to: "/#normativa",
  },
  {
    label: "Misión, Visión y Objetivo",
    to: "/#institucional",
  },
];

export const footerContact = {
  location: "La Paz, Bolivia",

  // Agregar cuando tengas los datos oficiales.
  phone: "",
  email: "",
};

export const socialLinks: SocialLink[] = [
  // Ejemplo:
  //
  // {
  //   label: 'Facebook',
  //   url: 'URL_OFICIAL',
  //   icon: 'facebook',
  // },
];

export interface Highlight {
  i: string; // Emoji representing the highlight
  l: string; // Label
  v: string; // Value
}

export interface CityProfile {
  tech?: number;
  seguro?: number;
  urbano?: number;
  cultura?: number;
  ritmo?: number;
  coletivo?: number;
  natureza?: number;
  custo?: number;
  sol?: number;
  historia?: number;
  europa?: number;
  arte?: number;
  ambicao?: number;
  diversidade?: number;
  familia?: number;
  sustenta?: number;
  bike?: number;
  social?: number;
  gastronomia?: number;
  musica?: number;
  aventura?: number;
  luxo?: number;
  negocio?: number;
  qualidade?: number;
  riqueza?: number;
  espiritualidade?: number;
  comunidade?: number;
  empreende?: number;
  romantico?: number;
  moda?: number;
  energia?: number;
  esporte?: number;
  [key: string]: number | undefined;
}

export interface TranslatedCity {
  nome: string;
  pais: string;
  desc: string;
  tags: string[];
  destaques: Highlight[];
}

export interface City {
  id: string; // e.g., "toquio"
  emoji: string;
  perfil: CityProfile;
  pt: TranslatedCity;
  en: TranslatedCity;
}

export interface TranslatedOption {
  texto: string;
  pontos: CityProfile;
}

export interface TranslatedQuestion {
  texto: string;
  subtexto: string;
  opcoes: TranslatedOption[];
}

export interface Question {
  icone: string;
  pt: TranslatedQuestion;
  en: TranslatedQuestion;
}

export type Language = 'pt' | 'en';

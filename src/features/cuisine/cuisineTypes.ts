export enum Cuisines {
  CHINESE = 'Chinese',
  FRENCH = 'French',
  ITALIAN = 'Italian',
  JAPANESE = 'Japanese',
  MEXICAN = 'Mexican',
  NONE = 'None',
}

export interface CuisineState {
  selected: Cuisines,
}

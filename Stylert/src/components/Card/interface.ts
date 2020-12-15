import { colors } from "../../theme/colors";

export interface ICardProps{
  amount: string;
  status: keyof typeof CardStatus;
}

export enum CardStatus{
  PAGO='pago',
  EM_ABERTO='em aberto',
  EM_ATRASO='em atraso',
  REVERTIDO='revertido'
}

export interface ICardStyleProps{
  color: keyof typeof colors;
  strikeThrough: boolean;
}

export type TCardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;  
}
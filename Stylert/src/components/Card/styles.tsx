import styled, {css} from 'styled-components/native';
import { ICardStyleProps } from './interface';

export const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors['neutral-200']};
`;

const fontVariant=css`
  font-family: ${({theme})=> theme.fonts.label};
  font-size: 24px;
`;

export const Label = styled.Text`
  ${fontVariant};
`;

export const Description = styled.Text<ICardStyleProps>`
  ${fontVariant};
  color: ${({theme, status}) => theme.colors[status.color]};
  ${({status, theme})=>
  status.strikeThrough && css`
  text-decoration: line-through;
  text-decoration-color: ${theme.colors[status.color]};
  `}
`;
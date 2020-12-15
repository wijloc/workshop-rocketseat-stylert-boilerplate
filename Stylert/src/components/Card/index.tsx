import React from 'react';

import {Container, Label, Description} from './styles';

import {CardStatus, ICardProps, TCardStatusVariant} from './interface'

const Card = ({amount, status}: ICardProps) => {

  const statusVariant : TCardStatusVariant={
    PAGO:{
      color: 'success-400'
    },
    EM_ABERTO: {
      color: 'warning-400'
    },
    EM_ATRASO: {
      color: 'error-400'
    },
    REVERTIDO: {
      color: 'neutral-400',
      strikeThrough: true
    }
  }

  return (<Container>
    <Label>{amount}</Label>
    <Description
      status={statusVariant[status]}>
      {CardStatus[status]}
    </Description>
    </Container>);
};

export default Card;

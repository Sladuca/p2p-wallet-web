import React, { FunctionComponent } from 'react';

import { styled } from '@linaria/react';

import { Layout } from 'components/common/Layout';
import { AlliesWidget } from 'components/pages/allies';

const WrapperTemp = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-rows: min-content;

  width: 100%;
  max-width: 556px;
  height: fit-content;
`;

export const Allies: FunctionComponent = () => {
  return (
    <Layout
      rightColumn={
        <WrapperTemp>
          <AlliesWidget selectedSymbol="alice" />
        </WrapperTemp>
      }
    />
  );
};

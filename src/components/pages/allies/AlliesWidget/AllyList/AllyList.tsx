import React, { FunctionComponent, useMemo } from 'react';

import { styled } from '@linaria/react';

import { Ally } from 'api/ally/Ally';
import { LoaderBlock } from 'components/common/LoaderBlock';

import { AllyRow } from '../AllyRow';

const Wrapper = styled.div`
  margin: 0 10px;
`;

type Props = {
  items: Ally[];
  selectedAlly: string;
  isHidden?: boolean;
};

export const AllyList: FunctionComponent<Props> = ({
  items = [],
  selectedAlly,
  isHidden = false,
}) => {
  const allies = useMemo(() => {
    return items;
  }, [items]);

  if (allies.length === 0 && !isHidden) {
    return <LoaderBlock />;
  }

  return (
    <Wrapper>
      {allies.map((item) => (
        <AllyRow
          key={item.address.toBase58()}
          ally={item}
          isSelected={item.name === selectedAlly}
          isHidden={isHidden}
        />
      ))}
    </Wrapper>
  );
};

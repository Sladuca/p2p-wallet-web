import React, { FunctionComponent } from 'react';

import { styled } from '@linaria/react';
import { web3 } from '@project-serum/anchor';
import { Feature } from 'flagged';

import { Ally, AllyKind } from 'api/ally/Ally';
import { Widget } from 'components/common/Widget';
import { Button, Icon } from 'components/ui';
import { FEATURE_ADD_ALLY_BUTTON } from 'config/featureFlags';

import { AllyList } from './AllyList';

const WrapperWidget = styled(Widget)``;

const AddButton = styled(Button)`
  color: #5887ff !important;

  &:hover {
    background: #eff3ff !important;
  }
`;

const IconPlus = styled(Icon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

type Props = {
  selectedAlly: string;
};

export const AlliesWidget: FunctionComponent<Props> = ({ selectedAlly }) => {
  // const allies = useSelector((state) =>
  //   state.allies..map((ally) => Ally.from(account)),
  // );
  const allies: Ally[] = [
    { name: 'alice', address: web3.PublicKey.default, kind: AllyKind.PROTECTOR },
    { name: 'bob', address: web3.PublicKey.default, kind: AllyKind.PROTECTED },
    { name: 'charlie', address: web3.PublicKey.default, kind: AllyKind.TWO_WAY },
  ];

  const handleAddAllyClick = () => {};

  return (
    <WrapperWidget
      title="Allies"
      action={
        <Feature name={FEATURE_ADD_ALLY_BUTTON}>
          <AddButton lightGray small onClick={handleAddAllyClick}>
            <IconPlus name="plus" /> Add Ally
          </AddButton>
        </Feature>
      }>
      <AllyList items={allies} selectedAlly={selectedAlly} />
    </WrapperWidget>
  );
};

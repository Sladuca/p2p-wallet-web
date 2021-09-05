import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@linaria/react';
import classNames from 'classnames';
import { rgba } from 'polished';

import { Ally } from 'api/ally/Ally';
import { Menu } from 'components/ui';
import { MenuItem } from 'components/ui/Menu/MenuItem';

const Content = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const TokenName = styled.div`
  max-width: 300px;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

const WrapperLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;

  text-decoration: none;

  border-radius: 12px;
  cursor: pointer;
`;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 5px;

//   color: #a3a5ba;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 140%;
// `;

const MenuWrapper = styled.div`
  position: absolute;

  top: 30%;
  right: -45px;

  padding-left: 15px;

  opacity: 0;
`;

const Wrapper = styled.div`
  position: relative;

  padding: 10px 0;

  &.isHidden {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  &.isSelected {
    ${WrapperLink} {
      background: #eff3ff;
    }
  }

  &:hover {
    ${MenuWrapper} {
      opacity: 1;
    }

    ${WrapperLink} {
      background: #f6f6f8;
    }

    ${TokenName} {
      color: #5887ff;
    }
  }

  &:not(:last-child) {
    &::after {
      position: absolute;
      right: 10px;
      bottom: 0;
      left: 10px;

      border-bottom: 1px solid ${rgba(0, 0, 0, 0.05)};

      content: '';
    }
  }
`;

type Props = {
  ally: Ally;
  isSelected: boolean;
  isZeroBalancesHidden?: boolean;
  isHidden?: boolean;
};

export const AllyRow: FunctionComponent<Props> = ({
  ally,
  isSelected = false,
  isHidden = false,
}) => {
  const handleMenuItemClick = () => {};

  return (
    <Wrapper className={classNames({ isHidden, isSelected })}>
      <WrapperLink to={`/ally/${ally.address.toBase58()}`}>
        <Content>
          <Top>
            <TokenName title={ally.name}>{ally.name}</TokenName>
          </Top>
        </Content>
      </WrapperLink>
      <MenuWrapper>
        <Menu vertical>
          <MenuItem onItemClick={handleMenuItemClick} icon={isHidden ? 'eye' : 'eye-hide'}>
            {isHidden ? 'Show' : 'Hide'}
          </MenuItem>
        </Menu>
      </MenuWrapper>
    </Wrapper>
  );
};

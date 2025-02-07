import React, { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Layout } from 'components/common/Layout';
import { Providers } from 'components/pages/swap/Providers';
import { SwapWidget } from 'components/pages/swap/SwapWidget';
import { trackEvent } from 'utils/analytics';

export const Swap: FunctionComponent = () => {
  const location = useLocation<{ fromPage: string }>();

  useEffect(() => {
    trackEvent('swap_open', { fromPage: location.state.fromPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      rightColumn={
        <Providers>
          <SwapWidget />
        </Providers>
      }
    />
  );
};

import React from 'react';
import { render } from '@testing-library/react';

import { BottomPanel } from './BottomPanel';
import { Speed } from './Wrapper';

describe('BottomPanel', () => {
  test('renders BottomPanel component', () => {
    render(
      <BottomPanel
        onclickItemToField={(): null => null}
        selected_size={1}
        selected_speed={Speed.SpeedSlow}
      />
    );
  });
});

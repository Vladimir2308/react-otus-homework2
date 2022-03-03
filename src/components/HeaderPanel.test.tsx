import React from 'react';
import { render } from '@testing-library/react';

import { HeaderPanel } from './HeaderPanel';

describe('Render HeaderPanel', () => {
  test('renders HeaderPanel generation 0, timer false', () => {
    render(
      <HeaderPanel
        onclickItemToField={(): null => null}
        generation={0}
        isTimerPause={false}
      />
    );
  });
  test('renders HeaderPanel generation 1, timer false', () => {
    render(
      <HeaderPanel
        onclickItemToField={(): null => null}
        generation={1}
        isTimerPause={false}
      />
    );
  });
  test('renders HeaderPanel generation 1, timer true', () => {
    render(
      <HeaderPanel
        onclickItemToField={(): null => null}
        generation={1}
        isTimerPause={true}
      />
    );
  });
});

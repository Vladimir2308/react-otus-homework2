import React from 'react';
import { render } from '@testing-library/react';

import { HeaderPanel } from './HeaderPanel';

describe('Render HeaderPanel', () => {
  test('renders HeaderPanel generation 0, timer false', () => {
    render(
      <HeaderPanel
        onclickItemToField={someFunction}
        generation={0}
        isTimerPause={false}
      />
    );
  });
  test('renders HeaderPanel generation 1, timer false', () => {
    render(
      <HeaderPanel
        onclickItemToField={someFunction}
        generation={1}
        isTimerPause={false}
      />
    );
  });
  test('renders HeaderPanel generation 1, timer true', () => {
    render(
      <HeaderPanel
        onclickItemToField={someFunction}
        generation={1}
        isTimerPause={true}
      />
    );
  });
});

const someFunction = (): void => {
  return;
};

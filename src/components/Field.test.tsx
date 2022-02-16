import React from 'react';

import { Field } from './Field';
import { Speed } from './Wrapper';
import { render } from '@testing-library/react';

describe('render Field component', () => {
  test('render Field component', () => {
    render(
      <Field
        intervalMs={Speed.SpeedSlow}
        setGeneration={someFunction}
        horiz_count={50}
        vertic_count={30}
      />
    );
  });
});

describe('Next generation calc ', () => {
  it('row completed 1', () => {
    const field2 = new Field({
      horiz_count: 5,
      vertic_count: 5,
      setGeneration: someFunction,
      intervalMs: Speed.SpeedSlow,
    });
    const startGeneration = field2.calcNextGeneration([
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(startGeneration).toEqual([
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
  it('field completed 1', () => {
    const field2 = new Field({
      horiz_count: 5,
      vertic_count: 5,
      setGeneration: someFunction,
      intervalMs: Speed.SpeedSlow,
    });
    const startGeneration = field2.calcNextGeneration([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
    expect(startGeneration).toEqual([
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
    ]);
  });
  it('field completed 0', () => {
    const field2 = new Field({
      horiz_count: 5,
      vertic_count: 5,
      setGeneration: someFunction,
      intervalMs: Speed.SpeedSlow,
    });
    const startGeneration = field2.calcNextGeneration([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(startGeneration).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
  it('field completed for new life', () => {
    const field2 = new Field({
      horiz_count: 5,
      vertic_count: 5,
      setGeneration: someFunction,
      intervalMs: Speed.SpeedSlow,
    });
    const startGeneration = field2.calcNextGeneration([
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(startGeneration).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});

const someFunction = (): void => {
  return;
};

describe('Field percentage filling ', () => {
  it('filling 0.25', () => {
    const horizcount = 5;
    const verticcount = 5;
    const filling = 0.25;
    const field2 = new Field({
      horiz_count: horizcount,
      vertic_count: verticcount,
      intervalMs: 1000,
      getMembers: undefined,
      setGeneration: someFunction,
    });

    let count = 0;
    const items = field2.getFirstGeneration(horizcount, verticcount, filling);
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        if (items[i][j] === 1) {
          count++;
        }
      }
    }
    expect(Math.floor(verticcount * horizcount * filling)).toBe(count);
  });

  it('filling 0.5', () => {
    const horizcount = 5;
    const verticcount = 5;
    const filling = 0.5;
    const field2 = new Field({
      horiz_count: horizcount,
      vertic_count: verticcount,
      intervalMs: 1000,
      getMembers: undefined,
      setGeneration: someFunction,
    });

    let count = 0;
    const items = field2.getFirstGeneration(horizcount, verticcount, filling);
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        if (items[i][j] === 1) {
          count++;
        }
      }
    }
    expect(Math.floor(verticcount * horizcount * filling)).toBe(count);
  });

  it('filling 0.75', () => {
    const horizcount = 5;
    const verticcount = 5;
    const filling = 0.75;
    const field2 = new Field({
      horiz_count: horizcount,
      vertic_count: verticcount,
      intervalMs: 1000,
      getMembers: undefined,
      setGeneration: someFunction,
    });

    let count = 0;
    const items = field2.getFirstGeneration(horizcount, verticcount, filling);
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        if (items[i][j] === 1) {
          count++;
        }
      }
    }
    expect(Math.floor(verticcount * horizcount * filling)).toBe(count);
  });
});

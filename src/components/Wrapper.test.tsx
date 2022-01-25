import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Wrapper } from './Wrapper';

describe('Wrapper', () => {
  test('renders Wrapper component', () => {
    render(<Wrapper />);
    screen.debug();
  });
});

describe('Wrapper', () => {
  test('renders Wrapper component', () => {
    const myMock = jest.fn();
    myMock.mockReturnValue(Promise.resolve(1));
    render(<Wrapper doFetch={myMock} />);

    screen.debug();
  });
});

// const fetchMock = jest
//   .spyOn(global, 'fetch')
//   .mockImplementation(() =>
//     Promise.resolve({ json: () => Promise.resolve([]) })
//   );

describe('my test', () => {
  // it('calls the right route', async () => {
  it('calls the right route', () => {
    // const mockedFetch = jest.fn(() =>
    //   Promise.resolve({
    //     data: { fact: 'dfsdfsdfsdfjklsdjfklsdjklfj' },
    //     status: 200,
    //     statusText: 'OK',
    //     headers: {},
    //     config: {},
    //   }).then(() => console.log('fetched then'))
    // );
    //
    // global.fetch = mockedFetch;

    const screen = render(<Wrapper />);
    screen.debug();
    // expect(mockedFetch).toBeCalled();
    expect(fetchMock).toHaveBeenCalledWith('https://catfact.ninja/fact');
  });
});

describe('Wrapper', () => {
  test('renders Wrapper component', async () => {
    const screen = render(<Wrapper />);
    // userEvent.click(screen.getByTestId('Следующий факт'));
    // const newVar = await waitFor(() => screen.getByText('Следующий факт'), {
    //   timeout: 3000,
    // });
  });
});

describe('Field test cases', () => {
  it('Field render correctly, click item work 2x3', () => {
    const { container } = render(<Wrapper />);
    const elementsByTagName = container.getElementsByTagName('button');
    // elementsByTagName.
    // const byText = screen.getByText('Следующий факт');
    // const elementsByClassName = container.getElementsByClassName('Item')[0];
    // expect(screen.queryByText(1)).not.toBeInTheDocument();
    // userEvent.click(elementsByClassName);
    // expect(screen.getByText(1));
  });
});
import React, { createRef, useState } from 'react';
import { Wrapper } from './components/Wrapper';
import styled from 'styled-components';

export default function App(): JSX.Element {
  const [name, setName] = useState('');
  const input = createRef<HTMLInputElement | HTMLTextAreaElement>();
  const App = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-block;
    text-align: center;
  `;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setName('' + input.current?.value);
    event.preventDefault();
  };

  return (
    <App>
      {name.length === 0 && (
        <form onSubmit={handleSubmit}>
          <p> Nickname:</p>
          <p>
            <input
              type="text"
              ref={input as React.RefObject<HTMLInputElement>}
            />
          </p>
          <input type="submit" value="Go to GoL" />
        </form>
      )}
      {name.length > 0 && <Wrapper />}
    </App>
  );
}

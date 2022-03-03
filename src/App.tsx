import React, { createRef, useState } from 'react';
import { Wrapper } from './components/Wrapper';
import styled from 'styled-components';

const AppStyle = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  text-align: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState('');
  const input = createRef<HTMLInputElement | HTMLTextAreaElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setName('' + input.current?.value);
    event.preventDefault();
  };
  return (
    <AppStyle>
      {!name.length && (
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
    </AppStyle>
  );
};
export { App };

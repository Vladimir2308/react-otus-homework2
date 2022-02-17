import React, { createRef, useState } from 'react';
import './components/app.css';
import { Wrapper } from './components/Wrapper';

export default function App(): JSX.Element {
  const [name, setName] = useState('');
  const input = createRef<HTMLInputElement | HTMLTextAreaElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setName('' + input.current?.value);
    event.preventDefault();
  };

  return (
    <div className="Start">
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
    </div>
  );
}

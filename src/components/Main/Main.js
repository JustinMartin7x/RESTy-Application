import React, { useState } from 'react';
import styles from './Main.css';

import Form from '../Form/Form';

export default function Main() {
  const [input, setInput] = useState('api url');
  const [call, setCall] = useState('get');
  const [send, setSend] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, call, send);
  };

  return (
    <div className={styles.main}>
      <Form
        setInput={setInput}
        setCall={setCall}
        setSend={setSend}
        handleSubmit={handleSubmit}
      />
      this is the main page
    </div>
  );
}

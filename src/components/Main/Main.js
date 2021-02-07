import React, { useState } from 'react';
import styles from './Main.css';

import Form from '../Form/Form';

export default function Main() {
  const [input, setInput] = useState(
    'futuramaapi.herokuapp.com/api/v2/characters'
  );
  const [call, setCall] = useState('get');
  const [send, setSend] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    const result = fetchApi(input, call, send);
    console.log('!!!!!!!!!!!!!!', result);
    setResponse(result.text);
  };

  const fetchApi = (url, method, body) => {
    if (method !== 'GET') {
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }).then((res) => res.json());
    }
    return fetch(url).then((res) => res.json());
  };
  console.log(response);

  return (
    <div className={styles.main}>
      <Form
        setInput={setInput}
        setCall={setCall}
        setSend={setSend}
        handleSubmit={handleSubmit}
      />
      <div className={styles.resultSection}>{response}</div>
    </div>
  );
}

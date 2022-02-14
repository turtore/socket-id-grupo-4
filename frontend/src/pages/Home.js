import React, { useEffect, useState } from 'react';
import socket from '../utils/socketClient';

import { Table } from 'react-bootstrap';

import PostCard from '../components/PostCard';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const [user, setUser] = useState({
    username: '',
    message: '',
  });

  const handleClick = (e) => {
    // e.preventDefault();    
    console.log(e);
    socket.emit('inserPost', { ...user} );
  }

  const handleChange = ( { target }) => {
    const {name , value } = target;
    setUser({
      ...user, 
      [name]:value,
    } )
  }
  
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/languages')
      .then((response) => response.json())
      .then((messages) => {
        setIsLoading(false);
        setMessages(messages);
      });
  }, []);

  return (
    <div>
      <h1>Mural de depoimentos</h1>

      {isLoading ? <p>Carregando</p>
        : ( 
          <Table>
            <tbody>

            {messages.map(({ username, message}, index) => (
              <PostCard
              key={index}
              username={username} 
              message={message} />
              ))}
              </tbody>
          </Table>
      )}
      <form onSubmit= {handleClick} >
        <input name="username" placeholder='Nome aqui' onChange={handleChange}></input>
        <input name="message" placeholder='Sua mensagem aqui' onChange={handleChange}></input>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Home;
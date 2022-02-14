import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';

import PostCard from '../components/PostCard';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  
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
            {messages.map(({ username, message}, index) => (
              <PostCard
                key={index}
                username={username} 
                message={message} />
            ))}
          </Table>
      )}
    </div>
  );
}

export default Home;
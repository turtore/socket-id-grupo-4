import React, { useState, useEffect } from 'react';
import socket from '../utils/socketClient';

import { Card, Button, Table } from 'react-bootstrap';

function PostCard({ id, username, message }) {
  const [messages, setCurrentMessages] = useState([]);

  useEffect(() => {
    socket.on('refreshMessage', (post) => {
      if (post._id === id) setCurrentMessages(post.votes);
    })
  }, []);
  
  // const handleClick = () => {
  //   socket.emit('inserPost', { id, username, message} );
  // }

  return (
      <tr>
        <td> {username} </td>
          <td> {message} </td>
      </tr>
  );
}

export default PostCard;
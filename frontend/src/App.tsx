import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/post')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Wazaar 📣</h1>
      {posts.length === 0 ? (
        <p>Geen berichten gevonden...</p>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <p>{post.text}</p>
              <small>{new Date(post.createdAt).toLocaleString('nl-NL')}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


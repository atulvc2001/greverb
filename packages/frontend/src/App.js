import './App.css';
import React from 'react';
import axios from "axios";

const baseURL = "http://localhost:8000/api/v1/cards/adi";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className='bg-01 App'>
      <body>
        <container>
          <div className='mar-01'>
            <h1 className='title-01'>{post.word}</h1>
            <div className='txt-01 marmin-01'>
              <span>{post.definition}</span>
            </div>
            <div className='txt-02 marmin-02'>
              {post.example}
            </div>
            <form action="http://localhost:3000" method="GET">
              <button className='button'>Reload</button>
            </form>
          </div>
        </container>
      </body>
    </div>
  );
}


import axios from 'axios';
import { useState } from 'react';

function App() {
  const [postData, setPostData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  });

  function handlePost(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setPostData(postData => ({
      ...postData,
      [e.target.name]: value
    }));
  }

  const endopoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

  function createPost(e) {
    e.preventDefault();
    axios.post(endopoint, postData)
      .then(res => {
        console.log(res);
      });

  }

  return (
    <>
      <form onSubmit={createPost}>
        <div>
          <label htmlFor="author-element">Nome Autore</label>
          <input
            type="text"
            name='author'
            id='author-element'
            placeholder='Inserire nome autore'
            value={postData.author}
            onChange={handlePost}
          />
        </div>
        <div>
          <label htmlFor="title-element">Titolo Post</label>
          <input
            type="text"
            name='title'
            id='title-element'
            placeholder='Inserire Titolo post'
            value={postData.title}
            onChange={handlePost}
          />
        </div>
        <div>
          <label htmlFor="body-element">Contenuto post</label>
          <input
            type="text"
            name='body'
            id='body-element'
            placeholder='Inserire contenuto post'
            value={postData.body}
            onChange={handlePost}
          />
        </div>
        <div>
          <label htmlFor="public-element">Pubblicare</label>
          <input
            type="checkbox"
            id='public-element'
            name='public'
            checked={postData.public}
            onChange={handlePost}
          />
        </div>
        <button>Crea Post</button>
      </form>
    </>
  );
}

export default App;

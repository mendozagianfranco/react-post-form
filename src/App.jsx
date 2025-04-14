import { useState } from 'react';

function App() {
  const [postData, setPostData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  });

  return (
    <>
      <form>
        <div>
          <label htmlFor="author-element">Nome Autore</label>
          <input
            type="text"
            name='author'
            id='author-element'
            placeholder='Inserire nome autore'
            value={postData.author}
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
          />
        </div>
        <div>
          <label htmlFor="public-element">Pubblicare</label>
          <input
            type="checkbox"
            id='public-element'
            name='public'
            checked={postData.public}
          />
        </div>
        <button>Crea Post</button>
      </form>
    </>
  );
}

export default App;

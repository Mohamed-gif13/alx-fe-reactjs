// src/components/BlogPost.jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>Contenu de l'article {id}...</p>
    </div>
  );
}

export default BlogPost;

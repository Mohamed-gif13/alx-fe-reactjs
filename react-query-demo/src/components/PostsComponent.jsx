import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes avant que le cache soit supprimé
    staleTime: 1000 * 30, // 30 secondes avant que les données soient considérées comme "stale"
    refetchOnWindowFocus: false, // Empêche la refetch automatique quand l'onglet est actif
    keepPreviousData: true, // Garde les données précédentes pendant le chargement des nouvelles
  });

  if (isLoading) return <p>Chargement des posts...</p>;
  if (isError) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Actualiser les posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

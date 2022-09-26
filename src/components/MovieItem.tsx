import "./movieItem.css";

type movieItemType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

function MovieItem({ id, title, poster_path, vote_average }: movieItemType) {
  const poster = `https://image.tmdb.org/t/p/w1280/${poster_path}`;

  return (
    <div key={id} className="singleCard">
      <img src={poster} alt={title} />
      <div className="cardInfo">
        <h3>{title}</h3>
        <p>{vote_average}</p>
      </div>
    </div>
  );
}

export default MovieItem;

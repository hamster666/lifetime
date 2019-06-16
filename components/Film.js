const Film = ({Title, Year, Plot, Poster}) => <div className="film">
  <h2>{Title}</h2>
  <p>{Year}</p>
  <p>{Plot}</p>
  <img src={Poster} />
</div>

export default Film;
import fetch from "isomorphic-unfetch"
import filmIds from '../data/filmIds.json'

const getFilmData = async id => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=dce40fd0&i=${id}`);
  const data = await res.json();
  return data;
}

const getAllFilms = () => {
  const arrayOfPromises = filmIds.map(id => getFilmData(id));
  const data = Promise.all(arrayOfPromises).then(values => {
    return values;
  })
 
  return data;
}

export default getAllFilms;
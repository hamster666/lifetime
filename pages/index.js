import films from "../data/filmData.json"
import filmIds from "../data/filmIds.json"
import Film from "../components/Film"
import fetch from "isomorphic-unfetch"
import getFilms from "../api/api"

const Index = ({shows}) => (<>
  <h1>Alan's films</h1>
  { shows.map(_ => <Film {..._}></Film>)}
</>);


Index.getInitialProps = async () => {
  const res = await getFilms();
  
  return {
    shows: res
  }
};

export default Index;
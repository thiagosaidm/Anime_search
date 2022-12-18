
import './App.css';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';


const api = 'https://kitsu.io/api/edge/'

function App() {

  const [info, setInfo] = useState({})
  const [text, setText] = useState('');


  useEffect(() => {

    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=1`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);

        });
    }
  }, [text]);

  return (
    <div className="App">
        <h1> Hello Site de Anime</h1>
        <SearchInput  
          value={text} 
          onChange={(search) => setText(search)}
          />
        {info.data && (
          <table className='animes-list'>
            <tbody>
              {info.data.map((anime) =>(
                <tr key={anime.id}>  
                  <td><span><img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/></span></td>
                  <td className='title'>{anime.attributes.canonicalTitle}</td>
                  <td className='sinop'>{anime.attributes.synopsis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
  


}

export default App;

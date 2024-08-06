import { useEffect, useState } from "react";

import axios from "axios";

import AlbumSearchBar from "./components/AlbumSearchBar"
import AlbumResult from "./components/AlbumResult";
import TokenRequest from "./components/TokenRequest";

const App = () => {
  const [albumQuery, setAlbumQuery] = useState('')
  const [myFavs, setMyFavs] = useState<SpotifyApi.AlbumObjectSimplified[]>([])
  const [albumResults, setAlbumResults] = useState<SpotifyApi.AlbumObjectSimplified[]>([])
  const [apiError, setApiError] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (albumQuery !== '') {
      axios.get('https://api.spotify.com/v1/search', {
        params: {
          q: albumQuery,
          type: 'album',
          market: 'GB'
        },
        headers: {
          Authorization: `Bearer  ${token}}`
        }
      }).then(({ data }) => {
        setAlbumResults(() => data.albums.items);
        setApiError(() => false);
      }).catch(() => {
        setApiError(() => true);
        setAlbumResults([]);
      })
    } else {
      setAlbumResults([])
    }
  }, [albumQuery])

  return (
    <div className="container mt-2">
      {token !== '' && (
        <AlbumSearchBar
          albumQuery={albumQuery}
          setAlbumQuery={setAlbumQuery}
        />
      )}
      <TokenRequest setToken={setToken} apiError={apiError} />
      {albumResults.map((ar) => (
        <AlbumResult
          key={ar.id}
          album={ar}
          myFavs={myFavs}
          setMyFavs={setMyFavs}
        />
      ))}
      <h3>{"My Favourite Albums"}</h3>
      {myFavs.map((ar) => (
        <AlbumResult
          key={ar.id}
          album={ar}
          myFavs={myFavs}
          setMyFavs={setMyFavs}
        />
      ))}
    </div>
  )
}

export default App

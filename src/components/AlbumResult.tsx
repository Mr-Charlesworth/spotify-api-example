import { css } from "@emotion/css"
import { FC } from "react"

const AlbumResult: FC<{ album: SpotifyApi.AlbumObjectSimplified }> = ({ album }) => {

  const resultClass = css({
    border: "1px solid black",
    borderRadius: '5px',
    padding: '5px',
    marginBottom: '10px',
    alignItems: 'center',
  })

  return (
    <div className={[resultClass, "row"].join(' ')}>
      <div className="col-3">
        <img width="64" src={album.images[0].url} alt="album artwork" />
      </div>
      <div className="col-4">
        {album.artists.map((ar) => ar.name).join(', ')}
      </div>
      <div className="col-5">
        {album.name}
      </div>
    </div>
  );
};

export default AlbumResult;
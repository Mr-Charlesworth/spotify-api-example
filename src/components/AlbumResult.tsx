import { FC, useState } from "react"

import { css } from "@emotion/css"

import ArtModal from "./ArtModal";

const AlbumResult: FC<{
  album: SpotifyApi.AlbumObjectSimplified,
  myFavs: SpotifyApi.AlbumObjectSimplified[],
  setMyFavs: React.Dispatch<React.SetStateAction<SpotifyApi.AlbumObjectSimplified[]>>
}> = ({ album, myFavs, setMyFavs }) => {

  const [showModal, setShowModal] = useState(false);

  const itsOneOfMyFavs = myFavs.filter((fav) => fav.id === album.id).length > 0

  const resultClass = css({
    border: "2px dashed #007bff",
    borderRadius: '5px',
    padding: '5px',
    alignItems: 'center',
    margin: "0px 1px 10px 1px"
  });

  const addButton = css({
    width: '50px'
  });

  const hover = css({
    ":hover": {
      cursor: 'pointer',
    }
  })

  const setAsFav = (newFav: boolean) => {
    if (newFav) {
      setMyFavs((prev) => [...prev, album])
    } else {
      setMyFavs((prev) => prev.filter((otherFav) => otherFav.id !== album.id))
    }
  };

  return (
    <>
      <div className={[resultClass, "row"].join(' ')}>
        <div className="col-1 cursor-pointer">
          <img className={hover} onClick={() => setShowModal(() => true)} width="64" src={album.images[0].url} alt="album artwork" />
        </div>
        <div className="col-4">
          {album.artists.map((ar) => ar.name).join(', ')}
        </div>
        <div className="col-6">
          {album.name}
        </div>
        <div className="col-1">
          <button
            onClick={() => setAsFav(!itsOneOfMyFavs)}
            className={[`btn btn-${itsOneOfMyFavs ? "secondary" : "primary"}`, addButton].join(' ')}>
            {itsOneOfMyFavs ? '-' : '+'}
          </button>
        </div>
      </div>
      {showModal && (
        <ArtModal url={album.images[0].url} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default AlbumResult;
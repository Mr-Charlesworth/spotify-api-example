import React, { FC } from "react";

const AlbumSearchBar: FC<{
  albumQuery: string,
  setAlbumQuery: React.Dispatch<React.SetStateAction<string>>,
}> = ({ setAlbumQuery, albumQuery }) => {

  const handleAlbumQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumQuery(() => e.target.value)
  };

  return (
    <div className="form-group">
      <label htmlFor="album-search">Album Search</label>
      <input onChange={handleAlbumQueryChange} value={albumQuery} className="form-control" type="text" id='album-search' />
    </div>
  );
};

export default AlbumSearchBar;

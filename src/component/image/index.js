import React from "react";
import data from "../../data";

function Image() {
  return (
    <>
       <img id="imgArtist" src={data.album.images[1].url} alt="" />
    </>
  );
}

export { Image };

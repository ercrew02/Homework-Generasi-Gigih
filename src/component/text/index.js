import React from "react";
import data from "../../data";

function Text() {
  return (
    <>
      <p id="nameArtis">{data.artists[0].name}</p>
      <p id="songTitle">{data.name}</p>
    </>
  );
}

export { Text };

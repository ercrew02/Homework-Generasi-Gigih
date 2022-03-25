import React from "react";
import { Image } from "../image/index";
import { Button } from "../button/index";
import { Text } from "../text/index";

function Home() {
  return (
    <>
      <div className="Container">
        <Image />
        <Text />
        <Button />
      </div>
    </>
  );
}

export { Home };

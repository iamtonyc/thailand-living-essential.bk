import React from "react";

export default function GoogleTranslate() {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={centerDiv}
      dangerouslySetInnerHTML={{__html: "<iframe title='GoogleTranslate' src='https://translate.google.com/?hl=zh-TW&sl=th&tl=zh-TW&op=translate' width='1200' height='800' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
      }}
    />
  );
}

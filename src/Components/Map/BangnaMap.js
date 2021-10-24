import React from "react";

export default function BangnaMap() {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={centerDiv}
      dangerouslySetInnerHTML={{__html: "<iframe title='BangnaMap' src='https://www.google.com/maps/d/embed?mid=1aZc_9pc10jtWndMUVNp7Mvazx1LkaCqG&z=12&ll=13.74869, 100.56316' width='1200' height='800' style='border:0;' allowfullscreen='' loading='lazy'></iframe>",
      }}
    />
  );
}

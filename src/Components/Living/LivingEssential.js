import React from "react";

export default function LivingEssential() {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div style={centerDiv}
      dangerouslySetInnerHTML={{__html: "<iframe title='LivingEssential' src='https://docs.google.com/document/d/1ockOPr6NoQU086mNxxvJOSr4zIIG8qkgKKSWxqU7wGk/edit?usp=sharing' width='1200' height='800' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
      }}
    />
  );
}

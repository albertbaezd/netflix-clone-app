import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  //we need series and films
  const { series } = useContent("series");
  return <p>Hello from the Browse</p>;
}

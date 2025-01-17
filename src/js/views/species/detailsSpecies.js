import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function DetailsSpecies() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadSpeciesDetails(params.speciesId);
  }, []);
  const { specie } = store;
  console.log(params);
  return <>{specie ? <p>{specie.properties.name}</p> : ""}</>;
}

import React from "react";
import { ApartmentTileDetails } from "../components/apartment-tile-details";


export const Apartments: React.FunctionComponent = () => {

  return(
    <div>
      <h1>These are the apartments</h1>
      <ApartmentTileDetails />
    </div>
  );
}
import React from "react";
import {Apartment} from "../queries/types";
import building from "../resources/building.jpg";

export interface ApartmentCardProps {
  apartment: Apartment
}

export const ApartmentCard: React.FunctionComponent<ApartmentCardProps> = ({apartment}) => {
  return (
    <div className={"card "}>
      <img className={"card-img-top"} src={building} alt="Building"/>
      <div className={"card-body"}>
        <h5 className={"card-title"}>
          {apartment.numberOfBedrooms} Bedroom, {apartment.numberOfBathrooms} Bathroom{apartment.hasParking ? ", with parking" : ""}
        </h5>
        <p className={"card-text"}>{apartment.description}</p>
        <p className={"card-text"}>Area: {apartment.area} m2</p>
        <p className={"card-text"}>Price: R$ {apartment.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
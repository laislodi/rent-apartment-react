import React from "react";
import {Apartment} from "../queries/types";
import building from "../resources/building.jpg";

interface ApartmentCardProps {
  apartment: Apartment
}

export const ApartmentCard: React.FunctionComponent<ApartmentCardProps> = ({apartment}) => {
  return (
    <div className={"card "}>
      <img className={"card-img-top"} src={building} alt="Building"/>
      <div className={"card-body"}>
        <h5 className={"card-title"}>
          Apartment {apartment.numberOfBedrooms} Bedrooms, {apartment.numberOfBathrooms} {apartment.hasParking ? ", with parking" : ""}
        </h5>
        <p className={"card-text"}>{apartment.description}</p>
      </div>
    </div>
  );
}
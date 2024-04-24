import React from "react";
import {Apartment} from "../queries/types";
import building from "../resources/building.jpg";
import {Link} from "react-router-dom";

export interface ApartmentCardProps {
  apartment: Apartment
}

export const ApartmentCard: React.FunctionComponent<ApartmentCardProps> = ({apartment}) => {
  return (
    <div className={"card "}>
      <Link className={"text-reset"} to={apartment.id}>
        <img className={"card-img-top"} src={building} alt="Building"/>
      </Link>
      <div className={"card-body"}>
        <Link className={"text-reset text-decoration-none placeholder-wave"} to={`${apartment.id}`}>
          <h5 className={"card-title"}>
            {apartment.numberOfBedrooms} Bedroom, {apartment.numberOfBathrooms} Bathroom{apartment.hasParking ? ", with parking" : ""}
          </h5>
        </Link>
        <Link className={"text-reset text-decoration-none"} to={`${apartment.id}`}>
          <p className={"card-text"}>{apartment.description}</p>
          <p className={"card-text"}>Area: {apartment.area} m2</p>
          <p className={"card-text"}>Price: R$ {apartment.price.toFixed(2)}</p>
        </Link>
      </div>
    </div>
  );
}
import React from "react";
import axios from "axios";
import { Apartment } from "../queries/types";
import { ApartmentCard } from "./apartment-card";

export const ApartmentTileDetails: React.FunctionComponent = () => {
  // const allApartmentQueryFn = async ({ queryKey }) => {
  //   const { data } = await axios.get(`http://localhost:8080/apartments`{queryKey[0]});
  //   return data;
  // }
  const [data, setData] = React.useState<Apartment[]>([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/apartments').then((res) => {
      setData(res.data);
    });
  });

  return (
    <div className={"row"}>
      {data ? data.map(apartment =>
        <div className="col-sm-6 col-md-4 col-lg-2">
          {ApartmentCard({apartment})}
        </div> ) :
        <div></div>}
    </div>
  );
};



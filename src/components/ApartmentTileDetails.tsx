import React, { useState } from "react";
import axios from "axios";
import { Apartment } from "../queries/types";
import { ApartmentCard } from "./ApartmentCard";
import { ApartmentFilter, ApartmentFilterHeader } from "./ApartmentFilterHeader";

export const ApartmentTileDetails: React.FunctionComponent = () => {
  // const allApartmentQueryFn = async ({ queryKey }) => {
  //   const { data } = await axios.get(`http://localhost:8080/apartments`{queryKey[0]});
  //   return data;
  // }
  const [data, setData] = useState<Apartment[]>([]);
  const [filter, setFilter ] = useState<ApartmentFilter>({
    "description": "",
    "bedrooms": "0+",
    "bathrooms": "0+",
    "hasParking": false
  });

  React.useEffect(() => {
    let url = `/api/apartments`;
    axios.get(url, {
      params: filter
    }).then((res) => {
      setData(res.data);
    });
  }, [filter]);

  return (
    <div>
      <ApartmentFilterHeader
        filter={filter}
        setFilter={setFilter}
      />
      <div className={"row"}>
        {data && data.map(apartment =>
          <div key={apartment.id} className="col-sm-6 col-md-4 col-lg-2">
            {ApartmentCard({apartment})}
          </div> )}
      </div>
    </div>
  );
};



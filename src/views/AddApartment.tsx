import React from "react";
import { emptyApartment, NewApartment } from "../queries/types";
import axios from "axios";
import { getAuthToken } from "../queries/auth";

export const AddApartment: React.FunctionComponent = () => {
  const [ apartment, setApartment ] = React.useState<NewApartment>(emptyApartment);
  const auth = getAuthToken();

  const createApartment = (event: React.FormEvent) => {
    event.preventDefault();
    const headers = { Authorization: auth };

    // using Axios
    axios.post("/apartments/add", apartment, {headers}).then((res) => {
      console.log("Apartment:", res.data);
    });

    setApartment(emptyApartment);
  };

  return <div>
    <h1>Create a new apartment</h1>
    <div className={"container"} >
      <form id="createApartmentForm" onSubmit={createApartment}>
        <div className={"form-group"}>
          <label className="form-text text-muted">
            Bedrooms:
            <input
              className="form-control"
              type="number"
              value={apartment ? apartment.numberOfBedrooms : 0}
              onChange={e => setApartment({...apartment, numberOfBedrooms: Number(e.target.value)})}
            />
          </label>
        </div>
        <br/>
        <div className={"form-group"}>
          <label className="form-text text-muted">
            Bathrooms:
            <input
              className="form-control"
              type="number"
              value={apartment ? apartment.numberOfBathrooms : 0}
              onChange={e => setApartment({...apartment, numberOfBathrooms: Number(e.target.value)})}
            />
          </label>
        </div>
        <br/>
        <div className={"form-group"}>
          <label className="form-text text-muted">
            Area:
            <input
              className="form-control"
              type="number"
              value={apartment ? apartment.area : 0}
              onChange={e => setApartment({...apartment, area: Number(e.target.value)})}
            />
          </label>
        </div>
        <br/>
        <div className={"form-check"}>
          <label className="form-check-label">
            Has Parking:
            <input
              className="form-check-input"
              type="checkbox"
              value={apartment ? "hasParking" : ""}
              onChange={e => setApartment({...apartment, hasParking: e.target.value === "hasParking"})}
            />
          </label>
        </div>
        <br/>
        <div className={"form-group"}>
          <label className="form-text text-muted">
            Price:
            <input
              className="form-control"
              type="number" value={apartment ? apartment.price : 0}
              onChange={e => setApartment({...apartment, price: Number(e.target.value)})}
            />
          </label>
        </div>
        <br/>
        <div className={"form-group"}>
          <label className="form-text text-muted">
            Description:
            <textarea
              className="form-control"
              value={apartment ? apartment.description : ""}
              onChange={e => setApartment({...apartment, description: e.target.value})}
            />
          </label>
        </div>
        <br/>
        <button className="" type="submit">Submit</button>
      </form>
    </div>
  </div>;
};

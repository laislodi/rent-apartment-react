import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Apartment } from "../queries/types";
import building from "../resources/building.jpg";
import { getAuthToken } from "../queries/auth";

export const ApartmentPage: React.FunctionComponent = () => {
  const id = useParams();
  const [apartment, setApartment] = useState<Apartment>({
    id: "",
    description: "",
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    hasParking: false,
    area: 0.0,
    price: 0.0
  });
  const auth = getAuthToken();
  const edit = !!auth;

  React.useEffect(() => {
    let url = `/api/apartments/${id.id}`;
    axios.get(url).then(res => {
      setApartment(res.data);
    });
  }, [id]);

  const editApartment = () => {
    let url = `/api/apartments/${id.id}`;
    const headers = { Authorization: auth };
    axios.put(url, apartment, {headers}).then(res => {
      setApartment(res.data);
    });
  };

  return (
    <Fragment>
      <div className={"container"}>
        <h4 className={"text-center"}>This is the Apartment Page!</h4>
        <div className={"d-flex"}>
          <div className={"flex-shrink-0"} style={{height: "300px", width: "300px"}}>
            <img style={{maxHeight: "100%", maxWidth: "90%"}} src={building} alt="Building"/>
          </div>
          <div className={"flex-grow-1 ms-3"}>
            <form onSubmit={editApartment}>
              <div className="mb-3">
                <label htmlFor={"description"} className="form-label">Description:</label>
                <div className="input-group">
                  <textarea
                    name="description"
                    disabled={!edit}
                    className="form-control"
                    onChange={e => setApartment({...apartment, description: e.target.value} )}
                    value={apartment?.description}/>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor={"bedrooms"} className="form-label">Bedrooms:</label>
                <div className="input-group">
                  <input
                    name={"bedrooms"}
                    type={"number"}
                    disabled={!edit}
                    className="form-control"
                    onChange={e => setApartment({...apartment, numberOfBedrooms: parseInt(e.target.value)} )}
                    value={apartment.numberOfBedrooms} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor={"bathrooms"} className="form-label">Bathrooms:</label>
                <div className="input-group">
                  <input
                    name={"bathrooms"}
                    type={"number"}
                    disabled={!edit}
                    className="form-control"
                    onChange={e => setApartment({ ...apartment, numberOfBathrooms: parseInt(e.target.value)} )}
                    value={apartment.numberOfBathrooms} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor={"area"} className="form-label">Area:</label>
                <div className="input-group">
                  <input
                    name={"area"}
                    type={"number"}
                    disabled={!edit}
                    className="form-control"
                    onChange={e => setApartment({ ...apartment, area: parseFloat(e.target.value)} )}
                    value={apartment.area} />
                  <span className="input-group-text">m2</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor={"price"} className="form-label">Price:</label>
                <div className="input-group">
                  <input
                    name={"price"}
                    type={"number"}
                    disabled={!edit}
                    className="form-control"
                    onChange={e => setApartment({ ...apartment, price: parseFloat(e.target.value)} )}
                    value={apartment.price} />
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              {edit && <div>
                <button onClick={() => editApartment}>Edit</button>
              </div>}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}



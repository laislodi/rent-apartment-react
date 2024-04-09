import React from "react";

export interface ApartmentFilter {
  bedrooms: string,
  bathrooms: string,
  minArea?: number,
  maxArea?: number,
  hasParking: boolean,
  minPrice?: number,
  maxPrice?: number,
  description: string,
}

interface ApartmentFilterHeaderProps {
  filter: ApartmentFilter,
  setFilter: (filter: ApartmentFilter) => void,
}

export const ApartmentFilterHeader: React.FC<ApartmentFilterHeaderProps> = (
  {filter, setFilter}
) => {
  return <div className={"py-4"}>
    <div className={"input-group py-2"}>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Filter:</span>
        <input
          className={"form-control"}
          name="filter"
          type="text"
          placeholder="Description"
          value={filter.description}
          onChange={e=> setFilter({...filter, description: e.target.value})}
        />
      </div>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Has Parking:</span>
        <input
          type="checkbox"
          className={"m-2"}
          value={filter.hasParking.toString()}
          name={"hasParkingCheckbox"}
          onChange={e=> setFilter({...filter, hasParking: e.target.checked})}/>
      </div>
    </div>

    <div className={"input-group py-2"}>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Bedrooms:</span>
        <select
          className={"form-select form-select-sm"}
          name={"select-bedrooms"}
          defaultValue={"0+"}
          value={filter.bedrooms}
          onChange={e => setFilter({...filter, bedrooms: e.target.value})}>
          <option value={"0+"}>Any</option>
          <option value={"1"}>1</option>
          <option value={"1+"}>1+</option>
          <option value={"2"}>2</option>
          <option value={"2+"}>2+</option>
          <option value={"3"}>3</option>
          <option value={"3+"}>3+</option>
          <option value={"4"}>4</option>
          <option value={"4+"}>4+</option>
        </select>
      </div>
      <div className={"col px-2 input-group"}>
        <label className={"input-group-text"}>Bathrooms:</label>
        <select
          className={"form-select form-select-sm"}
          name={"select-bathrooms"}
          defaultValue={"0+"}
          value={filter.bathrooms}
          onChange={e => setFilter({...filter, bathrooms: e.target.value})}>
          <option value={"0+"}>Any</option>
          <option value={"1"}>1</option>
          <option value={"1+"}>1+</option>
          <option value={"2"}>2</option>
          <option value={"2+"}>2+</option>
          <option value={"3"}>3</option>
          <option value={"3+"}>3+</option>
          <option value={"4"}>4</option>
          <option value={"4+"}>4+</option>
        </select>
      </div>
    </div>

    <div className={"input-group py-2"}>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Maximum Area:</span>
        <input
          className={"form-control px-1"}
          type="number"
          name={"maxArea"}
          value={filter.maxArea}
          onChange={(e) => {
            const maxArea = isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0 ? undefined : parseFloat(e.target.value);
            setFilter({...filter, maxArea: maxArea })
          }}
          placeholder={"0"}
        />
        <span className="input-group-text">.00</span>
      </div>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Maximum Price:</span>
        <input
          className={"form-control px-1"}
          type="number"
          name={"maxPrice"}
          value={filter.maxPrice}
          onChange={(e) => {
            const maxPrice = isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0 ? undefined : parseFloat(e.target.value);
            setFilter({...filter, maxPrice: maxPrice })
          }}
          placeholder={"0"}
        />
        <span className="input-group-text">.00</span>
      </div>
    </div>

    <div className={"input-group py-2"}>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Minimum Area:</span>
        <input
          className={"form-control px-1"}
          type="number"
          name={"minArea"}
          value={filter.minArea}
          onChange={(e) => {
            const minArea = isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0 ? undefined : parseFloat(e.target.value);
            setFilter({...filter, minArea: minArea })
          }}
          placeholder={"0"}
        />
        <span className="input-group-text">.00</span>
      </div>
      <div className={"col px-2 input-group"}>
        <span className={"input-group-text"}>Minimum Price:</span>
        <input
          className={"form-control px-1"}
          type="number"
          name={"minPrice"}
          value={filter.minPrice}
          onChange={(e) => {
            const minPrice = isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0 ? undefined : parseFloat(e.target.value);
            setFilter({...filter, minPrice: minPrice })
          }}
          placeholder={"0"}
        />
        <span className="input-group-text">.00</span>
      </div>
    </div>
  </div>
};


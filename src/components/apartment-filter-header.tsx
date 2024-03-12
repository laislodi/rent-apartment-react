import React from "react";
import { Checkbox, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";

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
    <div className={"row py-2 align-content-between"}>
      <div className={"col align-content-around"}>
        <TextField
          variant={"standard"}
          name="filter"
          label={"Filter:"}
          type="text"
          placeholder="Description contains..."
          value={filter.description}
          onChange={e=> setFilter({...filter, description: e.target.value})}
        />
      </div>
      <div className={"col"}>
        <FormControlLabel
          value={filter.hasParking}
          control={
            <Checkbox
              className={"px-2"}
              name="parkingFilter"
              onChange={e=> setFilter({...filter, hasParking: e.target.checked})}
            />}
          label={"has parking"}
          labelPlacement="end"
        />
      </div>
    </div>
    <div className={"row py-3"}>
      <div className={"col"}>
        <InputLabel variant="standard" htmlFor="bedrooms-label">Bedrooms:</InputLabel>
        <Select
          className={"form-select form-select-sm"}
          value={filter.bedrooms}
          onChange={e => setFilter({...filter, bedrooms: e.target.value})}
          defaultValue={"0+"}
          labelId={'bedrooms-label'}
          variant={"outlined"}
        >
          <MenuItem value={"0+"}>Any</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"1+"}>1+</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"2+"}>2+</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"3+"}>3+</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"4+"}>4+</MenuItem>
        </Select>
      </div>
      <div className={"col"}>
        <InputLabel variant="standard" id="bathrooms-label">Bathrooms:</InputLabel>
        <Select
          className={"form-select form-select-sm"}
          value={filter.bathrooms}
          onChange={e=> setFilter({...filter, bathrooms: e.target.value})}
          labelId={"bathrooms-label"}
          variant={"outlined"}>
          <MenuItem value={"0+"} selected={true}>Any</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"1+"}>1+</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"2+"}>2+</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"3+"}>3+</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"4+"}>4+</MenuItem>
        </Select>
      </div>
    </div>
    <div className={"row py-2"}>
      <div className={"col"}>
        <div className="input-group mb-3">
          <TextField
            className={"form-control my-3 px-1"}
            error={(filter.maxArea && filter.minArea) ? filter.maxArea < filter.minArea : false }
            helperText={(filter.maxArea && filter.minArea && filter.maxArea < filter.minArea) ? "Max Area is less than minimum" : ""}
            variant={"outlined"}
            label={"Maximum Area:"}
            name="maxArea"
            type="number"
            placeholder="Maximum"
            value={filter.maxArea ? filter.maxArea : undefined}
            onChange={(e) => {
              const maxArea = isNaN(parseFloat(e.target.value)) ? undefined : parseFloat(e.target.value);
              setFilter({...filter, maxArea: maxArea })
            }}
          />
          <span className="input-group-text my-3">.00</span>
        </div>
        <div className="input-group mb-3">
          <TextField
            className={"form-control my-3 px-1"}
            error={(filter.maxArea && filter.minArea) ? filter.maxArea < filter.minArea : false}
            helperText={(filter.maxArea && filter.minArea && filter.maxArea < filter.minArea) ? "Max Area is less than minimum" : ""}
            variant={"outlined"}
            label={"Minimum Area:"}
            name="minArea"
            type="number"
            placeholder="Minimum"
            value={(filter.minArea ? filter.minArea : undefined)}
            onChange={(e) => {
              const minArea = isNaN(parseFloat(e.target.value)) ? undefined : parseFloat(e.target.value);
              setFilter({...filter, minArea: minArea })
            }}
          />
          <span className="input-group-text my-3">.00</span>
        </div>
      </div>
      <div className={"col"}>
        <div className="input-group mb-3">
          <TextField
            className={"form-control my-3 px-1"}
            error={(filter.maxPrice && filter.minPrice) ? filter.maxPrice < filter.minPrice : false}
            helperText={(filter.maxPrice && filter.minPrice && filter.maxPrice < filter.minPrice) ? "Max Price is less than minimum" : ""}
            variant={"outlined"}
            name="maxPrice"
            label={"Maximum Price:"}
            type="number"
            placeholder="Maximum"
            value={filter.maxPrice}
            onChange={(e) => {
              const maxPrice = parseFloat(e.target.value);
              setFilter({...filter, maxPrice: maxPrice })
            }}
          />
          <span className="input-group-text my-3">.00</span>
        </div>
        <div className="input-group mb-3">
          <TextField
            className={"form-control my-3 px-1"}
            error={(filter.maxPrice && filter.minPrice) ? filter.maxPrice < filter.minPrice : false}
            helperText={(filter.maxPrice && filter.minPrice && filter.maxPrice < filter.minPrice) ? "Max Price is less than minimum" : ""}
            variant={"outlined"}
            name="minPrice"
            label={"Minimum Price:"}
            type="number"
            placeholder="Minimum"
            value={filter.minPrice}
            onChange={(e) => {
              const minPrice = parseFloat(e.target.value);
              setFilter({...filter, minPrice: minPrice })
            }}
          />
          <span className="input-group-text my-3">.00</span>
        </div>
      </div>
    </div>
  </div>
};


export type Apartment = {
  id: string,
  numberOfBedrooms: number,
  numberOfBathrooms: number,
  area: number,
  hasParking: boolean,
  price: number,
  description: string,
}

export type NewApartment = {
  numberOfBedrooms: number,
  numberOfBathrooms: number,
  area: number,
  hasParking: boolean,
  price: number,
  description: string,
}

export const emptyApartment = {
  numberOfBedrooms: 0,
  numberOfBathrooms: 0,
  area: 0,
  hasParking: false,
  price: 0,
  description: "",
}
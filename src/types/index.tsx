export interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface User {
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  cell: string;
}

export interface ApiResponse {
  results: User[];
}

export interface UserData {
  avatar: string;
  id: string;
  gender: string;
  name: string;
  location: string;
  email: string;
  dob: string;
  phone: string;
  cell: string;
}
export interface FilterState {
  gender: string;
  search: string;
}

export const SET_GENDER = "SET_GENDER";
export const SET_SEARCH = "SET_SEARCH";

export interface SetGenderAction {
  type: typeof SET_GENDER;
  payload?: string;
}

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload?: string;
}
export interface ListingPageProps {}
export type FilterAction = SetGenderAction | SetSearchAction;

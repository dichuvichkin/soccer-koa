import { Country } from "../models/Country";
import { Team } from "../models/Team";

export interface IDeleteCountry {
  id: number;
}

export interface IUpdateCountry {
  id: number;
  data: Country;
}

export interface IDeleteTeam {
  id: number;
}

export interface IUpdateTeam {
  id: number;
  data: Team;
}

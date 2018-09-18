import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import { Country } from "./Country";

@Table
export class Team extends Model<Team> {
  @Column
  name: string;

  @BelongsTo(() => Country)
  country: Country;

  @ForeignKey(() => Country)
  @Column
  countryId: number;
}

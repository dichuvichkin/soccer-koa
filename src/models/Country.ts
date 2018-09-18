import { Column, HasMany, Model, Table } from "sequelize-typescript";

import { Team } from "./Team";

@Table
export class Country extends Model<Country> {
  @Column
  name: string;

  @HasMany(() => Team)
  teams: Team[];
}

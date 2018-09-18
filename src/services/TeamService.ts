import { Team } from "../models/Team";
import { Country } from "../models/Country";

const getTeams = async () => {
  return await Team.findAll({
    include: [Country]
  });
};

const getTeamsByCountryId = async (id: number) => {
  return await Team.findAll({
    where: {
      countryId: id
    },
    include: [Country]
  });
};

const getTeamById = async (id: number) => {
  return await Team.findById(id, {
    include: [Country]
  });
};

const createTeam = async (team: Team) => {
  await Team.create(team);
};

const deleteTeamById = async (id: number) => {
  await Team.destroy({
    where: { id }
  });
};

const updateTeamById = async (id: number, team: Team) => {
  await Team.update(team, {
    where: { id }
  });
};

export const teamServiceFactory = () => ({
  getTeams,
  getTeamsByCountryId,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById
});

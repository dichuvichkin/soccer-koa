import { Country } from "../models/Country";
import { Team } from "../models/Team";

const getCountries = async () => {
  return await Country.findAll({
    include: [Team]
  });
};

const getCountryById = async (id: number) => {
  return await Country.findById(id, {
    include: [Team]
  });
};

const createCountry = async (country: Country) => {
  await Country.create(country);
};

const deleteCountryById = async (id: number) => {
  await Country.destroy({
    where: { id }
  });
};

const updateCountryById = async (id: number, country: Country) => {
  await Country.update(country, {
    where: { id }
  });
};

export const countryServiceFactory = () => ({
  getCountries,
  getCountryById,
  createCountry,
  deleteCountryById,
  updateCountryById
});

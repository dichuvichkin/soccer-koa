/// <reference path='../../node_modules/koa-body/index.d.ts' />
import { Context } from "koa";

import { IDeleteCountry, IUpdateCountry } from "./types";
import { countryServiceFactory } from "../services/CountryService";

export const countryControllerFactory = () => {
  const countryService = countryServiceFactory();

  const getCountries = async (ctx: Context) => {
    ctx.body = await countryService.getCountries();
    ctx.status = 200;
  };

  const getCountryById = async (ctx: Context) => {
    ctx.body = await countryService.getCountryById(ctx.params.countryId);
    ctx.status = 200;
  };

  const createCountry = async (ctx: Context) => {
    await countryService.createCountry(ctx.request.body);
    ctx.status = 200;
  };

  const deleteCountryById = async (ctx: Context) => {
    const { id } = ctx.request.body as IDeleteCountry;
    await countryService.deleteCountryById(id);
    ctx.status = 200;
  };

  const updateCountryById = async (ctx: Context) => {
    const { id, data } = ctx.request.body as IUpdateCountry;
    await countryService.updateCountryById(id, data);
    ctx.status = 200;
  };

  return {
    getCountries,
    getCountryById,
    createCountry,
    deleteCountryById,
    updateCountryById
  };
};

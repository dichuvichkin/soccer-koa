/// <reference path='../../node_modules/koa-body/index.d.ts' />
/// <reference path='../../node_modules/@types/koa-router/index.d.ts' />

import { Context } from "koa";

import { IDeleteTeam, IUpdateTeam } from "./types";
import { teamServiceFactory } from "../services/TeamService";

export const teamControllerFactory = () => {
  const teamService = teamServiceFactory();

  const getTeams = async (ctx: Context) => {
    ctx.body = await teamService.getTeams();
  };

  const getTeamsByCountryId = async (ctx: Context) => {
    ctx.body = await teamService.getTeamsByCountryId(ctx.params.countryId);
  };

  const getTeamById = async (ctx: Context) => {
    ctx.body = await teamService.getTeamById(ctx.params.teamId);
  };

  const createTeam = async (ctx: Context) => {
    await teamService.createTeam(ctx.request.body);
    ctx.status = 200;
  };

  const deleteTeamById = async (ctx: Context) => {
    const { id } = ctx.request.body as IDeleteTeam;
    await teamService.deleteTeamById(id);
    ctx.status = 200;
  };

  const updateTeamById = async (ctx: Context) => {
    const { id, data } = ctx.request.body as IUpdateTeam;
    await teamService.updateTeamById(id, data);
    ctx.status = 200;
  };

  return {
    getTeams,
    getTeamsByCountryId,
    getTeamById,
    createTeam,
    deleteTeamById,
    updateTeamById
  };
};

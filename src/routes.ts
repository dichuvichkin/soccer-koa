import * as Router from "koa-router";

import { catchErrors } from "./handlers";

import { countryControllerFactory } from "./controllers/CountryController";
import { teamControllerFactory } from "./controllers/TeamController";

const countryController = countryControllerFactory();
const teamController = teamControllerFactory();

const router = new Router();

router.get("/getCountries", catchErrors(countryController.getCountries));
router.get(
  "/getCountryById/:countryId",
  catchErrors(countryController.getCountryById)
);
router.post("/createCountry", catchErrors(countryController.createCountry));
router.post(
  "/deleteCountryById",
  catchErrors(countryController.deleteCountryById)
);
router.post(
  "/updateCountryById",
  catchErrors(countryController.updateCountryById)
);

router.get("/getTeams", catchErrors(teamController.getTeams));
router.get(
  "/getTeamsByCountryId/:countryId",
  catchErrors(teamController.getTeamsByCountryId)
);
router.get("/getTeamById/:teamId", catchErrors(teamController.getTeamById));
router.post("/createTeam", catchErrors(teamController.createTeam));
router.post("/deleteTeamById", catchErrors(teamController.deleteTeamById));
router.post("/updateTeamById", catchErrors(teamController.updateTeamById));

export const routes = router.routes();

import { Request, Response } from "express";
import { AppConstants } from "../../AppConstants";
import { planets } from "../../models/planets.model";

export const httpGetAllPlanets = async (req: Request, res: Response) => {
  return res.status(AppConstants.HTTP_STATUS_OK).json(planets);
};

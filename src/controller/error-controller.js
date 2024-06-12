import { ResponseHelper } from "../helper/api-response.js";
import { API_STATUS_CODE } from "../helper/api-status-code.js";

export class ErrorController {
  static routeNotFound(req, res, next) {
    try {
      return res.status(API_STATUS_CODE.NOT_FOUND).json(ResponseHelper.toJsonError("Route not found!"));
    } catch (error) {
      next(error);
    }
  }
}

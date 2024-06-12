import { API_STATUS_CODE } from "../helper/api-status-code.js";
import { ResponseHelper } from "../helper/api-response.js";

export class AuthController {
  static async register(req, res, next) {
    try {
      return res.status(API_STATUS_CODE.CREATED).json(ResponseHelper.toJson("Success Register!"));
    } catch (error) {
      next(error);
    }
  }
  7;

  static async login(req, res, next) {
    try {
      return res.status(API_STATUS_CODE.OK).json(ResponseHelper.toJson("Success Login!"));
    } catch (error) {
      next(error);
    }
  }
}

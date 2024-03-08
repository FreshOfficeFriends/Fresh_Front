export enum HttpStatus {
  Ok = 200,
  Created = 201,

  Found = 302,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  RequestTimeout = 408,
  IAmTeapot = 418,
  Conflict = 409,

  UnprocessableEntity = 422,
  InternalError = 500,
  Error502 = 502,
}

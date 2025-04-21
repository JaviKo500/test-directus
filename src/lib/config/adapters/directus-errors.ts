import { createError } from '@directus/errors';
interface DirectusErrorExtensions {
	collection: string;
	field: string;
}
export class DirectusErrors {
   static createDirectsError(
    errorCode: ErrorCode, 
    message: string,
    status: number,
    extensions: DirectusErrorExtensions
  ) {
    const error = createError<DirectusErrorExtensions>(errorCode, message, status);
    return new error({
      ...extensions
    });
  }

  static invalidPayload(message: string, collection: string, field: string) {
    return this.createDirectsError(
      ErrorCode.InvalidPayload,
      message,
      400,
      { collection, field }
    );
  }
}

export enum ErrorCode {
  ContainsNullValues = "CONTAINS_NULL_VALUES",
  ContentTooLarge = "CONTENT_TOO_LARGE",
  Forbidden = "FORBIDDEN",
  IllegalAssetTransformation = "ILLEGAL_ASSET_TRANSFORMATION",
  Internal = "INTERNAL_SERVER_ERROR",
  InvalidCredentials = "INVALID_CREDENTIALS",
  InvalidForeignKey = "INVALID_FOREIGN_KEY",
  InvalidIp = "INVALID_IP",
  InvalidOtp = "INVALID_OTP",
  InvalidPayload = "INVALID_PAYLOAD",
  InvalidProvider = "INVALID_PROVIDER",
  InvalidProviderConfig = "INVALID_PROVIDER_CONFIG",
  InvalidQuery = "INVALID_QUERY",
  InvalidToken = "INVALID_TOKEN",
  LimitExceeded = "LIMIT_EXCEEDED",
  MethodNotAllowed = "METHOD_NOT_ALLOWED",
  NotNullViolation = "NOT_NULL_VIOLATION",
  OutOfDate = "OUT_OF_DATE",
  RangeNotSatisfiable = "RANGE_NOT_SATISFIABLE",
  RecordNotUnique = "RECORD_NOT_UNIQUE",
  RequestsExceeded = "REQUESTS_EXCEEDED",
  RouteNotFound = "ROUTE_NOT_FOUND",
  ServiceUnavailable = "SERVICE_UNAVAILABLE",
  TokenExpired = "TOKEN_EXPIRED",
  UnexpectedResponse = "UNEXPECTED_RESPONSE",
  UnprocessableContent = "UNPROCESSABLE_CONTENT",
  UnsupportedMediaType = "UNSUPPORTED_MEDIA_TYPE",
  UserSuspended = "USER_SUSPENDED",
  ValueOutOfRange = "VALUE_OUT_OF_RANGE",
  ValueTooLong = "VALUE_TOO_LONG"
}
import { RequestHandler, ErrorRequestHandler } from 'express';

declare class ExpressHttpError extends Error {
    statusCode: string
}

export function getError(status: number): ExpressHttpError;

export interface handle404 extends RequestHandler {}
export interface handle500 extends ErrorRequestHandler {}

export class ContinueError extends ExpressHttpError {}
export class SwitchingProtocolsError extends ExpressHttpError {}
export class ProcessingError extends ExpressHttpError {}
export class OKError extends ExpressHttpError {}
export class CreatedError extends ExpressHttpError {}
export class AcceptedError extends ExpressHttpError {}
export class NonAuthoritativeInformationError extends ExpressHttpError {}
export class NoContentError extends ExpressHttpError {}
export class ResetContentError extends ExpressHttpError {}
export class PartialContentError extends ExpressHttpError {}
export class MultiStatusError extends ExpressHttpError {}
export class AlreadyReportedError extends ExpressHttpError {}
export class ContentDifferentError extends ExpressHttpError {}
export class IMUsedError extends ExpressHttpError {}
export class MultipleChoicesError extends ExpressHttpError {}
export class MovedPermanentlyError extends ExpressHttpError {}
export class MovedTemporarilyError extends ExpressHttpError {}
export class SeeOtherError extends ExpressHttpError {}
export class NotModifiedError extends ExpressHttpError {}
export class UseProxyError extends ExpressHttpError {}
export class SwitchProxyError extends ExpressHttpError {}
export class TemporaryRedirectError extends ExpressHttpError {}
export class PermanentRedirectError extends ExpressHttpError {}
export class BadRequestError extends ExpressHttpError {}
export class UnauthorizedError extends ExpressHttpError {}
export class PaymentRequiredError extends ExpressHttpError {}
export class ForbiddenError extends ExpressHttpError {}
export class NotFoundError extends ExpressHttpError {}
export class MethodNotAllowedError extends ExpressHttpError {}
export class NotAcceptableError extends ExpressHttpError {}
export class ProxyAuthenticationRequiredError extends ExpressHttpError {}
export class RequestTimeoutError extends ExpressHttpError {}
export class ConflictError extends ExpressHttpError {}
export class GoneError extends ExpressHttpError {}
export class LengthRequiredError extends ExpressHttpError {}
export class PreconditionFailedError extends ExpressHttpError {}
export class RequestEntityTooLargeError extends ExpressHttpError {}
export class PayloadTooLargeError extends ExpressHttpError {}
export class RequestURITooLongError extends ExpressHttpError {}
export class UnsupportedMediaTypeError extends ExpressHttpError {}
export class RangeNotSatisfiableError extends ExpressHttpError {}
export class ExpectationFailedError extends ExpressHttpError {}
export class MisdirectedRequestError extends ExpressHttpError {}
export class UnprocessableEntityError extends ExpressHttpError {}
export class LockedError extends ExpressHttpError {}
export class FailedDependencyError extends ExpressHttpError {}
export class UnorderedCollectionError extends ExpressHttpError {}
export class UpgradeRequiredError extends ExpressHttpError {}
export class PreconditionRequiredError extends ExpressHttpError {}
export class TooManyRequestsError extends ExpressHttpError {}
export class RequestHeaderFieldsTooLargeError extends ExpressHttpError {}
export class RetryWithError extends ExpressHttpError {}
export class UnavailableForLegalReasonsError extends ExpressHttpError {}
export class InternalServerError extends ExpressHttpError {}
export class NotImplementedError extends ExpressHttpError {}
export class BadGatewayError extends ExpressHttpError {}
export class ServiceUnavailableError extends ExpressHttpError {}
export class GatewayTimeoutError extends ExpressHttpError {}
export class HTTPVersionNotSupportedError extends ExpressHttpError {}
export class VariantAlsoNegotiatesError extends ExpressHttpError {}
export class InsufficientStorageError extends ExpressHttpError {}
export class LoopDetectedError extends ExpressHttpError {}
export class BandwidthLimitExceededError extends ExpressHttpError {}
export class NotExtendedError extends ExpressHttpError {}
export class NetworkAuthenticationRequiredError extends ExpressHttpError {}


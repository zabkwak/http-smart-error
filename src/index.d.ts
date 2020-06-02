
import SmartError from 'smart-error';

export default class HttpSmartError extends SmartError {

	static readonly BAD_REQUEST = 400;
	static readonly UNAUTHORIZED = 401;
	static readonly PAYMENT_REQUIRED = 402;
	static readonly FORBIDDEN = 403;
	static readonly NOT_FOUND = 404;
	static readonly METHOD_NOT_ALLOWED = 405;
	static readonly NOT_ACCEPTABLE = 406;
	static readonly PROXY_AUTHENTICATION_REQUIRED = 407;
	static readonly REQUEST_TIMEOUT = 408;
	static readonly CONFLICT = 409;
	static readonly GONE = 410;
	static readonly LENGTH_REQUIRED = 411;
	static readonly PRECONDITION_FAILED = 412;
	static readonly PAYLOAD_TOO_LARGE = 413;
	static readonly URI_TOO_LONG = 414;
	static readonly UNSUPPORTED_MEDIA_TYPE = 415;
	static readonly RANGE_NOT_SATISFIABLE = 416;
	static readonly EXPECTATION_FAILED = 417;
	static readonly IM_A_TEAPOT = 418;
	static readonly UNPROCESSABLE_ENTITY = 422;
	static readonly LOCKED = 423;
	static readonly FAILED_DEPENDENCY = 424;
	static readonly UPGRADE_REQUIRED = 426;
	static readonly PRECONDITION_REQUIRED = 428;
	static readonly TOO_MANY_REQUESTS = 429;
	static readonly REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
	static readonly UNAVAILABLE_FOR_LEGAL_REASONS = 451;
	static readonly INTERNAL_SERVER_ERROR = 500;
	static readonly NOT_IMPLEMENTED = 501;
	static readonly BAD_GATEWAY = 502;
	static readonly SERVICE_UNAVAILABLE = 503;
	static readonly GATEWAY_TIME_OUT = 504;
	static readonly HTTP_VERSION_NOT_SUPPORTED = 505;
	static readonly VARIANT_ALSO_NEGOTIATES = 506;
	static readonly INSUFFICIENT_STORAGE = 507;
	static readonly NETWORK_AUTHENTICATION_REQUIRED = 511;

	/**
	 * Creates HttpError instance by error status code.
	 * @param statusCode HTTP status code of the error.
	 */
	static create(statusCode: number): HttpSmartError;
	/**
	 * Creates HttpError instance by error status code.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 */
	static create(statusCode: number, message: string): HttpSmartError;
	/**
	 * Creates HttpError instance by error status code.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 * @param code Code of the error.
	 */
	static create(statusCode: number, message: string, code: string): HttpSmartError;
	/**
	 * Creates HttpError instance by error status code.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 * @param code Code of the error.
	 * @param payload Additional error data.
	 */
	static create(statusCode: number, message: string, code: string, payload: { [key: string]: any }): HttpSmartError;

	/**
	 * Gets the message and code of the error by its HTTP status code. If the error code is not found the 500 status code is used.
	 * @param statusCode HTTP status code of the error.
	 */
	static getCode(statusCode: number): { message: string, code: string };

	/**
	 * HTTP status code of the error.
	 */
	statusCode: number;

	/**
	 * Creates new instance from the standard node.js Error.
	 * @param statusCode HTTP status code of the error.
	 * @param error Error instance.
	 */
	constructor(statusCode: number, error: Error);
	/**
	 * Creates new instance from the SmartError instance.
	 * @param statusCode HTTP status code of the error.
	 * @param error SmartError instance.
	 */
	constructor(statusCode: number, error: SmartError);
	/**
	 * Creates new instance from the error object.
	 * @param statusCode HTTP status code of the error.
	 * @param error Defined error object.
	 */
	constructor(statusCode: number, error: { message: string, code?: string, payload?: { [key: string]: any } });
	/**
	 * Creates new instance with defined message. Code is set to default `ERR_UNKNOWN`.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 */
	constructor(statusCode: number, message: string);
	/**
	 * Creates new instance with defined message and code. 
	 * The code is prefixed with the `ERR_` and upper-cased.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 * @param code Code of the error.
	 */
	constructor(statusCode: number, message: string, code: string);
	/**
	 * Creates new instance with defined message, code and payload. 
	 * The code is prefixed with the `ERR_` and upper-cased. 
	 * The payload's fields are defined as instance properties.
	 * @param statusCode HTTP status code of the error.
	 * @param message Message of the error.
	 * @param code Code of the error.
	 * @param payload Additional error data.
	 */
	constructor(statusCode: number, message: string, code: string, payload: { [key: string]: any });
}

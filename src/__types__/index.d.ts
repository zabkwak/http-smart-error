declare module 'http-smart-error' {

    import SmartError from 'smart-error';

    export default class HttpSmartError extends SmartError {

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
}
type AppErrorTypes = 
    | 'conflict'
    | 'not_found'
    | 'unauthorized'
    | 'bad_request';

export interface AppError {
    type : AppErrorTypes;
    message: string;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
    if (type === 'conflict') return 409;
    if (type === 'not_found') return 404;
    if (type === 'unauthorized') return 401;
    if (type === 'bad_request') return 400;
}

export function conflictError (message?: string): AppError {
    return { type: 'conflict', message};
}

export function notFoundError (message?: string): AppError {
    return { type: 'not_found', message};
}

export function unauthorizedError (message?: string): AppError {
    return { type: 'unauthorized', message};
}

export function badRequestError (message?: string): AppError {
    return { type: 'bad_request', message};
}
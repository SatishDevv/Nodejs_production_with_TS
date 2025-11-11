export type THttpResponse = {
    success: boolean;
    statusCode: number;
    request: {
        ip?: string | null;
        method: string;
        url: string;
    };
    message: string;
    data?: unknown;
};

export type THttpError = {
    success: boolean;
    statusCode: number;
    request?: {
        ip?: string | null;
        method: string;
        url: string;
    };
    message: string;
    data?: unknown | null;
    trace?: object | null;
};

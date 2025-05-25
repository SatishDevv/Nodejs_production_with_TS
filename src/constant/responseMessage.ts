export default {
    SUCCESS: 'Operation completed successfully',
    SOME_THING_WENT_WRONG: 'Something went wrong, please try again later',
    NOT_ALLOWED_BY_CORS: 'Not allowed by CORS',
    NOT_FOUND: (entity: string) => `${entity} not found`,
    NOT_ALLOWED: (entity: string) => `You are not allowed to access this ${entity}`
};


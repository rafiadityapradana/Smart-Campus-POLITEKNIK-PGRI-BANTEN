declare namespace NodeJS {
  export interface ProcessEnv {
    REDIS_URL: string;
    PORT: string;
    SessionSecretkey: string;
    SessionSecretkeyReft: string;
    SessionSecretkeyAccess: string;
    paySecret: string;
    SERVER_KEY: string;
    CLIENT_KEY: string;
    API_KEY: string;
  }
}

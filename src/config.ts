import { get } from 'sugar-env';

type Config = {
  cookiesSecret: string;
  host: string;
  httpPort: number;
  httpsPort: number;
  dbHost: string;
  dbPort: number;
  dbUser: string;
  dbPassword: string;
  inMemoryStoreHost: string;
  inMemoryStorePort: number;
  inMemoryStorePassword: string;
};

const config: Config = {
  cookiesSecret: get('COOKIES_SECRET', ''),
  host: get('HOST', '0.0.0.0'),
  httpPort: Number(get('HTTP_PORT', 8080)),
  httpsPort: Number(get('HTTPS_PORT', 8443)),
  dbHost: get('DB_HOST', ''),
  dbPort: Number(get('DB_PORT', 3306)),
  dbUser: get('DB_USER', ''),
  dbPassword: get('DB_PASS', ''),
  inMemoryStoreHost: get('IN_MEMORY_STORE_HOST', '0.0.0.0'),
  inMemoryStorePort: get('IN_MEMORY_STORE_PORT', 6379),
  inMemoryStorePassword: get('IN_MEMORY_STORE_PASS', ''),
};

export default config;

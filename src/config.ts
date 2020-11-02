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
};

export default config;

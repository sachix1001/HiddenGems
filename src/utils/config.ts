import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../../.env` });

export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
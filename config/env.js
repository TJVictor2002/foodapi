import {config} from 'dotenv';

config({path:`.env.${process.env.NODE_ENV || 'development.local'}` });

export const { PORT, NODE_ENV, USDA_API_KEY} = process.env;
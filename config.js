import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || 'XSTRO_75_00_42',
	SUDO: process.env.SUDO || '94789215779',
	API_ID:
		process.env.API_ID || 'https://xstro-api1-e3fa63d29cbe.herokuapp.com',
	BOT_INFO: process.env.BOT_INFO || 'Astro;Xstro_Bot',
	STICKER_PACK: process.env.STICKER_PACK || 'Xstro;Md',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
	VERSION: '1.1.9',
};
export { config };
export default config;

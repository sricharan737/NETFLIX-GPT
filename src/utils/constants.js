
export const LOGO =
	"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";
export const NETFLIX_BG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/7510356b-6d23-43ad-97ac-02a8d9313aa1/CA-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9a5ab034-7530-449d-8242-cd84c2a74ab1_large.jpg";
export const IMG_CDN = "https://image.tmdb.org/t/p/original/";
export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer" + process.env.REACT_APP_TMDB_API_KEY,
	},
};

export const SUPPORTED_LANGUAGES = [
	{ identifier: "en", name: "English" },
	{ identifier: "fn", name: "French" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;


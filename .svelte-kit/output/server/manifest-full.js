export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","Parham_Moradi_CV.pdf","favicon.ico","favicon.png","profile.jpeg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.yr0hAWLc.js","app":"_app/immutable/entry/app.BFaUi3xD.js","imports":["_app/immutable/entry/start.yr0hAWLc.js","_app/immutable/chunks/DbMy3DKi.js","_app/immutable/chunks/CN_hGK4R.js","_app/immutable/chunks/DAUKii17.js","_app/immutable/entry/app.BFaUi3xD.js","_app/immutable/chunks/CN_hGK4R.js","_app/immutable/chunks/CPWrXFXK.js","_app/immutable/chunks/D1QeUVQv.js","_app/immutable/chunks/CdrpqLtF.js","_app/immutable/chunks/DAUKii17.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

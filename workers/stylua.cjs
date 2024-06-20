// eslint-disable-next-line ts/no-var-requires, ts/no-require-imports -- Temp
const { runAsWorker } = require("synckit");

let stylua;

runAsWorker(async (code, config, range, verify_output) => {
	if (!stylua) {
		stylua = await import("@johnnymorganz/stylua");
	}

	return stylua.formatCode(code, config, range, verify_output);
});

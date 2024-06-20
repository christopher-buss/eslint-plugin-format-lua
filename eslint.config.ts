import style from "@isentinel/eslint-config";

export default style({
	formatters: {
		prettierOptions: {
			arrowParens: "avoid",
			jsdocPreferCodeFences: true,
			jsdocPrintWidth: 80,
			plugins: ["prettier-plugin-jsdoc"],
			printWidth: 100,
			semi: true,
			singleQuote: false,
			tabWidth: 4,
			trailingComma: "all",
			tsdoc: true,
			useTabs: true,
		},
	},
	roblox: false,
});

import isentinel from "@isentinel/eslint-config";

export default isentinel(
	{
		pnpm: false,
		roblox: false,
		type: "package",
		typescript: {
			erasableOnly: true,
		},
	},
	{
		files: ["./package.json"],
		rules: {
			"package-json/require-bin": "off",
		},
	},
);

import type { ESLint, Linter, Rule } from "eslint";
import * as _parserPlain from "eslint-parser-plain";

import stylua from "./stylua";

const parserPlain: Linter.Parser = {
	meta: {
		name: "eslint-parser-plain",
	},
	...(_parserPlain as { parseForESLint: any }),
};

const plugin: ESLint.Plugin & { parserPlain: Linter.Parser } = {
	parserPlain,
	rules: {
		stylua: stylua as unknown as Rule.RuleModule,
	},
};

export default plugin;

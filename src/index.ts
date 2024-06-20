import type { Linter } from "eslint";
import * as _parserPlain from "eslint-parser-plain";

import stylua from "./stylua";

const parserPlain: Linter.ParserModule = {
	meta: {
		name: "eslint-parser-plain",
	},
	...(_parserPlain as { parseForESLint: any }),
};

export default {
	parserPlain,
	rules: {
		stylua,
	},
};

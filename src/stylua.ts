import { Config, OutputVerification, Range } from "@johnnymorganz/stylua";

import type { Rule } from "eslint";
import { reportDifferences } from "eslint-formatting-reporter";
import { join } from "node:path";
import { createSyncFn } from "synckit";

import { directoryWorkers } from "./directory";

let format: (code: string, config: Config, range: Range, verify_output: number) => string;

const config = new Config();

export default {
	create(context) {
		if (!format) {
			format = createSyncFn(join(directoryWorkers, "stylua.cjs")) as any;
		}

		return {
			Program() {
				const sourceCode = context.sourceCode.text;
				try {
					const formatted = format(
						sourceCode,
						config,
						Range.from_values(),
						OutputVerification.None,
					);
					reportDifferences(context, sourceCode, formatted);
				} catch (err) {
					console.log(err);
					context.report({
						loc: {
							end: { column: 0, line: 1 },
							start: { column: 0, line: 1 },
						},
						message: "Failed to format the code",
					});
				}
			},
		};
	},
	meta: {
		docs: {
			category: "Stylistic",
			description: "Use stylua to format lua files",
		},
		fixable: "whitespace",
		schema: [
			{
				additionalProperties: true,
				properties: {
					language: {
						required: true,
						type: "string",
					},
					languageOptions: {
						type: "object",
					},
				},
				type: "object",
			},
		],
		type: "layout",
	},
} satisfies Rule.RuleModule;

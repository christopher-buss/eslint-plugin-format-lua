import { Config, formatCode, OutputVerification, Range } from "@johnnymorganz/stylua";

import type { Rule } from "eslint";
import { messages, reportDifferences } from "eslint-formatting-reporter";

export default {
	create(context) {
		const config = Config.new();
		const range = Range.from_values();

		return {
			Program() {
				const sourceCode = context.sourceCode.text;
				try {
					const formatted = formatCode(
						sourceCode,
						config,
						range,
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
		messages,
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

import type { RuleOptions } from "./rule-options";

declare module "eslint-define-config" {
	export type CustomRuleOptions = RuleOptions;
}

export {};

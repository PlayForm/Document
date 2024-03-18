/**
 * @module Load
 *
 */
export const load = ((...[Application]: Parameters<Type["load"]>) =>
	Application.renderer.defineTheme(
		"TypeScriptDocument",
		Theme,
	)) satisfies Type["load"] as Type["load"];

export default {
	load,
} satisfies Type as Type;

import type Type from "../Interface/Load.js";

export const { default: Theme } = await import("../Class/Theme.js");

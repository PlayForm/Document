/**
 * @module Load
 *
 */
export const load = (...[Application]: Parameters<Interface["load"]>) =>
	Application.renderer.defineTheme("Document", Theme);

export default {
	load,
} satisfies Interface as Interface;

import type Interface from "@Interface/Load.js";

export const { default: Theme } = await import("@Class/Theme.js");

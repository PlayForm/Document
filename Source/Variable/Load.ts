export function load(Application: Application) {
	Application.renderer.defineTheme("Document", Theme);
}

import type { Application } from "typedoc";

export const { default: Theme } = await import("@Class/Theme.js");

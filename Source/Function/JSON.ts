import type Interface from "../Interface/JSON.js";

/**
 * @module JSON
 * Asynchronous JSON file parsing function that reads and parses JSON files
 * @since 0.1.0
 */
export default (async (...[File, From]) =>
	JSON.parse(
		(
			await (
				await import("node:fs/promises")
			).readFile(`${From ?? "."}/${File}`, "utf-8")
		).toString(),
	)) satisfies Interface as Interface;

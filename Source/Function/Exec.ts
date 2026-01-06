import type Interface from "../Interface/Exec.js";

/**
 * @module Exec
 * Asynchronous command execution function that handles stdout/stderr output
 * @since 0.1.0
 */
export default (async (
	...[Command, Echo = async (Return) => console.log(Return)]
) => {
	try {
		const { stdout, stderr } = (await import("child_process")).exec(
			Command,
		);

		if (typeof Echo === "function") {
			stdout?.on("data", async (Data) => await Echo(Data.trim()));
			stderr?.on("data", async (Data) => await Echo(Data.trim(), true));
		}
	} catch (_Error) {
		console.log(_Error);
	}
}) satisfies Interface as Interface;

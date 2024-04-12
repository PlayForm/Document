#!/usr/bin/env node

/**
 * @module Document
 *
 */
export default new (await import("commander")).Command()
	.name("Document")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("📃 Document")
	.argument("<File...>", "File.")
	.action((await import("@Function/Document.js")).default)
	.parse();

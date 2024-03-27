#!/usr/bin/env node

/**
 * @module TypeScriptDocument
 *
 */
export default new (await import("commander")).Command()
	.name("TypeScriptDocument")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("📃 Document TypeScript.")
	.argument("<File...>", "Document File.")
	.action((await import("../Function/Document.js")).default)
	.parse();

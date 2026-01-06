#!/usr/bin/env node

/**
 * @module Document
 * CLI command interface for document generation functionality
 * @since 0.1.0
 */
export default new (await import("commander")).Command()
	.name("Document")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("Document 📃")
	.argument("<File...>", "File 📝")
	.option("-F, --Folder <Folder>", "Folder 📜")
	.action((await import("@Function/Document.js")).default)
	.parse();

import type Interface from "../Interface/Document.js";

/**
 * @module Document
 * Main document generation function that processes file patterns and generates Typedoc documentation
 * @since 0.1.0
 */
export default (async (...[File, Option]) => {
	for (const _File of File) {
		for (const __File of await (
			await import("fast-glob")
		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	const Base = `${Current}/../../node_modules`;

	await Exec(
		"git branch --show-current",
		async (Branch, __Error) =>
			await Exec(
				`git config --get branch.${Branch}.remote`,
				async (Remote, _Error) =>
					await Exec(
						[
							`"${Base}/.bin/typedoc"`,
							`--gitRevision ${__Error ? "main" : Branch}`,
							`--gitRemote ${_Error ? "origin" : Remote}`,
							"--commentStyle all",
							`--customCss ${(await import("node:path")).resolve(
								`${Current}/../../Stylesheet/Theme.css`,
							)}`,
							"--includeVersion",
							`--out ./${Option?.Folder && Option.Folder.trim() !== "" ? Option.Folder : "Documentation"}`,
							`--plugin ${Base}/typedoc-plugin-remove-references/dist/index.js`,
							`--plugin ${Base}/typedoc-plugin-rename-defaults/index.js`,
							`--plugin ${Base}/typedoc-plugin-mdn-links/dist/index.js`,
							`--plugin ${Base}/typedoc-plugin-zod/dist/plugin.js`,
							`--plugin ${Base}/typedoc-plugin-merge-modules/dist/index.js`,
							`--plugin ${Base}/typedoc-plugin-keywords/index.js`,
							"--searchInComments",
							`--keywords ${
								(
									await (
										await import("@Function/JSON.js")
									).default("package.json", process.cwd())
								)?.keywords?.join(" --keywords ") ??
								" @playform/document "
							}`,
							"--entryPointStrategy expand",
							"--mergeModulesRenameDefaults",
							"--mergeModulesMergeMode module",
							"--includeHierarchySummary true",
							"--categorizeByGroup true",
							"--groupReferencesByType true",
							"--sort source-order",
							"--navigation full",
							"--cleanOutputDir true",
							"--excludeInternal true",
							"--excludePrivate true",
							"--validation notExported",
							"--validation invalidLink",
							"--lightHighlightTheme light-plus",
							"--darkHighlightTheme dark-plus",
							"--preserveLinkText true",
							"--useTsLinkResolution true",
							"--jsDocCompatibility true",
							"--useFirstParagraphOfCommentAsSummary true",
							"--sluggerConfiguration github",
							"--githubPages true",
							"--hideGenerator true",
							"--skipErrorChecking false",
							"--typePrintWidth 120",
							`--entryPoints ${Pipe.join(" --entryPoints ")}`,
						].join(" "),
					),
			),
	);
}) satisfies Interface as Interface;

/**
 * Exec variable
 * Execution function for running shell commands
 * Provides asynchronous command execution capabilities for the document generation process
 * @since 0.1.0
 */
export const { default: Exec } = await import("@Function/Exec.js");

/**
 * Array of file paths to be processed for documentation generation
 * Stores the resolved file paths that match the input patterns for Typedoc processing
 * @since 0.1.0
 */
export const Pipe: string[] = [];

/**
 * Current module directory path
 * Absolute file system path to the directory containing this module
 * @since 0.1.0
 */
export const Current = (await import("node:url")).fileURLToPath(
	(await import("node:path")).dirname(import.meta.url),
);

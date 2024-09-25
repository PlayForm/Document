import type Interface from "../Interface/Document.js";

/**
 * @module Document
 *
 */
export default (async (...[File, Option]: Parameters<Interface>) => {
	for (const _File of File) {
		for (const __File of await (
			await import("fast-glob")
		).default(_File.replaceAll("'", "").replaceAll('"', ""))) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	await Exec(
		"git branch --show-current",
		async (Branch, __Error) =>
			await Exec(
				`git config --get branch.${Branch}.remote`,
				async (Remote, _Error) =>
					await Exec(
						[
							"typedoc",
							`--gitRevision ${__Error ? "main" : Branch}`,
							`--gitRemote ${_Error ? "origin" : Remote}`,
							"--commentStyle all",
							`--customCss ${(await import("path")).resolve(
								`${Current}/../../Stylesheet/Theme.css`,
							)}`,
							"--includeVersion",
							`--out ./${Option?.Folder && Option.Folder.trim() !== "" ? Option.Folder : "Documentation"}`,
							"--plugin typedoc-plugin-remove-references",
							"--plugin typedoc-plugin-rename-defaults",
							"--plugin typedoc-plugin-mdn-links",
							"--plugin typedoc-plugin-zod",
							"--plugin typedoc-plugin-merge-modules",
							"--plugin typedoc-plugin-keywords",
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
							`--entryPoints ${Pipe.join(" --entryPoints ")}`,
						].join(" "),
					),
			),
	);
}) satisfies Interface as Interface;

export const { default: Exec } = await import("@Function/Exec.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url),
);

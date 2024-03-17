/**
 * @module Document
 *
 */
export default (async (...[File]: Parameters<Type>) => {
	for (const _File of File) {
		for (const __File of await (await import("fast-glob")).default(
			_File.replaceAll("'", "").replaceAll('"', ""),
		)) {
			Pipe.push(__File);
		}
	}

	Pipe.reverse();

	Exec(
		[
			"typedoc",
			"--commentStyle all",
			"--gitRevision main",
			`--customCss ${resolve(`${Current}/../Stylesheet/Theme.css`)}`,
			"--includeVersion",
			"--out ./Documentation",
			`--plugin ${resolve(`${Current}/../../Target/Variable/Load.js`)}`,
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
						await import("../Function/JSON.js")
					).default("package.json", process.cwd())
				)?.keywords?.join(" --keywords ") ?? " typescript-document "
			}`,
			"--theme TypeScriptDocument",
			"--entryPointStrategy expand",
			"--mergeModulesRenameDefaults",
			"--mergeModulesMergeMode module",
			`--entryPoints ${Object.values(Object.fromEntries(
				Pipe.map((File) => [
					File.replace("Source/", "")
						.split(".")
						.slice(0, -1.0)
						.join("."),
					File,
				]),
			)).join(
				" --entryPoints ",
			)}`,
		].join(" "),
	);
}) satisfies Type as Type;

import type Type from "../Interface/Build.js";

export const { default: Exec } = await import("../Function/Exec.js");

export const { default: Merge } = await import("../Function/Merge.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url),
);

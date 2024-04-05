/**
 * @module Theme
 *
 */
import { DefaultTheme } from "typedoc";

export default class extends DefaultTheme {
	// public override buildUrls(
	// 	...[Reflection, URLs]: Parameters<Type["buildUrls"]>
	// ) {
	// 	const { Directory } = this._Mapping(Reflection) ?? {};
	// 	if (Directory) {
	// 		if (!(Reflection.url && URL_PREFIX.test(Reflection.url))) {
	// 			const URL = [Directory, `${getUrl(Reflection)}.html`].join("/");
	// 			URLs.push(
	// 				new UrlMapping(URL, Reflection, this.reflectionTemplate),
	// 			);
	// 			Reflection.url = URL;
	// 			Reflection.hasOwnDocument = true;
	// 		}
	// 		Reflection.traverse((Child) => {
	// 			if (Child instanceof DeclarationReflection) {
	// 				this.buildUrls(Child, URLs);
	// 			} else {
	// 				applyAnchorUrl(Child, Reflection);
	// 			}
	// 			return true;
	// 		});
	// 	} else if (Reflection.parent) {
	// 		applyAnchorUrl(Reflection, Reflection.parent);
	// 	}
	// 	return URLs;
	// }
	// _Mapping = (...[Reflection]: Parameters<Type["_Mapping"]>) =>
	// 	this.Mapping.find((Mapping) => Reflection.kindOf(Mapping.Kind));
	// Mapping: Mapping[] = [
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [Class],
	// 		Directory: "Class",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [Interface],
	// 		Directory: "Interface",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [Enum],
	// 		Directory: "Enum",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [Namespace, Module],
	// 		Directory: "Module",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [TypeAlias],
	// 		Directory: "Type",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [_Function],
	// 		Directory: "Function",
	// 	},
	// 	{
	// 		// biome-ignore lint/correctness/noInvalidUseBeforeDeclaration:
	// 		Kind: [Variable],
	// 		Directory: "Variable",
	// 	},
	// ];
}

// import type Mapping from "@Interface/Mapping.js";
// import type Type from "@Interface/Theme.js";

// export const {
// 	DeclarationReflection,
// 	DefaultTheme: { URL_PREFIX, getUrl, applyAnchorUrl },
// 	ReflectionKind: {
// 		Interface,
// 		Class,
// 		Enum,
// 		Namespace,
// 		Module,
// 		TypeAlias,
// 		Function: _Function,
// 		Variable,
// 	},
// 	UrlMapping,
// } = await import("typedoc");

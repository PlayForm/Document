/**
 * @module Theme
 *
 * Represents an interface for defining a theme with various methods and properties.
 */
export default interface Interface extends DefaultTheme {
	/**
	 * A function that builds URLs for a given DeclarationReflection and an array of URLs mappings.
	 *
	 * @param Reflection - The DeclarationReflection for which URLs are being built.
	 *
	 * @param URLs - An array of URLs mappings with any data type.
	 *
	 */
	buildUrls: (
		Reflection: DeclarationReflection,
		// biome-ignore lint/suspicious/noExplicitAny:
		URLs: UrlMapping<any>[],
		// biome-ignore lint/suspicious/noExplicitAny:
	) => UrlMapping<any>[];

	/**
	 * A function that maps a DeclarationReflection to a Mapping or returns undefined.
	 *
	 * @param Reflection - The DeclarationReflection to map to a Mapping.
	 *
	 */
	_Mapping: (Reflection: DeclarationReflection) => Mapping | undefined;

	/**
	 * An array of Mappings representing the theme's mapping configuration.
	 */
	Mapping: Mapping[];
}

import type Mapping from "../Interface/Mapping.js";

import type { DeclarationReflection, DefaultTheme, UrlMapping } from "typedoc";

/**
 * @module Theme
 *
 */

import { DefaultTheme, UrlMapping, Slugger, ReflectionKind } from "typedoc";

import type {
	DeclarationReflection,
	DocumentReflection,
	Reflection,
	RenderTemplate,
	PageEvent,
} from "typedoc";

export default class extends DefaultTheme {
	/**
	 * Return the template mapping for the given reflection.
	 *
	 * @param reflection  The reflection whose mapping should be resolved.
	 * @returns           The found mapping or undefined if no mapping could be found.
	 */

	/**
	 * Build the url for the the given reflection and all of its children.
	 *
	 * @param Reflection  The reflection the url should be created for.
	 * @param URL        The array the url should be appended to.
	 * @returns           The altered urls array.
	 */
	public override buildUrls(
		Reflection: DeclarationReflection | DocumentReflection,
		URL: UrlMapping[],
	): UrlMapping[] {
		const Mapping = this._Mapping(Reflection);

		if (Mapping) {
			if (
				!(
					Reflection.url &&
					DefaultTheme.URL_PREFIX.test(Reflection.url)
				)
			) {
				const _URL = [
					Mapping.directory,
					`${DefaultTheme.getUrl(Reflection)}.html`,
				].join("/");

				URL.push(new UrlMapping(_URL, Reflection, Mapping.template));

				this._Slug.set(Reflection, new Slugger());

				Reflection.url = _URL;
				Reflection.hasOwnDocument = true;
			}

			Reflection.traverse((Reflection_Child) => {
				if (
					Reflection_Child.isDeclaration() ||
					Reflection_Child.isDocument()
				) {
					this.buildUrls(Reflection_Child, URL);
				} else {
					DefaultTheme.applyAnchorUrl(Reflection_Child, Reflection);
				}

				return true;
			});
		} else if (Reflection.parent) {
			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
		}

		return URL;
	}

	_Mapping = (
		reflection: DeclarationReflection | DocumentReflection,
	): TemplateMapping | undefined => {
		return this.Mapping.find((mapping) => reflection.kindOf(mapping.kind));
	};

	_Slug = new Map<Reflection, Slugger>();

	/**
	 * Mappings of reflections kinds to templates used by this theme.
	 */
	private Mapping: TemplateMapping[] = [
		{
			kind: [ReflectionKind.Class],
			directory: "Class",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Interface],
			directory: "Interface",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Enum],
			directory: "Enum",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Namespace, ReflectionKind.Module],
			directory: "Module",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.TypeAlias],
			directory: "Type",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Function],
			directory: "Function",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Variable],
			directory: "Variable",
			template: this.reflectionTemplate,
		},
		{
			kind: [ReflectionKind.Document],
			directory: "Document",
			template: this.documentTemplate,
		},
	];
}

/**
 * Defines a mapping of a {@link Models.Kind} to a template file.
 *
 * Used by {@link DefaultTheme} to map reflections to output files.
 */
interface TemplateMapping {
	/**
	 * {@link DeclarationReflection.kind} this rule applies to.
	 */
	kind: ReflectionKind[];

	/**
	 * The name of the directory the output files should be written to.
	 */
	directory: string;

	/**
	 * The name of the template that should be used to render the reflection.
	 */

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	template: RenderTemplate<PageEvent<any>>;
}

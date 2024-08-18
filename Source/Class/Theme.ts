/**
 * @module Theme
 *
 */

import { DefaultTheme, ReflectionKind, Slugger, UrlMapping } from "typedoc";

import type {
	DeclarationReflection,
	DocumentReflection,
	PageEvent,
	Reflection,
	RenderTemplate,
} from "typedoc";

export default class extends DefaultTheme {
	override getRenderContext(pageEvent: PageEvent<Reflection>) {
		return new Context(this, pageEvent, this.application.options);
	}

	public override buildUrls(
		Reflection: DeclarationReflection | DocumentReflection,
		URLs: UrlMapping[],
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

				URLs.push(new UrlMapping(_URL, Reflection, Mapping.template));

				this._Slug.set(Reflection, new Slugger());

				Reflection.url = _URL;
				Reflection.hasOwnDocument = true;
			}

			Reflection.traverse((Reflection_Child) => {
				if (
					Reflection_Child.isDeclaration() ||
					Reflection_Child.isDocument()
				) {
					this.buildUrls(Reflection_Child, URLs);
				} else {
					DefaultTheme.applyAnchorUrl(Reflection_Child, Reflection);
				}

				return true;
			});
		} else if (Reflection.parent) {
			DefaultTheme.applyAnchorUrl(Reflection, Reflection.parent);
		}

		return URLs;
	}

	_Mapping = (
		reflection: DeclarationReflection | DocumentReflection,
	): TemplateMapping | undefined => {
		return this.Mapping.find((mapping) => reflection.kindOf(mapping.kind));
	};

	_Slug = new Map<Reflection, Slugger>();

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

interface TemplateMapping {
	kind: ReflectionKind[];

	directory: string;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	template: RenderTemplate<PageEvent<any>>;
}

export const { default: Context } = await import("@Class/Theme/Context.js");

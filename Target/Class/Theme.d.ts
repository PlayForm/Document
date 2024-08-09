/**
 * @module Theme
 *
 */
import { DefaultTheme, UrlMapping, Slugger, ReflectionKind } from "typedoc";
import type { DeclarationReflection, DocumentReflection, Reflection, RenderTemplate, PageEvent } from "typedoc";
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
    buildUrls(Reflection: DeclarationReflection | DocumentReflection, URL: UrlMapping[]): UrlMapping[];
    _Mapping: (reflection: DeclarationReflection | DocumentReflection) => TemplateMapping | undefined;
    _Slug: Map<Reflection, Slugger>;
    /**
     * Mappings of reflections kinds to templates used by this theme.
     */
    private Mapping;
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
    template: RenderTemplate<PageEvent<any>>;
}
export {};

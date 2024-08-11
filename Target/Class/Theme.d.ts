/**
 * @module Theme
 *
 */
import { DefaultTheme, UrlMapping, Slugger, ReflectionKind } from "typedoc";
import type { DeclarationReflection, DocumentReflection, Reflection, RenderTemplate, PageEvent } from "typedoc";
export default class extends DefaultTheme {
    getRenderContext(pageEvent: PageEvent<Reflection>): import("@Class/Theme/Context.js").default;
    buildUrls(Reflection: DeclarationReflection | DocumentReflection, URLs: UrlMapping[]): UrlMapping[];
    _Mapping: (reflection: DeclarationReflection | DocumentReflection) => TemplateMapping | undefined;
    _Slug: Map<Reflection, Slugger>;
    private Mapping;
}
interface TemplateMapping {
    kind: ReflectionKind[];
    directory: string;
    template: RenderTemplate<PageEvent<any>>;
}
export declare const Context: typeof import("@Class/Theme/Context.js").default;
export {};

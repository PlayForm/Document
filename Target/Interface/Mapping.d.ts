/**
 * @module Mapping
 *
 * Defines a mapping of a Models to a template file.
 *
 * Used by DefaultTheme to map reflections to output files.
 *
 */
export default interface Interface {
    /**
     * DeclarationReflection.kind this rule applies to.
     */
    Kind: ReflectionKind[];
    /**
     * The name of the directory the output files should be written to.
     */
    Directory: string;
}
import type { ReflectionKind } from "typedoc";

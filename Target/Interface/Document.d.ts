import type { Pattern } from "fast-glob";
/**
 * @module Document
 * Interface for the Document generation functionality
 * @since 0.1.0
 */
export default interface Interface {
    /**
     * Represents a function that processes file patterns and generates documentation.
     *
     * @param File - An array of file patterns to be processed. Each pattern can include wildcards to match multiple files.
     *
     * @param Option - Optional configuration object for document generation
     * @param Option.Folder - A string representing the output folder path for generated documentation
     *
     * @returns Promise<void> - Resolves when documentation generation is complete
     * @throws {Error} If file processing or documentation generation fails
     *
     * @example
     * // Generate documentation for TypeScript files
     * await document(['src/\u002A\u002A/\u002A.ts'], { Folder: 'docs' });
     *
     * // Generate documentation with default folder
     * await document(['src/\u002A\u002A/\u002A.js']);
     */
    (File: Pattern[], Option?: {
        Folder?: string;
    }): Promise<void>;
}

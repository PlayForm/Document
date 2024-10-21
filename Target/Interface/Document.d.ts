import type { Pattern } from "fast-glob";
/**
 * @module Document
 *
 */
export default interface Interface {
    /**
     * Represents a function that processes file patterns.
     *
     * @param File - An array of file patterns to be processed. Each pattern can include wildcards (*) to match multiple files.
     *
     * @param Option.Folder - A string representing the Folder option.
     *
     */
    (File: Pattern[], Option?: {
        Folder?: string;
    }): Promise<void>;
}

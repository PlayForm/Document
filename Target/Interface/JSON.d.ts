/**
 * @module Document
 * Interface for JSON file parsing functionality
 * @since 0.1.0
 */
export default interface Interface {
    /**
     * Reads and parses a JSON file asynchronously, returning the parsed content.
     * This function loads a JSON file from the specified path and converts its content
     * into JavaScript objects using JSON.parse().
     *
     * @param File - The name or relative path of the JSON file to parse.
     * Should include the file extension (.json) if present in the filename.
     *
     * @param From - Optional base directory path for loading the JSON file.
     * If provided, it serves as the root directory for the file path.
     * If omitted, the current working directory is used as the base path.
     *
     * @returns Promise<any> - Resolves with the parsed JSON content as JavaScript objects.
     * The return type matches the structure of the JSON file content.
     * @throws {Error} If file reading fails, file doesn't exist, or JSON parsing fails
     *
     * @example
     * // Parse package.json from current directory
     * const packageData = await json('package.json');
     *
     * // Parse config file from specific directory
     * const config = await json('config.json', '/path/to/config');
     *
     * // Parse nested JSON file
     * const data = await json('data/settings.json');
     */
    (File: string, From?: string): Promise<ReturnType<typeof JSON.parse>>;
}

/**
 * @module Exec
 * Interface for command execution functionality
 * @since 0.1.0
 */
export default interface Interface {
    /**
     * Asynchronously executes a command and handles stdout/stderr output.
     * This function spawns a child process to execute the given command and provides
     * flexible output handling through the Echo parameter.
     *
     * @param Command - The command string to execute in the terminal or command prompt.
     * Can be any valid shell command including pipes, redirects, and command chaining.
     *
     * @param Echo - Optional parameter controlling output handling:
     * - `false`: Suppresses all stdout/stderr output
     * - Function: Custom handler called with output data and error flag
     * - `undefined`: Default console logging of stdout/stderr
     *
     * @returns Promise<void> - Resolves when command execution completes
     * @throws {Error} If command execution fails or process exits with non-zero code
     *
     * @example
     * // Execute command with default logging
     * await exec('ls -la');
     *
     * // Execute command with custom output handling
     * await exec('git status', (output, isError) => {
     *   if (isError) console.error('Error:', output);
     *   else console.log('Output:', output);
     * });
     *
     * // Execute command silently
     * await exec('npm install', false);
     */
    (Command: string, Echo?: false | ((Return: any, _Error?: boolean) => Promise<void>)): Promise<void>;
}

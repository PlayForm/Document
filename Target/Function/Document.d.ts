import type Interface from "../Interface/Document.js";
/**
 * @module Document
 * Main document generation function that processes file patterns and generates Typedoc documentation
 * @since 0.1.0
 */
declare const _default: Interface;
export default _default;
/**
 * Exec variable
 * Execution function for running shell commands
 * Provides asynchronous command execution capabilities for the document generation process
 * @since 0.1.0
 */
export declare const Exec: import("../Interface/Exec.js").default;
/**
 * Array of file paths to be processed for documentation generation
 * Stores the resolved file paths that match the input patterns for Typedoc processing
 * @since 0.1.0
 */
export declare const Pipe: string[];
/**
 * Current module directory path
 * Absolute file system path to the directory containing this module
 * @since 0.1.0
 */
export declare const Current: string;

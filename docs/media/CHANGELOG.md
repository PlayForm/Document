## 0.1.9

### Change

- Updated dependencies:
    - Bump `typedoc` from 0.28.18 to 0.28.19
    - Bump `@playform/build` from 0.3.1 to 0.3.2
    - Add `@types/node` 25.9.1 as a dev dependency

## 0.1.8

### Change

- Updated homepage URL in `package.json` from `#readme` anchor to
  `?tab=readme-ov-file`
- Updated dependencies:
    - Bump `commander` from 14.0.2 to 14.0.3
    - Bump `typedoc` from 0.28.15 to 0.28.18
    - Bump `typedoc-plugin-mdn-links` from 5.0.10 to 5.1.1
    - Bump `@playform/build` from 0.2.6 to 0.3.1

## 0.1.7

### Change

- Updated version in `package.json` to 0.1.7.
- Normalized HTTPS URLs in `package.json` to lowercase scheme (`HTTPS://` →
  `https://`).
- Updated `commander` to version 14.0.2.
- Updated `typedoc` to version 0.28.15.
- Updated `typedoc-plugin-mdn-links` to version 5.0.10.
- Updated `typedoc-plugin-zod` to version 1.4.3.
- Updated `@playform/build` to version 0.2.6.
- Enhanced CLI command interface documentation and added `@since` tags across
  modules.
- Improved Typedoc plugin resolution by explicitly referencing dist files
  instead of relying on binary paths.
- Added extensive Typedoc configuration options for better control over
  documentation output formatting and behavior.
- Expanded JSDoc comments with detailed descriptions, examples, and parameter
  documentation for exported functions and interfaces.

## 0.1.6

### Change

- Updated version in `package.json` to 0.1.6.
- Updated contact email in `package.json` from `Source/Open@PlayForm.LTD` to
  `Source/Open@PlayForm.Cloud`.
- Updated URL in `package.json` from `https://PlayForm.LTD` to
  `https://PlayForm.Cloud`.
- Updated `typedoc` to version 0.28.4.
- Updated `typedoc-plugin-zod` to version 1.4.1.
- Updated `@playform/build` to version 0.2.4.

## 0.1.5

### Change

- Updated version in `package.json` to 0.1.5.
- Updated `commander` to version 13.1.0.
- Updated `typedoc` to version 0.28.1.
- Updated `typedoc-plugin-mdn-links` to version 5.0.1.
- Updated `typedoc-plugin-merge-modules` to version 7.0.0.
- Updated `typedoc-plugin-rename-defaults` to version 0.7.3.
- Updated `typedoc-plugin-zod` to version 1.4.0.
- Updated `@playform/build` to version 0.2.2.
- Adjusted emoji placement in CLI command descriptions and names for
  consistency.
- Migrated core module imports to use `node:` protocol (`path` → `node:path`,
  `url` → `node:url`, `fs/promises` → `node:fs/promises`).

## 0.1.4

### Add

- Added `DEPENDENTS.md` file to track dependents.

### Change

- Updated version in `package.json` to 0.1.4.
- Updated contact email in `package.json` from Source/Open@PlayForm.Cloud to
  Source/Open@PlayForm.Cloud.
- Updated URL in `package.json` from https://PlayForm.Cloud to
  https://PlayForm.Cloud.
- Updated `commander` to version 13.0.0.
- Updated `fast-glob` to version 3.3.3.
- Updated `typedoc` to version 0.27.6.
- Updated `typedoc-plugin-mdn-links` to version 4.0.7.
- Updated `typedoc-plugin-merge-modules` to version 6.1.0.
- Updated `typedoc-plugin-rename-defaults` to version 0.7.2.
- Updated `typedoc-plugin-zod` to version 1.3.1.
- Updated `@playform/build` to version 0.2.1.
- Removed unnecessary type annotations in `Document.ts` and `JSON.ts`.

## 0.1.3

### Change

- Updated version in `package.json` to 0.1.3.
- Updated contact email in `package.json` from `Source/Open@PlayForm.Cloud` to
  `Source/Open@PlayForm.Cloud`.
- Updated URL in `package.json` from `https://PlayForm.Cloud` to
  `https://PlayForm.Cloud`.
- Updated `typedoc` to version 0.26.11.
- Updated `typedoc-plugin-mdn-links` to version 3.3.8.
- Updated `typedoc-plugin-merge-modules` to version 6.0.3.
- Updated `@playform/build` to version 0.1.9.

## 0.1.2

### Change

- Renamed Documentation folder to docs
- Updated `typedoc` to version 0.26.7
- Updated `typedoc-plugin-mdn-links` to version 3.3.1
- Updated `typedoc-plugin-merge-modules` to version 6.0.1
- Updated `@playform/build` to version 0.1.6
- Added option to specify output folder for documentation

## 0.1.1

### Change

- Updated `typedoc` to version 0.26.6
- Updated `typedoc-plugin-mdn-links` to version 3.2.10
- Updated `typedoc-plugin-zod` to version 1.2.1
- Updated `@playform/build` to version 0.1.3

## 0.1.0

### Add

- Added `Run` script to package.json
- Added `provenance` field to package.json

### Change

- Updated dependencies
- Updated code to resolve TODOs

## 0.0.12

### Add

- Added CLI usage instructions to README.md

### Change

- Updated dependencies
- Minor code changes

## 0.0.11

### Change

- Updated dependencies

## 0.0.10

### Change

- Moved `@playform/build` from `peerDependencies` to `devDependencies`

## 0.0.9

### Change

- Removed `Document` script from package.json
- Updated dependencies

## 0.0.8

### Change

- Improved logic for determining git remote
- Updated error handling in `Exec` function

## 0.0.7

### Change

- Updated package description, keywords, homepage, and repository URLs
- Updated dependencies
- Moved `@playform/build` to `peerDependencies`

## 0.0.6

### Add

- Added `Document` script to package.json

### Change

- Updated `@playform/build` dependency

## 0.0.5

### Change

- Updated code to use dynamic path resolution for `--customCss` option

## 0.0.4

### Change

- Updated `@playform/build` dependency
- Removed `Document` script from package.json

## 0.0.3

### Change

- Renamed `TypeScriptDocument` to `Document`
- Updated package description and keywords
- Updated dependencies
- Removed ESBuild configuration files
- Updated README.md

## 0.0.2

### Change

- Updated `Document` script in package.json

## 0.0.1

### Add

- Initial release

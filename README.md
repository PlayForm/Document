# 📃 [TypeScriptDocument]

Document all your TypeScript files using TypeDoc.

## Installation

Add configuration and setup scripts:

```sh
npm install -D -E typescript-document
```

## Usage

`package.json`

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptDocument 'Source/**/*.ts'"
	}
}
```

### ESBuild Configuration

Or with a custom ESBuild config file:

`package.json`

```json
{
	"scripts": {
		"prepublishOnly": "TypeScriptDocument 'Source/**/*.ts' -es ESBuild.ts"
	}
}
```

See an example of a configuration file in
[ESBuild.ts](Source/Variable/ESBuild.ts)

### TypeScript Configuration

`tsconfig.json`

```json
{
	"compilerOptions": {
		"outDir": "Target"
	},
	"extends": "typescript-document/Target/Notation/TypeScript",
	"include": ["Source"]
}
```

[typedoc]: https://npmjs.org/typedoc
[TypeScriptDocument]: https://npmjs.org/typescript-document

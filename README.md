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

[typedoc]: https://npmjs.org/typedoc
[TypeScriptDocument]: https://npmjs.org/typescript-document

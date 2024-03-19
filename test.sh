#!/bin/bash

\typedoc \
	--commentStyle all \
	--gitRevision Current \
	--customCss /d/Developer/Application/Playform/NPM/TypeScriptDocument/Target/Stylesheet/Theme.css \
	--includeVersion \
	--out ./Documentation \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/Target/Variable/Load.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-remove-references/dist/index.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-rename-defaults/index.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-mdn-links/dist/index.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-zod/dist/plugin.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-merge-modules/dist/index.js \
	--plugin /d/Developer/Application/Playform/NPM/TypeScriptDocument/node_modules/typedoc-plugin-keywords/index.js \
	--searchInComments \
	--keywords documentation \
	--keywords javascript \
	--keywords typescript \
	--theme TypeScriptDocument \
	--entryPointStrategy expand \
	--mergeModulesRenameDefaults \
	--mergeModulesMergeMode module \
	--entryPoints Source/Variable/Load.ts \
	--entryPoints Source/Function/JSON.ts \
	--entryPoints Source/Function/Exec.ts \
	--entryPoints Source/Function/Document.ts \
	--entryPoints Source/Interface/Theme.ts \
	--entryPoints Source/Interface/Mapping.ts \
	--entryPoints Source/Interface/Load.ts \
	--entryPoints Source/Interface/JSON.ts \
	--entryPoints Source/Interface/Exec.ts \
	--entryPoints Source/Interface/Build.ts \
	--entryPoints Source/Class/TypeScriptDocument.ts \
	--entryPoints Source/Class/Theme.ts

#!/usr/bin/env node
var e=new(await import("commander")).Command().name("TypeScriptDocument").version("0.0.2").description("\u{1F4C3} Document TypeScript.").argument("<File...>","Document File.").action((await import("../Function/Document.js")).default).parse();export{e as default};

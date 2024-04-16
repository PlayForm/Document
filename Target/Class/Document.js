#!/usr/bin/env node
var e=new(await import("commander")).Command().name("Document").version("0.0.6").description("\u{1F4C3}\u2000Document.").argument("<File...>","File.").action((await import("../Function/Document.js")).default).parse();export{e as default};

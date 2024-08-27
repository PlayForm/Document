#!/usr/bin/env node
var e=new(await import("commander")).Command().name("Document").version("0.1.1").description("\u{1F4C3}\u2001Document\u2001\u2014").argument("<File...>","\u{1F4DD}\u2001File\u2001\u2014").action((await import("../Function/Document.js")).default).parse();export{e as default};

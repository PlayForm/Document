#!/usr/bin/env node
<<<<<<< HEAD
var e=new(await import("commander")).Command().name("Document").version("0.0.7").description("\u{1F4C3}\u2001Document\u2001\u2014").argument("<File...>","\u{1F4C2}\u2001File\u2001\u2014").action((await import("../Function/Document.js")).default).parse();export{e as default};
=======
var e=new(await import("commander")).Command().name("Document").version("0.0.7").description("\u{1F4C3}\u2001Document.").argument("<File...>","File.").action((await import("../Function/Document.js")).default).parse();export{e as default};
>>>>>>> 5c3cf2ae548a9bd4285ae55eae5cdfcfa4772d8b

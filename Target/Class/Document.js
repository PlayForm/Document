#!/usr/bin/env node
var e=new(await import("commander")).Command().name("Document").version("0.1.6").description("Document\u2003\u{1F4C3}").argument("<File...>","File\u2003\u{1F4DD}").option("-F, --Folder <Folder>","Folder\u2003\u{1F4DC}").action((await import("../Function/Document.js")).default).parse();export{e as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{480:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installing-adze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-adze"}},[t._v("#")]),t._v(" Installing Adze")]),t._v(" "),a("h2",{attrs:{id:"install-the-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-package"}},[t._v("#")]),t._v(" Install the Package")]),t._v(" "),a("p",[t._v("You can install Adze from NPM using the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NPM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save adze\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" adze\n")])])]),a("h2",{attrs:{id:"version-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-requirements"}},[t._v("#")]),t._v(" Version Requirements")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Dependency")]),t._v(" "),a("th",[t._v("Supported Versions")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("node")]),t._v(" "),a("td",[t._v(">= 10.x")]),t._v(" "),a("td",[t._v("When running Adze in a Node environment.")])]),t._v(" "),a("tr",[a("td",[t._v("typescript")]),t._v(" "),a("td",[t._v(">= 4.1")]),t._v(" "),a("td",[t._v("When using Adze with TypeScript")])])])]),t._v(" "),a("h2",{attrs:{id:"typescript-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-configuration"}},[t._v("#")]),t._v(" TypeScript Configuration")]),t._v(" "),a("p",[t._v("Adze is built to be used with TypeScript and we highly encourage using it in this way.")]),t._v(" "),a("p",[t._v("When building your project with TypeScript, you need to make sure you use the "),a("code",[t._v('"DOM"')]),t._v(" lib because Adze supports both the web browser and Node. Also, to support the dependencies of Adze, you'll need to add "),a("code",[t._v('"esModuleInterop": true')]),t._v(" to your tsconfig as well.")]),t._v(" "),a("p",[t._v("For more information about configuring TypeScript, go to "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...your other options")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esModuleInterop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"importing-adze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-adze"}},[t._v("#")]),t._v(" Importing Adze")]),t._v(" "),a("p",[t._v("Adze comes bundled with a few different ways of accessing it. Here are some examples:")]),t._v(" "),a("h3",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("p",[t._v("You can import the library directly into your HTML from the "),a("a",{attrs:{href:"https://www.jsdelivr.com/package/npm/adze",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsDelivr"),a("OutboundLink")],1),t._v(" CDN.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("NOTE:")]),t._v(" In the script tag in the example below, replace "),a("code",[t._v("<version>")]),t._v(" with the version of Adze you would like to use.")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- In the head of your html --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- To use v0.5.3 you would write https://cdn.jsdelivr.net/npm/adze@0.5.3/dist/adze.min.js --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/adze@<version>/dist/adze.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Using adze elsewhere in JS --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Adze is registered globally in your browser as AdzeLib")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AdzeLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"node-js-commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-commonjs"}},[t._v("#")]),t._v(" Node JS (CommonJS)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adze'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"es6-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-typescript"}},[t._v("#")]),t._v(" ES6 / TypeScript")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adze "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adze'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("adze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"line-numbers-blackboxing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#line-numbers-blackboxing"}},[t._v("#")]),t._v(" Line Numbers / Blackboxing")]),t._v(" "),a("p",[t._v("Although Adze is meant primarily for long-lived logs that should be in production environments you can use it for debugging purposes just like the standard console API. The caveat with using it for debugging is that you will need to enable "),a("a",{attrs:{href:"https://bit.ly/3d1eOex",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Blackboxing")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("A common problem with libraries that wrap the standard console API is that they lose line numbers in the browser console. This occurs because the browser console is reporting the line number at which the console API was called, which is usually within the library wrapper. To get around this problem, Chromium based browsers (like Chrome, Edge and Brave) added the "),a("a",{attrs:{href:"https://bit.ly/3d1eOex",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Blackboxing")]),a("OutboundLink")],1),t._v(" concept. This tells the browser to pretend like the library source code doesn't exist. This enables Adze logs to print correct line numbers from where they are called.")]),t._v(" "),a("p",[t._v("For information on setting up "),a("strong",[t._v("Blackboxing")]),t._v(", please go to "),a("a",{attrs:{href:"https://bit.ly/3d1eOex",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bit.ly/3d1eOex"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("em",[t._v("NOTE: The verbiage for this has been changed to "),a("strong",[t._v("Ignore List")]),t._v(" in the console settings.")])]),t._v(" "),a("p",[t._v("For non-chromium based browsers, right now there is no easy way to work around this issue. We suggest using the standard console API for debugging purposes where line numbers are important and reserving Adze logs for long-lived logs that will be used in production environments.")])])}),[],!1,null,null,null);s.default=n.exports}}]);
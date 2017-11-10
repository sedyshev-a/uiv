webpackJsonp([10],{170:function(a,s,t){var n=t(0)(t(192),t(207),null,null);a.exports=n.exports},192:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={components:{"pagination-example":{template:'<div class="markdown-live-example">\n  <pagination v-model="currentPage" :total-page="totalPage"/>\n</div>',data:function(){return{totalPage:18,currentPage:1}}},"pagination-sizing":{template:'<div class="markdown-live-example">\n  <section>\n    <pagination v-model="currentPage" :total-page="totalPage" size="lg"/>\n    <pagination v-model="currentPage" :total-page="totalPage"/>\n    <pagination v-model="currentPage" :total-page="totalPage" size="sm"/>\n  </section>\n</div>',data:function(){return{totalPage:18,currentPage:1}}},"pagination-direction-links":{template:'<div class="markdown-live-example">\n  <section>\n    <pagination v-model="currentPage" :total-page="totalPage"/>\n    <pagination v-model="currentPage" :total-page="totalPage" :direction-links="false"/>\n  </section>\n</div>',data:function(){return{totalPage:18,currentPage:1}}},"pagination-boundary-links":{template:'<div class="markdown-live-example">\n  <pagination v-model="currentPage" :total-page="totalPage" boundary-links/>\n</div>',data:function(){return{totalPage:18,currentPage:1}}},"pagination-chunks":{template:'<div class="markdown-live-example">\n  <section>\n    <pagination v-model="currentPage" :total-page="totalPage" :max-size="3"/>\n    <pagination v-model="currentPage" :total-page="totalPage"/>\n    <pagination v-model="currentPage" :total-page="totalPage" :max-size="totalPage"/>\n  </section>\n</div>',data:function(){return{totalPage:10,currentPage:1}}}}}},207:function(a,s){a.exports={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("markdown-wrapper",[t("h1",{attrs:{id:"pagination"}},[a._v("Pagination "),t("a",{staticClass:"header-anchor",attrs:{href:"#pagination","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("blockquote",[t("p",[a._v("Provide pagination links for your site or app with the multi-page pagination component.")])]),a._v(" "),t("h2",{attrs:{id:"example"}},[a._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("p",[a._v("Simple pagination, great for apps and search results.")]),a._v(" "),t("p",[a._v("Use "),t("code",{pre:!0},[a._v("v-model")]),a._v(" (1-based) to indicate the current page.")]),a._v(" "),t("pagination-example",{ref:"pagination-example"}),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v("/>")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{attrs:{class:"javascript"}},[a._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("totalPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("18")]),a._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("currentPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v(" \n"),t("span",{attrs:{class:"hljs-comment"}},[a._v("\x3c!-- pagination-example.vue --\x3e")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"sizing"}},[a._v("Sizing "),t("a",{staticClass:"header-anchor",attrs:{href:"#sizing","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("p",[a._v("Fancy larger or smaller pagination? Add "),t("code",{pre:!0},[a._v('size="lg"')]),a._v(" or "),t("code",{pre:!0},[a._v('size="sm"')]),a._v(" for additional sizes.")]),a._v(" "),t("pagination-sizing",{ref:"pagination-sizing"}),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"lg"')]),a._v("/>")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v("/>")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"sm"')]),a._v("/>")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{attrs:{class:"javascript"}},[a._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("totalPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("18")]),a._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("currentPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v(" \n"),t("span",{attrs:{class:"hljs-comment"}},[a._v("\x3c!-- pagination-sizing.vue --\x3e")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"direction-links"}},[a._v("Direction Links "),t("a",{staticClass:"header-anchor",attrs:{href:"#direction-links","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("p",[a._v("By default "),t("code",{pre:!0},[a._v("direction-links")]),a._v(" are enabled, which allows users to nav to previous or next page.")]),a._v(" "),t("pagination-direction-links",{ref:"pagination-direction-links"}),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v("/>")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":direction-links")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"false"')]),a._v("/>")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{attrs:{class:"javascript"}},[a._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("totalPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("18")]),a._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("currentPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v(" \n"),t("span",{attrs:{class:"hljs-comment"}},[a._v("\x3c!-- pagination-direction-links.vue --\x3e")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"boundary-links"}},[a._v("Boundary Links "),t("a",{staticClass:"header-anchor",attrs:{href:"#boundary-links","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("p",[a._v("Add "),t("code",{pre:!0},[a._v("boundary-links")]),a._v(" to allow fast nav to the first or last page.")]),a._v(" "),t("pagination-boundary-links",{ref:"pagination-boundary-links"}),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("boundary-links")]),a._v("/>")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{attrs:{class:"javascript"}},[a._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("totalPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("18")]),a._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("currentPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v(" \n"),t("span",{attrs:{class:"hljs-comment"}},[a._v("\x3c!-- pagination-boundary-links.vue --\x3e")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"chunks"}},[a._v("Chunks "),t("a",{staticClass:"header-anchor",attrs:{href:"#chunks","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("p",[a._v("Use "),t("code",{pre:!0},[a._v("max-size")]),a._v(" to define the maximum chunk size of pagers (default is 5). And if you don't like chunk pagers, just simply set "),t("code",{pre:!0},[a._v("max-size")]),a._v(" to equal as "),t("code",{pre:!0},[a._v("total-page")]),a._v(".")]),a._v(" "),t("pagination-chunks",{ref:"pagination-chunks"}),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":max-size")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"3"')]),a._v("/>")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v("/>")]),a._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("pagination")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"currentPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":total-page")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v(":max-size")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"totalPage"')]),a._v("/>")]),a._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("section")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{attrs:{class:"javascript"}},[a._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("totalPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("10")]),a._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[a._v("currentPage")]),a._v(": "),t("span",{attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v(" \n"),t("span",{attrs:{class:"hljs-comment"}},[a._v("\x3c!-- pagination-chunks.vue --\x3e")]),a._v("\n")])]),a._v(" "),t("h1",{attrs:{id:"api-reference"}},[a._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("h2",{attrs:{id:"paginationvue"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/tree/master/src/components/pagination/Pagination.vue"}},[a._v("Pagination.vue")]),a._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#paginationvue","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("h3",{attrs:{id:"props"}},[a._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[a._v("Name")]),a._v(" "),t("th",[a._v("Type")]),a._v(" "),t("th",[a._v("Default")]),a._v(" "),t("th",[a._v("Required")]),a._v(" "),t("th",[a._v("Description")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[a._v("v-model")])]),a._v(" "),t("td",[a._v("Number")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("✔")]),a._v(" "),t("td",[a._v("The current page (1-based).")])]),a._v(" "),t("tr",[t("td",[t("code",{pre:!0},[a._v("total-page")])]),a._v(" "),t("td",[a._v("Number")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("✔")]),a._v(" "),t("td",[a._v("Total number of pages.")])]),a._v(" "),t("tr",[t("td",[t("code",{pre:!0},[a._v("max-size")])]),a._v(" "),t("td",[a._v("Number")]),a._v(" "),t("td",[a._v("5")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("Maximum number of pagers per chunk.")])]),a._v(" "),t("tr",[t("td",[t("code",{pre:!0},[a._v("boundary-links")])]),a._v(" "),t("td",[a._v("Boolean")]),a._v(" "),t("td",[a._v("false")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("Display First / Last buttons.")])]),a._v(" "),t("tr",[t("td",[t("code",{pre:!0},[a._v("direction-links")])]),a._v(" "),t("td",[a._v("Boolean")]),a._v(" "),t("td",[a._v("true")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("Display Previous / Next buttons.")])]),a._v(" "),t("tr",[t("td",[t("code",{pre:!0},[a._v("size")])]),a._v(" "),t("td",[a._v("String")]),a._v(" "),t("td"),a._v(" "),t("td"),a._v(" "),t("td",[a._v("Optional pagination sizes, support: "),t("code",{pre:!0},[a._v("sm")]),a._v(" / "),t("code",{pre:!0},[a._v("lg")])])])])])]),t("h3",{attrs:{id:"events"}},[a._v("Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[a._v("🔗")])]),a._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[a._v("Name")]),a._v(" "),t("th",[a._v("Params")]),a._v(" "),t("th",[a._v("Description")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[a._v("change")])]),a._v(" "),t("td",[a._v("index")]),a._v(" "),t("td",[a._v("Fire after page changed, with the index number changed to.")])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.572561cfecd01c7c2d77.js.map
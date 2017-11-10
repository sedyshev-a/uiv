webpackJsonp([0],{165:function(s,a,t){t(225),t(226);var l=t(0)(t(187),t(216),null,null);s.exports=l.exports},187:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={components:{"carousel-example":{template:'<div class="markdown-live-example">\n  <section>\n    <carousel :indicators="indicators" :controls="controls" :interval="interval" ref="carousel">\n      <slide v-for="(slide, index) in slides" :key="index">\n        <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0? \'#99a9bf\' : \'#d3dce6\'}"></div>\n        <div class="carousel-caption">\n          <h3>This is {{slide.title}}</h3>\n        </div>\n      </slide>\n    </carousel>\n    <br/>\n    <form class="form-inline">\n      <btn @click="indicators=!indicators">Toggle Indicators</btn>\n      <btn @click="controls=!controls">Toggle Controls</btn>\n      <btn @click="pushSlide">Push Slide</btn>\n      <div class="form-group">\n        <div class="input-group">\n          <span class="input-group-addon">Interval</span>\n          <input type="number" class="form-control" step="1" min="0" v-model.number="interval" style="width: 100px">\n          <span class="input-group-addon">ms</span>\n        </div>\n      </div>\n    </form>\n  </section>\n</div>',data:function(){return{interval:5e3,indicators:!0,controls:!0,slides:[{title:"Slide 1"},{title:"Slide 2"},{title:"Slide 3"},{title:"Slide 4"}]}},methods:{pushSlide:function(){this.slides.push({title:"Slide "+(this.slides.length+1)})}}},"carousel-override-indicators":{template:'<div class="markdown-live-example">\n  <carousel>\n    <slide v-for="(slide, index) in slides" :key="index">\n      <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0 ? \'#99a9bf\' : \'#d3dce6\'}"></div>\n      <div class="carousel-caption">\n        <h3>This is {{slide.title}}</h3>\n      </div>\n    </slide>\n    \x3c!-- Use this slot for custom indicators --\x3e\n    <template slot="indicators" slot-scope="props">\n      <ol class="carousel-indicators custom-carousel-indicators">\n        <li v-for="(slide, index) in slides"\n            :class="{active:index === props.activeIndex}"\n            @click="props.select(index)">\n            \x3c!-- Anything you like here --\x3e\n        </li>\n      </ol>\n    </template>\n  </carousel>\n</div>',data:function(){return{slides:[{title:"Slide 1"},{title:"Slide 2"},{title:"Slide 3"},{title:"Slide 4"}]}}},"carousel-icons":{template:'<div class="markdown-live-example">\n  <carousel icon-control-left="my-icon glyphicon glyphicon-arrow-left" icon-control-right="my-icon glyphicon glyphicon-arrow-right">\n    <slide v-for="(slide, index) in slides" :key="index">\n      <div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0 ? \'#99a9bf\' : \'#d3dce6\'}"></div>\n      <div class="carousel-caption">\n        <h3>This is {{slide.title}}</h3>\n      </div>\n    </slide>\n  </carousel>\n</div>',data:function(){return{slides:[{title:"Slide 1"},{title:"Slide 2"},{title:"Slide 3"},{title:"Slide 4"}]}}}}}},201:function(s,a,t){a=s.exports=t(158)(),a.push([s.i,".custom-carousel-indicators li,.custom-carousel-indicators li.active{width:50px;height:8px;margin:0 3px;border-radius:0}",""])},202:function(s,a,t){a=s.exports=t(158)(),a.push([s.i,".carousel-control .my-icon{position:absolute;top:50%;margin-top:-10px}",""])},216:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("markdown-wrapper",[t("h1",{attrs:{id:"carousel"}},[s._v("Carousel "),t("a",{staticClass:"header-anchor",attrs:{href:"#carousel","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("blockquote",[t("p",[s._v("A slideshow component for cycling through elements, like a carousel. "),t("strong",[s._v("Nested carousels are not supported")]),s._v(".")])]),s._v(" "),t("h2",{attrs:{id:"example"}},[s._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("carousel-example",{ref:"carousel-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":indicators")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"indicators"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":controls")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"controls"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"interval"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"carousel"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(slide, index) in slides"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 100%;height: 400px;"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"{background:index % 2 === 0? '#99a9bf' : '#d3dce6'}\"")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"carousel-caption"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("This is {{slide.title}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-inline"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"indicators=!indicators"')]),s._v(">")]),s._v("Toggle Indicators"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"controls=!controls"')]),s._v(">")]),s._v("Toggle Controls"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"pushSlide"')]),s._v(">")]),s._v("Push Slide"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-group"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"input-group"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"input-group-addon"')]),s._v(">")]),s._v("Interval"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"number"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-control"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("step")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model.number")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"interval"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 100px"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"input-group-addon"')]),s._v(">")]),s._v("ms"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("interval")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("indicators")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("controls")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slides")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 1'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 2'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 3'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 4'")]),s._v("}\n        ]\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      pushSlide () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".slides.push({"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("`Slide "),t("span",{attrs:{class:"hljs-subst"}},[s._v("${"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".slides.length + "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("}")]),s._v("`")]),s._v("})\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"override-indicators"}},[s._v("Override Indicators "),t("a",{staticClass:"header-anchor",attrs:{href:"#override-indicators","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Use the "),t("code",{pre:!0},[s._v("indicators")]),s._v(" slot to override default Bootstrap indicators.")]),s._v(" "),t("p",[s._v("This is a scoped slot, use "),t("code",{pre:!0},[s._v('slot-scope="props"')]),s._v(" in Vue 2.5+, otherwise "),t("code",{pre:!0},[s._v('scope="props"')]),s._v(".")]),s._v(" "),t("carousel-override-indicators",{ref:"carousel-override-indicators"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(slide, index) in slides"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 100%;height: 400px;"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"{background:index % 2 === 0 ? '#99a9bf' : '#d3dce6'}\"")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"carousel-caption"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("This is {{slide.title}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- Use this slot for custom indicators --\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"indicators"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"props"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ol")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"carousel-indicators custom-carousel-indicators"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(slide, index) in slides"')]),s._v("\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{active:index === props.activeIndex}"')]),s._v("\n            @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"props.select(index)"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- Anything you like here --\x3e")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ol")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slides")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 1'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 2'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 3'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 4'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".custom-carousel-indicators")]),s._v(" "),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(", "),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".custom-carousel-indicators")]),s._v(" "),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".active")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("50px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("3px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-override-indicators.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"custom-icons"}},[s._v("Custom Icons "),t("a",{staticClass:"header-anchor",attrs:{href:"#custom-icons","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[t("strong",[s._v("Note")]),s._v(": Bootstrap 3 has only 2 sets of icon supported for carousel at present:")]),s._v(" "),t("ul",[t("li",[t("code",{pre:!0},[s._v("glyphicon glyphicon-chevron-left")]),s._v(" and "),t("code",{pre:!0},[s._v("glyphicon glyphicon-chevron-right")]),s._v(" (default)")]),s._v(" "),t("li",[t("code",{pre:!0},[s._v("icon-prev")]),s._v(" and "),t("code",{pre:!0},[s._v("icon-next")])])]),s._v(" "),t("p",[s._v("Additional CSS may needed if you prefer other icons or font...")]),s._v(" "),t("p",[s._v("Here is an example using "),t("code",{pre:!0},[s._v("glyphicon-arrow-left")]),s._v(" and "),t("code",{pre:!0},[s._v("glyphicon-arrow-right")]),s._v(".")]),s._v(" "),t("carousel-icons",{ref:"carousel-icons"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icon-control-left")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"my-icon glyphicon glyphicon-arrow-left"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icon-control-right")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"my-icon glyphicon glyphicon-arrow-right"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(slide, index) in slides"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 100%;height: 400px;"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"{background:index % 2 === 0 ? '#99a9bf' : '#d3dce6'}\"")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"carousel-caption"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("This is {{slide.title}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("slide")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("carousel")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slides")]),s._v(": [\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 1'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 2'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 3'")]),s._v("},\n          {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Slide 4'")]),s._v("}\n        ]\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/* Using custom icons may require some additional CSS declarations */")]),s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".carousel-control")]),s._v(" "),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".my-icon")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("50%")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin-top")]),s._v(": -"),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-icons.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h2",{attrs:{id:"carouselvue"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/tree/master/src/components/carousel/Carousel.vue"}},[s._v("Carousel.vue")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#carouselvue","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h3",{attrs:{id:"props"}},[s._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Required")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("v-model")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The current slide index, use this to manual change slide index.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("indicators")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Show / hide the indicators.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("controls")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Show / hide the controls.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("interval")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("5000")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Slides running interval time in ms. Use "),t("code",{pre:!0},[s._v("0")]),s._v(" to stop interval.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("icon-control-left")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("glyphicon glyphicon-chevron-left")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The left control icon font class.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("icon-control-right")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("glyphicon glyphicon-chevron-right")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The right control icon font class.")])])])])]),t("h3",{attrs:{id:"slots"}},[s._v("Slots "),t("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),s._v(" "),t("td",[s._v("The carousel body.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("indicators")])]),s._v(" "),t("td",[s._v("Override indicators. This is a scoped slot with "),t("code",{pre:!0},[s._v("activeIndex")]),s._v(" prop and "),t("code",{pre:!0},[s._v("select")]),s._v(" method. See example section above for usage details.")])])])])]),t("h3",{attrs:{id:"events"}},[s._v("Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Params")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("change")])]),s._v(" "),t("td",[s._v("index")]),s._v(" "),t("td",[s._v("Fire after slide changed, with the index number changed to.")])])])])])],1)},staticRenderFns:[]}},225:function(s,a,t){var l=t(201);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);t(159)("42464fee",l,!0)},226:function(s,a,t){var l=t(202);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);t(159)("5e9fd10a",l,!0)}});
//# sourceMappingURL=0.f3b57d5ccc96a107821f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),o=n(147);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Hello World IKE | Home"}),r.a.createElement("div",{style:{marginBottom:"1.45rem",textAlign:"center"}},r.a.createElement("img",{style:{width:"500px",height:"auto"},src:n(161),alt:"Hello World"})))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(141),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(143),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Hello World"}}}}},145:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,n){},147:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(150),s=n.n(l),u=n(142);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Hello World",description:"Hello World",author:"Hello World"}}}}},149:function(e,t,n){"use strict";var a=n(144),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(142),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#fff",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, .2)",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,fontSize:"1.5rem",fontWeight:300,lineHeight:1}},i.a.createElement(l.Link,{to:"/",style:{color:"#444",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,d=(n(146),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("footer",{style:{fontSize:".8rem",textAlign:"center"}},"Hello World, © 2019")))},data:a})});d.propTypes={children:c.a.node.isRequired};t.a=d},161:function(e,t,n){e.exports=n.p+"static/under-construction-53faa0de8d0dbd7a8ef98461044f5d8b.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-91d2613f2bdf81355d4e.js.map
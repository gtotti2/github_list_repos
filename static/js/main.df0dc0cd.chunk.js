(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},31:function(e,t,a){e.exports=a(69)},37:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(37),a(38),a(39),a(40),a(74)),i=a(28),s=a.n(i),m=a(72),u=a(73),h=(a(44),a(45),function(e){return r.a.createElement("header",{className:"header d-none d-sm-flex flex-column"},r.a.createElement("h1",{className:"mt-3"},r.a.createElement("i",{className:"fa fa-".concat(e.icon)}),e.title))}),p=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(h,e),r.a.createElement("main",{className:"content container-fluid"},r.a.createElement("div",{className:"p-3 mt-3"},e.children)))},d=a(11),f=a(6),E=a(7),b=a(12),v=a(8),y=a(10),g=a(9),w=a.n(g),k=a(71),N=function(e){return r.a.createElement(k.a,{to:"repository/".concat(e.owner,"/").concat(e.name)},e.name)},j={icon:"book",title:"Reposit\xf3rios"},O={user:"",list:[]},R=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state=Object(d.a)({},O),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this;w()("".concat("https://api.github.com/users/").concat(this.props.user,"/repos")).then(function(t){e.setState({list:t.data})})}},{key:"renderTable",value:function(){return r.a.createElement("table",null,r.a.createElement("tbody",null,this.renderRows()))}},{key:"renderNotPrivateRows",value:function(e){return e.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(N,{owner:e.owner.login,name:e.name})))})}},{key:"renderRows",value:function(){var e=this.state.list.filter(function(e){return!e.private});return this.renderNotPrivateRows(e)}},{key:"renderList",value:function(){return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},this.renderTable())),r.a.createElement("hr",null))}},{key:"render",value:function(){return r.a.createElement(p,j,this.renderList())}}]),t}(n.Component),T=function(e){return r.a.createElement(p,{icon:"home",title:"Listagem"},r.a.createElement("div",{className:"display-4"},"Bem vindo"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Listagem de reposit\xf3rios p\xfablicos"),r.a.createElement(R,{user:"reactjs"}))},S={commits:[]},x=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state=Object(d.a)({},S),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this;w()("".concat("https://api.github.com/repos/").concat(this.props.location.split("/")[this.props.location.split("/").length-2],"/").concat(this.props.location.split("/")[this.props.location.split("/").length-1],"/commits")).then(function(t){e.setState({commits:t.data})})}},{key:"renderRepos",value:function(){return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},this.renderTable())),r.a.createElement("hr",null))}},{key:"renderTable",value:function(){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Autor: "),r.a.createElement("td",null,"E-mail: "),r.a.createElement("td",null,"Mensagem: "),r.a.createElement("td",null,"Data: "))),r.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this.state.commits.filter(function(e,t){return t<20});return this.renderTwentyCommits(e)}},{key:"renderTwentyCommits",value:function(e){return e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.commit.author.name),r.a.createElement("td",null,e.commit.author.email),r.a.createElement("td",null,e.commit.message),r.a.createElement("td",null,e.commit.author.date))})}},{key:"render",value:function(){return r.a.createElement(p,null,this.renderRepos())}}]),t}(n.Component),C=a(13),A={results:[],searchText:""},L=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state=Object(d.a)({},A),a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.search(a.state.searchText,a.props.repo,a.props.user),e.currentTarget.reset()},a.search=function(e,t,n){w()({method:"get",url:"https://api.github.com/search/commits?q=repo:".concat(n,"/").concat(t,"+").concat(e),headers:{Accept:"application/vnd.github.cloak-preview"}}).then(function(e){console.log(Object(C.a)(Object(C.a)(a))),a.setState({results:e.data})})},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Procurar..."}),r.a.createElement("button",{className:"search-button",type:"submit",id:"submit"},"Procurar"))}}]),t}(n.Component),P={icon:"book",title:"Reposit\xf3rio"},W=function(e){return r.a.createElement(p,P,r.a.createElement("div",{className:"display-4"},"Listagem de commits do reposit\xf3rio ",r.a.createElement("b",null,e.location.pathname.split("/")[3])),r.a.createElement("hr",null),r.a.createElement(L,{location:e.location.pathname,user:e.location.pathname.split("/")[2],repo:e.location.pathname.split("/")[3]}),r.a.createElement(x,{location:e.location.pathname}))},_=function(e){return r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:T}),r.a.createElement(u.a,{path:"/repository",component:W}))},B=(a(26),function(e){return r.a.createElement("a",{href:e.link},r.a.createElement("i",{className:"fa ".concat(e.icon)}),e.label)}),D=function(e){return r.a.createElement("aside",{className:"menu-area"},r.a.createElement("nav",{className:"menu"},r.a.createElement(B,{link:"/",icon:"fa-home",label:" In\xedcio"})))},M=(a(68),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Desenvolvido com ",r.a.createElement("i",{className:"fa fa-heart text-danger"})))}),q=s()({basename:"/github_list_repos"});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(function(e){return r.a.createElement(o.a,{history:q,basename:"/github_list_repos"},r.a.createElement("div",{className:"app"},r.a.createElement(D,null),r.a.createElement(_,null),r.a.createElement(M,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.df0dc0cd.chunk.js.map
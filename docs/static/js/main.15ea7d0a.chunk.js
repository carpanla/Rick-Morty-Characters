(this["webpackJsonpmodulo-3-evaluacion-final-carpanla"]=this["webpackJsonpmodulo-3-evaluacion-final-carpanla"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},24:function(e,a,t){e.exports=t(41)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),i=(t(29),t(16)),s=t(17),m=t(22),o=t(18),u=t(8),h=t(23),d=(t(30),t(31),function(e){return c.a.createElement("div",{className:"card__container",id:e.id},c.a.createElement("div",{className:"img__container"},c.a.createElement("img",{src:e.image,alt:e.name,className:"img"})),c.a.createElement("h2",{className:"name__card"},e.name),c.a.createElement("h3",{className:"specie__card"},e.species))}),f=t(4),E=(t(32),function(e){return c.a.createElement("div",null,c.a.createElement("ul",{className:"app__list"},e.allCharacters.filter((function(a){return""===e.value||a.name.toLowerCase().includes(e.value.toLowerCase())})).map((function(e){return c.a.createElement("li",{className:"character-wrapper",key:e.id},c.a.createElement(f.b,{to:"/character/".concat(e.id)},c.a.createElement(d,{image:e.image,name:e.name,species:e.species,id:e.id})))}))))}),p=(t(38),function(e){return c.a.createElement("div",null,c.a.createElement("form",{className:"search__container",onSubmit:function(e){return e.preventDefault()},action:"",method:"POST"},c.a.createElement("label",{htmlFor:"name"}),c.a.createElement("input",{className:"search__input",type:"text",value:e.value,name:"name",placeholder:"Name",onChange:function(a){a.preventDefault(),e.onChangeHandler(a.target.value)}})))}),g=(t(39),t(21)),v=t.n(g),_=(t(40),function(){return c.a.createElement("header",{className:"header"},c.a.createElement(f.b,{to:"/"},c.a.createElement("img",{className:"header_logo",src:v.a,alt:"logo"})))}),N=function(e){return void 0===e.character?c.a.createElement("div",{className:"not-found"},c.a.createElement("p",null,"Lost in Rick and Morty's universe..."),c.a.createElement(f.b,{to:"/"},"Back home")):c.a.createElement("div",{className:"info_container"},c.a.createElement(_,null),c.a.createElement(f.b,{to:"/"},c.a.createElement("i",{className:"back fas fa-chevron-left"}," Back")),c.a.createElement("div",{className:"detail__container"},c.a.createElement("div",{className:"detail__image__container"},c.a.createElement("img",{className:"detail__image",src:e.character.image,alt:e.character.name})),c.a.createElement("div",{className:"detail__content-container"},c.a.createElement("h1",{className:"detail__title"},e.character.name),c.a.createElement("ul",{className:"detail__list"},c.a.createElement("li",{className:"detail__list-item"},"Species:"," ","Alien"===e.character.species?c.a.createElement("i",{className:"fab fa-reddit-alien"}):c.a.createElement("i",{className:"fas fa-user"})),c.a.createElement("li",{className:"detail__list-item"},"Status:"," ","Alive"===e.character.status?c.a.createElement("i",{className:"fas fa-heartbeat"}):"Dead"===e.character.status?c.a.createElement("i",{class:"fas fa-skull-crossbones"}):c.a.createElement("i",{className:"fas fa-question-circle"}))))))},C=t(6),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={allCharacters:[],value:"",singleCharacter:{}},t.onChangeHandler=t.onChangeHandler.bind(Object(u.a)(t)),t.fetchSingleId=t.fetchSingleId.bind(Object(u.a)(t)),t.renderCharacter=t.renderCharacter.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(a){e.setState({allCharacters:a.results}),console.log(e.state.allCharacters)}))}},{key:"fetchSingleId",value:function(e){var a=this;parseInt(e)!==this.state.singleCharacter.id&&function(e){return fetch("https://rickandmortyapi.com/api/character/"+e).then((function(e){return e.json()}))}(e).then((function(e){a.setState({singleCharacter:e}),console.log(a.state.singleCharacter)}))}},{key:"onChangeHandler",value:function(e){this.setState({value:e})}},{key:"renderCharacter",value:function(e){return console.log(e),this.fetchSingleId(e.match.params.id),c.a.createElement(N,{character:this.state.singleCharacter})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C.c,null,c.a.createElement(C.a,{exact:!0,path:"/"},c.a.createElement(_,null),c.a.createElement(p,{onChangeHandler:this.onChangeHandler}),c.a.createElement(E,{allCharacters:this.state.allCharacters,value:this.state.value})),c.a.createElement(C.a,{path:"/character/:id",render:this.renderCharacter})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(f.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.15ea7d0a.chunk.js.map
(this["webpackJsonppokemon-card-game"]=this["webpackJsonppokemon-card-game"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),c=t.n(o),i=(t(13),t(7)),s=t(1),p=t(2),m=t(3),l=t(4),u=(t(14),function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("img",{src:n,alt:this.props.name}),r.a.createElement("div",{className:"Pokecard-data"},"Type : ",this.props.type," "),r.a.createElement("div",{className:"Pokecard-data"},"Exp : ",this.props.exp," "))}}]),t}(a.Component)),d=(t(15),function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Pokedex"},r.a.createElement("p",{className:this.props.isWinner?"Pokedex-Winner":"Pokedex-Loser"},this.props.isWinner?"Congrats You Won":"Better Luck Next Time"),r.a.createElement("h4",null,"Total Score = ".concat(this.props.exp)),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),t}(a.Component)),h=function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(i.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),a=n.splice(t,1)[0];e.push(a)}var o=e.reduce((function(e,n){return e+n.base_experience}),0),c=n.reduce((function(e,n){return e+n.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(d,{pokemon:e,exp:o,isWinner:o>c}),r.a.createElement(d,{pokemon:n,exp:c,isWinner:c>o}))}}]),t}(a.Component);h.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:500},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=h;t(16);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.70e0cd96.chunk.js.map
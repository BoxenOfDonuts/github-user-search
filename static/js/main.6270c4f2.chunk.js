(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var r=s(1),i=s.n(r),a=s(7),o=s.n(a),l=(s(14),s(2)),u=s(6),n=s.n(u),p=s(9),c=s(8),h=(s(16),s(17),s(0)),g=function(e){var t=e.setSearch,s=Object(r.useState)(""),i=Object(l.a)(s,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){return function(){o("")}}),[]),Object(h.jsx)("div",{className:"search-bar",children:Object(h.jsxs)("form",{onSubmit:function(e){a&&(e.preventDefault(),t(a),o(""))},children:[Object(h.jsx)("label",{htmlFor:"search"}),Object(h.jsx)("input",{type:"text",name:"search",placeholder:"Search Github...",value:a,onChange:function(e){var t=e.target.value;o(t)},required:!0}),Object(h.jsx)("button",{className:"btn",children:"Search"})]})})},m=function(e){var t=e.children;return Object(h.jsx)("li",{className:"nav-item",children:t})},b=function(e){var t=e.didSearch,s=e.setSearch,r=e.reset;return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[t&&Object(h.jsx)(g,{setSearch:s}),Object(h.jsx)(m,{children:Object(h.jsx)("a",{href:"#",onClick:r,className:"reset-link",children:Object(h.jsx)("span",{className:"nav-title",children:"Github User Search"})})})]})})},d=(s(19),s(20),function(e){var t=e.avatarURL;return Object(h.jsx)("div",{className:"left-icon",children:Object(h.jsx)("img",{className:"avatar",alt:"user gravatar",src:t})})}),_=function(e){var t=e.user;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"user-info main-info",children:[Object(h.jsx)("a",{href:t.html_url,className:"user-link user-name",children:t.name}),Object(h.jsx)("a",{href:t.html_url,className:"user-link secondary",children:t.login}),Object(h.jsx)(v,{bio:t.bio}),Object(h.jsx)(f,{location:t.location,email:t.email})]})})},v=function(e){var t=e.bio;return Object(h.jsx)("div",{className:"user-info bio",children:Object(h.jsx)("p",{children:t})})},f=function(e){var t=e.location,s=e.email;return Object(h.jsxs)("div",{className:"user-info additional-info secondary",children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("p",{children:s})]})},x=function(e){var t=e.user;return Object(h.jsxs)("div",{className:"user-card",children:[Object(h.jsx)(d,{avatarURL:t.avatar_url}),Object(h.jsx)(_,{user:t})]})},w=(s(21),function(e){var t=e.currentPage,s=e.pageNumbers,r=e.goToPage,i=e.name,a=e.increment,o="";return t===s[s.length-1]&&"Next"===i?o+=" next-disabled":t===s[0]&&"Previous"===i&&(o+=" prev-disabled"),Object(h.jsx)("li",{className:o,children:Object(h.jsx)("a",{href:"#",className:"page-link change-page",onClick:function(){return r(t+a)},children:i})})}),j=function(e){for(var t=e.postPerPage,s=e.totalPosts,r=e.goToPage,i=e.currentPage,a=[],o=1;o<=Math.ceil(s/t);o++)a.push(o);var l=a.map((function(e,t){var s="page-number";return i===t+1&&(s+=" page-active"),Object(h.jsx)("li",{className:s,children:Object(h.jsx)("a",{href:"#",className:"page-link",onClick:function(){return r(e)},children:e})},e)}));return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)(w,{currentPage:i,pageNumbers:a,goToPage:r,increment:-1,name:"Previous"}),l,Object(h.jsx)(w,{currentPage:i,pageNumbers:a,goToPage:r,increment:1,name:"Next"})]})})},y=function(e){var t=e.children;return Object(h.jsx)(h.Fragment,{children:t})},O=function(e){var t=e.users.map((function(e){return Object(h.jsx)(x,{user:e},e.id)}));return Object(h.jsx)("ul",{children:t})},N=function(e){var t=e.numberOfResults,s=e.setSort;return Object(h.jsxs)("div",{className:"results-header",children:[Object(h.jsx)("p",{className:"header-item",children:"Results "+t}),Object(h.jsx)(E,{onSort:s,className:"header-item"})]})},E=function(e){var t=e.onSort;return Object(h.jsx)("form",{onChange:function(e){var s=e.target.value;t(s)},children:Object(h.jsx)("label",{htmlFor:"sortBy",children:Object(h.jsxs)("select",{name:"sortBy",id:"sortBy",children:[Object(h.jsx)("option",{value:"best",children:"Best Match"}),Object(h.jsx)("option",{value:"followers",children:"Most Followers"}),Object(h.jsx)("option",{value:"repositories",children:"Most Repositories"}),Object(h.jsx)("option",{value:"joined",children:"Most Recently Joined"})]})})})},T=function(e){var t=e.resultCount,s=e.userInfo,i=e.setSort,a=Object(r.useState)(1),o=Object(l.a)(a,2),u=o[0],n=o[1],p=Object(r.useState)(5),c=Object(l.a)(p,2),g=c[0],m=(c[1],s.length),b=u*g,d=b-g,_=s.slice(d,b);return Object(h.jsx)("div",{className:"results-page",children:Object(h.jsxs)(y,{children:[Object(h.jsx)(N,{numberOfResults:t,setSort:i}),Object(h.jsx)(O,{users:_}),Object(h.jsx)(j,{postPerPage:g,totalPosts:m,goToPage:function(e){n(e)},currentPage:u})]})})},k=(s(22),function(e){var t=e.setSearch;return Object(h.jsx)("div",{className:"search-page",children:Object(h.jsx)(g,{setSearch:t})})}),D=[{login:"examplecode",id:2177e3,node_id:"MDQ6VXNlcjIxNzcwMDA=",avatar_url:"https://avatars.githubusercontent.com/u/2177000?v=4",gravatar_id:"",url:"https://api.github.com/users/examplecode",html_url:"https://github.com/examplecode",followers_url:"https://api.github.com/users/examplecode/followers",following_url:"https://api.github.com/users/examplecode/following{/other_user}",gists_url:"https://api.github.com/users/examplecode/gists{/gist_id}",starred_url:"https://api.github.com/users/examplecode/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/examplecode/subscriptions",organizations_url:"https://api.github.com/users/examplecode/orgs",repos_url:"https://api.github.com/users/examplecode/repos",events_url:"https://api.github.com/users/examplecode/events{/privacy}",received_events_url:"https://api.github.com/users/examplecode/received_events",type:"User",site_admin:!1,name:"chengkai",company:null,blog:"https://www.xbext.com",location:"Beijing of China",email:null,hireable:!0,bio:null,twitter_username:null,public_repos:60,public_gists:3,followers:245,following:1,created_at:"2012-08-19T01:56:21Z",updated_at:"2021-02-19T01:48:31Z"},{login:"redblobgames",id:8757369,node_id:"MDQ6VXNlcjg3NTczNjk=",avatar_url:"https://avatars.githubusercontent.com/u/8757369?v=4",gravatar_id:"",url:"https://api.github.com/users/redblobgames",html_url:"https://github.com/redblobgames",followers_url:"https://api.github.com/users/redblobgames/followers",following_url:"https://api.github.com/users/redblobgames/following{/other_user}",gists_url:"https://api.github.com/users/redblobgames/gists{/gist_id}",starred_url:"https://api.github.com/users/redblobgames/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/redblobgames/subscriptions",organizations_url:"https://api.github.com/users/redblobgames/orgs",repos_url:"https://api.github.com/users/redblobgames/repos",events_url:"https://api.github.com/users/redblobgames/events{/privacy}",received_events_url:"https://api.github.com/users/redblobgames/received_events",type:"User",site_admin:!1,name:"Amit Patel",company:"Red Blob Games",blog:"https://www.redblobgames.com/",location:"Silicon Valley, CA",email:null,hireable:null,bio:"I work on explorable explanations (interactive tutorials) for algorithms, using examples from computer games.",twitter_username:"redblobgames",public_repos:21,public_gists:25,followers:517,following:9,created_at:"2014-09-13T05:45:28Z",updated_at:"2021-03-09T17:36:14Z"},{login:"example42",id:8918984,node_id:"MDEyOk9yZ2FuaXphdGlvbjg5MTg5ODQ=",avatar_url:"https://avatars.githubusercontent.com/u/8918984?v=4",gravatar_id:"",url:"https://api.github.com/users/example42",html_url:"https://github.com/example42",followers_url:"https://api.github.com/users/example42/followers",following_url:"https://api.github.com/users/example42/following{/other_user}",gists_url:"https://api.github.com/users/example42/gists{/gist_id}",starred_url:"https://api.github.com/users/example42/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/example42/subscriptions",organizations_url:"https://api.github.com/users/example42/orgs",repos_url:"https://api.github.com/users/example42/repos",events_url:"https://api.github.com/users/example42/events{/privacy}",received_events_url:"https://api.github.com/users/example42/received_events",type:"Organization",site_admin:!1,name:"Example42",company:null,blog:"http://www.example42.com",location:null,email:null,hireable:null,bio:"Example42 Puppet Works",twitter_username:null,public_repos:163,public_gists:0,followers:0,following:0,created_at:"2014-09-25T18:07:57Z",updated_at:"2015-10-07T22:32:20Z"},{login:"kbastani",id:2095770,node_id:"MDQ6VXNlcjIwOTU3NzA=",avatar_url:"https://avatars.githubusercontent.com/u/2095770?v=4",gravatar_id:"",url:"https://api.github.com/users/kbastani",html_url:"https://github.com/kbastani",followers_url:"https://api.github.com/users/kbastani/followers",following_url:"https://api.github.com/users/kbastani/following{/other_user}",gists_url:"https://api.github.com/users/kbastani/gists{/gist_id}",starred_url:"https://api.github.com/users/kbastani/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/kbastani/subscriptions",organizations_url:"https://api.github.com/users/kbastani/orgs",repos_url:"https://api.github.com/users/kbastani/repos",events_url:"https://api.github.com/users/kbastani/events{/privacy}",received_events_url:"https://api.github.com/users/kbastani/received_events",type:"User",site_admin:!1,name:"Kenny Bastani",company:null,blog:"http://www.kennybastani.com",location:"San Francisco, CA",email:null,hireable:!0,bio:"Apache Pinot. Highly scalable hello world examples based on production experiences.",twitter_username:null,public_repos:101,public_gists:33,followers:2185,following:130,created_at:"2012-08-04T19:53:55Z",updated_at:"2021-03-23T06:25:41Z"},{login:"example",id:57936,node_id:"MDQ6VXNlcjU3OTM2",avatar_url:"https://avatars.githubusercontent.com/u/57936?v=4",gravatar_id:"",url:"https://api.github.com/users/example",html_url:"https://github.com/example",followers_url:"https://api.github.com/users/example/followers",following_url:"https://api.github.com/users/example/following{/other_user}",gists_url:"https://api.github.com/users/example/gists{/gist_id}",starred_url:"https://api.github.com/users/example/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/example/subscriptions",organizations_url:"https://api.github.com/users/example/orgs",repos_url:"https://api.github.com/users/example/repos",events_url:"https://api.github.com/users/example/events{/privacy}",received_events_url:"https://api.github.com/users/example/received_events",type:"User",site_admin:!1,name:null,company:null,blog:"",location:null,email:null,hireable:null,bio:null,twitter_username:null,public_repos:1,public_gists:0,followers:19,following:0,created_at:"2009-02-25T19:01:55Z",updated_at:"2019-08-22T16:25:57Z"},{login:"raineydavid",id:23113728,node_id:"MDQ6VXNlcjIzMTEzNzI4",avatar_url:"https://avatars.githubusercontent.com/u/23113728?v=4",gravatar_id:"",url:"https://api.github.com/users/raineydavid",html_url:"https://github.com/raineydavid",followers_url:"https://api.github.com/users/raineydavid/followers",following_url:"https://api.github.com/users/raineydavid/following{/other_user}",gists_url:"https://api.github.com/users/raineydavid/gists{/gist_id}",starred_url:"https://api.github.com/users/raineydavid/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/raineydavid/subscriptions",organizations_url:"https://api.github.com/users/raineydavid/orgs",repos_url:"https://api.github.com/users/raineydavid/repos",events_url:"https://api.github.com/users/raineydavid/events{/privacy}",received_events_url:"https://api.github.com/users/raineydavid/received_events",type:"User",site_admin:!1,name:"Rainey",company:"@womencancode ",blog:"https://www.womencancode.com",location:"London",email:null,hireable:null,bio:"Learning through examples.  Founder @Womencancode @womenintech\r\nAlumni @kcl @QMUL ",twitter_username:null,public_repos:460,public_gists:30,followers:37,following:201,created_at:"2016-10-28T05:14:51Z",updated_at:"2021-04-10T14:38:49Z"},{login:"d0nsly",id:33090087,node_id:"MDQ6VXNlcjMzMDkwMDg3",avatar_url:"https://avatars.githubusercontent.com/u/33090087?v=4",gravatar_id:"",url:"https://api.github.com/users/d0nsly",html_url:"https://github.com/d0nsly",followers_url:"https://api.github.com/users/d0nsly/followers",following_url:"https://api.github.com/users/d0nsly/following{/other_user}",gists_url:"https://api.github.com/users/d0nsly/gists{/gist_id}",starred_url:"https://api.github.com/users/d0nsly/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/d0nsly/subscriptions",organizations_url:"https://api.github.com/users/d0nsly/orgs",repos_url:"https://api.github.com/users/d0nsly/repos",events_url:"https://api.github.com/users/d0nsly/events{/privacy}",received_events_url:"https://api.github.com/users/d0nsly/received_events",type:"User",site_admin:!1,name:"d0nsly",company:null,blog:"",location:null,email:null,hireable:null,bio:"Live by an example ",twitter_username:null,public_repos:0,public_gists:1,followers:117,following:102,created_at:"2017-10-25T11:13:15Z",updated_at:"2021-03-03T22:12:58Z"},{login:"infologs",id:17062486,node_id:"MDQ6VXNlcjE3MDYyNDg2",avatar_url:"https://avatars.githubusercontent.com/u/17062486?v=4",gravatar_id:"",url:"https://api.github.com/users/infologs",html_url:"https://github.com/infologs",followers_url:"https://api.github.com/users/infologs/followers",following_url:"https://api.github.com/users/infologs/following{/other_user}",gists_url:"https://api.github.com/users/infologs/gists{/gist_id}",starred_url:"https://api.github.com/users/infologs/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/infologs/subscriptions",organizations_url:"https://api.github.com/users/infologs/orgs",repos_url:"https://api.github.com/users/infologs/repos",events_url:"https://api.github.com/users/infologs/events{/privacy}",received_events_url:"https://api.github.com/users/infologs/received_events",type:"User",site_admin:!1,name:"Example Store",company:"Infologs",blog:"http://infologs.in/",location:"India, Gujarat, Surat",email:null,hireable:!0,bio:"This is Abhishek Bedre. A Mobile/Web Application Developer.  Created a one store to get all kind of programming examples.",twitter_username:null,public_repos:39,public_gists:0,followers:29,following:14,created_at:"2016-02-04T09:23:11Z",updated_at:"2020-04-12T11:38:51Z"},{login:"angularexample",id:13633558,node_id:"MDQ6VXNlcjEzNjMzNTU4",avatar_url:"https://avatars.githubusercontent.com/u/13633558?v=4",gravatar_id:"",url:"https://api.github.com/users/angularexample",html_url:"https://github.com/angularexample",followers_url:"https://api.github.com/users/angularexample/followers",following_url:"https://api.github.com/users/angularexample/following{/other_user}",gists_url:"https://api.github.com/users/angularexample/gists{/gist_id}",starred_url:"https://api.github.com/users/angularexample/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/angularexample/subscriptions",organizations_url:"https://api.github.com/users/angularexample/orgs",repos_url:"https://api.github.com/users/angularexample/repos",events_url:"https://api.github.com/users/angularexample/events{/privacy}",received_events_url:"https://api.github.com/users/angularexample/received_events",type:"User",site_admin:!1,name:"AngularExample",company:"JC Lango",blog:"https://www.linkedin.com/in/jclango/",location:"Tampa FL",email:null,hireable:!0,bio:"Angular 9 Example Apps. Angular Best Practices. Angular Architecture  for Large Scale apps. Angular 9. Angular 8. By JC Lango, Angular expert.",twitter_username:null,public_repos:8,public_gists:0,followers:12,following:0,created_at:"2015-08-04T00:38:49Z",updated_at:"2019-08-18T15:50:08Z"},{login:"chilkatsoft",id:16035810,node_id:"MDQ6VXNlcjE2MDM1ODEw",avatar_url:"https://avatars.githubusercontent.com/u/16035810?v=4",gravatar_id:"",url:"https://api.github.com/users/chilkatsoft",html_url:"https://github.com/chilkatsoft",followers_url:"https://api.github.com/users/chilkatsoft/followers",following_url:"https://api.github.com/users/chilkatsoft/following{/other_user}",gists_url:"https://api.github.com/users/chilkatsoft/gists{/gist_id}",starred_url:"https://api.github.com/users/chilkatsoft/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/chilkatsoft/subscriptions",organizations_url:"https://api.github.com/users/chilkatsoft/orgs",repos_url:"https://api.github.com/users/chilkatsoft/repos",events_url:"https://api.github.com/users/chilkatsoft/events{/privacy}",received_events_url:"https://api.github.com/users/chilkatsoft/received_events",type:"User",site_admin:!1,name:"Chilkat Software, Inc.",company:"Chilkat Software, Inc.",blog:"http://www.chilkatsoft.com/",location:null,email:null,hireable:null,bio:"The main repository of Chilkat examples is at example-code.com",twitter_username:null,public_repos:29,public_gists:0,followers:186,following:0,created_at:"2015-11-26T16:22:08Z",updated_at:"2020-12-21T16:56:19Z"},{login:"corneyflorex",id:1042266,node_id:"MDQ6VXNlcjEwNDIyNjY=",avatar_url:"https://avatars.githubusercontent.com/u/1042266?v=4",gravatar_id:"",url:"https://api.github.com/users/corneyflorex",html_url:"https://github.com/corneyflorex",followers_url:"https://api.github.com/users/corneyflorex/followers",following_url:"https://api.github.com/users/corneyflorex/following{/other_user}",gists_url:"https://api.github.com/users/corneyflorex/gists{/gist_id}",starred_url:"https://api.github.com/users/corneyflorex/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/corneyflorex/subscriptions",organizations_url:"https://api.github.com/users/corneyflorex/orgs",repos_url:"https://api.github.com/users/corneyflorex/repos",events_url:"https://api.github.com/users/corneyflorex/events{/privacy}",received_events_url:"https://api.github.com/users/corneyflorex/received_events",type:"User",site_admin:!1,name:null,company:null,blog:"",location:null,email:null,hireable:null,bio:null,twitter_username:null,public_repos:7,public_gists:0,followers:6,following:15,created_at:"2011-09-11T12:07:59Z",updated_at:"2015-04-21T04:14:54Z"},{login:"xamarinium",id:28443406,node_id:"MDQ6VXNlcjI4NDQzNDA2",avatar_url:"https://avatars.githubusercontent.com/u/28443406?v=4",gravatar_id:"",url:"https://api.github.com/users/xamarinium",html_url:"https://github.com/xamarinium",followers_url:"https://api.github.com/users/xamarinium/followers",following_url:"https://api.github.com/users/xamarinium/following{/other_user}",gists_url:"https://api.github.com/users/xamarinium/gists{/gist_id}",starred_url:"https://api.github.com/users/xamarinium/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/xamarinium/subscriptions",organizations_url:"https://api.github.com/users/xamarinium/orgs",repos_url:"https://api.github.com/users/xamarinium/repos",events_url:"https://api.github.com/users/xamarinium/events{/privacy}",received_events_url:"https://api.github.com/users/xamarinium/received_events",type:"User",site_admin:!1,name:"Xamarinium",company:null,blog:"",location:null,email:null,hireable:null,bio:"Xamarin.Forms examples for you",twitter_username:null,public_repos:13,public_gists:0,followers:69,following:0,created_at:"2017-05-05T13:07:09Z",updated_at:"2021-04-09T18:30:49Z"},{login:"SuJiKiNen",id:6788956,node_id:"MDQ6VXNlcjY3ODg5NTY=",avatar_url:"https://avatars.githubusercontent.com/u/6788956?v=4",gravatar_id:"",url:"https://api.github.com/users/SuJiKiNen",html_url:"https://github.com/SuJiKiNen",followers_url:"https://api.github.com/users/SuJiKiNen/followers",following_url:"https://api.github.com/users/SuJiKiNen/following{/other_user}",gists_url:"https://api.github.com/users/SuJiKiNen/gists{/gist_id}",starred_url:"https://api.github.com/users/SuJiKiNen/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/SuJiKiNen/subscriptions",organizations_url:"https://api.github.com/users/SuJiKiNen/orgs",repos_url:"https://api.github.com/users/SuJiKiNen/repos",events_url:"https://api.github.com/users/SuJiKiNen/events{/privacy}",received_events_url:"https://api.github.com/users/SuJiKiNen/received_events",type:"User",site_admin:!1,name:null,company:null,blog:"",location:null,email:null,hireable:null,bio:"Example-Driven Developer",twitter_username:null,public_repos:22,public_gists:8,followers:13,following:14,created_at:"2014-02-26T01:51:58Z",updated_at:"2021-04-18T08:29:59Z"},{login:"coderexample",id:10558155,node_id:"MDQ6VXNlcjEwNTU4MTU1",avatar_url:"https://avatars.githubusercontent.com/u/10558155?v=4",gravatar_id:"",url:"https://api.github.com/users/coderexample",html_url:"https://github.com/coderexample",followers_url:"https://api.github.com/users/coderexample/followers",following_url:"https://api.github.com/users/coderexample/following{/other_user}",gists_url:"https://api.github.com/users/coderexample/gists{/gist_id}",starred_url:"https://api.github.com/users/coderexample/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/coderexample/subscriptions",organizations_url:"https://api.github.com/users/coderexample/orgs",repos_url:"https://api.github.com/users/coderexample/repos",events_url:"https://api.github.com/users/coderexample/events{/privacy}",received_events_url:"https://api.github.com/users/coderexample/received_events",type:"User",site_admin:!1,name:"CoderExample",company:null,blog:"http://coderexample.com",location:"India",email:null,hireable:null,bio:null,twitter_username:null,public_repos:4,public_gists:0,followers:22,following:3,created_at:"2015-01-16T07:08:23Z",updated_at:"2015-12-13T15:20:32Z"},{login:"examplegit",id:6185947,node_id:"MDQ6VXNlcjYxODU5NDc=",avatar_url:"https://avatars.githubusercontent.com/u/6185947?v=4",gravatar_id:"",url:"https://api.github.com/users/examplegit",html_url:"https://github.com/examplegit",followers_url:"https://api.github.com/users/examplegit/followers",following_url:"https://api.github.com/users/examplegit/following{/other_user}",gists_url:"https://api.github.com/users/examplegit/gists{/gist_id}",starred_url:"https://api.github.com/users/examplegit/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/examplegit/subscriptions",organizations_url:"https://api.github.com/users/examplegit/orgs",repos_url:"https://api.github.com/users/examplegit/repos",events_url:"https://api.github.com/users/examplegit/events{/privacy}",received_events_url:"https://api.github.com/users/examplegit/received_events",type:"User",site_admin:!1,name:"Mandice Contributors",company:"Mandice",blog:"http://www.mandice.com/",location:null,email:null,hireable:null,bio:null,twitter_username:null,public_repos:4,public_gists:0,followers:14,following:0,created_at:"2013-12-14T16:45:59Z",updated_at:"2015-11-24T03:08:16Z"},{login:"jingyonghou",id:16893759,node_id:"MDQ6VXNlcjE2ODkzNzU5",avatar_url:"https://avatars.githubusercontent.com/u/16893759?v=4",gravatar_id:"",url:"https://api.github.com/users/jingyonghou",html_url:"https://github.com/jingyonghou",followers_url:"https://api.github.com/users/jingyonghou/followers",following_url:"https://api.github.com/users/jingyonghou/following{/other_user}",gists_url:"https://api.github.com/users/jingyonghou/gists{/gist_id}",starred_url:"https://api.github.com/users/jingyonghou/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/jingyonghou/subscriptions",organizations_url:"https://api.github.com/users/jingyonghou/orgs",repos_url:"https://api.github.com/users/jingyonghou/repos",events_url:"https://api.github.com/users/jingyonghou/events{/privacy}",received_events_url:"https://api.github.com/users/jingyonghou/received_events",type:"User",site_admin:!1,name:"xiaohou",company:null,blog:"",location:null,email:null,hireable:null,bio:"Keyword spotting, Query-by-Example, Speech Recognition and Neural Network",twitter_username:null,public_repos:43,public_gists:0,followers:37,following:48,created_at:"2016-01-26T06:44:30Z",updated_at:"2021-04-16T14:40:12Z"},{login:"ExampleOne",id:3748557,node_id:"MDQ6VXNlcjM3NDg1NTc=",avatar_url:"https://avatars.githubusercontent.com/u/3748557?v=4",gravatar_id:"",url:"https://api.github.com/users/ExampleOne",html_url:"https://github.com/ExampleOne",followers_url:"https://api.github.com/users/ExampleOne/followers",following_url:"https://api.github.com/users/ExampleOne/following{/other_user}",gists_url:"https://api.github.com/users/ExampleOne/gists{/gist_id}",starred_url:"https://api.github.com/users/ExampleOne/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ExampleOne/subscriptions",organizations_url:"https://api.github.com/users/ExampleOne/orgs",repos_url:"https://api.github.com/users/ExampleOne/repos",events_url:"https://api.github.com/users/ExampleOne/events{/privacy}",received_events_url:"https://api.github.com/users/ExampleOne/received_events",type:"User",site_admin:!1,name:"Quinten",company:null,blog:"",location:null,email:null,hireable:null,bio:null,twitter_username:null,public_repos:8,public_gists:0,followers:6,following:6,created_at:"2013-03-02T13:57:49Z",updated_at:"2021-04-08T14:56:22Z"},{login:"mploed",id:272137,node_id:"MDQ6VXNlcjI3MjEzNw==",avatar_url:"https://avatars.githubusercontent.com/u/272137?v=4",gravatar_id:"",url:"https://api.github.com/users/mploed",html_url:"https://github.com/mploed",followers_url:"https://api.github.com/users/mploed/followers",following_url:"https://api.github.com/users/mploed/following{/other_user}",gists_url:"https://api.github.com/users/mploed/gists{/gist_id}",starred_url:"https://api.github.com/users/mploed/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/mploed/subscriptions",organizations_url:"https://api.github.com/users/mploed/orgs",repos_url:"https://api.github.com/users/mploed/repos",events_url:"https://api.github.com/users/mploed/events{/privacy}",received_events_url:"https://api.github.com/users/mploed/received_events",type:"User",site_admin:!1,name:"Michael Pl\xf6d",company:"innoQ Deutschland GmbH",blog:"https://leanpub.com/ddd-by-example",location:"N\xfcrnberg, Germany",email:null,hireable:null,bio:'Fellow at INNOQ. Author of "Hands-on Domain-driven Design - by example" on Leanpub',twitter_username:null,public_repos:20,public_gists:2,followers:391,following:1,created_at:"2010-05-10T07:39:20Z",updated_at:"2021-03-15T06:37:05Z"},{login:"DevExpress-Examples",id:25218516,node_id:"MDEyOk9yZ2FuaXphdGlvbjI1MjE4NTE2",avatar_url:"https://avatars.githubusercontent.com/u/25218516?v=4",gravatar_id:"",url:"https://api.github.com/users/DevExpress-Examples",html_url:"https://github.com/DevExpress-Examples",followers_url:"https://api.github.com/users/DevExpress-Examples/followers",following_url:"https://api.github.com/users/DevExpress-Examples/following{/other_user}",gists_url:"https://api.github.com/users/DevExpress-Examples/gists{/gist_id}",starred_url:"https://api.github.com/users/DevExpress-Examples/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/DevExpress-Examples/subscriptions",organizations_url:"https://api.github.com/users/DevExpress-Examples/orgs",repos_url:"https://api.github.com/users/DevExpress-Examples/repos",events_url:"https://api.github.com/users/DevExpress-Examples/events{/privacy}",received_events_url:"https://api.github.com/users/DevExpress-Examples/received_events",type:"Organization",site_admin:!1,name:"DevExpress Examples",company:null,blog:"https://codecentral.devexpress.com",location:null,email:null,hireable:null,bio:"DevExpress Examples",twitter_username:null,public_repos:7298,public_gists:0,followers:0,following:0,created_at:"2017-01-19T07:16:15Z",updated_at:"2021-01-12T07:28:51Z"},{login:"vipulnsward",id:567626,node_id:"MDQ6VXNlcjU2NzYyNg==",avatar_url:"https://avatars.githubusercontent.com/u/567626?v=4",gravatar_id:"",url:"https://api.github.com/users/vipulnsward",html_url:"https://github.com/vipulnsward",followers_url:"https://api.github.com/users/vipulnsward/followers",following_url:"https://api.github.com/users/vipulnsward/following{/other_user}",gists_url:"https://api.github.com/users/vipulnsward/gists{/gist_id}",starred_url:"https://api.github.com/users/vipulnsward/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/vipulnsward/subscriptions",organizations_url:"https://api.github.com/users/vipulnsward/orgs",repos_url:"https://api.github.com/users/vipulnsward/repos",events_url:"https://api.github.com/users/vipulnsward/events{/privacy}",received_events_url:"https://api.github.com/users/vipulnsward/received_events",type:"User",site_admin:!1,name:"Vipul A M",company:"@saeloun",blog:"vipulnsward.com",location:"Pune",email:null,hireable:!0,bio:"Founder @saeloun.\r\n@rails Issues Team.\r\nAuthor: @reactjs by Example.",twitter_username:null,public_repos:274,public_gists:16,followers:341,following:2,created_at:"2011-01-16T17:04:45Z",updated_at:"2021-04-01T16:08:15Z"}],S=(s(23),function(e){var t=e.error,s=e.useFake;return Object(h.jsxs)("div",{className:"error-message",children:[Object(h.jsx)("h1",{children:"Oh Oh... Something Went Wrong"}),Object(h.jsx)("h3",{children:t.message}),Object(h.jsx)("button",{style:{marginTop:"15px"},className:"btn",onClick:s,children:"Use Saved JSON"})]})}),M=(s(24),function(e){var t=e.children;return Object(h.jsx)("div",{className:"landing-container",children:t})}),Z=function(e){return encodeURIComponent(e.trim())},z=function(e,t){return void 0!==t&&t||(t=""),"".concat("https://api.github.com/search/users","?q=").concat(e,"&per_page=20&page=1&sort=").concat(t)},U=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),s=t[0],i=t[1],a=function(e,t){var s=Object(r.useState)(!1),i=Object(l.a)(s,2),a=i[0],o=i[1],u=Object(r.useState)(!1),h=Object(l.a)(u,2),g=h[0],m=h[1],b=Object(r.useState)(0),d=Object(l.a)(b,2),_=d[0],v=d[1],f=Object(r.useState)(""),x=Object(l.a)(f,2),w=x[0],j=x[1];return Object(r.useEffect)((function(){e&&""!==e&&(o(!0),j(""),m([]),fetch(e).then((function(e){if(!e.ok)throw j({message:"failed to search users"}),new Error("Failed to fetch.");return e.json()})).then((function(e){return v(e.total_count),e})).then(function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.items.map((function(e){return fetch("https://api.github.com/users/".concat(e.login)).then((function(e){if(!e.ok){if(403===e.status)throw j({message:"Rate Limited"}),new Error("Probably rate limited :o");throw new Error("Failed to fetch user")}return e.json()})).then((function(e){m((function(t){return[].concat(Object(p.a)(t),[e])}))}))})));case 2:o(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),o(!1)})))}),t),[a,g,_,w]}(s,[s]),o=Object(l.a)(a,4),u=o[0],g=o[1],m=o[2],d=o[3],_=Object(r.useState)(""),v=Object(l.a)(_,2),f=v[0],x=v[1],w=Object(r.useState)(null),j=Object(l.a)(w,2),y=j[0],O=j[1],N=Object(r.useState)(!1),E=Object(l.a)(N,2),U=E[0],P=E[1],Q=function(e){var t=Z(e);x(t),i(z(t,!1))};return Object(r.useEffect)((function(){!g||u||d||(P(!1),O(g))}),[u]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(b,{didSearch:Boolean(y),setSearch:Q,reset:function(){P(!1),x(""),O(null)}}),Object(h.jsxs)(M,{children:[!y&&Object(h.jsx)(k,{setSearch:Q}),y&&Object(h.jsx)(T,{userInfo:y,resultCount:m,setSort:function(e){i(z(f,e))}}),d&&!U&&Object(h.jsx)(S,{error:d,useFake:function(){P(!0),O(D)}})]})]})};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.6270c4f2.chunk.js.map
(this["webpackJsonpeasya-website"]=this["webpackJsonpeasya-website"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.6533af26.png"},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/apple.e6a3bc3b.svg"},function(e,a,t){e.exports=t.p+"static/media/google.91188fe3.svg"},function(e,a,t){e.exports=t.p+"static/media/footer-logo.ee748501.png"},function(e,a,t){e.exports=t.p+"static/media/home-banner-balloon.2cfa3b95.png"},function(e,a,t){e.exports=t.p+"static/media/home-banner-mobile.d10ed310.png"},function(e,a,t){e.exports=t.p+"static/media/child-expert.fc1bb3de.svg"},function(e,a,t){e.exports=t.p+"static/media/backedby.a187ef63.png"},function(e,a,t){e.exports=t.p+"static/media/backedinstitutes.dd9ecbac.png"},function(e,a,t){e.exports=t.p+"static/media/HomeParentTestimonialBG.b53eae45.png"},function(e,a,t){e.exports=t.p+"static/media/HomeParentTestimonialImg.f5378bf8.png"},function(e,a,t){e.exports=t.p+"static/media/aboutintrochat.c3b73957.png"},function(e,a,t){e.exports=t.p+"static/media/aboutlearnachieve.907bfc8a.png"},function(e,a,t){e.exports=t.p+"static/media/ball.a978f17c.png"},function(e,a,t){e.exports=t.p+"static/media/AboutCuriousBG.ae9001c0.png"},function(e,a,t){e.exports=t.p+"static/media/beast.f3ba2500.svg"},function(e,a,t){e.exports=t.p+"static/media/featuredtutorsimg.ee7f2b39.png"},function(e,a,t){e.exports=t.p+"static/media/AboutGPSBG.1f8c62dc.png"},function(e,a,t){e.exports=t.p+"static/media/subjects-banner.6bbc31da.png"},,function(e,a,t){e.exports=t(48)},,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(15),l=t.n(r),s=t(1),o=t(6),c="/",u="/about",m="/subjects",d="/how-it-works",p="/terms",g="/privacy",E=t(9),b=t.n(E),h=function(){return i.a.createElement("h1",{className:"Header-Brand"},i.a.createElement(s.b,{to:c},i.a.createElement("img",{src:b.a,alt:"EasyA Logo"})))},f=function(e){var a=e.List;return i.a.createElement("nav",{className:"Header-Nav"},i.a.createElement("ul",null,a.map((function(e,a){return i.a.createElement("li",{key:a,className:e.Classes},i.a.createElement(s.b,{to:e.Path},e.Name))})),i.a.createElement("li",null,i.a.createElement("button",{className:"easya-btn-nav"},"Start for free")),i.a.createElement("li",{className:"download"},i.a.createElement("button",{className:"easya-btn-nav"},"Download App"))))},v=t(36),y=function(e){var a=e.List;return i.a.createElement("nav",{className:"MobileHeaderMenu"},i.a.createElement("ul",null,a&&a.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(s.b,{to:e.Path},e.Name))}))))},N=function(e){var a=e.List,t=Object(n.useState)(!1),r=Object(v.a)(t,2),l=r[0],s=r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Header-Ham"+(l?" Open":""),onClick:function(e){e.preventDefault(),s(!l)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),l&&i.a.createElement(y,{List:a}))},q=[{Name:"About",Path:c,Active:!1,Classes:null,Display:2},{Name:"Features",Path:c,Active:!1,Classes:null,Display:1},{Name:"Tutors",Path:c,Active:!1,Classes:null,Display:1},{Name:"Pricing",Path:c,Active:!1,Classes:null,Display:0},{Name:"Blog",Path:c,Active:!1,Classes:null,Display:1},{Name:"Login",Path:c,Active:!1,Classes:"Header-Nav-Login",Display:0}],x=function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"Header-Wrapper"},i.a.createElement(N,{List:q.filter((function(e){return e.Display>=1}))}),i.a.createElement(h,null),i.a.createElement(f,{List:q.filter((function(e){return e.Display<=1}))})))},M=t(18),k=t.n(M),w=t(19),L=t.n(w),A=t(20),C=t.n(A),I=function(){return i.a.createElement("section",{className:"Footer-About"},i.a.createElement("img",{src:C.a,className:"Footer-About-Desktop",alt:"Footer Logo"}),i.a.createElement("img",{src:b.a,className:"Footer-About-Mobile",alt:"Footer Logo"}),i.a.createElement("p",null,"The EasyA Math Tutoring App is built for students on their platform of choice - smartphones!"),i.a.createElement("div",{className:"Footer-About-Vendors"},i.a.createElement("img",{src:k.a,alt:"Apple"}),i.a.createElement("img",{src:L.a,alt:"Google"})),i.a.createElement("p",null,"@ copyrights easyA Inc."))},T=[{Title:"Product",Links:[{Label:"How it works",Link:d},{Label:"Pricing",Link:c},{Label:"Subjects",Link:m},{Label:"Teaching Methods",Link:c},{Label:"Will my child learn?",Link:c}]},{Title:"Company",Links:[{Label:"About us",Link:u},{Label:"Tutors",Link:c},{Label:"Testimonials",Link:c}]},{Title:"Resources",Links:[{Label:"Blogs",Link:c},{Label:"Privacy Policies",Link:g},{Label:"Terms & Conditions",Link:p}]}],B=function(){return i.a.createElement("section",{className:"Footer-Columns"},T.map((function(e,a){return i.a.createElement("ul",{key:a},i.a.createElement("li",null,i.a.createElement("h3",null,e.Title)),e.Links.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(s.b,{to:e.Link},e.Label))})))})))},H=function(){return i.a.createElement("footer",{className:"Footer"},i.a.createElement(I,null),i.a.createElement(B,null))},D=t(21),P=t.n(D),S=t(22),O=t.n(S),G=function(){return i.a.createElement("section",{className:"Home-Banner"},i.a.createElement("div",{className:"Home-Banner-Text"},i.a.createElement("h1",null,"Make",i.a.createElement("br",null)," math easy."),i.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur",i.a.createElement("br",null)," adipiscing elit, sed do eiusmod"),i.a.createElement("div",{className:"desktop-only"},i.a.createElement("p",null,"Download mobile App")),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:"#",className:"easya-btn-banner"},"See Plans"))),i.a.createElement("div",{className:"Home-Banner-Image"},i.a.createElement("img",{src:P.a,className:"desktop-only",alt:"Home Banner"}),i.a.createElement("img",{src:O.a,className:"mobile-only",alt:"Home Banner"})))},F=t(23),R=t.n(F),j=function(){return i.a.createElement("section",{className:"Home-Child247"},i.a.createElement("div",{className:"Home-Child247-Text"},i.a.createElement("h2",null,"Give your child 24/7 unlimited access to expert tutors for a flat fee"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:"#",className:"easya-btn-nav"},"How it works"))),i.a.createElement("div",{className:"Home-Child247-Image"},i.a.createElement("img",{src:R.a,alt:"Child Expert"})))},V=t(24),W=t.n(V),Q=t(25),X=t.n(Q),z=function(){return i.a.createElement("section",{className:"BackedByBanner"},i.a.createElement("div",{className:"BackedByBanner-Image"},i.a.createElement("img",{src:W.a,alt:"Backed By"})),i.a.createElement("div",{className:"BackedByBanner-Text"},i.a.createElement("h2",null,"EasyA is backed by the best institutes in education"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),i.a.createElement("img",{src:X.a,className:"BackedByBanner-OverlayImage Bottom",alt:"Backed by Institutes"}))},U=function(e){var a=e.Name,t=e.Icon,n=e.Colour;return i.a.createElement("li",{className:"easya-bgc-hover-"+n},i.a.createElement("span",{className:"SubjectIcon SubjectIcon"+t}),i.a.createElement("span",null,a))},Y=[{Name:"Early Maths",Icon:"Early",Colour:"tango"},{Name:"Algebra and functions",Icon:"Algebra",Colour:"seance"},{Name:"Geometry",Icon:"Geometry",Colour:"supernova"},{Name:"Sequences and series",Icon:"Series",Colour:"tango"},{Name:"Stats and Probability",Icon:"Stats",Colour:"seance"},{Name:"Trigonometry",Icon:"Trigonometry",Colour:"supernova"},{Name:"Graphs",Icon:"Graphs",Colour:"tango"},{Name:"Integration",Icon:"Integration",Colour:"seance"},{Name:"Differentiation",Icon:"Differentiation",Colour:"supernova"}],J=function(){return i.a.createElement("section",{className:"Home-Subjects"},i.a.createElement("h2",null,"EasyA's tutors are geniuses at Maths, from GCSE to A-level and beyond"),i.a.createElement("ul",{className:"Home-Subjects-List"},Y.map((function(e,a){return i.a.createElement(U,Object.assign({key:a},e))}))),i.a.createElement("p",null,"EasyA currently teaches all Maths up to A-level further Maths. That includes GCSE and anything earlier than that!"),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:"#",className:"easya-btn-nav"},"All Subjects")))},K=function(e){var a=e.Image,t=e.children,n=e.Position,r=e.className;return i.a.createElement("section",{className:"BackgroundBannerWithImage "+r},t,a&&i.a.createElement("img",{src:a,className:"BackgroundBannerWithImage-Img "+n,alt:"Background"}))},Z=t(26),$=t.n(Z),_=t(27),ee=t.n(_),ae=function(){return i.a.createElement("section",{className:"Home-ParentTestimonial"},i.a.createElement(K,{Image:$.a,Position:"Bottom Right",className:"Home-ParentTestimonial-Banner easya-bgc-seance"},i.a.createElement("div",{className:"Home-ParentTestimonial-Banner-Image"},i.a.createElement("img",{src:ee.a,alt:"Backed By"})),i.a.createElement("div",{className:"Home-ParentTestimonial-Banner-Text"},i.a.createElement("h2",null,"\u201cYup tutors take the time to make sure my daughter understands concepts behind problems, in a way that is supportive and encouraging.\u201d"),i.a.createElement("p",null,"- Maria, Mother"))))},te=["Is your student enrolled in 3rd \u2013 12th grade math?","Does your student have access to a smartphone or tablet?","Do you want your student to actually learn concepts for long-term math success?"],ne=function(){return i.a.createElement("section",{className:"Home-Plans"},i.a.createElement("h2",null,"Still wondering if EasyA is right for your family?"),i.a.createElement("ul",{className:"Home-Plans-List"},te.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("span",{className:"RoundIcon RoundIconTick"}),i.a.createElement("p",null,e))}))),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:"#",className:"easya-btn-nav"},"See Plans")))},ie=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement("main",{className:"Home"},i.a.createElement(G,null),i.a.createElement(j,null),i.a.createElement(z,null),i.a.createElement(J,null),i.a.createElement(ae,null),i.a.createElement(ne,null))},re=t(28),le=t.n(re),se=function(){return i.a.createElement(K,{className:"About-Intro"},i.a.createElement("div",{className:"About-Intro-Text"},i.a.createElement("h2",null,"We\u2019re designing a new way of tutoring the next generation"),i.a.createElement("p",null,"EasyA gives students the freedom to quickly and easily learn and solve Math problems using student-tutor matching technology. From young early math learners to veteran calculus solvers, EasyA makes it easy for any student to grow.")),i.a.createElement("div",{className:"About-Intro-Image"},i.a.createElement("img",{src:le.a,alt:"About Intro"})))},oe=t(29),ce=t.n(oe),ue=function(){return i.a.createElement(K,{className:"About-Learn"},i.a.createElement("div",{className:"About-Learn-Image"},i.a.createElement("img",{src:ce.a,alt:"About Learn"})),i.a.createElement("div",{className:"About-Learn-Text"},i.a.createElement("h2",null,"Making it easy to learn."),i.a.createElement("p",null,"Thousands of forward thinking parents choose EasyA to empower their children. Our platform streamlines their doubts, solves their problem, and allows them to learn and grow.")))},me=function(){return i.a.createElement("section",{className:"About-Brains"},i.a.createElement("h2",null,"Get to know the brains behind EasyA"),i.a.createElement("article",{className:"About-Brains-Wrap"},[{Title:"Phil, CEO & Co-founder",Edu:"Cambridge University",Desc:"Phil graduated from Cambridge University with First Class Honours in Law. He sailed right though his degree, never achieving less than a first in his end-of-year exams. Indeed, he topped his year in many of his papers, winning the Falcon Chambers Prize, One Chancery Lane Prize, Ziegler Prize, Ginsberg Prize, Peter de Somogyi Prize, Henry Arthur Thomas Exhibition, to name a few! And Cambridge, including College, Foundation, and Squire Scholarships.",Image:"https://i.imgur.com/EwN7oUK.png"},{Title:"Dom, COO & Co-founder",Edu:"Cambridge University",Desc:"A tutor at heart, Dom decided to leave a career in finance to focus on solving the one problem he faced as a tutor throughout university and high school: a hasslesome, inefficient and inaccessible tutoring system. Prior to co-founding EasyA, Dom worked at The Blackstone Group in New York. Prior to Blackstone, Dom worked at Goldman Sachs in its technology, media and telecom investment banking group. Dominic holds a B.S. in Finance.",Image:"https://i.imgur.com/R6xbv4K.png"}].map((function(e,a){return i.a.createElement("div",{className:"About-Brains-Profile",key:a},i.a.createElement("img",{src:e.Image,alt:e.Title}),i.a.createElement("h3",null,e.Title),i.a.createElement("p",{className:"lead"},e.Edu),i.a.createElement("p",null,e.Desc))}))))},de=t(30),pe=t.n(de),ge=function(){return i.a.createElement("section",{className:"About-Team"},i.a.createElement("h2",null,"Meet our Team"),i.a.createElement("div",{className:"About-Team-List"},[{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Edgar Morris",Role:"CTO",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Hannah Martinez",Role:"General Manager",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Duane Mendez",Role:"Marketing Head",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Luella Holmes",Role:"Insight Manager",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Mary Leonard",Role:"General Manager",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Delia Robertson",Role:"Marketing Head",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Shane Wood",Role:"Marketing Head",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]},{Image:"https://i.imgur.com/ATGQbXg.png",Name:"Adam Walton",Role:"Marketing Head",Desc:["Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge.","Oliver is currently studying towards a Master\u2019s Degree in Maths at Cambridge."]}].map((function(e,a){return i.a.createElement("div",{className:"About-Team-List-Item",key:a},i.a.createElement("img",{src:e.Image,alt:e.Name}),i.a.createElement("img",{src:pe.a,alt:"Ball",className:"Ball"}),i.a.createElement("p",{className:"Name"},e.Name),i.a.createElement("p",{className:"Role"},e.Role),e.Desc.map((function(e,a){return i.a.createElement("p",{key:a},e)})))}))))},Ee=t(31),be=t.n(Ee),he=t(32),fe=t.n(he),ve=function(){return i.a.createElement(K,{Image:be.a,Position:"Bottom Left",className:"About-Curious easya-bgc-tango"},i.a.createElement("img",{src:fe.a,className:"About-Curious-OverlayImage",alt:"Achievements"}),i.a.createElement("h2",null,"Curious about how we teach these topics?"),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:u,className:"easya-btn-banner"},"View Teaching methods")))},ye=t(33),Ne=t.n(ye),qe=function(){return i.a.createElement("section",{className:"About-FeatTutors"},i.a.createElement("img",{src:Ne.a,alt:"Featured Tutors"}),i.a.createElement("h2",null,"Featured Tutors"),i.a.createElement("div",{className:"About-FeatTutors-Slider easya-bgc-supernova"},"Slider will be done once the website is converted into",i.a.createElement("br",null),"static HTML & CSS."),i.a.createElement("span",{className:"RoundIcon RoundIconRight"}))},xe=t(34),Me=t.n(xe),ke=function(){return i.a.createElement("section",{className:"About-GPS Home-Child247"},i.a.createElement("div",{className:"Home-Child247-Text"},i.a.createElement("h2",null,"You think you\u2019re a great Problem solver?"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),i.a.createElement("div",{className:"action-button"},i.a.createElement(s.b,{to:"#",className:"easya-btn-nav"},"Become a Tutor"))),i.a.createElement("div",{className:"Home-Child247-Image"},i.a.createElement("img",{src:Me.a,alt:"Child Expert"})))},we=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement("main",{className:"About"},i.a.createElement(se,null),i.a.createElement(ue,null),i.a.createElement(me,null),i.a.createElement(ge,null),i.a.createElement(ve,null),i.a.createElement(qe,null),i.a.createElement(ke,null))},Le=t(35),Ae=t.n(Le),Ce=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"We\u2019ve got you covered."),i.a.createElement("div",{className:"Subjects-Banner"},i.a.createElement("img",{src:Ae.a,alt:"Banner"})),i.a.createElement("p",null,"EasyA provides students with the highest quality learning experience possible. All of our super tutors have scored top grades in Maths A-level, with many studying Maths, Engineering and Natural Science degrees at the graduate or undergraduate level. Head over to our"," ",i.a.createElement(s.b,{to:c},"team page")," to find out more about who our tutors are. And some more great news! Although we started out providing GCSE and iGCSE maths help, due to high demand, we have expanded to include support for 11+ maths too. See below for just some of the topics our super tutors cover."))},Ie=function(e){var a=e.Title,t=e.Done,n=e.Contents;return i.a.createElement("div",{className:"Subjects-Block"},i.a.createElement("div",{className:"Subjects-Block-Icon"},i.a.createElement("span",{className:"RoundIcon RoundIconMouse RoundIconMouse"+(t?"Green":"Blue")})),i.a.createElement("div",{className:"Subjects-Block-Content"},i.a.createElement("h3",null,a),i.a.createElement("ul",{className:"Subjects-Block-Content-List"},n.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("span",{className:"RoundIcon RoundIconTick"}),e)})))))},Te=[{Title:"Basic Maths",Done:!0,Contents:["Negative Numbers: Four Operations","Add and Subtract Fractions and Mixed Numbers","Multiplication and Division of Fractions","Negative Numbers: Four Operations","Add and Subtract Fractions and Mixed Numbers","Multiplication and Division of Fractions"]},{Title:"Numbers",Done:!1,Contents:["Estimation and Significant Figures","Basic Index Laws","Fractional and Negative Index Laws","Standard Form Calculation","Surds: The Basics - Simplifying, Multiplying, Dividing","Surds: Expanding Brackets","Surds: Rationalising the Denominator"]}],Be=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement("main",{className:"Home Subjects"},i.a.createElement(Ce,null),i.a.createElement("div",{className:"Subjects-Blocks"},Te.map((function(e,a){return i.a.createElement(Ie,Object.assign({},e,{key:a}))}))),i.a.createElement(ae,null),i.a.createElement("div",{className:"Subjects-Blocks"},Te.map((function(e,a){return i.a.createElement(Ie,Object.assign({},e,{key:a}))}))),i.a.createElement(ve,null))},He=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement("main",{className:"HowItWorks"})},De=function(e){var a=e.children,t=e.Heading;return i.a.createElement("section",{className:"InfoPage"},i.a.createElement("h1",null,t),i.a.createElement("article",null,a))},Pe=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement(De,{Heading:"Terms"},i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("ul",null,i.a.createElement("li",null,"List Item 1"),i.a.createElement("li",null,"List Item 2"),i.a.createElement("li",null,"List Item 3")),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."))},Se=function(){return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),i.a.createElement(De,{Heading:"Privacy"},i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("ul",null,i.a.createElement("li",null,"List Item 1"),i.a.createElement("li",null,"List Item 2"),i.a.createElement("li",null,"List Item 3")),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h3",null,"Heading 3"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."),i.a.createElement("h2",null,"Heading 2"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quae perferendis magni laudantium provident consequuntur voluptates! Perspiciatis eligendi quaerat eum, aliquam voluptatibus, distinctio ipsum sequi officiis fuga cupiditate veritatis."),i.a.createElement("p",null,"Maxime consectetur, mollitia error eius non quo nemo nulla explicabo voluptatibus! Excepturi sapiente obcaecati impedit facere molestias quam nam nisi itaque magni tempore reiciendis sed assumenda, recusandae et repellat qui."))},Oe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(x,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:c},i.a.createElement(ie,null)),i.a.createElement(o.a,{path:u},i.a.createElement(we,null)),i.a.createElement(o.a,{path:m},i.a.createElement(Be,null)),i.a.createElement(o.a,{path:d},i.a.createElement(He,null)),i.a.createElement(o.a,{path:p},i.a.createElement(Pe,null)),i.a.createElement(o.a,{path:g},i.a.createElement(Se,null))),i.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,null,i.a.createElement(Oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.2f5d855e.chunk.js.map
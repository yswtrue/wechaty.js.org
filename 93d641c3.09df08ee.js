(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),s=a(7),o=(a(0),a(190)),c={title:"Message"},r={unversionedId:"api/message",id:"api/message",isDocsHomePage:!1,title:"Message",description:"All wechat messages will be encapsulated as a Message.",source:"@site/docs/api/message.md",slug:"/api/message",permalink:"/docs/api/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/message.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1612367599,sidebar:"docs",previous:{title:"Wechaty",permalink:"/docs/api/wechaty"},next:{title:"Contact",permalink:"/docs/api/contact"}},i=[{value:"Message",id:"message",children:[{value:"message.from() \u21d2 <code>Contact | null</code>",id:"messagefrom-\u21d2-contact--null",children:[]},{value:"message.to() \u21d2 <code>Contact</code> | <code>null</code>",id:"messageto-\u21d2-contact--null",children:[]},{value:"message.room() \u21d2 <code>Room</code> | <code>null</code>",id:"messageroom-\u21d2-room--null",children:[]},{value:"<del>message.content()</del>",id:"messagecontent",children:[]},{value:"message.text() \u21d2 <code>string</code>",id:"messagetext-\u21d2-string",children:[]},{value:"message.toRecalled() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagetorecalled-\u21d2-promise-message--null",children:[]},{value:"message.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void",children:[]},{value:"message.type() \u21d2 <code>MessageType</code>",id:"messagetype-\u21d2-messagetype",children:[]},{value:"message.self() \u21d2 <code>boolean</code>",id:"messageself-\u21d2-boolean",children:[]},{value:"message.mention() \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"messagemention-\u21d2-promise-contact-",children:[]},{value:"message.mentionSelf() \u21d2 <code>Promise &lt;boolean&gt;</code>",id:"messagementionself-\u21d2-promise-boolean",children:[]},{value:"message.forward(to) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messageforwardto-\u21d2-promise-void",children:[]},{value:"message.date() \u21d2 <code>Date</code>",id:"messagedate-\u21d2-date",children:[]},{value:"message.age() \u21d2 <code>number</code>",id:"messageage-\u21d2-number",children:[]},{value:"<del>message.file()</del>",id:"messagefile",children:[]},{value:"message.toFileBox() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"messagetofilebox-\u21d2-promise-filebox",children:[]},{value:"message.toContact() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"messagetocontact-\u21d2-promise-contact",children:[]},{value:"message.toUrlLink() \u21d2 <code>Promise &lt;UrlLink&gt;</code>",id:"messagetourllink-\u21d2-promise-urllink",children:[]},{value:"Message.find() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagefind-\u21d2-promise-message--null",children:[]},{value:"Message.findAll() \u21d2 <code>Promise &lt;Message []&gt;</code>",id:"messagefindall-\u21d2-promise-message-",children:[]}]}],b={toc:i};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All wechat messages will be encapsulated as a Message."),Object(o.b)("h2",{id:"message"},"Message"),Object(o.b)("p",null,"All wechat messages will be encapsulated as a Message."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/Ding-Dong-Bot")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message"},"Message"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"instance"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+from"},".from","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+to"},".to","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+room"},".room","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Room")," ","|"," ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+content"},Object(o.b)("del",{parentName:"a"},".content","(",")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+text"},".text","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"string")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+say"},".say","(","textOrContactOrFile",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+type"},".type","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"MessageType")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+self"},".self","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"boolean")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+mention"},".mention","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Contact []>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+mentionSelf"},".mentionSelf","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <boolean>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+forward"},".forward","(","to",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+date"},".date","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Date")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+age"},".age","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"number")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+file"},Object(o.b)("del",{parentName:"a"},".file","(",")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+toFileBox"},".toFileBox","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <FileBox>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+toContact"},".toContact","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Contact>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message+toUrlLink"},".toUrlLink","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <UrlLink>")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"static"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message.find"},".find","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Message>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/message#Message.findAll"},".findAll","(",")")," \u21d2 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise <Message []>"))))))),Object(o.b)("h3",{id:"messagefrom-\u21d2-contact--null"},"message.from","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Contact | null")),Object(o.b)("p",null,"Get the sender from a message."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messageto-\u21d2-contact--null"},"message.to","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Contact")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("p",null,"Get the destination of the message Message.to","(",")"," will return null if a message is in a room, use Message.room","(",")"," to get the room."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = message.from()\n  const text = message.text()\n  const toContact = message.to()\n  if (toContact) {\n    const name = toContact.name()\n    console.log(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messageroom-\u21d2-room--null"},"message.room","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Room")," ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"null")),Object(o.b)("p",null,"Get the room from the message. If the message is not in a room, then will return ",Object(o.b)("inlineCode",{parentName:"p"},"null")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messagecontent"},Object(o.b)("del",{parentName:"h3"},"message.content","(",")")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Deprecated"))),Object(o.b)("p",null,"use ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message+text"},"text")," instead"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagetext-\u21d2-string"},"message.text","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"Get the text content of the message"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messagetorecalled-\u21d2-promise-message--null"},"message.toRecalled","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),Object(o.b)("p",null,"Get the text content of the recalled message"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  if (m.type() === bot.Message.Type.Recalled) {\n    const recalledMessage = await m.toRecalled()\n    console.log(`Message: ${recalledMessage} has been recalled.`)\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void"},"message.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(o.b)("p",null,"Reply a Text, Contact Card, Media File or Link message to the sender."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"See"),": ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/ding-dong-bot")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Param"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"textOrContactOrFileOrUrlLinkOrMiniProgram"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"Contact")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"MiniProgram")),Object(o.b)("td",{parentName:"tr",align:"left"},"send text, Contact, UrlLink, MiniProgram or file to bot.   You can use ",Object(o.b)("a",{parentName:"td",href:"https://www.npmjs.com/package/file-box"},"FileBox")," to send file")))),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nbot\n.on('message', async m => {\n\n// 1. send Image\n\n  if (/^ding$/i.test(m.text())) {\n    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n    await msg.say(fileBox)\n  }\n\n// 2. send Text\n\n  if (/^dong$/i.test(m.text())) {\n    await msg.say('dingdingding')\n  }\n\n// 3. send Contact\n\n  if (/^lijiarui$/i.test(m.text())) {\n    const contactCard = await bot.Contact.find({name: 'lijiarui'})\n    if (!contactCard) {\n      console.log('not found')\n      return\n    }\n    await msg.say(contactCard)\n  }\n\n// 4. send UrlLink\n\n  if (/^link$/i.test(m.text())) {\n    const urlLink = new UrlLink({\n      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',\n      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',\n      title: 'Wechaty',\n      url: 'https://github.com/wechaty/wechaty',\n    });\n\n    await msg.say(urlLink);\n  }\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\n  if (/^mini-program$/i.test(m.text())) {\n    const miniProgram = new MiniProgram ({\n      appid              : 'gh_0aa444a25adc',\n      title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n      pagePath           : 'routes/explore.html',\n      description        : '\u8eab\u4efd\u7ba1\u5bb6',\n      thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n      thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n    });\n\n    await msg.say(miniProgram);\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messagetype-\u21d2-messagetype"},"message.type","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"MessageType")),Object(o.b)("p",null,"Get the type from the message."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: MessageType is Enum here. ","<","/br",">"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"MessageType.Unknown"),Object(o.b)("li",{parentName:"ul"},"MessageType.Attachment"),Object(o.b)("li",{parentName:"ul"},"MessageType.Audio"),Object(o.b)("li",{parentName:"ul"},"MessageType.Contact"),Object(o.b)("li",{parentName:"ul"},"MessageType.Emoticon"),Object(o.b)("li",{parentName:"ul"},"MessageType.Image"),Object(o.b)("li",{parentName:"ul"},"MessageType.Text"),Object(o.b)("li",{parentName:"ul"},"MessageType.Video"),Object(o.b)("li",{parentName:"ul"},"MessageType.Url"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nif (message.type() === bot.Message.Type.Text) {\n  console.log('This is a text message')\n}\n")),Object(o.b)("h3",{id:"messageself-\u21d2-boolean"},"message.self","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"boolean")),Object(o.b)("p",null,"Check if a message is sent by self."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," - - Return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for send from self, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," for send from others. ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"if (message.self()) {\n console.log('this message is sent by myself!')\n}\n")),Object(o.b)("h3",{id:"messagemention-\u21d2-promise-contact-"},"message.mention","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),Object(o.b)("p",null,"Get message mentioned contactList."),Object(o.b)("p",null,"Message event table as follows"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"}),Object(o.b)("th",{parentName:"tr",align:"center"},"Web"),Object(o.b)("th",{parentName:"tr",align:"center"},"Mac PC Client"),Object(o.b)("th",{parentName:"tr",align:"center"},"iOS Mobile"),Object(o.b)("th",{parentName:"tr",align:"center"},"android Mobile"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"[","You were mentioned","]"," tip ","(","[","\u6709\u4eba@\u6211","]","\u7684\u63d0\u793a",")"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by copy & paste in mobile"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by programming"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Identify two contacts with the same roomAlias by ","[","You were  mentioned","]"," tip"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2718"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u221a")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"Promise <Contact []>")," - - Return message mentioned contactList ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const contactList = await message.mention()\nconsole.log(contactList)\n")),Object(o.b)("h3",{id:"messagementionself-\u21d2-promise-boolean"},"message.mentionSelf","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <boolean>")),Object(o.b)("p",null,"Check if a message is mention self."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(o.b)("strong",{parentName:"p"},"Returns"),": ",Object(o.b)("inlineCode",{parentName:"p"},"Promise <boolean>")," - - Return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for mention me. ",Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"if (await message.mentionSelf()) {\n console.log('this message were mentioned me! [You were mentioned] tip ([\u6709\u4eba@\u6211]\u7684\u63d0\u793a)')\n}\n")),Object(o.b)("h3",{id:"messageforwardto-\u21d2-promise-void"},"message.forward","(","to",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(o.b)("p",null,"Forward the received message. This action doesn't trigger the on-message events."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Param"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"to"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"Sayable")," ","|"," ",Object(o.b)("inlineCode",{parentName:"td"},"Array")),Object(o.b)("td",{parentName:"tr",align:"left"},"Room or Contact The recipient of the message, the room, or the contact")))),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const room = await bot.Room.find({topic: 'wechaty'})\n  if (room) {\n    await m.forward(room)\n    console.log('forward this message to wechaty room!')\n  }\n})\n.start()\n")),Object(o.b)("h3",{id:"messagedate-\u21d2-date"},"message.date","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Date")),Object(o.b)("p",null,"Message sent date"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messageage-\u21d2-number"},"message.age","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"number")),Object(o.b)("p",null,"Returns the message age in seconds."),Object(o.b)("p",null,"For example, the message is sent at time ",Object(o.b)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",Object(o.b)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",Object(o.b)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagefile"},Object(o.b)("del",{parentName:"h3"},"message.file","(",")")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Deprecated"))),Object(o.b)("p",null,"use ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message+toFileBox"},"toFileBox")," instead"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagetofilebox-\u21d2-promise-filebox"},"message.toFileBox","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),Object(o.b)("p",null,"Extract the Media File from the Message, and put it into the FileBox."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagetocontact-\u21d2-promise-contact"},"message.toContact","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Contact>")),Object(o.b)("p",null,"Get Share Card of the Message Extract the Contact Card from the Message, and encapsulate it into Contact class"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagetourllink-\u21d2-promise-urllink"},"message.toUrlLink","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <UrlLink>")),Object(o.b)("p",null,"Get Url Link of the Message Extract the Url Link from the Message, and encapsulate it into UrlLink class"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagefind-\u21d2-promise-message--null"},"Message.find","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),Object(o.b)("p",null,"Find message in cache"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))),Object(o.b)("h3",{id:"messagefindall-\u21d2-promise-message-"},"Message.findAll","(",")"," \u21d2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Promise <Message []>")),Object(o.b)("p",null,"Find messages in cache"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(o.b)("a",{parentName:"p",href:"/docs/api/message#Message"},Object(o.b)("inlineCode",{parentName:"a"},"Message"))))}l.isMDXComponent=!0},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),s=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var b=s.a.createContext({}),l=function(e){var t=s.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=l(e.components);return s.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?s.a.createElement(g,r(r({ref:t},b),{},{components:a})):s.a.createElement(g,r({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var b=2;b<o;b++)c[b]=a[b];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
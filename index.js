const _0x424e44=_0x1467;(function(_0x11f397,_0x247584){const _0x4f96e9=_0x1467,_0x6d33db=_0x11f397();while(!![]){try{const _0x3362d4=-parseInt(_0x4f96e9(0x250))/0x1*(parseInt(_0x4f96e9(0x261))/0x2)+-parseInt(_0x4f96e9(0x264))/0x3+parseInt(_0x4f96e9(0x29a))/0x4*(parseInt(_0x4f96e9(0x1d1))/0x5)+-parseInt(_0x4f96e9(0x1b0))/0x6*(-parseInt(_0x4f96e9(0x1c8))/0x7)+-parseInt(_0x4f96e9(0x241))/0x8+parseInt(_0x4f96e9(0x1fe))/0x9+parseInt(_0x4f96e9(0x20b))/0xa*(parseInt(_0x4f96e9(0x278))/0xb);if(_0x3362d4===_0x247584)break;else _0x6d33db['push'](_0x6d33db['shift']());}catch(_0x5e2205){_0x6d33db['push'](_0x6d33db['shift']());}}}(_0x217a,0x7aed1),require(_0x424e44(0x225)));const {default:TurboConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x424e44(0x283)),{state,saveState}=useSingleFileAuthState('./'+sessionName+'.json'),pino=require(_0x424e44(0x1c6)),fs=require('fs'),chalk=require(_0x424e44(0x1ad)),FileType=require('file-type'),path=require(_0x424e44(0x27e)),CFonts=require(_0x424e44(0x1ed)),{exec,spawn,execSync}=require(_0x424e44(0x25b)),moment=require('moment-timezone'),PhoneNumber=require(_0x424e44(0x1fb)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x424e44(0x201)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x424e44(0x244)),figlet=require(_0x424e44(0x1b8)),{color}=require(_0x424e44(0x21e)),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x424e44(0x234),'stream':_0x424e44(0x1d6)})});function _0x1467(_0x1d3d8a,_0x482d22){const _0x217a97=_0x217a();return _0x1467=function(_0x14671a,_0x2b0eb3){_0x14671a=_0x14671a-0x1a8;let _0x6b52e3=_0x217a97[_0x14671a];return _0x6b52e3;},_0x1467(_0x1d3d8a,_0x482d22);}async function startTurbo(){const _0x4f67d7=_0x424e44;console[_0x4f67d7(0x281)](color(figlet[_0x4f67d7(0x1f7)]('Toxic-Alexa_V3',{'font':_0x4f67d7(0x1d0),'horizontalLayout':_0x4f67d7(0x291),'vertivalLayout':'default','width':0x50,'whitespaceBreak':!![]}),_0x4f67d7(0x277))),console['log'](color('\x0a✨\x20YT\x20CHANNEL:\x20TurboMods\x20',_0x4f67d7(0x1e5))),console['log'](color(_0x4f67d7(0x25d),_0x4f67d7(0x1e5))),console['log'](color(_0x4f67d7(0x26c),'silver')),console[_0x4f67d7(0x281)](color(_0x4f67d7(0x227),'mediumseagreen')),console[_0x4f67d7(0x281)](color('🌹',_0x4f67d7(0x1cf)),color('I\x20Wrote\x20This\x20Script\x20By\x20Myself!',_0x4f67d7(0x277))),console['log'](color('💖',_0x4f67d7(0x1cf)),color(_0x4f67d7(0x28b),'aqua')),console['log'](color('👀',_0x4f67d7(0x1cf)),color(_0x4f67d7(0x253),'aqua')),console['log'](color('🌊',_0x4f67d7(0x1dd)),color(_0x4f67d7(0x248))),console['log'](color('🔥',_0x4f67d7(0x1dd)),color(_0x4f67d7(0x27c),'pink')),console['log'](color('😘',_0x4f67d7(0x1dd)),color(_0x4f67d7(0x1b9),_0x4f67d7(0x286))),console[_0x4f67d7(0x281)](color('🙂',_0x4f67d7(0x1cf)),color(_0x4f67d7(0x1df),_0x4f67d7(0x24d)));let {version:_0x28e391,isLatest:_0x404772}=await fetchLatestBaileysVersion();const _0x31b15f=TurboConnect({'logger':pino({'level':_0x4f67d7(0x234)}),'printQRInTerminal':!![],'browser':[_0x4f67d7(0x1b7),_0x4f67d7(0x215),_0x4f67d7(0x216)],'auth':state,'version':_0x28e391});store[_0x4f67d7(0x252)](_0x31b15f['ev']),_0x31b15f['ws']['on']('CB:call',async _0x3b1de7=>{const _0x1f09ac=_0x4f67d7,_0x26684e=_0x3b1de7[_0x1f09ac(0x22c)][0x0][_0x1f09ac(0x237)][_0x1f09ac(0x1ab)];if(_0x3b1de7['content'][0x0][_0x1f09ac(0x1ae)]==_0x1f09ac(0x203)){let _0x4bca35=await _0x31b15f[_0x1f09ac(0x1bd)](_0x26684e,global[_0x1f09ac(0x276)]);_0x31b15f[_0x1f09ac(0x28f)](_0x26684e,{'text':_0x1f09ac(0x29e)},{'quoted':_0x4bca35}),await sleep(0x1f40),await _0x31b15f[_0x1f09ac(0x1ac)](_0x26684e,_0x1f09ac(0x221));}}),_0x31b15f['ev']['on'](_0x4f67d7(0x1e6),async _0x41ce0f=>{const _0x49cb9d=_0x4f67d7;try{mek=_0x41ce0f[_0x49cb9d(0x279)][0x0];if(!mek['message'])return;mek['message']=Object['keys'](mek[_0x49cb9d(0x23e)])[0x0]===_0x49cb9d(0x22d)?mek[_0x49cb9d(0x23e)]['ephemeralMessage'][_0x49cb9d(0x23e)]:mek[_0x49cb9d(0x23e)];if(mek[_0x49cb9d(0x1cd)]&&mek[_0x49cb9d(0x1cd)][_0x49cb9d(0x20f)]===_0x49cb9d(0x1c1))return;if(!_0x31b15f[_0x49cb9d(0x1fa)]&&!mek[_0x49cb9d(0x1cd)][_0x49cb9d(0x26a)]&&_0x41ce0f[_0x49cb9d(0x220)]===_0x49cb9d(0x28d))return;if(mek[_0x49cb9d(0x1cd)]['id'][_0x49cb9d(0x28c)](_0x49cb9d(0x236))&&mek[_0x49cb9d(0x1cd)]['id'][_0x49cb9d(0x1e2)]===0x10)return;m=smsg(_0x31b15f,mek,store),require('./Turbo')(_0x31b15f,m,_0x41ce0f,store);}catch(_0x10a8c8){console[_0x49cb9d(0x281)](_0x10a8c8);}}),_0x31b15f['ev']['on'](_0x4f67d7(0x202),async _0x31dd8b=>{const _0x5062c0=_0x4f67d7;try{ppgc=await _0x31b15f[_0x5062c0(0x27f)](_0x31dd8b[0x0]['id'],_0x5062c0(0x219));}catch{ppgc='http://tiny.cc/mylogo';}let _0x35f3c7={'url':ppgc};if(_0x31dd8b[0x0]['announce']==!![])_0x31b15f[_0x5062c0(0x218)](_0x31dd8b[0x0]['id'],_0x5062c0(0x1be),''+botname,_0x35f3c7,[]);else{if(_0x31dd8b[0x0][_0x5062c0(0x1d4)]==![])_0x31b15f['send5ButImg'](_0x31dd8b[0x0]['id'],'「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!',''+botname,_0x35f3c7,[]);else{if(_0x31dd8b[0x0][_0x5062c0(0x275)]==!![])_0x31b15f['send5ButImg'](_0x31dd8b[0x0]['id'],_0x5062c0(0x1bf),''+botname,_0x35f3c7,[]);else _0x31dd8b[0x0]['restrict']==![]?_0x31b15f[_0x5062c0(0x218)](_0x31dd8b[0x0]['id'],_0x5062c0(0x1f6),''+botname,_0x35f3c7,[]):_0x31b15f[_0x5062c0(0x218)](_0x31dd8b[0x0]['id'],_0x5062c0(0x24a)+_0x31dd8b[0x0]['subject']+'*',''+botname,_0x35f3c7,[]);}}});function _0xcb0fe0(_0x549869){const _0x297e1d=_0x4f67d7;return _0x549869[Math[_0x297e1d(0x1ea)](_0x549869[_0x297e1d(0x1e2)]*Math[_0x297e1d(0x22e)]())];}let _0x19affe=[doc1,doc2,doc3,doc4,doc5,doc6],_0x2f6578=_0xcb0fe0(_0x19affe);return _0x31b15f['ev']['on'](_0x4f67d7(0x243),async _0x34f9c2=>{const _0x139a62=_0x4f67d7;console[_0x139a62(0x281)](_0x34f9c2);try{let _0x1ca5e6=await _0x31b15f[_0x139a62(0x24c)](_0x34f9c2['id']),_0x266b8a=_0x34f9c2[_0x139a62(0x25c)];for(let _0xbf7935 of _0x266b8a){try{ppuser=await _0x31b15f[_0x139a62(0x27f)](_0xbf7935,'image');}catch{ppuser=_0x139a62(0x29b);}try{ppgroup=await _0x31b15f['profilePictureUrl'](_0x34f9c2['id'],'image');}catch{ppgroup=_0x139a62(0x29b);}if(_0x34f9c2['action']==_0x139a62(0x2a0)){const _0x404c3d=await getBuffer(ppuser);let _0x2a1004=_0xbf7935;const _0x34ebec=moment['tz'](_0x139a62(0x205))[_0x139a62(0x23a)]('HH:mm:ss'),_0x356ced=moment['tz']('Asia/Kolkata')[_0x139a62(0x23a)](_0x139a62(0x296)),_0xcc07de=_0x1ca5e6[_0x139a62(0x25c)][_0x139a62(0x1e2)];let _0x47336a={'key':{'fromMe':![],'participant':_0x139a62(0x23c),'remoteJid':_0x139a62(0x229)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x404c3d,'surface':0xc8,'message':''+_0x1ca5e6[_0x139a62(0x209)],'orderTitle':_0x139a62(0x211),'sellerJid':_0x139a62(0x23c)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};turbobody=_0x139a62(0x214)+_0x2a1004[_0x139a62(0x271)]('@')[0x0]+_0x139a62(0x204)+_0x1ca5e6['subject']+_0x139a62(0x24b)+_0xcc07de+_0x139a62(0x247)+_0x34ebec+'\x20'+_0x356ced+'\x0a\x20\x20\x20└───────────────┈\x20⳹';let _0x5da38a=[{'buttonId':_0x139a62(0x1e3),'buttonText':{'displayText':'Welcome\x20🌹'},'type':0x1}],_0x44da2c={'document':fs[_0x139a62(0x1af)](_0x139a62(0x222)),'mimetype':_0x2f6578,'jpegThumbnail':_0x404c3d,'mentions':[_0xbf7935],'fileName':''+_0x1ca5e6[_0x139a62(0x209)],'fileLength':0x5af3107a3fff,'caption':turbobody,'footer':_0x139a62(0x21d),'buttons':_0x5da38a,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x139a62(0x21d),'body':_0x139a62(0x24f),'mediaType':0x2,'thumbnail':_0x404c3d,'sourceUrl':_0x139a62(0x1ca),'mediaUrl':_0x139a62(0x1ca)}}};_0x31b15f['sendMessage'](_0x34f9c2['id'],_0x44da2c,{'quoted':_0x47336a});}else{if(_0x34f9c2[_0x139a62(0x298)]=='remove'){const _0x421360=await getBuffer(ppuser),_0x43e199=moment['tz'](_0x139a62(0x205))[_0x139a62(0x23a)](_0x139a62(0x233)),_0x1dc8ab=moment['tz']('Asia/Kolkata')['format'](_0x139a62(0x296));let _0x728096=_0xbf7935;const _0x33acde=_0x1ca5e6['participants'][_0x139a62(0x1e2)];let _0x5bb42d={'key':{'fromMe':![],'participant':_0x139a62(0x23c),'remoteJid':_0x139a62(0x229)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x421360,'surface':0xc8,'message':''+_0x1ca5e6[_0x139a62(0x209)],'orderTitle':_0x139a62(0x211),'sellerJid':_0x139a62(0x23c)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};turbobody=_0x139a62(0x1e7)+_0x728096[_0x139a62(0x271)]('@')[0x0]+_0x139a62(0x1c7)+_0x1ca5e6[_0x139a62(0x209)]+_0x139a62(0x24b)+_0x33acde+_0x139a62(0x254)+_0x43e199+'\x20'+_0x1dc8ab+_0x139a62(0x238);let _0x13ec3f=[{'buttonId':_0x139a62(0x246),'buttonText':{'displayText':_0x139a62(0x272)},'type':0x1}],_0x1a7fe7={'document':fs[_0x139a62(0x1af)](_0x139a62(0x222)),'mimetype':_0x2f6578,'jpegThumbnail':_0x421360,'mentions':[_0xbf7935],'fileName':''+_0x1ca5e6[_0x139a62(0x209)],'fileLength':0x5af3107a3fff,'caption':turbobody,'footer':''+botname,'buttons':_0x13ec3f,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+ownername,'body':_0x139a62(0x1ba),'mediaType':0x2,'thumbnail':_0x421360,'sourceUrl':_0x139a62(0x1ca),'mediaUrl':'http://www.generalwebsitex.ml'}}};_0x31b15f[_0x139a62(0x28f)](_0x34f9c2['id'],_0x1a7fe7,{'quoted':_0x5bb42d});}}}}catch(_0xb4499f){console[_0x139a62(0x281)](_0xb4499f);}}),_0x31b15f[_0x4f67d7(0x245)]=_0x3249ee=>{const _0x48fa4f=_0x4f67d7;if(!_0x3249ee)return _0x3249ee;if(/:\d+@/gi[_0x48fa4f(0x242)](_0x3249ee)){let _0x3ba2a3=jidDecode(_0x3249ee)||{};return _0x3ba2a3[_0x48fa4f(0x1c4)]&&_0x3ba2a3[_0x48fa4f(0x20a)]&&_0x3ba2a3[_0x48fa4f(0x1c4)]+'@'+_0x3ba2a3[_0x48fa4f(0x20a)]||_0x3249ee;}else return _0x3249ee;},_0x31b15f['ev']['on'](_0x4f67d7(0x1ec),_0x3a3bb0=>{const _0x591156=_0x4f67d7;for(let _0x3aabab of _0x3a3bb0){let _0x5d30ad=_0x31b15f['decodeJid'](_0x3aabab['id']);if(store&&store['contacts'])store[_0x591156(0x294)][_0x5d30ad]={'id':_0x5d30ad,'name':_0x3aabab[_0x591156(0x28d)]};}}),_0x31b15f['getName']=(_0x3b0747,_0x572847=![])=>{const _0x110bb2=_0x4f67d7;id=_0x31b15f[_0x110bb2(0x245)](_0x3b0747),_0x572847=_0x31b15f[_0x110bb2(0x268)]||_0x572847;let _0x5a54a9;if(id[_0x110bb2(0x269)](_0x110bb2(0x262)))return new Promise(async _0x192a94=>{const _0x8c29d2=_0x110bb2;_0x5a54a9=store['contacts'][id]||{};if(!(_0x5a54a9[_0x8c29d2(0x292)]||_0x5a54a9[_0x8c29d2(0x209)]))_0x5a54a9=_0x31b15f['groupMetadata'](id)||{};_0x192a94(_0x5a54a9[_0x8c29d2(0x292)]||_0x5a54a9[_0x8c29d2(0x209)]||PhoneNumber('+'+id[_0x8c29d2(0x1b6)]('@s.whatsapp.net',''))[_0x8c29d2(0x258)](_0x8c29d2(0x1ce)));});else _0x5a54a9=id===_0x110bb2(0x23c)?{'id':id,'name':_0x110bb2(0x1eb)}:id===_0x31b15f['decodeJid'](_0x31b15f['user']['id'])?_0x31b15f[_0x110bb2(0x1c4)]:store[_0x110bb2(0x294)][id]||{};return(_0x572847?'':_0x5a54a9[_0x110bb2(0x292)])||_0x5a54a9[_0x110bb2(0x209)]||_0x5a54a9[_0x110bb2(0x1ef)]||PhoneNumber('+'+_0x3b0747[_0x110bb2(0x1b6)](_0x110bb2(0x235),''))[_0x110bb2(0x258)](_0x110bb2(0x1ce));},_0x31b15f[_0x4f67d7(0x1bd)]=async(_0x4b3bd0,_0x593ac2,_0x1364d2='',_0x1a8534={})=>{const _0x434765=_0x4f67d7;let _0x23663c=[];for(let _0x52cb1f of _0x593ac2){_0x23663c['push']({'displayName':await _0x31b15f['getName'](_0x52cb1f+_0x434765(0x235)),'vcard':_0x434765(0x249)+await _0x31b15f[_0x434765(0x1db)](_0x52cb1f+'@s.whatsapp.net')+'\x0aFN:'+global[_0x434765(0x1b1)]+_0x434765(0x22f)+_0x52cb1f+':'+_0x52cb1f+_0x434765(0x27a)+global['ytname']+_0x434765(0x29f)+global[_0x434765(0x1bb)]+_0x434765(0x213)+global[_0x434765(0x228)]+_0x434765(0x239)});}_0x31b15f[_0x434765(0x28f)](_0x4b3bd0,{'contacts':{'displayName':_0x23663c[_0x434765(0x1e2)]+_0x434765(0x284),'contacts':_0x23663c},..._0x1a8534},{'quoted':_0x1364d2});},_0x31b15f[_0x4f67d7(0x1e9)]=_0x355f8c=>{const _0x31243b=_0x4f67d7;return _0x31b15f['query']({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x31243b(0x1d3),'xmlns':_0x31243b(0x26e)},'content':[{'tag':_0x31243b(0x26e),'attrs':{},'content':Buffer[_0x31243b(0x1e1)](_0x355f8c,_0x31243b(0x206))}]}),_0x355f8c;},_0x31b15f['public']=!![],_0x31b15f[_0x4f67d7(0x1f4)]=_0x194ecd=>smsg(_0x31b15f,_0x194ecd,store),_0x31b15f['ev']['on']('connection.update',async _0x3f6fbe=>{const _0xa85c12=_0x4f67d7,{connection:_0x18847e,lastDisconnect:_0x1cd3da}=_0x3f6fbe;if(_0x18847e===_0xa85c12(0x1c2)){let _0x9dceb7=_0x1cd3da[_0xa85c12(0x232)]?_0x1cd3da?.[_0xa85c12(0x232)]?.[_0xa85c12(0x20c)][_0xa85c12(0x251)]:0x0;if(_0x9dceb7===DisconnectReason[_0xa85c12(0x21b)])console['log'](_0xa85c12(0x1a9)),process['exit']();else{if(_0x9dceb7===DisconnectReason[_0xa85c12(0x267)])console[_0xa85c12(0x281)](_0xa85c12(0x1bc)),startTurbo();else{if(_0x9dceb7===DisconnectReason['connectionLost'])console[_0xa85c12(0x281)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startTurbo();else{if(_0x9dceb7===DisconnectReason['connectionReplaced'])console[_0xa85c12(0x281)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),process['exit']();else{if(_0x9dceb7===DisconnectReason[_0xa85c12(0x230)])console['log'](_0xa85c12(0x299)),process['exit']();else{if(_0x9dceb7===DisconnectReason[_0xa85c12(0x285)])console[_0xa85c12(0x281)](_0xa85c12(0x1f0)),startTurbo();else _0x9dceb7===DisconnectReason['timedOut']?(console[_0xa85c12(0x281)]('Connection\x20TimedOut,\x20Reconnecting...'),startTurbo()):console[_0xa85c12(0x281)]('Unknown\x20DisconnectReason:\x20'+_0x9dceb7+'|'+_0x18847e);}}}}}}console[_0xa85c12(0x281)](_0xa85c12(0x210),_0x3f6fbe);}),_0x31b15f['ev']['on'](_0x4f67d7(0x1e0),saveState),_0x31b15f['send5ButImg']=async(_0x54f3b4,_0x43f1b1='',_0x260102='',_0x4e6e41,_0x1bc2f5=[],_0x21b498,_0x2bc449={})=>{const _0x2fb88e=_0x4f67d7;let _0x2630c8=await prepareWAMessageMedia({'image':_0x4e6e41,'jpegThumbnail':_0x21b498},{'upload':_0x31b15f[_0x2fb88e(0x25a)]});var _0x38f26b=generateWAMessageFromContent(m[_0x2fb88e(0x287)],proto[_0x2fb88e(0x1c5)][_0x2fb88e(0x280)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x2630c8[_0x2fb88e(0x293)],'hydratedContentText':_0x43f1b1,'hydratedFooterText':_0x260102,'hydratedButtons':_0x1bc2f5}}}),_0x2bc449);_0x31b15f[_0x2fb88e(0x226)](_0x54f3b4,_0x38f26b['message'],{'messageId':_0x38f26b['key']['id']});},_0x31b15f[_0x4f67d7(0x260)]=(_0x517705,_0x2cbf1d='',_0x1bd5cb='',_0x22861b='',_0x292156='',_0x5d33cb=[],_0x3ea4b5)=>{const _0x3d7217=_0x4f67d7;let _0x34066c=_0x5d33cb;var _0x397343={'text':_0x2cbf1d,'footer':_0x1bd5cb,'title':_0x22861b,'buttonText':_0x292156,'sections':_0x34066c};_0x31b15f[_0x3d7217(0x28f)](_0x517705,_0x397343,{'quoted':_0x3ea4b5});},_0x31b15f[_0x4f67d7(0x240)]=async(_0x2ff10f,_0x3efb87='',_0x49dd13='',_0x217016,_0x5a4e4e=[],_0x43e03e={})=>{const _0xa0be8b=_0x4f67d7;let _0x13b6c8=await _0x31b15f[_0xa0be8b(0x1e4)](_0x217016,0x12c,0x96);var _0x27fda4=generateWAMessageFromContent(_0x2ff10f,{'templateMessage':{'hydratedTemplate':{'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'jpegThumbnail':_0x13b6c8},'hydratedContentText':_0x3efb87,'hydratedFooterText':_0x49dd13,'hydratedButtons':_0x5a4e4e}}},_0x43e03e);_0x31b15f[_0xa0be8b(0x226)](_0x2ff10f,_0x27fda4[_0xa0be8b(0x23e)],{'messageId':_0x27fda4[_0xa0be8b(0x1cd)]['id']});},_0x31b15f[_0x4f67d7(0x1f1)]=(_0x3b2ebf,_0x78bfcb='',_0x3eb2c3='',_0x5b39bc=[])=>{const _0x8ba25=_0x4f67d7;let _0x2553b5=_0x5b39bc;var _0x36591b={'text':_0x78bfcb,'footer':_0x3eb2c3,'templateButtons':_0x2553b5};_0x31b15f[_0x8ba25(0x28f)](_0x3b2ebf,_0x36591b);},_0x31b15f[_0x4f67d7(0x1f3)]=async(_0x716fa6,_0x4cd19c='',_0x3f39ec='',_0x2a8fa9,_0x22e31d=[],_0x40ed51={})=>{const _0x90d6bc=_0x4f67d7;let _0x134b7a=await prepareWAMessageMedia({'video':_0x2a8fa9},{'upload':_0x31b15f[_0x90d6bc(0x25a)]});var _0x388498=generateWAMessageFromContent(_0x716fa6,proto[_0x90d6bc(0x1c5)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x134b7a['videoMessage'],'hydratedContentText':_0x4cd19c,'hydratedFooterText':_0x3f39ec,'hydratedButtons':_0x22e31d}}}),_0x40ed51);_0x31b15f['relayMessage'](_0x716fa6,_0x388498[_0x90d6bc(0x23e)],{'messageId':_0x388498['key']['id']});},_0x31b15f[_0x4f67d7(0x1d2)]=async(_0x102631,_0x38c1b5='',_0x5606ad='',_0x175cf0,_0x1d89e1=[],_0xbd6e2d={})=>{const _0x305191=_0x4f67d7;let _0x64b2a0=await prepareWAMessageMedia({'video':_0x175cf0,'gifPlayback':!![]},{'upload':_0x31b15f['waUploadToServer']});var _0x5a98c4=generateWAMessageFromContent(_0x102631,proto[_0x305191(0x1c5)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x64b2a0['videoMessage'],'hydratedContentText':_0x38c1b5,'hydratedFooterText':_0x5606ad,'hydratedButtons':_0x1d89e1}}}),_0xbd6e2d);_0x31b15f[_0x305191(0x226)](_0x102631,_0x5a98c4[_0x305191(0x23e)],{'messageId':_0x5a98c4[_0x305191(0x1cd)]['id']});},_0x31b15f[_0x4f67d7(0x1da)]=async(_0x5e0974,_0x55be37,_0x885095,_0x563ec2,_0x2c8cc8={})=>{const _0x773ba=_0x4f67d7;let _0x286fc5='',_0x2f01aa=await axios[_0x773ba(0x25e)](_0x55be37);_0x286fc5=_0x2f01aa['headers'][_0x773ba(0x259)];if(_0x286fc5[_0x773ba(0x271)]('/')[0x1]===_0x773ba(0x29c))return _0x31b15f[_0x773ba(0x28f)](_0x5e0974,{'video':await getBuffer(_0x55be37),'caption':_0x885095,'gifPlayback':!![],..._0x2c8cc8},{'quoted':_0x563ec2,..._0x2c8cc8});let _0x277bb4=_0x286fc5['split']('/')[0x0]+_0x773ba(0x1c5);if(_0x286fc5===_0x773ba(0x1b4))return _0x31b15f[_0x773ba(0x28f)](_0x5e0974,{'document':await getBuffer(_0x55be37),'mimetype':_0x773ba(0x1b4),'caption':_0x885095,..._0x2c8cc8},{'quoted':_0x563ec2,..._0x2c8cc8});if(_0x286fc5[_0x773ba(0x271)]('/')[0x0]===_0x773ba(0x219))return _0x31b15f['sendMessage'](_0x5e0974,{'image':await getBuffer(_0x55be37),'caption':_0x885095,..._0x2c8cc8},{'quoted':_0x563ec2,..._0x2c8cc8});if(_0x286fc5[_0x773ba(0x271)]('/')[0x0]===_0x773ba(0x1e8))return _0x31b15f[_0x773ba(0x28f)](_0x5e0974,{'video':await getBuffer(_0x55be37),'caption':_0x885095,'mimetype':_0x773ba(0x26b),..._0x2c8cc8},{'quoted':_0x563ec2,..._0x2c8cc8});if(_0x286fc5[_0x773ba(0x271)]('/')[0x0]===_0x773ba(0x1d8))return _0x31b15f['sendMessage'](_0x5e0974,{'audio':await getBuffer(_0x55be37),'caption':_0x885095,'mimetype':_0x773ba(0x1cb),..._0x2c8cc8},{'quoted':_0x563ec2,..._0x2c8cc8});},_0x31b15f[_0x4f67d7(0x256)]=(_0x1333e7,_0x188630=[],_0x2a696f,_0x2ebbf4,_0x316249='',_0xe17b28={})=>{const _0x1d650e=_0x4f67d7;let _0x5baa7c={'text':_0x2a696f,'footer':_0x2ebbf4,'buttons':_0x188630,'headerType':0x2,..._0xe17b28};_0x31b15f[_0x1d650e(0x28f)](_0x1333e7,_0x5baa7c,{'quoted':_0x316249,..._0xe17b28});},_0x31b15f[_0x4f67d7(0x22a)]=(_0x26ad4c,_0x78b12b,_0x16c83b='',_0x180918)=>_0x31b15f['sendMessage'](_0x26ad4c,{'text':_0x78b12b,..._0x180918},{'quoted':_0x16c83b}),_0x31b15f[_0x4f67d7(0x20e)]=async(_0x2ef437,_0x3603d4,_0x18df8c='',_0x74d21f='',_0x4d1586)=>{const _0x566d05=_0x4f67d7;let _0x98ff7b=Buffer[_0x566d05(0x24e)](_0x3603d4)?_0x3603d4:/^data:.*?\/.*?;base64,/i['test'](_0x3603d4)?Buffer['from'](_0x3603d4[_0x566d05(0x271)]`,`[0x1],_0x566d05(0x1f9)):/^https?:\/\//[_0x566d05(0x242)](_0x3603d4)?await await getBuffer(_0x3603d4):fs[_0x566d05(0x217)](_0x3603d4)?fs[_0x566d05(0x1af)](_0x3603d4):Buffer['alloc'](0x0);return await _0x31b15f[_0x566d05(0x28f)](_0x2ef437,{'image':_0x98ff7b,'caption':_0x18df8c,..._0x4d1586},{'quoted':_0x74d21f});},_0x31b15f[_0x4f67d7(0x263)]=async(_0x10c0b7,_0xd88e47,_0x1c8d9b='',_0x11d9b4='',_0xb7293e=![],_0x156980)=>{const _0x73130b=_0x4f67d7;let _0x21c0b9=Buffer[_0x73130b(0x24e)](_0xd88e47)?_0xd88e47:/^data:.*?\/.*?;base64,/i['test'](_0xd88e47)?Buffer[_0x73130b(0x1e1)](_0xd88e47[_0x73130b(0x271)]`,`[0x1],_0x73130b(0x1f9)):/^https?:\/\//[_0x73130b(0x242)](_0xd88e47)?await await getBuffer(_0xd88e47):fs[_0x73130b(0x217)](_0xd88e47)?fs[_0x73130b(0x1af)](_0xd88e47):Buffer[_0x73130b(0x1f2)](0x0);return await _0x31b15f['sendMessage'](_0x10c0b7,{'video':_0x21c0b9,'caption':_0x1c8d9b,'gifPlayback':_0xb7293e,..._0x156980},{'quoted':_0x11d9b4});},_0x31b15f['sendAudio']=async(_0x569ed1,_0x4d7933,_0x54e3eb='',_0x2973f1=![],_0x4216df)=>{const _0x8713e6=_0x4f67d7;let _0x3cb111=Buffer['isBuffer'](_0x4d7933)?_0x4d7933:/^data:.*?\/.*?;base64,/i[_0x8713e6(0x242)](_0x4d7933)?Buffer[_0x8713e6(0x1e1)](_0x4d7933[_0x8713e6(0x271)]`,`[0x1],'base64'):/^https?:\/\//[_0x8713e6(0x242)](_0x4d7933)?await await getBuffer(_0x4d7933):fs[_0x8713e6(0x217)](_0x4d7933)?fs['readFileSync'](_0x4d7933):Buffer[_0x8713e6(0x1f2)](0x0);return await _0x31b15f[_0x8713e6(0x28f)](_0x569ed1,{'audio':_0x3cb111,'ptt':_0x2973f1,..._0x4216df},{'quoted':_0x54e3eb});},_0x31b15f[_0x4f67d7(0x26d)]=async(_0x599dca,_0xe563e7,_0x971f7b,_0x3ec7f4={})=>_0x31b15f[_0x4f67d7(0x28f)](_0x599dca,{'text':_0xe563e7,'contextInfo':{'mentionedJid':[..._0xe563e7['matchAll'](/@(\d{0,16})/g)][_0x4f67d7(0x208)](_0x13691d=>_0x13691d[0x1]+_0x4f67d7(0x235))},..._0x3ec7f4},{'quoted':_0x971f7b}),_0x31b15f[_0x4f67d7(0x231)]=async(_0x516b7e,_0x10d812,_0x291514,_0x3cdc9f={})=>{const _0x1e7e51=_0x4f67d7;let _0x3ec8f1=Buffer[_0x1e7e51(0x24e)](_0x10d812)?_0x10d812:/^data:.*?\/.*?;base64,/i[_0x1e7e51(0x242)](_0x10d812)?Buffer[_0x1e7e51(0x1e1)](_0x10d812['split']`,`[0x1],_0x1e7e51(0x1f9)):/^https?:\/\//[_0x1e7e51(0x242)](_0x10d812)?await await getBuffer(_0x10d812):fs[_0x1e7e51(0x217)](_0x10d812)?fs[_0x1e7e51(0x1af)](_0x10d812):Buffer[_0x1e7e51(0x1f2)](0x0),_0x39f882;return _0x3cdc9f&&(_0x3cdc9f[_0x1e7e51(0x255)]||_0x3cdc9f[_0x1e7e51(0x1cc)])?_0x39f882=await writeExifImg(_0x3ec8f1,_0x3cdc9f):_0x39f882=await imageToWebp(_0x3ec8f1),await _0x31b15f[_0x1e7e51(0x28f)](_0x516b7e,{'sticker':{'url':_0x39f882},..._0x3cdc9f},{'quoted':_0x291514}),_0x39f882;},_0x31b15f[_0x4f67d7(0x295)]=async(_0x58b9d0,_0x45ce09,_0x5cd243,_0x396c74={})=>{const _0x25f5bd=_0x4f67d7;let _0x1295bf=Buffer['isBuffer'](_0x45ce09)?_0x45ce09:/^data:.*?\/.*?;base64,/i[_0x25f5bd(0x242)](_0x45ce09)?Buffer[_0x25f5bd(0x1e1)](_0x45ce09[_0x25f5bd(0x271)]`,`[0x1],_0x25f5bd(0x1f9)):/^https?:\/\//[_0x25f5bd(0x242)](_0x45ce09)?await await getBuffer(_0x45ce09):fs[_0x25f5bd(0x217)](_0x45ce09)?fs[_0x25f5bd(0x1af)](_0x45ce09):Buffer[_0x25f5bd(0x1f2)](0x0),_0x1024ac;return _0x396c74&&(_0x396c74[_0x25f5bd(0x255)]||_0x396c74[_0x25f5bd(0x1cc)])?_0x1024ac=await writeExifVid(_0x1295bf,_0x396c74):_0x1024ac=await videoToWebp(_0x1295bf),await _0x31b15f[_0x25f5bd(0x28f)](_0x58b9d0,{'sticker':{'url':_0x1024ac},..._0x396c74},{'quoted':_0x5cd243}),_0x1024ac;},_0x31b15f[_0x4f67d7(0x28e)]=async(_0x1609be,_0x32e791,_0x32bb1d='',_0xf83b03='',_0x42cf03='',_0x2731ec={})=>{const _0x2575ad=_0x4f67d7;let _0x5216e7=await _0x31b15f[_0x2575ad(0x282)](_0x32e791,!![]),{mime:_0x18c397,ext:_0x2610ec,res:_0x3776e0,data:_0x511d78,filename:_0x4778af}=_0x5216e7;if(_0x3776e0&&_0x3776e0['status']!==0xc8||file[_0x2575ad(0x1e2)]<=0x10000)try{throw{'json':JSON[_0x2575ad(0x1d5)](file[_0x2575ad(0x224)]())};}catch(_0x484d4c){if(_0x484d4c[_0x2575ad(0x223)])throw _0x484d4c['json'];}let _0x3ad3da='',_0x5afdc4=_0x18c397,_0x4125c0=_0x4778af;if(_0x2731ec[_0x2575ad(0x21a)])_0x3ad3da=_0x2575ad(0x270);if(_0x2731ec[_0x2575ad(0x1dc)]||/webp/['test'](_0x18c397)){let {writeExif:_0x486990}=require('./lib/exif'),_0x32d89b={'mimetype':_0x18c397,'data':_0x511d78};_0x4125c0=await _0x486990(_0x32d89b,{'packname':_0x2731ec['packname']?_0x2731ec[_0x2575ad(0x255)]:global[_0x2575ad(0x255)],'author':_0x2731ec[_0x2575ad(0x1cc)]?_0x2731ec['author']:global[_0x2575ad(0x1cc)],'categories':_0x2731ec['categories']?_0x2731ec['categories']:[]}),await fs[_0x2575ad(0x27d)][_0x2575ad(0x1b2)](_0x4778af),_0x3ad3da=_0x2575ad(0x1ff),_0x5afdc4='image/webp';}else{if(/image/[_0x2575ad(0x242)](_0x18c397))_0x3ad3da='image';else{if(/video/['test'](_0x18c397))_0x3ad3da=_0x2575ad(0x1e8);else{if(/audio/[_0x2575ad(0x242)](_0x18c397))_0x3ad3da=_0x2575ad(0x1d8);else _0x3ad3da=_0x2575ad(0x270);}}}return await _0x31b15f['sendMessage'](_0x1609be,{[_0x3ad3da]:{'url':_0x4125c0},'caption':_0xf83b03,'mimetype':_0x5afdc4,'fileName':_0x32bb1d,..._0x2731ec},{'quoted':_0x42cf03,..._0x2731ec}),fs[_0x2575ad(0x27d)][_0x2575ad(0x1b2)](_0x4125c0);},_0x31b15f['downloadAndSaveMediaMessage']=async(_0x44141d,_0x44e11a,_0x4b53cc=!![])=>{const _0x168280=_0x4f67d7;let _0x52dacb=_0x44141d[_0x168280(0x1d9)]?_0x44141d[_0x168280(0x1d9)]:_0x44141d,_0x5ca56c=(_0x44141d[_0x168280(0x1d9)]||_0x44141d)[_0x168280(0x207)]||'',_0x5b89b0=_0x44141d[_0x168280(0x200)]?_0x44141d[_0x168280(0x200)][_0x168280(0x1b6)](/Message/gi,''):_0x5ca56c[_0x168280(0x271)]('/')[0x0];const _0x3de921=await downloadContentFromMessage(_0x52dacb,_0x5b89b0);let _0x18328a=Buffer['from']([]);for await(const _0x3aa8d1 of _0x3de921){_0x18328a=Buffer[_0x168280(0x212)]([_0x18328a,_0x3aa8d1]);}let _0x51348f=await FileType[_0x168280(0x1c9)](_0x18328a);return trueFileName=_0x4b53cc?_0x44e11a+'.'+_0x51348f[_0x168280(0x274)]:_0x44e11a,await fs[_0x168280(0x23f)](trueFileName,_0x18328a),trueFileName;},_0x31b15f['downloadMediaMessage']=async _0x3f0333=>{const _0x5b6600=_0x4f67d7;let _0x283532=(_0x3f0333[_0x5b6600(0x1d9)]||_0x3f0333)[_0x5b6600(0x207)]||'',_0x4cd1e6=_0x3f0333[_0x5b6600(0x200)]?_0x3f0333[_0x5b6600(0x200)]['replace'](/Message/gi,''):_0x283532[_0x5b6600(0x271)]('/')[0x0];const _0xb53ed0=await downloadContentFromMessage(_0x3f0333,_0x4cd1e6);let _0xc775eb=Buffer[_0x5b6600(0x1e1)]([]);for await(const _0x33dd50 of _0xb53ed0){_0xc775eb=Buffer[_0x5b6600(0x212)]([_0xc775eb,_0x33dd50]);}return _0xc775eb;},_0x31b15f[_0x4f67d7(0x265)]=async(_0x2e89a6,_0x5e77da,_0x5705cf=![],_0x3754ed={})=>{const _0x5910c4=_0x4f67d7;let _0x3a093d;_0x3754ed[_0x5910c4(0x1c3)]&&(_0x5e77da[_0x5910c4(0x23e)]=_0x5e77da[_0x5910c4(0x23e)]&&_0x5e77da['message'][_0x5910c4(0x22d)]&&_0x5e77da[_0x5910c4(0x23e)][_0x5910c4(0x22d)]['message']?_0x5e77da['message']['ephemeralMessage'][_0x5910c4(0x23e)]:_0x5e77da[_0x5910c4(0x23e)]||undefined,_0x3a093d=Object[_0x5910c4(0x1b3)](_0x5e77da[_0x5910c4(0x23e)]['viewOnceMessage'][_0x5910c4(0x23e)])[0x0],delete(_0x5e77da[_0x5910c4(0x23e)]&&_0x5e77da[_0x5910c4(0x23e)][_0x5910c4(0x21f)]?_0x5e77da[_0x5910c4(0x23e)][_0x5910c4(0x21f)]:_0x5e77da[_0x5910c4(0x23e)]||undefined),delete _0x5e77da['message'][_0x5910c4(0x22b)][_0x5910c4(0x23e)][_0x3a093d][_0x5910c4(0x29d)],_0x5e77da[_0x5910c4(0x23e)]={..._0x5e77da[_0x5910c4(0x23e)][_0x5910c4(0x22b)]['message']});let _0x241a32=Object[_0x5910c4(0x1b3)](_0x5e77da['message'])[0x0],_0x52fd9b=await generateForwardMessageContent(_0x5e77da,_0x5705cf),_0x49acb4=Object[_0x5910c4(0x1b3)](_0x52fd9b)[0x0],_0x117755={};if(_0x241a32!=_0x5910c4(0x289))_0x117755=_0x5e77da['message'][_0x241a32][_0x5910c4(0x21c)];_0x52fd9b[_0x49acb4]['contextInfo']={..._0x117755,..._0x52fd9b[_0x49acb4][_0x5910c4(0x21c)]};const _0x32c73f=await generateWAMessageFromContent(_0x2e89a6,_0x52fd9b,_0x3754ed?{..._0x52fd9b[_0x49acb4],..._0x3754ed,..._0x3754ed[_0x5910c4(0x21c)]?{'contextInfo':{..._0x52fd9b[_0x49acb4][_0x5910c4(0x21c)],..._0x3754ed[_0x5910c4(0x21c)]}}:{}}:{});return await _0x31b15f[_0x5910c4(0x226)](_0x2e89a6,_0x32c73f['message'],{'messageId':_0x32c73f[_0x5910c4(0x1cd)]['id']}),_0x32c73f;},_0x31b15f['sendListMsg']=(_0x1de3e9,_0x4419b8='',_0xbc64cd='',_0x434c47='',_0x5e4504='',_0xbff506=[],_0x35caa4)=>{const _0x2880dc=_0x4f67d7;let _0x3d4a37=_0xbff506;var _0x3df9a1={'text':_0x4419b8,'footer':_0xbc64cd,'title':_0x434c47,'buttonText':_0x5e4504,'sections':_0x3d4a37};_0x31b15f[_0x2880dc(0x28f)](_0x1de3e9,_0x3df9a1,{'quoted':_0x35caa4});},_0x31b15f[_0x4f67d7(0x1ee)]=(_0x4e2859,_0x2fc8f0,_0xa61227='',_0xcd6ef9=_0x31b15f[_0x4f67d7(0x1c4)]['id'],_0x1e0e5b={})=>{const _0x44b8c7=_0x4f67d7;let _0x2448a8=Object[_0x44b8c7(0x1b3)](_0x2fc8f0[_0x44b8c7(0x23e)])[0x0],_0x4c6c00=_0x2448a8===_0x44b8c7(0x22d);_0x4c6c00&&(_0x2448a8=Object[_0x44b8c7(0x1b3)](_0x2fc8f0[_0x44b8c7(0x23e)][_0x44b8c7(0x22d)][_0x44b8c7(0x23e)])[0x0]);let _0x4955c1=_0x4c6c00?_0x2fc8f0[_0x44b8c7(0x23e)]['ephemeralMessage'][_0x44b8c7(0x23e)]:_0x2fc8f0[_0x44b8c7(0x23e)],_0x479aa9=_0x4955c1[_0x2448a8];if(typeof _0x479aa9==='string')_0x4955c1[_0x2448a8]=_0xa61227||_0x479aa9;else{if(_0x479aa9[_0x44b8c7(0x266)])_0x479aa9['caption']=_0xa61227||_0x479aa9[_0x44b8c7(0x266)];else{if(_0x479aa9[_0x44b8c7(0x1fc)])_0x479aa9[_0x44b8c7(0x1fc)]=_0xa61227||_0x479aa9[_0x44b8c7(0x1fc)];}}if(typeof _0x479aa9!==_0x44b8c7(0x257))_0x4955c1[_0x2448a8]={..._0x479aa9,..._0x1e0e5b};if(_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x1aa)])_0xcd6ef9=_0x2fc8f0['key'][_0x44b8c7(0x1aa)]=_0xcd6ef9||_0x2fc8f0['key'][_0x44b8c7(0x1aa)];else{if(_0x2fc8f0['key']['participant'])_0xcd6ef9=_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x1aa)]=_0xcd6ef9||_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x1aa)];}if(_0x2fc8f0['key'][_0x44b8c7(0x20f)][_0x44b8c7(0x1c0)]('@s.whatsapp.net'))_0xcd6ef9=_0xcd6ef9||_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x20f)];else{if(_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x20f)][_0x44b8c7(0x1c0)](_0x44b8c7(0x23b)))_0xcd6ef9=_0xcd6ef9||_0x2fc8f0['key']['remoteJid'];}return _0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x20f)]=_0x4e2859,_0x2fc8f0[_0x44b8c7(0x1cd)][_0x44b8c7(0x26a)]=_0xcd6ef9===_0x31b15f['user']['id'],proto[_0x44b8c7(0x25f)]['fromObject'](_0x2fc8f0);},_0x31b15f[_0x4f67d7(0x282)]=async(_0x112ee5,_0x30c34f)=>{const _0x23e577=_0x4f67d7;let _0x10d7f9,_0x3cecfb=Buffer[_0x23e577(0x24e)](_0x112ee5)?_0x112ee5:/^data:.*?\/.*?;base64,/i['test'](_0x112ee5)?Buffer[_0x23e577(0x1e1)](_0x112ee5[_0x23e577(0x271)]`,`[0x1],_0x23e577(0x1f9)):/^https?:\/\//['test'](_0x112ee5)?await(_0x10d7f9=await getBuffer(_0x112ee5)):fs['existsSync'](_0x112ee5)?(filename=_0x112ee5,fs[_0x23e577(0x1af)](_0x112ee5)):typeof _0x112ee5===_0x23e577(0x257)?_0x112ee5:Buffer['alloc'](0x0),_0x3be325=await FileType[_0x23e577(0x1c9)](_0x3cecfb)||{'mime':_0x23e577(0x1f5),'ext':_0x23e577(0x28a)};filename=path[_0x23e577(0x26f)](__filename,_0x23e577(0x1de)+new Date()*0x1+'.'+_0x3be325[_0x23e577(0x274)]);if(_0x3cecfb&&_0x30c34f)fs[_0x23e577(0x27d)]['writeFile'](filename,_0x3cecfb);return{'res':_0x10d7f9,'filename':filename,'size':await getSizeMedia(_0x3cecfb),..._0x3be325,'data':_0x3cecfb};},_0x31b15f[_0x4f67d7(0x1d2)]=async(_0x46333f,_0x4341a1='',_0x4887a7='',_0x4e3797,_0x33d861=[],_0x55754e={})=>{const _0x41b63a=_0x4f67d7;let _0x2dc2dd=await prepareWAMessageMedia({'video':_0x4e3797,'gifPlayback':!![]},{'upload':_0x31b15f[_0x41b63a(0x25a)]});var _0x787a16=generateWAMessageFromContent(_0x46333f,proto[_0x41b63a(0x1c5)][_0x41b63a(0x280)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x2dc2dd[_0x41b63a(0x288)],'hydratedContentText':_0x4341a1,'hydratedFooterText':_0x4887a7,'hydratedButtons':_0x33d861}}}),_0x55754e);_0x31b15f[_0x41b63a(0x226)](_0x46333f,_0x787a16[_0x41b63a(0x23e)],{'messageId':_0x787a16[_0x41b63a(0x1cd)]['id']});},_0x31b15f[_0x4f67d7(0x1f3)]=async(_0x5c548e,_0x3dd9fa='',_0x55ff6f='',_0x504bae,_0x4bd128=[],_0x2d2141={})=>{const _0x300821=_0x4f67d7;let _0x14cbc6=await prepareWAMessageMedia({'video':_0x504bae},{'upload':_0x31b15f[_0x300821(0x25a)]});var _0x713f5c=generateWAMessageFromContent(_0x5c548e,proto[_0x300821(0x1c5)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x14cbc6['videoMessage'],'hydratedContentText':_0x3dd9fa,'hydratedFooterText':_0x55ff6f,'hydratedButtons':_0x4bd128}}}),_0x2d2141);_0x31b15f['relayMessage'](_0x5c548e,_0x713f5c[_0x300821(0x23e)],{'messageId':_0x713f5c[_0x300821(0x1cd)]['id']});},_0x31b15f[_0x4f67d7(0x1f1)]=(_0x24954b,_0x1fbeb9='',_0x3810a3='',_0x261438=[])=>{const _0x4a72bf=_0x4f67d7;let _0x2d02b2=_0x261438;var _0x543a56={'text':_0x1fbeb9,'footer':_0x3810a3,'templateButtons':_0x2d02b2};_0x31b15f[_0x4a72bf(0x28f)](_0x24954b,_0x543a56);},_0x31b15f[_0x4f67d7(0x1a8)]=async(_0x621099,_0x34ff84,_0x123d45,_0x450bc2={},_0x1d673c={})=>{const _0x14216b=_0x4f67d7;let _0x5ebf04=await _0x31b15f[_0x14216b(0x282)](_0x34ff84,!![]),{filename:_0x524938,size:_0x7ab977,ext:_0x538fc7,mime:_0xcf9bf0,data:_0xa6f9ff}=_0x5ebf04,_0x3a42a5='',_0x54e4d9=_0xcf9bf0,_0x58467a=_0x524938;if(_0x1d673c['asDocument'])_0x3a42a5=_0x14216b(0x270);if(_0x1d673c[_0x14216b(0x1dc)]||/webp/[_0x14216b(0x242)](_0xcf9bf0)){let {writeExif:_0x304778}=require(_0x14216b(0x1fd)),_0x49290e={'mimetype':_0xcf9bf0,'data':_0xa6f9ff};_0x58467a=await _0x304778(_0x49290e,{'packname':global['packname'],'author':global[_0x14216b(0x255)],'categories':_0x1d673c[_0x14216b(0x1f8)]?_0x1d673c[_0x14216b(0x1f8)]:[]}),await fs['promises'][_0x14216b(0x1b2)](_0x524938),_0x3a42a5=_0x14216b(0x1ff),_0x54e4d9='image/webp';}else{if(/image/['test'](_0xcf9bf0))_0x3a42a5=_0x14216b(0x219);else{if(/video/['test'](_0xcf9bf0))_0x3a42a5=_0x14216b(0x1e8);else{if(/audio/[_0x14216b(0x242)](_0xcf9bf0))_0x3a42a5=_0x14216b(0x1d8);else _0x3a42a5=_0x14216b(0x270);}}}return await _0x31b15f[_0x14216b(0x28f)](_0x621099,{[_0x3a42a5]:{'url':_0x58467a},'mimetype':_0x54e4d9,'fileName':_0x123d45,..._0x1d673c},{'quoted':_0x450bc2,..._0x1d673c}),fs[_0x14216b(0x27d)][_0x14216b(0x1b2)](_0x58467a);},_0x31b15f[_0x4f67d7(0x27b)]=async _0x2ee74f=>{const _0x5b05be=_0x4f67d7;return[..._0x2ee74f[_0x5b05be(0x1d7)](/@([0-9]{5,16}|0)/g)]['map'](_0x830858=>_0x830858[0x1]+_0x5b05be(0x235));},_0x31b15f;}function _0x217a(){const _0x425e0d=['994403219940-1631515755@g.us','sendText','viewOnceMessage','content','ephemeralMessage','random','\x0aitem1.TEL;waid=','loggedOut','sendImageAsSticker','error','HH:mm:ss','silent','@s.whatsapp.net','BAE5','attrs','\x0a\x20\x20\x20└───────────────┈\x20⳹',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','format','@broadcast','0@s.whatsapp.net','resolve','message','writeFileSync','send5ButLoc','7859160KyJAlw','test','group-participants.update','./lib/myfunc','decodeJid','wkwkwk','th\x0a\x20\x20\x20│✑\x20\x20𝗝𝗼𝗶𝗻𝗲𝗱\x20:\x20\x0a\x20\x20\x20│✑\x20','https://wa.me/923055108095','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Subject\x20has\x20been\x20changed\x20to\x20*','\x0a\x20\x20\x20│✑\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│✑\x20','groupMetadata','white','isBuffer','𝗧𝚯𝗫𝗜𝗖\x20𝗧𝗨𝗥𝗕𝚯','972901tSQPyO','statusCode','bind','Bug?\x20Error?\x20Suggestion?\x20Talk\x20to\x20developer:','th\x0a\x20\x20\x20│✑\x20\x20𝗧𝗶𝗺𝗲\x20:\x20\x0a\x20\x20\x20│✑\x20\x20','packname','sendButtonText','string','getNumber','content-type','waUploadToServer','child_process','participants','🦄\x20GITHUB:\x20TURBOHYPER\x20','head','WebMessageInfo','sendListMsg','2AlMrQa','@g.us','sendVideo','334188VeyeYK','copyNForward','caption','connectionClosed','withoutContact','endsWith','fromMe','video/mp4','🫂\x20WA\x20NUMBER:\x20+916380260672\x20','sendTextWithMentions','status','join','document','split','Good\x20Bye\x20🥀','cache','ext','restrict','owner','yellow','15473612KMznaR','messages','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:','parseMention','Toxic-Alexa\x20Is\x20Online...','promises','path','profilePictureUrl','fromObject','log','getFile','@adiwajshing/baileys','\x20Contact','restartRequired','magenta','chat','videoMessage','conversation','.bin','Source\x20Code\x20Version:\x203.0','startsWith','notify','sendMedia','sendMessage','unwatchFile','default','name','imageMessage','contacts','sendVideoAsSticker','DD/MM/YYYY','redBright','action','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','12djJnXM','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','gif','viewOnce','Automatic\x20Block\x20System!\x0aDon\x27t\x20Call\x20Bot!\x0aPlease\x20Ask\x20Or\x20Contact\x20The\x20Owner\x20To\x20Unblock\x20You!','\x0aitem2.X-ABLabel:YouTube\x0aitem3.URL:','add','sendFile','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','participant','call-creator','updateBlockStatus','chalk','tag','readFileSync','40254hOnFsE','ownername','unlink','keys','application/pdf','\x20Updated','replace','Subscribe\x20Turbo\x20Mods','figlet','Welcome\x20Back\x20Owner!\x20Hope\x20You\x20Doing\x20Well~','He/She\x20Gone\x20Is\x20Forever\x20Bro\x20🥀.','socialm','Connection\x20closed,\x20reconnecting....','sendContact','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20group\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admin\x20can\x20send\x20messages\x20!','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!','includes','status@broadcast','close','readViewOnce','user','Message','pino','\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗟𝗲𝗳𝘁\x20\x0a\x20\x20\x20│✑\x20','35qJnVPM','fromBuffer','http://www.generalwebsitex.ml','audio/mpeg','author','key','international','red','Pagga','882755yruxPK','send5ButGif','set','announce','parse','store','matchAll','audio','msg','sendFileUrl','getName','asSticker','cyan','../src/','Thanks\x20For\x20Using\x20Toxic\x20Alexa','creds.update','from','length','wkwwk','reSize','silver','messages.upsert','┌─❖\x0a│「\x20𝗚𝗼𝗼𝗱𝗯𝘆𝗲\x20👋\x20」\x0a└┬❖\x20「\x20@','video','setStatus','floor','WhatsApp','contacts.update','cfonts','cMod','verifiedName','Restart\x20Required,\x20Restarting...','send5ButMsg','alloc','send5ButVid','serializeM','application/octet-stream','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!','textSync','categories','base64','public','awesome-phonenumber','text','./lib/sticker.js','5402763gyEUnf','sticker','mtype','./lib/exif','groups.update','offer','\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20\x0a\x20\x20\x20│✑\x20\x20','Asia/Kolkata','utf-8','mimetype','map','subject','server','10gZqzIm','output','watchFile','sendImage','remoteJid','Connected...','Turbo','concat','\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;','┌─❖\x0a│「\x20𝗛𝗶\x20👋\x20」\x0a└┬❖\x20「\x20@','Safari','1.0.0','existsSync','send5ButImg','image','asDocument','badSession','contextInfo','𝗧𝚯𝗫𝗜𝗖\x20₪\x20𝚫𝗟𝗘𝗫𝚫','./lib/color','ignore','type','block','./TurboMedia/theme/turbo.xlsx','json','toString','./config.js','relayMessage','\x20\x20🦁Turbo\x20Mods\x20Inc.\x202022🦁','location'];_0x217a=function(){return _0x425e0d;};return _0x217a();}startTurbo();let file=require[_0x424e44(0x23d)](__filename);fs[_0x424e44(0x20d)](file,()=>{const _0x271d84=_0x424e44;fs[_0x271d84(0x290)](file),console[_0x271d84(0x281)](chalk[_0x271d84(0x297)](__filename+_0x271d84(0x1b5))),delete require[_0x271d84(0x273)][file],require(file);});
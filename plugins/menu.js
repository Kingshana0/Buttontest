const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋 *HELLOW ${pushname}*

╭──═❮*MAIN MENU*❯═─┈•
|
| ➤ alive
| ➤ menu
| ➤ system
| ➤ ping
| ➤ restart
| ➤ update
|
╰────────────────❃
╭──═❮*DOWNLOAD MENU*❯═─┈•
| 
| ➤ song
| ➤ video
| ➤ fb
| ➤ mediafire
| ➤ tiktok
| ➤ gdrive
| ➤ twitter
|
╰────────────────❃
╭──═❮*OWNER MENU*❯═─┈•
|
| ➤ restart
| ➤ update
|
╰────────────────❃
╭──═❮*SEARCH MENU*❯═─┈•
| 
| ➤ hirunews
| ➤ derananews
| ➤ sirasanews
| ➤ lnews
| ➤ bbc
| 
╰────────────────❃
©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖
`  
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})


//============================== DOWNLOAD MENU===============================   

cmd({
    pattern: "dmenu",
    react: "⬇️",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `╭──═❮*DOWNLOAD MENU*❯═─┈•
| 
| ➤ song
| ➤ video
| ➤ fb
| ➤ mediafire
| ➤ tiktok
| ➤ gdrive
| ➤ twitter
|
╰────────────────❃
©POWERD BY MALSHAN-MD OFC
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})    



//================================NEWS==============================

cmd({
    pattern: "news",
    react: "📰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `╭──═❮*NEWS*❯═─┈•
| 
| ➤ hirunews
| ➤ derananews
| ➤ sirasanews
| ➤ lnews
| ➤ bbc
| 
╰────────────────❃
©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})    

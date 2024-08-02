const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by __! Fadai ZzZ 欢__")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})
const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require(`discord.js`)
const {createTranscript} = require('discord-html-transcripts');
const ms = require("ms")
const db = require(`pro.db`)
const { token } = require("./config.json")
const fs = require(`node:fs`)
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES
  ],
  partials: ["REACTION", "MESSAGE", "CHANNEL"]
}).setMaxListeners(0)
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const prefix = "+"
const line = "https://media.discordapp.net/attachments/1236323388272807988/1248287092660764704/20240603_214726.png?ex=66631d72&is=6661cbf2&hm=bef5d1849e13f0b4435a3b606e7507f0a58b4b8f79162740bc23331b1684eeab&=&format=webp&quality=lossless&width=930&height=73"
const Discord = require("discord.js")
module.exports = client

 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 


process.on('unhandledRejection', (reason, p) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase());
    console.log(reason.stack ? String(reason.stack) : String(reason));
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase());
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase());
    console.log(err.stack ? err.stack : err)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase());
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase());
  });
  process.on('beforeExit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase());
  //  console.log(code.yellow.dim);
    console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('exit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase());
    //console.log(code.yellow.dim);
    console.log('=== exit ===\n\n\n\n\n'.toUpperCase());
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase());
    console.log(type, promise, reason);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase());
  });
client.on('ready' , async() => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot Name : ${client.user.username}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  var statuses = [`Demon On Top` , `+dev`];
var timers = 2;
  var timeing = Math.floor(timers * 1000);
  setInterval(function() {
    var lengthesof = statuses.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/5fr3' });
  }, timeing);

})

const welcomerooom = "1251788394908880979" //ايدي روم الترحيب
const link = "https://discord.gg/DmS1" //لينك السيرفر
const feedback = "1236316855338012692" //ايدي روم الفيدباك
const autolinerooms = [ "1251788419776905236","","" ]  //ايدي رومات الاوتو لاين
const ordercategory = "1251788372184141885" //ايدي كاتجوري الاوردر
const applycategory =  "1251788374831005736" //ايدي كاتجوري التقديم
const testerrole = "1236363374674313218" //ايدي رول الي بتعمل تست في التقديم 
const taxchannel = "1251788427972706376" //ايدي روم الضريبة
const welcomesellerroom = "1248795130534563842" //ايدي روم ترحيب السيلر
const upgraderoom = "1236322862407876620" //ايدي روم ترقية التيم
const sellernumber = "1248793636242722877" //ايدي روم نمبر التيم
let team = "1236363459596390560" //ايدي رول التيم
let offerroom = "1251788419776905236" //ايدي روم الاوفرات
let support = "1236371741098381473" //ايدي رول تكت سبورت
let supportt = "1251788430657191968" //ايدي روم السبورت تكت 
let supportcategory = "1251788373840891924" //ايدي كاتجوري السابورت
let color = "#0371dd" //لون الايمباد
let order = "1251788426848764005" //ايدي روم الاوردر
let applyteam =  "1251788432401895475" //ايدي روم تقديم التيم
let rulest = "1251788440421535856" //ايدي روم قوانين التيم 
let newst = "1251788438445887521" //ايدي روم نيوز التيم
let adsprice = "1251788407148122142" //ايدي روم اسعار الاعلانات
let pricet = "1251788441721638912" //ايدي روم اسعار التيم

client.on("messageCreate", message => {
  if (message.content == prefix + "help") {
    const embed = new MessageEmbed()
      .setTitle("**Help Menu **")
      .setColor(color)
      .setImage(line)
      .setThumbnail(message.guild.iconURL())
      .setDescription(`> **Hi , I Am Demon Systeme <:systm:1239123833726701599>  **

> **I Work For Demon Store <:emoji_162:1246856969185267853>  **

> **My Developper Is __A7med__ <:uzjha:1234477804884856864>**`);

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: '𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Owners',
            description: 'Commands for Owners',
            emoji: '<:sqxg:1247131844852453406>',
          },
          {
            label: '𝐏𝐮𝐛𝐥𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Public',
            description: 'Commands for Public',
            emoji: '<:cxhw:1247132727073837150>',
          },
          {
            label: '𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Admins',
            description: 'Commands for Admins',
            emoji: '<:xQNSQ:1247133023133241427>',
          },
          {
            label: '𝐒𝐭𝐨𝐫𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Store',
            description: 'Commands for Store',
            emoji: '<:hsgsb:1247132409191858259>',
          },
          {
            label: '𝐏𝐨𝐢𝐧𝐭𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬',
            value: 'Points',
            description: 'Commands for Points',
            emoji: '<:ksja:1234619400527548526>',
          },
        ]),
    );

    const devButton = new MessageButton()
      .setStyle('LINK') 
      .setLabel('𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫')
      .setEmoji('<:emoji_375:1103439506973130873>')
      .setURL('https://discord.com/users/1205139107374702713');

    const supportServerButton = new MessageButton()
      .setStyle('LINK')
      .setEmoji('<a:true:1064843178483666964>')
      .setLabel('𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫')
      .setURL('https://discord.gg/AYegJxMMK8');

    const rowWithButtons = new MessageActionRow().addComponents(devButton, supportServerButton);
    message.channel.send({ embeds: [embed], components: [row, rowWithButtons] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}setavatar \` To Change Avatar Bot \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}tbc \` To Send Broadcast For Team \`**`);

    interaction.update({ embeds: [first], components: interaction.message.components });
  } else if (category === 'Public') {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`** 
> ${prefix}uptime \` To Show Uptime Bot \`

> ${prefix}link \` To Show Link Server \`

> ${prefix}inrole \` To Show Role Member \`

> ${prefix}inrole \` To Show Avatar Member \`

> ${prefix}dev \` To Find Out Who Made The Bot\`**`);

    interaction.update({ embeds: [publicCmds], components: interaction.message.components });
  } else if (category === 'Admins') {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}unbanall \` To UnBan All Member \`

> ${prefix}name \` To SetName A Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}show \` To Show Channel \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}unban \` To UnBan Member \`

> ${prefix}mute \` To Mute Member \`

> ${prefix}unmute \` To UnMute Member \`

> ${prefix}g-role \` To Give Role To Member \`

> ${prefix}r-role \` To Remove Role To Member \`

> مقبول \` To Accept Someone For Team \`
 
> مرفوض \` To Reject Someone For Team \`
 
> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`
 
> ${prefix}bot \`To obtain a form if you are requesting a bot \`
 
> ${prefix}design \` To obtain a form if you are requesting a design \`
 
> ${prefix}rep \` To obtain a form if you want to inform someone \`

> ${prefix}num \` To register the seller number \`**`);

    interaction.update({ embeds: [adminCmds], components: interaction.message.components });
  } else if (category === 'Store') {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}send \` To Send Msg DM To Member \`
      
> ${prefix}come \` To Come DM To Member \`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}welcome-seller \` To Welcome Seller \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}font \` To Change Word For 𝐖𝐨𝐫𝐝 \`
        
> ${prefix}tag \` To Change Seller Name \`

> For Tickets :

> \`  ${prefix}Ws \`

> \`  ${prefix}Come \`

> \`  Fb \`

> \` تفضل \`

> \` حول \` **`);

    interaction.update({ embeds: [storeCmds], components: interaction.message.components });
  } else if (category === 'Points') {
    const PointsCmds = new MessageEmbed()
      .setTitle("**Points Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}top
      
> ${prefix}rank

> ${prefix}addpoint

> ${prefix}removepoint

> ${prefix}point

> ${prefix}Add Points

> ${prefix}topd
 
> ${prefix}points
         
> ${prefix}apoints

> Points Target :** \` Re - $Close - $Delete - $Rename - +Come - +Ws - Fb - تفضل \` `);
 
    interaction.update({ embeds: [PointsCmds], components: interaction.message.components });
  }
});
client.on('messageCreate', message => {
  if (message.content === prefix + 'dev') {
    const embed = {
      title: `__A7med__ 𝗗𝗲𝘃𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗕𝗼𝘁`,
      thumbnail: {
        url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png',
        height: 100,
        width: 100,
        proxy_url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'},
      description: `**・~ 𝗜𝗳 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 𝗦𝘂𝗰𝗵 𝗮 𝗕𝗼𝘁 , 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 { A7med. }

・~ __A7med__ : 𝗧𝗵𝗶𝘀 𝗕𝗼𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗲𝗿 𝗖𝗮𝗻 𝗗𝗼 𝗘𝘅𝗮𝗰𝘁𝗹𝘆 𝗧𝗵𝗲 𝗦𝗮𝗺𝗲 𝗙𝗼𝗿 𝗬𝗼𝘂 <a:bot:1064842712202879006>
・~ 𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞 : 𝗧𝗵𝗶𝘀 𝗦𝗲𝗿𝘃𝗲𝗿 𝗜𝘀 𝗧𝗵𝗲 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗦𝗲𝗿𝘃𝗲𝗿 𝗙𝗼𝗿 __! Fadai ZzZ 欢__ 𝗕𝗼𝘁𝘀, 𝗪𝗵𝗶𝗰𝗵 𝗧𝗵𝗲 𝗢𝘄𝗻𝗲𝗿 𝗦𝗵𝗶𝗽 𝗦𝗲𝗿𝘃𝗲𝗿. 𝗜𝗳 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 𝗜𝘁, 𝗚𝗼 𝗧𝗵𝗲𝗿𝗲 <a:bluecrown:1153368876847996979>**`,
      thumbnail: {
        url: 'https://images-ext-2.discordapp.net/external/K2IvOS55piD4eMc2OumVm7rXbQNpYGz60jltyWXBGbo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/510451548468543488/5b255032274dec96e213c7f1e5639a24.png'
      },
      color: (color),
    };

    const button = new MessageButton()
      .setLabel('A7med')
      .setURL('https://discord.com/users/1205139107374702713')
      .setEmoji('<:emoji_375:1103439506973130873>')
      .setStyle('LINK');
    const button2 = new MessageButton()
      .setLabel('Demon Store')
      .setURL('https://discord.gg/AYegJxMMK8')
      .setEmoji('<a:true:1064843178483666964>')
    .setStyle('LINK'); 

    const row = new MessageActionRow().addComponents(button, button2);

    message.channel.send({ embeds: [embed], components: [row]  });
    message.delete()
  }
});
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {

    setInterval( async () => {
    client.channels.fetch("1251788363506389084") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 


/***Welcome In __𝐃𝐞𝐦𝐨𝐧__
link The Server : https://discord.gg/Demon-S <a:a2_heartblue5:1194573675949740093> 
Enjoy Bro <a:a2_heartblue5:1194573675949740093> ** */
client.on('guildMemberAdd' , async(member) => {
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setImage(line)
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`**𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐃𝐞𝐦𝐨𝐧__ 𝐒𝐭𝐨𝐫𝐞 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.<a:true:1064843178483666964>

𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. <a:megaright:1064843013068693565> 

𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 :⁠ <#${order}> <a:ss_4:1064843136276365412>

𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 : <#${applyteam}> <a:ss_4:1064843136276365412> 

𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#${supportt}> <a:ss_4:1064843136276365412>

𝐓𝐡𝐞 𝐀𝐝𝐬 𝐏𝐫𝐢𝐜𝐞𝐬 : <#${adsprice}> <a:ss_4:1064843136276365412>

𝐘𝐨𝐮 𝐀𝐫𝐞 𝐌𝐞𝐦𝐛𝐞𝐫 𝐍𝐮𝐦𝐛𝐞𝐫 :  \`${member.guild.memberCount}\` <a:DesignS:1064842187952619550> 


𝐄𝐧𝐣𝐨𝐲 <𝟑 <a:redheart:1064843075907760129>**`) 
   .setColor(color)

member.guild.channels.cache.get(welcomerooom).send({ content: `**Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ ` , embeds: [welcomefukenembed]});

  member.send(`**
Welcome To 𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞 <a:nqrheart:1064843033847271454> 

> \`#\` مرحبا بك ، نورت اكبر و اضمن ستور فالشرق الاوسط ديمون ستور <a:nqrheart:1064843033847271454> 


> \`#\`تعريف بسيط : ديمون ستور سيرفر مصري يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات <a:true:1064843178483666964> 



> \`#\` لطلب اوردر بما تحتاجه من مبيعات أو تصاميم : <#${order}> <a:ss_4:1110838696116224061> 
> 
> \`#\` للتقديم علي طاقم العمل : <#${applyteam}> <a:ss_4:1110838696116224061> 



# 𝐖𝐞 𝐇𝐨𝐩𝐞 𝐘𝐨𝐮 𝐄𝐧𝐣𝐨𝐲 𝐖𝐢𝐭𝐡 𝐔𝐬 <a:redheart:1064843075907760129>**`)
}) 

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;

  if(message.content === "مقبول") {
 message.delete()
message.channel.send(`**تم قبولك في تيم Demon !**

**برجاء التفاعل بشكل لائق ف السيرفر لكي لا يتم تصفيتك** 

**برجاء قرائة قوانين و نيوز التيم و اسعار التيم جيداً لعدم أخد ورنات** 
<#${rulest}> , <#${newst}> , <#${pricet}>

**اجباري وضع اللينك ف البايو الخاص بك بهذه الطريقه**
**Demon S :** ${link}

**و نورتنا يمعلم**`)
  }
    if(message.content === "دليل") {
      message.delete()
message.channel.send(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   



> **About https://probot.io/transactions **`)
    }

if(message.content === "شفر") {
      message.delete()
message.channel.send(`**من فضلك قم بتشفير الجمله التي ترسلها
وعدم السب وعدم ذكر خوادم اخري**`)
    }

  if(message.content === "مرفوض") {
   message.delete()
message.channel.send(`**__تم رفضك في فريق 𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞__ <a:nqrheart:1064843033847271454>  

__برجاء تطوير مستواك و التقديم مره اخري__** <a:Red_False:1064842411752300624>`)
  }
   if(message.content === "+map") {
     message.delete()
  message.channel.send(`**__𝐇𝐢 𝐂𝐥𝐢𝐞𝐧𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞 <:evilhat2:1194689908074365051>

  𝐓𝐨 𝐎𝐫𝐝𝐞𝐫 | لطلب منتج : <#${order}> <:evilhat2:1194689908074365051> 
  
  𝐓𝐨 𝐀𝐝𝐬 | لطلب اعلان : <#${supportt}> <:evilhat2:1194689908074365051> 
  
  𝐓𝐇𝐞 𝐏𝐫𝐢𝐜𝐞𝐬 | اسعار الاعلانات : <#${adsprice}> <:evilhat2:1194689908074365051>   
  
  𝐓𝐨 𝐀𝐩𝐩𝐥𝐲 | للتقديم علي التيم : ⁠<#${applyteam}> <:evilhat2:1194689908074365051> 
  
  𝐓𝐨 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 | لو عندك اي مشكله : <#${supportt}> <:evilhat2:1194689908074365051>  
  
  𝐓𝐨 𝐌𝐞𝐝𝐢𝐚𝐭𝐨𝐫 | لطلب وسيط :<#1236320833434026120> <:evilhat2:1194689908074365051> 
  
  𝐓𝐨 𝐅𝐞𝐞𝐝 𝐁𝐚𝐜𝐤 | للتقييمات :<#${feedback}> <:evilhat2:1194689908074365051> __
  
  𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐈𝐧 __𝐃𝐞𝐦𝐨𝐧__<:evilhat2:1194689908074365051> 
  
  𝐥𝐢𝐧𝐤 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 <:evilhat2:1194689908074365051> 
  
  ${link} <:evilhat2:1194689908074365051>  
  
  𝐄𝐧𝐣𝐨𝐲 𝐁𝐫𝐨 <a:emoji_240:1194947871024365578> **`)
      }
  if(message.content === "Qr") {
    message.reply(`https://media.discordapp.net/attachments/1247123864236986409/1251279198778298540/20240602_171749.png?ex=666f5190&is=666e0010&hm=50fd1e44343cbfe3959ecbb01551ccc7ce0c1495874223764d3afa2e5714a01d&=&format=webp&quality=lossless&width=416&height=416`)
  }
  if(message.content === "qr") {
    message.reply(`https://media.discordapp.net/attachments/1247123864236986409/1251279198778298540/20240602_171749.png?ex=666f5190&is=666e0010&hm=50fd1e44343cbfe3959ecbb01551ccc7ce0c1495874223764d3afa2e5714a01d&=&format=webp&quality=lossless&width=416&height=416`)
  }
if(message.content === "$close") {
    message.reply(`$transcript`)
  }
if(message.content === "$close") {
    message.reply(`$delete`)
  }
  if(message.content === prefix+"bot") {
    message.reply(`**Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج


 1-Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

 2-Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

 3-Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سستم , الخ..)

برجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك**`)
  }

  //
  if(message.content === prefix+"design") {
    message.reply(`**Hello Please Fill The List To Help The Designer ・ برجاء ملء الاستماره لمساعده المصمم

 1-Whats The Name Of Your Server And The Summary ・ ما هو اسم سيرفرك و اختصاره

 2-Whats The Color Of Your Design ・ ما هو لون التصميم الذي تريده

 3-Whats The Type Of Design(Classic , Gaming , Store , etc..) ・ ما هو نوع التصميم (Demon , جيمنج , استور , الخ..)

 4-Do You Have An Example Of Your Design(Optional) ・ هل لديك مثال علي التصميم الذي تريده (اختياري)

 5-How Many Hours You Want The Design Finished In It ・ كم عدد الساعات التي تريد ان يتم انهاء التصميم فيها

ThankYou , شكرا لكم**`)
  }
  if(message.content === prefix+"ws") {
    message.delete()
    message.channel.send(`**الـرجـاء إنـتـظـار بـائـ؏ أخـر لـتـوفـيـر طـلـبـڪ

فـي ﺣـالـﺔ عـدم الـرد خـلال 30 دقـيـقـة سـيـتـم إغـلاق الـتـذڪرة مـبـاشـرة

__وشـڪـرا__ <a:flower:1064842909502935060> **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "تفضل") {
    message.delete()
    message.channel.send(`**> <:emoji_162:1246856969185267853> | السلام عليڪم
> <:emoji_162:1246856969185267853> | هـنـا طـاقـم عـمـل ديـمـون
> <:emoji_162:1246856969185267853> | مـعـڪ الـبـائـ؏ __${message.author}__ ڪيف يـمـكـنـنـي خـدمـتـڪ**`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "Offers") {
    message.delete()
    message.channel.send(`**> الـرجـاء قـومـوا بـتـنـزيـل عـروض
> لا تـنـسـوا كـل 5 دقـائـق قـومـوا بـتـنـزيـل عـروض
> او سـوف يـتـم الـتـنـزيـل مـن رتـبـتـك
- <@&1236363459596390560> <:emoji_162:1246856969185267853>  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
  if(message.content === "حول") {
    message.delete()
    message.channel.send(`**> الـرجـاء قـم بـتـحـويـل الـمـبـلـغ الـمـطـلـوب هـنـا
> https://discord.com/channels/1232679222200369233/1236320422035722290 <:tax:1239155958488502353>  **`);
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
   if(message.content === prefix+"rep") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} Team Requirements`)
       .setDescription(`**\`-\` للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع تعويضك

صاحب البلاغ :
اسم السيلر فالديسكورد :
ايدي السيلر فالديسكورد :
القصه :
قم بارسال الدلائل مع دليل التحويل :
**
`)
       .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }

  if(message.content === prefix+"med") {
     message.delete()
     message.channel.send({embeds: [
       new MessageEmbed()
       .setTitle(`${message.guild.name} Team Requirements`)
       .setDescription(`**\`-\` للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع اكمال عمليه الوسطه

ايدي البائع :
السلعه :
المبلغ :
الضرايب علي مين :
**`)
       .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
       .setTimestamp()
       .setColor(color)
       .setThumbnail(message.guild.iconURL())
     ]})
   }
    if(message.content.toLowerCase() === "link") {
    message.channel.send(`**Welcome In __𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞__
link The Server : ${link}
Enjoy Bro <a:flower:1064842909502935060>**`)
  }
    if(message.content === "لينك") {
    message.channel.send(`**Welcome In __𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞__
link The Server : ${link}
Enjoy Bro <a:flower:1064842909502935060>**`)
  }
  if(message.content === "لاين") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content.toLowerCase() === "line") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
    if(message.content === "خط") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
  }
   if(message.content.toLowerCase() === "fb") {
      message.reply(`**<a:redheart:1064843075907760129> شكرا لاختيارك Demon ستور <a:redheart:1064843075907760129>  


  <a:redheart:1064843075907760129> Thanks For Choosing Classic Store <a:redheart:1064843075907760129>  


  <a:flower:1064842909502935060>  رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن 


  <a:flower:1064842909502935060>  Your opinion matters , Please give feedback and mention the name of the person 

  ----------------------------------------------

  Here :
   <#${feedback}>**`)
    }
    
  });

    client.on("ready", async () => {
        client.guilds.cache.forEach(async(guild) => {
          let channelID = '1251788418107572244'; 
          let channel = guild.channels.cache.get(channelID);

          setInterval(() => {
     let azkar = [`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. `,`قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. 
`,`اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. 
`,`اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.`,`أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. `,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ. `,`بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.`,`حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. `,`اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. `,`اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. `,`اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .`,`أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. `,`بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. `,`أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`,`اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. `,`يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْ`,`أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. `,`اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. `,`أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. `,`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. `,`اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.`,`اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. `,`أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ. `,`يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ. `,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ. `,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ. `,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ. `,`
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي.`,`سُبْحانَ رَبِّيَ الْعَظِيمِ. ثلاث مرَّاتٍ.
`,`سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكةُ مِنْ خِيفَتِهِ.`,`لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.`,`
اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,`جَزَاكَ اللَّهُ خَيْراً.`,`الباقيات الصالحات : سبحان الله والحمد لله ، ولا إله إلا الله ،والله أكبر ،و لا حول ولا قوة إلا بالله`,`لاَ إِلَهَ إِلاَّ اللَّهُ الْوَاحِدُ الْقَهّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزيزُ الْغَفَّارُ.`,`بِسْمِ اللَّهِ ثَلَاثًا، أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ سَبْعَ مَرَّاتٍ.`,`وَقَالَ صلى الله عليه وسلم: أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكثِرُوا الدُّعَاءَ.`,`اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.`,`الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلاَكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلاً.`,`رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.`,`
اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، [وَلَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَواتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ] [وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالأَرْضِ] [وَلَكَ الْحَمْدُ] [أَنْت الحق، ووعدك الحق، وقولك الحق، ولقاؤك الحق، والجنة حق، والنار حق، والنبيون حق، ومحمد صلى الله عليه وسلم حق، والساعة حق] [اللهم لك أسلمت، وعليك توكلت، وبك آمنت، وإليك أنبت، وبك خاصمت، وإليك حاكمت. فاغفر لي ما قدمت، وما أخرت، وما أسررت، وما أعلنت] [وما أنت أعلم به مني] [أنت المقدم، وأنت المؤخر لا إله إلا أنت] [أنت إلهي لا إله إلا أنت] [ولا حول ولا قوة إلا بالله].`,`سُبْحـانَ اللهِ وَبِحَمْـدِهِ.`,`أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلاَئِكَةُ.`,`اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.`,`
اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.`,`
أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ.`,`زَوَّدَكَ اللَّهُ التَّقْوَى، وَغَفَرَ ذَنْبَكَ، وَيَسَّرَ لَكَ الخَيْرَ حَيْثُ ما كُنْتَ.`,`اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.
`,` الرَّحْمَنِ الرَّحِيمِ ﴿1﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿2﴾ الرَّحْمَنِ
الرَّحِيمِ ﴿3﴾ مَالِكِ يَوْمِ الدِّينِ ﴿4﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ
نَسْتَعِينُ ﴿5﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿6﴾ صِرَاطَ الَّذِينَ
أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿7﴾.`,`
يَقُولُ: وَأَنَا أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبَّاً، وَبِمُحَمَّدٍ رَسُولاً، وَبِالْإِسْلاَمِ دِينَاً يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ.`,`رَبَّنَا وَلَكَ الْحَمْدُ، حَمْداً كَثيراً طَيِّباً مُبارَكاً فِيهِ.
`,`
أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ ، وَشَرِّ عِبَادِهِ ، وَمَنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَنْ يَحْضُرُونِ.`,`سُبْحانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ.
`,`تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى`,`
سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه`,`
وَقَالَ صلى الله عليه وسلم: يَا عَبْدَ اللَّهِ بْنَ قَيْسٍ أَلاَ أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ؟ فَقُلْتُ: بَلَى يَا رَسُولَ اللَّهِ، قَالَ: قُلْ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.
`,`
سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ ثلاثاً وثلاثين لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`]
  let randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];

      const embed = new MessageEmbed()
        .setColor(color) 
        .setTitle('Azkar')
        .setDescription(`**${randomAzkar}**`)
        .setImage(line) 
        .setTimestamp();

      channel.send({ embeds: [embed] })
        .then(() => console.log('تم إرسال الرسالة بنجاح'))
        .catch(error => console.error(`خطأ أثناء إرسال الرسالة: ${error.message}`));
    }, 600000); 
});
});
client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `Are you sure you would like to close this ticket?`) {
      EgyptTeam.delete()
      EgyptTeam.channel.send(`$transcript`)
    }
  })

//welcome sellers
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "welcome-seller")) {

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**No Haved Perm In Role**`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("**Pls Mention Seller :1M_48:**")
    if (!args) return message.reply("**Pls Mention Roles sell :1M_48:**")
    client.channels.cache.get(welcomesellerroom).send(` **Welcome To Team Of __𝖣𝖾𝗆𝗈𝗇 𝖲𝗍𝗈𝗋𝖾__ :nqrheart:**

**Seller : ${user}** <a:emoji_211:1064842844172455956>
**Seller Role: ${args}** <a:megaright:1064843013068693565> 
**Please Read The Rules To Avoid Take Warns <#${rulest}> <a:ss_4:1110838696116224061>**
**Thank You To Apply To Demon Team <a:true:1064843178483666964>**

**𝖤𝗇𝗃𝗈𝗒 <3 <a:flower:1064842909502935060>**`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(color)
      ]
    })
    message.reply("**Done <a:sw1xo:1064843153049395310>**")
  }
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "num")) {
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**You Dont Have Permisssion**`);
    let user = message.mentions.users.first();
    let number = message.content.split(" ").slice(2).join(" ");
    if (!user) return message.reply("**𝖯𝗅𝖾𝖺𝗌𝖾 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋 <a:1M_48:1064842032176185345>**");
    if (!number) return message.reply("**𝖯𝗅𝖾𝖺𝗌𝖾 𝖶𝗋𝗂𝗍𝖾 𝖭𝗎𝗆𝖻𝖾𝗋 𝖲𝖾𝗅𝗅𝖾𝗋 <a:1M_48:1064842032176185345>**");
    
    const embed = new MessageEmbed()
      .setTitle('**𝐍𝐮𝐦𝐛𝐞𝐫 𝐒𝐞𝐥𝐥𝐞𝐫**')
      .setDescription(`**𝖭𝖺𝗆𝖾 : ${user} <:vote_black:1064843227968053260>
                    𝖨𝖣 : ${user.id} <a:true:1064843178483666964>
                    𝖭𝗎𝗆𝖻𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 : ${number} <a:megaright:1064843013068693565>
<a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290><a:awhiteline:1153373878530355290>
                    𝖠𝖽𝗆𝗂𝗇 𝖨𝗇𝖿𝗈:
                    𝖭𝖺𝗆𝖾 : ${message.author.username} <a:emoji_211:1064842844172455956>
                    𝖴𝗌𝖾𝗋 : <@${message.author.id}> <a:ss_4:1064843136276365412>
                    𝖨𝖣 : ${message.author.id} <a:true:1064843178483666964>**`)
      .setColor(color)
      .setThumbnail(message.guild.iconURL())
      .setImage(line);

    client.channels.cache.get(sellernumber).send({ embeds: [embed] });
    message.reply("**𝖲𝖾𝗅𝗅𝖾𝗋 𝖭𝗎𝗆𝖻𝖾𝗋 𝖱𝖾𝗀𝗂𝗌𝗍𝖾𝗋𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 <a:sw1xo:1064843153049395310>**");
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "upgrade")) {
    const owner = ["1118528978584604702"]  

    if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("**Pls Mention Seller <a:1M_48:1064842032176185345>**") 
    if (!args) return message.reply("**Pls Mention Roles sell <a:1M_48:1064842032176185345>**")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(`**Upgrade Team Of __𝖣𝖾𝗆𝗈𝗇 𝖲𝗍𝗈𝗋𝖾__ <a:nqrheart:1064843033847271454>**

**Seller : ${user}** <a:emoji_211:1064842844172455956>
**Upgraded To : ${args}** <a:megaright:1064843013068693565>
**Keep Going And Thank You For Activaiting In __Demon Store__** <a:true:1064843178483666964>

**𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 <a:redheart:1064843075907760129>**`)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(color)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(color) 
      .setTimestamp()
      .setDescription(
        `** 
𝖧𝖾𝗅𝗅𝗈 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖱𝖾𝖺𝖼𝗁𝖾𝖽 {${args}} <a:true:1064843178483666964>

𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 : ${user} <a:emoji_211:1064842844172455956>

𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 𝖣𝖾𝗆𝗈𝗇 𝖲𝗍𝗈𝗋𝖾
 <a:flower:1064842909502935060>

𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 <a:redheart:1064843075907760129>
**`)
      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗈𝗋 ${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> 𝖣𝗈𝗇𝖾 <a:sw1xo:1064843153049395310>")
  }
})
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let auto = autolinerooms
  if(auto == null) return;
  if(auto.includes(message.channel.id)) {
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setImage(line)
    ]})
  }
})

  client.on('messageCreate', async (message) => {
      if (message.author.id === "557628352828014614" && message.channel.parentId === ordercategory) {
          let member = message.mentions.members.first();
          if (!member || member.bot) return;

          let roleId = "1236363545805979719";
          let role = message.guild.roles.cache.get(roleId);

          if (!role) {
              console.error(`Role with ID ${roleId} not found.`);
              return;
          }

          if (member.roles.cache.has(roleId)) {
              return;
          } else {
              member.roles.add(role.id).then(() => {
                  return message.channel.send({
                      content: `**Done Added __𝐃𝐞𝐦𝐨𝐧丶𝐂𝐥𝐢𝐞𝐧𝐭                      __
To Client : ${member.user.username}**`
                  });
              }).catch(error => {
                  console.error("Error adding role:", error);
              });
          }
      }
  });

      client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "inrole")) {
            let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
            let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
             if (!trole) {
                 return message.reply(`**:rolling_eyes: Please mention role id**`)
             } else {
                 const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
          message.reply({embeds: [
           new MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))

      .setThumbnail(message.author.avatarURL({dynamic:true}))
            .addFields([
          {
          name: `List of users in ${trole.name} role : (${trole.members.size})`,
          value: `**${roleMember}**`
      },
      ])  
      .setColor(color)
      .setImage(line)
      .setFooter(`Members in this role ${trole.members.size}`)]})
        }
        }
       }) 

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing bot avatar to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send('**Bot Avatar Has Been Changed ✅**')
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! 🚫: Incorrect Link Or Ratelimit**')
          });
      }
  });


client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedback) return;
    message.reply({embeds:[
      new MessageEmbed()
      .setColor(color)
      .setDescription(`
**
𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐆𝐢𝐯𝐢𝐧𝐠 𝐔𝐬 𝐅𝐞𝐞𝐝𝐛𝐚𝐜𝐤 <a:redheart:1064843075907760129>

𝐖𝐞 𝐇𝐨𝐩𝐞 𝐘𝐨𝐮 𝐕𝐢𝐬𝐢𝐭 𝐃𝐞𝐦𝐨𝐧 𝐒𝐭𝐨𝐫𝐞 𝐀𝐠𝐚𝐢𝐧 <a:flower:1064842909502935060> 
**
`)
      .setImage(line)
    ]})
  });

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'send')) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply(`**You don't have permissions**`);
        }

        let id = message.content.split(' ')[1];
        let user = message.mentions.members.first() || message.guild.members.cache.get(id);
        let argss = message.content.split(' ').slice(2).join(' ');

        if (!user) {
            return message.channel.send(`**Please mention a member or provide their ID**`);
        }

        if (!argss) {
            return message.channel.send(`**Please send a message**`);
        }

        if (user.user.bot || user.id === message.author.id) {
            return message.channel.send(`**You cannot send a message to a bot or yourself**`);
        }

        let attach = message.attachments.first();
        if (attach) {
            user.send({ content: argss, files: [attach] }).then(m => {
                message.channel.send(`**Done, message sent**`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user**`);
            });
        } else {
            user.send(argss).then(m => {
                message.channel.send(`**Done, message sent**`);
            }).catch(err => {
                return message.channel.send(`**Can't send a message to this user**`);
            });
        }
    }
});




client.on('messageCreate', async message => {
        if(message.content.startsWith(prefix + 'unbanall')) {
                let b = await message.guild.bans.fetch()
                if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
                b.forEach(ban => message.guild.members.unban(ban.user))
                        message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
        }
});



client.on('messageCreate', async message => {
    if(message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')){

      const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
      const name = message.content.split(" ").slice(2).join(" ")

      if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
      if(!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

      if(!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
      if(!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

      member.setNickname(name).catch(() => {message.reply('لا يمكنني تغيير اسم هذا العضو !')})
    }
})


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'lock')) {
    // قفل القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const lockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('Unlock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('lock')
          .setLabel('Lock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has been locked <a:sw1xo:1064843153049395310>**`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [lockRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Channel ${message.channel} has been unlocked <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }

      if (interaction.customId === 'lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Channel ${message.channel} has been locked <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [lockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'unlock')) {
    // فتح القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const unlockRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('lock')
          .setLabel('Lock')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('unlock')
          .setLabel('Unlock')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has been unlocked <a:sw1xo:1064843153049395310>**`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { SEND_MESSAGES: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [unlockRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'lock') {
        // قفل القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: false }
        );
        embed.setDescription(`**Channel ${message.channel} has been locked <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }

      if (interaction.customId === 'unlock') {
        // فتح القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { SEND_MESSAGES: true }
        );
        embed.setDescription(`**Channel ${message.channel} has been unlocked <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [unlockRow] });
      }
    });
  }
});


client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'hide')) {
    // إخفاء القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const hideRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has been hidden <a:sw1xo:1064843153049395310>**`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: false }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [hideRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Channel ${message.channel} has been shown <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Channel ${message.channel} has been hidden <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [hideRow] });
      }
    });
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'show')) {
    // إظهار القناة
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return;

    const showRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('hide')
          .setLabel('Hide')
          .setStyle('SUCCESS'),
        new MessageButton()
          .setCustomId('show')
          .setLabel('Show')
          .setStyle('DANGER'),
      );

    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Manage Channel**')
      .setDescription(`**Channel ${message.channel} has been shown <a:sw1xo:1064843153049395310>**`)
      .setImage(line);

    await message.channel.permissionOverwrites.edit(
      message.guild.roles.everyone,
      { VIEW_CHANNEL: true }
    );

    const sentMessage = await message.channel.send({
      embeds: [embed],
      components: [showRow],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: 'BUTTON',
      max: 100,
      time: null,
    });

    collector.on('collect', async (interaction) => {
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return;

      if (interaction.customId === 'hide') {
        // إخفاء القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: false }
        );
        embed.setDescription(`**Channel ${message.channel} has been hidden <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }

      if (interaction.customId === 'show') {
        // إظهار القناة
        await message.channel.permissionOverwrites.edit(
          message.guild.roles.everyone,
          { VIEW_CHANNEL: true }
        );
        embed.setDescription(`**Channel ${message.channel} has been shown <a:sw1xo:1064843153049395310>**`);
        await interaction.update({ embeds: [embed], components: [showRow] });
      }
    });
  }
});


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'unban')) {
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if(!id)  return message.reply(`** 😕 Please mention member or id **`);
    if(isNaN(id)) {
       return message.reply(`** 😕 Please mention member or id **`);
    } else {
message.guild.members.unban(id).then(mmm => {
        message.reply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
      }
    }
}) 


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    let c = message.content.split(' ')
    if (c[0] == prefix + 'ban') {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if(!user) return message.reply(`** 😕 Please mention member or id **`);
 if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
    }
}) 


client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setImage(line)
      .setTitle(`uptime:`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
})


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "g-role")) {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)

    const theRole = message.mentions.roles.first();
    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply('**Please Mention A User !**')
    if (!theRole) return message.reply('**Please Mention A Role !**')

    theUser.roles.add(theRole)
      .then(() => {
        message.reply("Done ✅")
      })
      .catch((t) => {
        message.reply("Error 🚫 : " + t.message)
      })
  }
})


client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith(prefix + "r-role")) {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
    const theRole = message.mentions.roles.first();
    const theUser = message.mentions.members.first();

    if (!theUser) return message.reply('**Please Mention A User !**')
    if (!theRole) return message.reply('**Please Mention A Role !**')

    theUser.roles.remove(theRole)
      .then(() => {
        message.reply("Done ✅")
      })
      .catch((t) => {
        message.reply("Error 🚫 : " + t.message)
      })
  }
})




client.on('channelCreate', message => {
  if (message.parentId !== ordercategory) return;
  setTimeout(() => {
      message.send(`**السلام عليكم ورحمه الله وبركاته .. ** <a:true:1064843178483666964> 
**معك طاقم العمل لدي Demon ستور في تذكره __الطلب__ <a:ss_4:1064843136276365412> 

__ يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكنني مساعدتك بأكمل وجهه وتأكيد طلب المنتج الخاص بك ، سوف امنشن فريق السلعه الخاص بك بطلبك ويرجي التحلي بالصبر وانتظار بائع من فريق العمل ، يرجي العلم أن في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره والعمل علي توفير المنتج قريبا__ .. <a:flower:1064842909502935060>**`)
  }, 3000);
             })


             client.on('channelCreate', async (channel) => {
              if (channel.parentId !== applycategory) return;
              setTimeout(async () => {
                channel.send({
                  content: `**\`-\` السلام عليكم ورحمة الله وبركاته <a:true:1064843178483666964>
                        \`-\` معك طاقم العمل لدي ديمون ستور في تذكرة التقديم <a:ss_4:1064843136276365412> 
                        برجاء تحديد جنسيتك من خلال الضغط على القائمة الآتية <a:flower:1064842909502935060>
                        **`,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 3,
                          custom_id: 'select_language',
                          placeholder: 'قم بتحديد جنسيتك من خلال الضغط هنا للاستمرار في التقديم لطاقم العمل',
                          options: [
                            {
                              label: 'مصري', 
                              value: 'egyptian'
                            },
                            {
                              label: 'عربي',
                              value: 'arabic'
                            },
                            {
                              label: 'English',
                              value: 'ENGLISH'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                });
            
                channel.send({
                  content: `**ملحوظات مهمة**`,
                  components: [
                    {
                      type: 1,
                      components: [
                        {
                          type: 2,
                          style: 'PRIMARY',
                          custom_id: 'notes',
                          label: 'ملحوظات مهمة',
                          emoji: '<a:emoji_60:1182828043799101581>'
                        }
                      ]
                    }
                  ]
                });
              }, 2000);
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**\`ملحوظات مهمة للغاية\`
            
            1- أهم حاجة الاحترام المتبادل بينك وبين طاقم العمل داخل السيرفر.
                        
            2- يجب أن تكون الفيدباكات من سيرفرات مشهورة وموثوق بها.
                        
            3- إذا كنت تجلب ورنات أكثر من 5 مرات، سيتم تصفيتك.
                        
            4- في حال تم تصفيتك من السيرفر مرتين سابقًا، لن يُسمح لك بالتقديم مرة أخرى.**`,
                  ephemeral: true
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isSelectMenu()) return;
            
              const language = interaction.values[0];
            
              if (language === 'egyptian') {
                const modalEgyptian = new Modal()
                  .setCustomId('myModalEgyptian')
                  .setTitle('Apply Team Submit (Egyptian)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('اسمك')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('عمرك')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('رقم الكاش')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('معاك 30 فيد باك من ستورات ولا لا ؟')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('هتبيع اي')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEgyptian.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEgyptian);
              } else if (language === 'arabic') {
                const modalArabic = new Modal()
                  .setCustomId('myModalArabic')
                  .setTitle('Apply Team Submit (Arabic)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('اسمك')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('عمرك')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('مده الخبره في البيع والشراء')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('قم بارسال 20 فيدباك ( تعاملات خاص او شوب )')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('ماذا سوف تبيع')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalArabic.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalArabic);
              } else if (language === 'ENGLISH') {
                const modalEnglish = new Modal()
                  .setCustomId('myModalEnglish')
                  .setTitle('Apply Team Submit (English)');
                const rname = new TextInputComponent()
                  .setCustomId('rname')
                  .setLabel('Name')
                  .setStyle('SHORT');
            
                const age = new TextInputComponent()
                  .setCustomId('age')
                  .setLabel('Age')
                  .setStyle('SHORT');
            
                const svcount = new TextInputComponent()
                  .setCustomId('svcount')
                  .setLabel('The names of the servers you work with')
                  .setStyle('SHORT');
            
                const fbcount = new TextInputComponent()
                  .setCustomId('fb')
                  .setLabel('Send 20 feedbacks from different servers')
                  .setStyle('SHORT');
            
                const roles = new TextInputComponent()
                  .setCustomId('roles')
                  .setLabel('The names of the rolls you apply for ')
                  .setStyle('SHORT');
            
                const name = new MessageActionRow().addComponents(rname);
                const agge = new MessageActionRow().addComponents(age);
                const svvcount = new MessageActionRow().addComponents(svcount);
                const fbvcount = new MessageActionRow().addComponents(fbcount);
                const rovles = new MessageActionRow().addComponents(roles);
            
                modalEnglish.addComponents(name, agge, svvcount, fbvcount, rovles);
            
                await interaction.showModal(modalEnglish);
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
            1- The most important need is mutual respect between you and the staff inside the server.
                        
            2- Feedbacks must be from famous and reliable servers.
                        
            3- If you fetch ringtones more than 5 times, you will be filtered.
                        
            4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isModalSubmit()) return;
            
              const modalId = interaction.customId;
            
              if (modalId === 'myModalEgyptian') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > الاسم : ${name}
            
                    > العمر : ${rname}
            
                    > رقم الكاش : ${rrname}
            
                    > كام فيدباك : ${rrrname}
            
                    > اسماء الرولات التى تقدم عليها : ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color) 
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
            
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: '<:Staff:1178094038281359582>'
                    }
                  );
            
                await interaction.reply({
                  content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalArabic') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > الاسم : ${name}
            
                    > العمر : ${rname}
            
                    > اسماء السيرفرات : ${rrname}
            
                    > كام فيدباك : ${rrrname}
            
                    > اسماء الرولات التى تقدم عليها : ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'ملحوظات مهمة قبل التقديم',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'mention',
                      label: 'منشن الإدارة',
                      emoji: '<:Staff:1178094038281359582>'
                    }
                  );
            
                await interaction.reply({
                  content: `> ** تم اكمال التقديم. يرجى الانتظار الادارة لحين الرد عليك**`,
                  embeds: [embed],
                  components: [row]
                });
              } else if (modalId === 'myModalEnglish') {
                const name = interaction.fields.getTextInputValue('rname');
                const rname = interaction.fields.getTextInputValue('age');
                const rrname = interaction.fields.getTextInputValue('svcount');
                const rrrname = interaction.fields.getTextInputValue('fb');
                const rrrrname = interaction.fields.getTextInputValue('roles');
            
                const embed = new MessageEmbed()
                  .setDescription(`**\`\`\` New Apply Team Submition \`\`\`
                    > Name: ${name}
            
                    > Age: ${rname}
            
                    > Server names: ${rrname}
            
                    > Feedback: ${rrrname}
            
                    > Roles you apply for: ${rrrrname}**`)
                  .setImage(line)
                  .setColor(color)
                  .setThumbnail(interaction.guild.iconURL({ size: 128 }));
                
                const row = new MessageActionRow()
                  .addComponents(
                    {
                      type: 2,
                      style: 'PRIMARY',
                      custom_id: 'notes',
                      label: 'Important notes before applying',
                      emoji: '<a:emoji_60:1182828043799101581>',
                      ephemeral: true
                    },
                    {
                    type: 2,
                    style: 'PRIMARY',
                    custom_id: 'mention',
                    label: 'Management mention',
                    emoji: '<:Staff:1178094038281359582>'
                  }
                );
            
                await interaction.reply({
                  content: `> **Application completed. Please wait for the administration to respond.**`,
                  embeds: [embed],
                  components: [row]
                });
              }
            });
            
            client.on('interactionCreate', async (interaction) => {
              if (!interaction.isButton()) return;
            
              if (interaction.customId === 'notes') {
                await interaction.reply({
                  content: `**'Very Important Notes'
            
            1- The most important need is mutual respect between you and the staff inside the server.
                        
            2- Feedbacks must be from famous and reliable servers.
                        
            3- If you fetch ringtones more than 5 times, you will be filtered.
                        
            4- If you were filtered from the server twice previously, you will not be allowed to apply again.**`,
                  ephemeral: true
                });
              } else if (interaction.customId === 'mention') {
                await interaction.reply(`<@&${testerrole}>`, { ephemeral: false });
              }
            });

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + 'embed')) {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);

    let args = message.content.split(' ').slice(1).join(' ');

    if (!args) return message.reply('** :x: Please select a message **');

    message.delete();

    let embed = new MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setDescription(`${args}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor(color) 
      .setTimestamp()
      .setImage(line);

    message.channel.send({ embeds: [embed] });
  }
});



client.on('message', message => {
  if (message.content.includes('has transferred')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('قام بتحويل')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})

client.on('message', message => {
  if (message.content.includes('Your Tax Is')) {

    const TransformEmbed = new MessageEmbed()
      .setImage(line)
      .setColor(color)
    message.channel.send({ embeds: [TransformEmbed] })
  }
})
client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);

        let m = await message.reply({ content: `
> **  Your Tax Is : __${tax}__**` });
})

client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.channel.name.startsWith("ticket")) return;
  if(!message.member.roles.cache.has(team)) return;
  let mss = ["اتفضل" , "كيف اقدر اساعدك" ,"تفضل" ]
  if(!mss.includes(message.content)) return;
  db.add(`respond_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`level_${message.author.id}`)
    if(levelll == null) {
      db.set(`level_${message.author.id}` , {
        xp : 0,
        nid : message.author.id
      })
    }
      let levell = db.get(`level_${message.author.id}`)
      let level = levell.xp;

  await db.set(`level_${message.author.id}` , {
        xp : Math.floor(level + 1),
        nid : message.author.id
      })
})

//closeticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$close" ]
  if(!mss.includes(message.content)) return;
  db.add(`closedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})
//rename ticket support point done
client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  let mss = [ "$rename" ]
  mss.forEach(ms => {
    if(!message.content.includes(ms)) return;
  })
  if(!message.channel.name.startsWith("ticket")) return;
  db.add(`renamedtickets_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 1),
        id : message.author.id
      })
})

client.on('channelCreate', async (message) => {
  if (message.parentId != supportcategory) return;
  setTimeout(() => {
    message.send({
      content: `** السلام عليكم ورحمة الله وبركاته <a:true:1064843178483666964> 
معك طاقم العمل لدي Demon في تذكرة __الدعم الفني __  <a:ss_4:1064843136276365412> 
**__ كل ما عليك هو كتابة مشكلتك أو استفسارك وانتظار ألرد __ <a:flower:1064842909502935060>

**لأستلام التكت اضغط علي  __ Claim__ <a:flower:1064842909502935060>**`,
      components: [
        new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel("Claim")
              .setStyle("PRIMARY")
              .setCustomId("claim")
          )
  ]})
     }, 2000); 
})

client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "claim") {
  if(!interaction.member.roles.cache.has(support)) return;
  if(!interaction.channel.name.startsWith("ticket")) return;
        db.add(`supportticketclaims_${interaction.guild.id}_${interaction.user.id}` , 1)

        let levelll = db.get(`support_${interaction.user.id}`)
    if(levelll == null) {
      db.set(`support_${interaction.user.id}` , {
        poi : 0,
        id : interaction.user.id
      })
    }
      let levell = db.get(`support_${interaction.user.id}`)
      let level = levell.poi;

  await db.set(`support_${interaction.user.id}` , {
        poi : Math.floor(level + 3),
        id : interaction.user.id
      })
       interaction.channel.setName(`${interaction.member.nickname}`)
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setDescription(`> \`-\`**${interaction.member.nickname} | Done Claimed Ticket <a:sw1xo:1064843153049395310>**`)
      ]})
    }
})


client.on("messageCreate" , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(support)) return;
  if(message.channel.id !== "1226941270233059448") return;
 if (message.attachments.size == 0) return;

  db.add(`warngived_${message.guild.id}_${message.author.id}` , 1)

        let levelll = db.get(`support_${message.author.id}`)
    if(levelll == null) {
      db.set(`support_${message.author.id}` , {
        poi : 0,
        id : message.author.id
      })
    }
      let levell = db.get(`support_${message.author.id}`)
      let level = levell.poi;

  await db.set(`support_${message.author.id}` , {
        poi : Math.floor(level + 3),
        id : message.author.id
      })
})




  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
    if(message.channel.id !== offerroom) return;
    if(!message.member.roles.cache.has(team)) return;
    db.add(`offer_${message.guild.id}_${message.author.id}` , 1)

            let levelll = db.get(`level_${message.author.id}`)
      if(levelll == null) {
        db.set(`level_${message.author.id}` , {
          xp : 0,
          nid : message.author.id
        })
      }
        let levell = db.get(`level_${message.author.id}`)
        let level = levell.xp;

    await db.set(`level_${message.author.id}` , {
          xp : Math.floor(level + 2),
          nid : message.author.id
        })
  })


  client.on("messageCreate" , async(message) => {
    if(message.author.bot) return;
     let feedbackroom = feedback
    if(message.channel.id !== feedbackroom) return;
    let user = message.mentions.members.first()
    if(!user.roles.cache.has(team)) return;
    if(message.author.id === user.id) return;

    db.add(`feeed_${message.guild.id}_${user.id}` , 1)

            let levelll = db.get(`level_${user.id}`)
      if(levelll == null) {
        db.set(`level_${user.id}` , {
          xp : 0,
          nid : user.id
        })
      }
        let levell = db.get(`level_${user.id}`)
        let level = levell.xp;

    await db.set(`level_${user.id}` , {
          xp : Math.floor(level + 3),
          nid : user.id
        })

  })



  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "safagag") {
      if (!message.member.roles.cache.has(team)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].xp) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].nid);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].xp}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === prefix + "Pnt") {
      if (!message.member.roles.cache.has(support)) return;
      let data = db.fetchAll();
      let users = [];
      for (let key in data) {
        if (data[key].poi) {
          users.push(data[key]);
        }
      }
      let new_data = users.sort((a, b) => parseFloat(b.poi) - parseFloat(a.poi));
      let num = new_data.length;
      let top = '';
      if (num > 15) num = 15;
      for (let i = 0; i < num; i++) {
        let user = message.guild.members.cache.get(new_data[i].id);
        let username = user ? user.nickname : 'Unknown User';
        top += `**#${i + 1} | ${username} | ${new_data[i].poi}**\n`;
      }

      let embed = new MessageEmbed()
        .setDescription(`${top}`)
        .setColor(color)
        .setImage(line)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setAuthor("Support Points Leadboard", client.user.displayAvatarURL());

      await message.reply({ embeds: [embed] });
    }
  });

  client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();
   if(command === "tax") {
    let args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
  if (message.author.bot) return;
    if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
  else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
  else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
  else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
  else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
  else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
    let args2 = parseInt(args1)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    if (!args2) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
    if (isNaN(args2)) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
    if (args2 < 1) return message.reply(`
  > ** Error It Must Be Larger Than 1 ⚠⚠ **`);
      let row = new MessageActionRow()
    .addComponents(
              new MessageButton()
      .setCustomId(`first_embed`)
      .setLabel("Mediator")
      .setEmoji("1246856969185267853")
      .setStyle('SUCCESS')
    );
    let row2 = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId(`2_embed`)
      .setLabel("Back")
      .setEmoji("1246856969185267853")
      .setStyle('DANGER')
  );
      let m = await message.reply({ content: `
  > **  Your Tax Is : __${tax}__**` , components: [row]});
      let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
      collector.on('collect', async i => {
        if (i.customId === 'first_embed') {
                m.edit({ content: `
  > **  Your Tax Is : __${tax4}__**`, components: [row2]})
                row
                i.deferUpdate()
        }
        if (i.customId === '2_embed') {
        m.edit({ content: `
  > **  Your Tax Is : __${tax}__**`, components: [row] })

                i.deferUpdate()
        } else {
          return;
        }
     });

   }
  if (command === "-Point") {
    let user = message.mentions.members.first() || message.member;
    if (!user.roles.cache.has(team)) return message.reply(`> **You Are Not In Our Team**`);
    let oferpint = db.get(`offer_${message.guild.id}_${user.id}`);
    if (oferpint == null) oferpint = 0;

    let fedpint = db.get(`feeed_${message.guild.id}_${user.id}`);
    if (fedpint == null) fedpint = 0;

    let respint = db.get(`respond_${message.guild.id}_${user.id}`);
    if (respint == null) respint = 0;

    let levelll = db.get(`level_${user.id}`);
    if (levelll == null) {
      db.set(`level_${user.id}`, {
        xp: 0,
        nid: user.id,
      });
    }

    let levell = db.get(`level_${user.id}`);
    let level = levell.xp;

    message.reply(`
  > **Hey ${user} <a:ss_4:1064843136276365412>** 

  > **Feedbacks : \`${fedpint}\`  <a:true:1064843178483666964>**

  > **Offers : \`${oferpint}\` <a:true:1064843178483666964>** 

  > **Respond Tickets : \`${respint}\` <a:true:1064843178483666964>** 

  > **Total Points : \`${level}\` <a:true:1064843178483666964>** 

  ====================

  **__للمعلومه يتم احتساب النقاط عن طريق ان الفيدباك الواحد عليه 3 نقاط و الاوفر الواحد عليه نقطتين و رد التيكت الواحد عليه نقطه واحده فقط. <a:true:1064843178483666964>__**`);
  }
 if (command === 'sePnts') {
  let user = message.mentions.members.first() || message.member;
  if (!user.roles.cache.has(support)) return message.reply(`> **You Haven't Ticket Support Role**`);

  let clpint = db.get(`closedtickets_${message.guild.id}_${user.id}`) || 0;
  let repint = db.get(`renamedtickets_${message.guild.id}_${user.id}`) || 0;
  let warpint = db.get(`warngived_${message.guild.id}_${user.id}`) || 0;
  let claimedsupporttic = db.get(`supportticketclaims_${message.guild.id}_${user.id}`) || 0;

  let levell = db.get(`support_${user.id}`);
  if (!levell) {
    db.set(`support_${user.id}`, {
      poi: 0,
      id: user.id,
    });
    levell = { poi: 0 };
  }

  let level = levell.poi || 0;

  message.reply(`
  > **Hey ${user} <a:ss_4:1064843136276365412>** 

  > **Close Tickets : \`${clpint}\` <a:true:1064843178483666964>**

  > **Renamed Order Tickets : \`${repint}\` <a:true:1064843178483666964>** 

  > **Claimed Technical Support Tickets \`${claimedsupporttic}\` <a:true:1064843178483666964>** 

  > **Warn Gived \`${warpint}\` <a:true:1064843178483666964>** 

  > **Total Points : \`${level}\` <a:true:1064843178483666964>** 

  ====================`);
}

 if(command === "come") {
  const user = message.mentions.members.first()
  if (!user) return message.reply(`**<a:1M_48:1064842032176185345> | I Can't Find This User!**`)
    if (user.id == message.author.id) return message.reply(`**<a:1M_48:1064842032176185345> | You Can't Send To Yourself!**`)
    if (user.user.bot) return message.reply(`**<a:1M_48:1064842032176185345> | You Can't Send To Bot!**`)
          let inv = await message.channel.createInvite(message.channel)
    user.send(`** Sorry For Disturbance You Have Requested <a:16:1064841935476498523>

 CHANNEL : ${message.channel} <a:DesignS:1064842187952619550>

 You Request By : ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag} <a:emoji_211:1064842844172455956>

 link Server Link : { ${link} } <a:megaright:1064843013068693565>
    **`).then(() => {
   message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`**<a:DesignS:1064842187952619550> | Please Wait ....**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(`**<a:sw1xo:1064843153049395310> | Done Message Has Been Send To ${user}**

**<a:DesignS:1064842187952619550> | Please Wait**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }),1800)
})   
}).catch((y) => {
               message.reply({
    embeds : [
      new MessageEmbed()
      .setDescription(`> **<a:DesignS:1064842187952619550> | Please Wait ....**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
    ]
  }).then((t) => {
    setTimeout(() => t.edit({
      embeds : [
        new MessageEmbed()
      .setDescription(`<a:1M_48:1064842032176185345> | **Error __${y.message}__**`)
      .setImage(line)
      .setAuthor(message.author.username, message.author.avatarURL()) 
      .setColor(color)
      ]
    }),1800)
               })
})
 }
})
client.on('messageCreate', async message => {
    if (message.content.toLowerCase().startsWith("تشفير+") && !message.author.bot) {
        let args = message.content.slice("تشفير+".length).trim();

        if (args.length === 0) {
            return message.reply("**من فضلك اكتب الرسالة التي تريد تشفيرها <a:1M_48:1064842032176185345>**");
        }

        let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");

        const reply = await message.reply("**تم إرسال الرسالة بالتشفير في الخاص <a:sw1xo:1064843153049395310>**");
        message.author.send(content).then(() => {
            setTimeout(() => {
                message.delete();
            }, 10000);

            
            setTimeout(() => {
                reply.delete();
            }, 10000);
        });
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    let prefix = "r";
    // تحويل المحتوى إلى أحرف صغيرة ثم التحقق من البادئة
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!message.member.roles.cache.has(team)) return;

    if (command === 'e') {
        const nickname = message.member.nickname || message.author.username;
        if (
            message.channel.name.startsWith('ticket') || 
            message.channel.name.startsWith('need') || 
            message.channel.name.startsWith('sell') || 
            message.channel.name.startsWith('by')
        ) {
            try {
                const newChannelName = `by-${nickname}`; // استخدام القوالب النصية لتكوين اسم القناة
                await message.channel.setName(newChannelName);
                await message.delete();
                await message.channel.send(`**مرحباً بك في خادم ويرا ستور تم تحديد طلبك ومعك البائع : ${message.author} لإكمال طلبك

ملحوظة بسيطة : اذا كان المبلغ يتخطي ال 200 الف كريدت من فضلك قم بطلب وسيط من هنا لعدم النصب**`);
            } catch (error) {
                console.error('Error changing channel name:', error);
            }
        }
    }
});


                               
                                        client.on("messageCreate", message => {
  if (message.content.startsWith('+font')) {
    let words = message.content.split(" ").slice(1).join(" ");
let words2 = words.replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replace("a", "𝐚").replace("A", "𝐀").replace("b", "𝐛").replace("B", "𝐁").replace('c', "𝐜").replace("C", "𝐂").replace("d", "𝐝").replace("D", "𝐃").replace("e", "𝐞").replace("E", "𝐄").replace("f", "𝐟").replace("F", "𝐅").replace("g", "𝐠").replace("G", "𝐆").replace("h", "𝐡").replace("H", "𝐇").replace("i", "𝐢").replace("I", "𝐈").replace("j", "𝐣").replace("J", "𝐉").replace("k", "𝐤").replace("K", "𝐊").replace("l", "𝐥").replace("L", "𝐋").replace("m", "𝐦").replace("M", "𝐌").replace("n", "𝐧").replace("N", "𝐍").replace("o", "𝐨").replace("O", "𝐎").replace("p", "𝐩").replace("P", "𝐏").replace("q", "𝐪").replace("Q", "𝐐").replace("r", "𝐫").replace("R", "𝐑").replace("s", "𝐬").replace("S", "𝐒").replace("t", "𝐭").replace("T", "𝐓").replace("u", "𝐮").replace("U", "𝐔").replace("v", "𝐯").replace("V", "𝐕").replace("w", "𝐰").replace("W", "𝐖").replace("x", "𝐱").replace("X", "𝐗").replace("y", "𝐲").replace("Y", "𝐘").replace("z", "𝐳").replace("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
    if (!words) return message.channel.send('> ** Please Write a Word :x: !**')
    message.channel.send(`${words2}`)
  }
});

                                        client.on("messageCreate", message => {
  if (message.content.startsWith('+font2')) {
    let words = message.content.split(" ").slice(2).join(" ");
    let words3 = words.replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭").replace("a", "𝗮").replace("A", "𝗔").replace("b", "𝗯").replace("B", "𝗕").replace('c', "𝗰").replace("C", "𝗖").replace("d", "𝗱").replace("D", "𝗗").replace("e", "𝗲").replace("E", "𝗘").replace("f", "𝗳").replace("F", "𝗙").replace("g", "𝗴").replace("G", "𝗚").replace("h", "𝗵").replace("H", "𝗛").replace("i", "𝗶").replace("I", "𝗜").replace("j", "𝗷").replace("J", "𝗝").replace("k", "𝗸").replace("K", "𝗞").replace("l", "𝗹").replace("L", "𝗟").replace("m", "𝗺").replace("M", "𝗠").replace("n", "𝗻").replace("N", "𝗡").replace("o", "𝗼").replace("O", "𝗢").replace("p", "𝗽").replace("P", "𝗣").replace("q", "𝗾").replace("Q", "𝗤").replace("r", "𝗿").replace("R", "𝗥").replace("s", "𝘀").replace("S", "𝗦").replace("t", "𝘁").replace("T", "𝗧").replace("u", "𝘂").replace("U", "𝗨").replace("v", "𝘃").replace("V", "𝗩").replace("w", "𝘄").replace("W", "𝗪").replace("x", "𝘅").replace("X", "𝗫").replace("y", "𝘆").replace("Y", "𝗬").replace("z", "𝘇").replace("Z", "𝗭")
    if (!words) return message.channel.send('> ** Please Write a Word :x: !**')
    message.channel.send(`${words3}`)
  }
});

                                              client.on("message", message => {
  if (message.content == ("+io") || message.content === "خمول") {

message.channel.send(`**__<a:classiq:1184434562441433138> |يرجي العلم أنه في حاله الخمول في التذكره لمده 60 دقايق سوف يتم غلق التذكره تلقائيا من طاقم العمل ! <a:736257973906571306:1064842105224179723>__**



**__Please note that in case of inactivity in the ticket for 10 Minutes, the ticket will be closed by the support ! <a:736257973906571306:1064842105224179723>__**`)
    message.delete()

  }
})

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'tag') {
    let mentionedUser = await message.mentions.members.first();
    let additionalText = args.slice(1).join(' ');

    if (!mentionedUser) {
      return await message.channel.send('user?');
    }

    let stylizedText = additionalText.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

    let newNickname = `𝐃𝐞𝐦𝐨𝐧𝐒丶${stylizedText}`;

    await mentionedUser.setNickname(newNickname).then(async () => {
      await message.channel.send(`**__Done Adding Server Tag To ${mentionedUser}__**`);
    }).catch(err => message.channel.send(`**I don't have Permission to do that**`));
}
});

const owner = ["1118528978584604702"]

const wait = require("node:timers/promises").setTimeout;
client.on('messageCreate', async message => {
  let msg = message, m = message
  if (m.author.bot) return;
  if (message.content !== prefix + "team") return
  if (m.member.permissions.has("ADMINISTRATOR")) {
    if (message.channel.id !== "1236322961242460191") {
      let rep = await message.reply("استخدم الامر في روم التيم")
      await wait(2000);
      rep.delete();
      message.delete();
      return;
    }
    let team = m.guild.roles.cache.get("1236363459596390560")
    let count = 0;
    team.members.forEach((member) => {
      message.channel.send(`<@${member.id}>`)
      message.channel.send(line)
      count++;
    })
    message.channel.send("Done , Team count is : " + count)
  }
})

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'tbc')) {
    if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Can Use**`);

    const args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    const role = message.mentions.roles.first();

    if (!role) {
      return message.reply('**Please Mention a Role**');
    }
    if (!args) {
      return message.reply('**Please Enter Your Message**');
    }

    let sentCount = 0;

    let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

    members.forEach((member, index) => {
      setTimeout(() => {
        member.send({ content: args })
          .then(() => {
            console.log(`Sent to ${member.user.username}`);
            message.channel.send(`Sent to <@${member.user.id}> <a:sw1xo:1064843153049395310>`);
          })
          .catch(err => {
            console.error(`**Couldn't send to ${member.user.tag} ❌**`);
            message.channel.send(`**Couldn't send to <@${member.user.id}> <a:1M_48:1064842032176185345>**`);
          })
          .finally(() => {
            sentCount++;
            if (index === members.size - 1) {
            
              message.channel.send(`**Done sending your message to ${sentCount} members**`);
            }
          });
      }, index * 5000); 
    });
  }
});


 client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == "1155201710634041526"){
    const anchannel = client.channels.cache.get("1153992975605563432")
    let args = message.content.split(' ').slice(0).join(' ')

let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

    let embed = new MessageEmbed()
    .setColor(color) 

    let attach = message.attachments.first();

if (attach) {
   +dgsagee.setImage(attach.proxyURL)     
} 
   anchannel.send(`**~~__ ${test} __~~**
 <a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711><a:awhiteline:1153303400969154711>

> • <a:right:1155563158975553617> __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> <a:true:1064843178483666964>   

> •  <a:right:1155563158975553617> __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1153992967196004402>   <a:true:1064843178483666964>  

> • <a:right:1155563158975553617> __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1153992560499507241>   <a:true:1064843178483666964>**`).then(mes => setTimeout(() => {
        mes.delete()
      }, 43200000))

    message.reply("<:emoji_112:1154109346377109637> | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:true:1064843178483666964>")
     anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
        pho.delete()
      }, 43200000))  
    anchannel.send(line).then(lin => setTimeout(() => {
        lin.delete()
      }, 43200000)) 

  }
})


client.login(process.env.token)

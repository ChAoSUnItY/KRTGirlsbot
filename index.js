const tokenfile = "NDk1NjI1MzE5MjU3MDc5ODM4.DpG6Uw.MvNnUfGes3G-irP1omgbETWT52Y";
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`${bot.user.username} 目前正運行在 ${bot.guilds.size} 個伺服器上!`);
    bot.user.setActivity("高捷少女 湛藍時光", {type: "PLAYING"});
});

var request = require('request');
var mcCommand = '!伺服器'; // Command for triggering
var mcIP = 'mod.610057xijinping.su'; // Your MC server IP
var mcPort = 25565; // Your MC server port

bot.on('message', message => {
  if (message.content === mcCommand) {
      var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
      request(url, function(err, response, body) {
          if(err) {
              console.log(err);
              return message.reply('存取錯誤以致無法取得狀態.');
          }
          body = JSON.parse(body);
          var status = '*伺服器正在正常運行中*';
          if(body.online) {
              status = '**箱庭伺服器** 正在 **線上**   -  ';
              if(body.players.now) {
                  status += '**' + body.players.now + '** 人正在伺服器上遊玩!';
              } else {
                  status += '*沒有人在伺服器上遊玩!*';
              }
          }
          message.reply(status);
      });
  }
});

bot.on("message", function(message) {
  if (message.content == "一哥") {
      message.channel.send("https://imgur.com/y6RbO53");
  }
});

bot.on("message", function(message) {
  if (message.content == "高捷少女") {
      var images = ["小穹 https://cdn.discordapp.com/attachments/485862193825447946/498482415476408320/FB_IMG_1538608692829.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530448674750464/2-550x366.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530452932231168/4_.png","https://cdn.discordapp.com/attachments/499530244273995776/499530454194716682/2SSFosA11mG4JQLlNyNtv2.jpg",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530456384012288/640_2c0824d6ea30de6ff914021e8f9da66f.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530456702779392/600_1341345_1.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530461677092865/15634b9c2e4f5c.jpg",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530460943351818/93007a78gw1ems8b3qfgjj20dw0e3ta8.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530463065669632/336395da748a2d01f36dba9d2cc8063f.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530463682232321/7480389.png",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530463795478528/822905.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530497249116160/7480412.png","https://cdn.discordapp.com/attachments/499530244273995776/499530510142275584/7480414.png",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530521714491403/11403133_357449527797982_2241136265715560145_n.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530532162371594/1439267069189_l.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530554538983424/14284113238149.png",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530568330117140/CaW79F_UMAAcm4l.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530583081353216/d1284781.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530593810382848/Emilia_Kaohsiung_MRT.jpg",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530599678214145/goods_pic1_81705156_20150921150425.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530602253647872/images.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530615050338304/maxresdefault_2.jpg",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530620720906250/maxresdefault.jpg","https://cdn.discordapp.com/attachments/499530244273995776/499530617994608660/KRTC_girl_Jie_er.png","https://cdn.discordapp.com/attachments/499530244273995776/499530625821442048/Nana_KRTC_girl.png",
      "https://cdn.discordapp.com/attachments/499530244273995776/499530632087732235/W020141119385437807640.png"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];
message.channel.send( randomImage ) 
      };
  }
)

bot.on("message", function(message) {
  if (message.content == "小穹~") {
      message.channel.send("老公~~")
  }
});

bot.on("message", function(message) {
  if (message.content == "好朋友") {
      message.channel.send("https://cdn.discordapp.com/attachments/481973961270362131/497056847606448139/f9184488d8a6256ea05f14f5f612hmv5.JPG")
  }
});

bot.on("message", function(message) {
    if(message.content == "ChAoS-Bot-Reset") {
        message.author.send("請再次確認是否重啟此機器人(y)>是 (n)>否")
        if(message.content == "y") {
            message.author.send("重啟中......");
            bot.destroy();
            bot.login(tokenfile)
        }
        if(message.content == "n") {
            message.author.send("已取消")
        }
    }
});

bot.on("message", function(message) {
    if(message.content == "Kill-Bot") {
        bot.destroy();
    }
})

bot.login(tokenfile);
const { Client } = require("discord.js-selfbot-v13");

const { BOT, CHANNELS } = require("./Config")

const client = new Client({
  checkUpdate: false
});

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

client.login(BOT.token);
client.setMaxListeners(30);

 client.on("messageCreate", async (message) => {
   const imageChannel = BOT.aldaily;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderdaily).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alhentai;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderhentai).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})


client.on("messageCreate", async (message) => {
   const imageChannel = BOT.albdsm;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderbdsm).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})


client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alass;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderass).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alanal;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderanal).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alamateur;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderamateur).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alblowjob;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderblowjob).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alboobs;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderboobs).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alcosplay;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndercosplay).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alcum;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndercum).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alfetish;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderfetish).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.algay;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndergay).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.allesbian;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderlesbian).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.algoth;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndergoth).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.algroup;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndergroup).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alhardcore;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderhardcore).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alpublic;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderpublic).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.almasturbation;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndermasturbation).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.almilf;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.göndermilf).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alpussy;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderpussy).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.alturko;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönderturko).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

client.on("messageCreate", async (message) => {
   const imageChannel = BOT.al3d;
   if(message.channel.id !==
      imageChannel) return; {
        try {
            if(message.attachments) {
                const arr = Array.from(message.attachments, function (entry) {
                  return { attachment: entry[1] };
                });
                for (let index = 0; index < arr.length; index++) {
                  const atc = arr[index];
                  const link = atc.attachment;
                  client.channels.cache.get(BOT.gönder3d).send({ content: `${link.attachment}` })
                  await sleep(1000);
                }
            }
        } catch (error) {
            
        }
    }
})

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Power By FastUptime'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
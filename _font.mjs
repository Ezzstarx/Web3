import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox','--hide-scrollbars'],defaultViewport:{width:1920,height:1066}});
const p=await b.newPage();
const reqs=[];
p.on('response',r=>{const u=r.url(); if(/fonts|\.woff|\.ttf/.test(u)) reqs.push(r.status()+' '+u.split('/').pop());});
await p.goto('http://localhost:3000',{waitUntil:'networkidle0',timeout:120000});
await new Promise(r=>setTimeout(r,2500));
const r=await p.evaluate(async()=>{
  await document.fonts.ready;
  const h1=document.querySelector('#hero h1');
  const cs=getComputedStyle(h1);
  const c=document.createElement('canvas').getContext('2d');
  c.font='120px "Scarlet Reliquary"'; const wSR=Math.round(c.measureText('Kenichi').width);
  c.font='120px Tektur'; const wTek=Math.round(c.measureText('Kenichi').width);
  c.font='120px Creepster'; const wCre=Math.round(c.measureText('Kenichi').width);
  return {fontFamily:cs.fontFamily, loaded:document.fonts.check('120px "Scarlet Reliquary"'),
    faces:[...document.fonts].filter(f=>/Scarlet/i.test(f.family)).map(f=>f.family+':'+f.status),
    widthSR:wSR,widthTektur:wTek,widthCreepster:wCre,
    realWidth:Math.round(h1.getBoundingClientRect().width)};
});
console.log(JSON.stringify(r,null,1)); console.log('font requests:',reqs);
await b.close();

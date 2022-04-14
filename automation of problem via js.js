const { text } = require("cheerio/lib/api/manipulation");
const pup=require("puppeteer");
const email='nobar82759@sueshaw.com';
const password='@waris@';
const codeObj=require('./codes');
const loink='https://www.hackerrank.com/auth/login/';
// let browser=pup.launch({
//     headless:false,
//     args:['--start-maximized'],
//     defaultViewport:null
// })
(async function(){
try {
    let browserOpInst= await pup.launch({
        headless:false,
        args:['--start-maximized'],
        defaultViewport:null
    })
    let newTab=await browserOpInst.newPage()
    await newTab.goto(loink)
    await newTab.type("input[id='input-1']",email, {delay: 50 }) 
    await newTab.type("input[type='password']",password, {delay: 50 })
    await newTab.click("button[data-analytics='LoginPassword",{delay:50})
    await waitandclick('.topic-card a[data-attr1="algorithms"]',newTab)
    await waitandclick('input[value="warmup"]',newTab)
    let allchalenge= await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
    console.log('Total questions',allchalenge.length)
} catch (error) {
   console.log(error) 
}
})()



let page

// browser.then(function(browserOb){
// let browserOpen=browserOb.newPage()
// return browserOpen;
// }).then(function(newTab){
// page=newTab
// let hackOpen=newTab.goto(loink)
// return hackOpen;
// }).then(function(){
//     let emailente=page.type("input[id='input-1']",email, {delay: 50 });
//     return emailente
// }).then(function(){
//     let passente=page.type("input[type='password']",password, {delay: 50 });
//     return passente
// }).then(function(){
//     let loginbtn= page.click("button[data-analytics='LoginPassword",{delay:50});
//     return loginbtn
// }).then(function(){
//   let algobtn=waitandclick('.topic-card a[data-attr1="algorithms"]',page);
//   return algobtn
// }).then(function(){
//     let gotowarmup=waitandclick('input[value="warmup"]',page)
//     return gotowarmup
// }).then(function(){
//     let waitfor3s=page.waitFor(3000)
//     return waitfor3s
// }).then(function(){
//   //  $$ is not jquery but it is used to select all
//     let allchalenge=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
//     return allchalenge
// }).then(function(questionArr){
// console.log("numberr of question ",questionArr.length)
// let questionwilsolv=questionSolver(page,questionArr[0],codeObj.answers[0])
// return questionwilsolv
// })




//wait and click for page loading 
function waitandclick(selector,cPage){
return new Promise(function(resolve,reject){
    ///waitForSelector is a predefined function 
   let waitforModProm=cPage.waitForSelector(selector)
   waitforModProm.then(function(){
       let clcModel=cPage.click(selector)
       return clcModel
   }).then(function(){
       resolve()
   }).catch(function(err){
       reject()
   })
})
}

async function waitandclick(selector,cPage){
    await cPage.waitForSelector(selector)
    let selectorclick=cPage.click(selector)
    return selectorclick;
}


// async function questionSolver(question){
//     await question.click(question)
//     await question.waitandclick('.monaco-editor.no-user-select.vs',newTab)
//     await question.waitandclick('.checkbox-input',newTab)
// }





function questionSolver(page,question,answer){
    return new Promise(function(resolve,reject){
      let questionwilclic=question.click()
      questionwilclic.then(function(){
          let textareaofques=waitandclick('.monaco-editor.no-user-select.vs',page)
          return textareaofques
      }).then(function(){
         return waitandclick('.checkbox-input',page)
      }).then(function(){
          return page.waitForSelector('textarea.custominput',page)
      }).then(function(){
          //page.type is used for typing in website
          return page.type('textarea.custominput',answer,{delay:10})
      }).then(function(){//down means key is presssed
          let ctrlPressed=page.keyboard.down('Control')
          return ctrlPressed
      }).then(function(){
          let slelctall=page.keyboard.press('A',{delay:100})
          return slelctall
      }).then(function(){
          let copy=page.keyboard.press('X',{delay:100})
          return copy
      }).then(function(){
          let contunpres=page.keyboard.up('Control')
          return contunpres
     }).then(function(){
         let editornfocus=waitandclick('.monaco-editor.no-user-select.vs',page)
         return editornfocus
     }).then(function(){
         let contrlA=page.keyboard.down('Control')
         return contrlA
     }).then(function(){
         let ContrlApess=page.keyboard.press('A',{delay:100})
         return ContrlApess
     }).then(function(){
         let Vispress=page.keyboard.press('V',{delay:100})
         return Vispress
     }).then(function(){
         let contrUNpress=page.keyboard.up('Control')
         return contrUNpress
     }).then(function(){
         let brunbtn=waitandclick('.hr-monaco__run-code',{delay:100})
     }).then(function(){
         resolve()
     }).catch(function(err){
         reject()
     })
    })
}





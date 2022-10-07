new Promise((resolve,reject)=>{
    console.log("-------");
    //pendding状态，待定/悬而未决
    resolve()//fulfilled 状态(已经敲定)
    reject()//处于reject 状态(已经拒绝状态)
    console.log('++++++');
}).then(res=>{
    console.log("res",res);
},err=>{
    console.log("err",err);
})
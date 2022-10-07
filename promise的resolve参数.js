
const newpromise =new Promise((resolve, reject) => {
    resolve("aaa")
    reject('err message')
})

//传入一个promise,那么当前的Promise的状态会由传入的Promise来决定

//传入一个对象， 并且这个对象又实现then 方法，那么也会执行该then 方法，并且由该方法
new Promise((resolve,reject)=>{
    resolve(newpromise)
}).then(res=>{
    console.log('res',res);
},err=>{
    console.log('err',err);
})
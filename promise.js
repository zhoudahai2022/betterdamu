
const promise = new Promise((reolve,reject)=>{
    // reolve()成功的时候调用
    // reject()失败的时候调用
    //promise 传入的函数被执行了
    reolve()
    reject()
})

promise.then(()=>{

})

promise.catch(()=>{
    
})
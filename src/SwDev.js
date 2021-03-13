function SwDev(){
    const SwUrl = `${process.env.PUBLIC_URL}/Sw.js`;
    navigator.serviceWorker.register(SwUrl).then((Response)=>{
        console.log(Response)
    }).catch((error)=>{
        console.log(error);
    })
}

export default SwDev

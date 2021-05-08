let promise= new Promise((resolved, rejected)=>{
	setTimeout(()=>{
		rejected();
	},5000)
})

promise
.then(()=>console.log('finished'))
.catch(()=>console.log('error occured'))
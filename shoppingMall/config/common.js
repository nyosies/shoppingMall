	
export  default{ 	
 setStorageItem(key,data){
	try{
	  uni.setStorage({
	  	key: key,
	  	data: data
	  })
	} catch(e){
		console.error('储存失败')
	}
},  
getStoreageItem(key){
	  uni.getStorage({
	  	key:key
	  })
  }

}
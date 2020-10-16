// const axios = require('axios')
const global = require('../util/global.js')


function request(url,params={},req,succCallback,errorCallback,tokenHead=false){
    uni.request({
    	url:global.default.baseURL+url,
		data:params,
		method:req,
		success: (res) => {
			succCallback(res?.data.data)
		},
		fail:(err) =>{
			errorCallback(err)
		}
    })
}

export default request
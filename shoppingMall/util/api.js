import request from '../config/request.js';


/**
 * @getBanne
 * 轮播图
 * */
 const  getBanner = (params, succCallback, errorCallback) => {
	return request( '/nav', params, 'POST', succCallback, errorCallback, true)
};
/**
 * @login 登录
 * 
 * */

 const  login = (params, succCallback, errorCallback) => {
	return request( '/index/login', params, 'POST', succCallback, errorCallback, true)
};

/**
 * @getHomeProducts
 * 
 * */

 const  getHomeProducts = (params, succCallback, errorCallback) => {
	return request('/product/getHomeProducts', params, 'GET', succCallback, errorCallback, true)
};


/**
 * 分类
 * @category
 * 
 * */
 
 const category =(params, succCallback, errorCallback) => {
	return request('/category', params, 'GET', succCallback, errorCallback, true)
 }
 export default {getBanner,login,getHomeProducts,category}
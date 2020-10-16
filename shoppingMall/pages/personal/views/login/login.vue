<template>
	<view class="content">
	 <view class="login">
	 	<view class="font_background">
			LOGIN
		</view>
		  <view class="login-from">
			   <view class="login_mode">
			   	  <view class="login_head">
			   	  	<text>欢迎来到！！！</text>
			   	  </view>
			   	  <view class="login_body">
					  	<uni-segmented-control style-type='button' active-color='red' :current="current" :values="values" @clickItem='currentToggle'></uni-segmented-control>
					  	<view class="tabs">
					  		<view v-show="current === 0">
					  			<input type="text" value=""  v-model="account" placeholder="请输入账号"/>
					  			<input type="password" value="" v-model="password" placeholder="密码" />
					  		</view>
					  		<view v-show="current === 1">
					  			<input type="text" value="" />
					  		</view>
					  	</view>
					 
			   	  </view>
			   	  <view class="login_footer">
			   	  	<button type="default" size='mini' @click="login">登录</button>
					<button type="default" size='mini'>重置</button>
			   	  </view>
			   </view>
		  </view>
	 </view>
	 </view>
</template>

<script>
	import global from '../../../../util/global.js'
	
	import {
		uniSegmentedControl
	} from "@dcloudio/uni-ui"
	export default{
		components:{uniSegmentedControl},
		data(){
			return{
				current:0,
				values:['密码登录','短信登录'],
				account:'',
				password:'',
			}
		},
		methods:{
			currentToggle(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			login(){
				let foo = {
					username: this.account,
					password: this.password, //12345678
					loginWay: 0
				}
				this.$http.login(foo, res => {
					console.log(1111,res)
	                   this.$fun.setStorageItem('user',res)
					   this.$fun.setStorageItem('token',res.token)
					uni.navigateBack({
						delta:1
					})
				},err=>{
					console.log(err)
				})
			
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '@/static/color/color.less';
.content{
	  min-height:100%;
	  // background: #000;
	  position: relative;
	.login{
		width: 100%;
		   min-height: e("calc(100vh - 44px)");
		  display: flex;
		  align-items:center;
		  overflow: hidden;
		.font_background{
			background: #fff;
			font-size:280rpx;
			transform: rotate(45deg);
			color:#5352ed;
			box-shadow: 5rpx 5rpx 10rpx #ddd;
			border-radius: 0 0 15rpx 0;
			
		}
		.login-from{
			width: 100%;
			height: 100%;
			position: absolute;
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			.login_mode{
				box-shadow: 5rpx 5rpx 10rpx #ddd;
				margin-top: 200rpx;
				width: 80%;
				padding:0 20rpx 20rpx 20rpx;
				background:rgba(100,64,90,0.3);
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius:20rpx;
			.login_head{
				width: 100%;
				padding-left:40rpx ;
				color: @fontColor;
				margin:20rpx;
			  text{
				  margin:20rpx;
			  }
			}	
				
			.login_body{
				padding-top: 80rpx;
			 input{
				  width:400rpx;
				 height:70rpx;
			   margin:20rpx;
			   background: #fff;
			   border-radius: 10rpx;
			 }
			.tabs{
				  margin-top: 56rpx;
			 }
			}
			.login_footer{
				width: 100%;
				padding: 20rpx;
				display: flex;
				justify-content: center;
				button{
					margin-top: 20rpx;
					// width: 80%;
					background:#FF0000;
					color: @fontColor;
					margin-bottom: 70rpx;
				}
			}
		}
		}
	}
	}
</style>

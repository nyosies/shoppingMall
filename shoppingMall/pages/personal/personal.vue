<template>
	<view class="personal">
		<view class="presonal_head">
			 <view class="option">
			 	 <view class="portrait">
					 <image class="avatar" :src="user.avatar" ></image>
			 	 </view>
				 <view class="user_name">
				 	{{user.username?user.username:'请登录'}}
				 </view>
			 </view>
		</view>
		<view class="presonal_body">
			<view class="tags">
				<view class="tag"></view>
				<view class="tag"></view>
				<view class="tag"></view>
				<view class="tag"></view>
			</view>
			<view class="setting">
				<view class="setting_list" v-for="item in [1,2,3,4,5]">
					<view class="row_bar">
						<view class="list_left">
							{{item}}
						</view>
						<view class="list_right">
							>
						</view>
					</view>
				</view>
			    <view class="logout">
			    	<button type="error" @click="logout">退出登录</button>
					<button type="default" @click="goLogin" open-type="switchTab">go Login</button>
			    </view>
			</view>
		</view>

		<!-- <button type="default" @click="goLogin" open-type="switchTab">go Login</button>
		 <button type="default" @click="log">log</button> -->
	</view>
</template>

<script>
	export default {
		 data(){
			 return {
				 text:'',
				 user:''
			 }
		 },
		onShow() {
			this.login()
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: './views/login/login'
				})
			},
			logout() {
			     uni.clearStorageSync()
				 uni.showToast({title:'清除成功'})
				 this.login()
			},
			login(){
				let user = uni.getStorageSync('user')
				console.log(user)
				this.user = user
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '@/static/color/color.less';
	@margin: 20rpx;

	.personal {
		display: flex;
		flex-direction: column;
		background: #ddd;
		height: @barheight;
		.presonal_head {
			width: 100%;
			height: 400rpx;
			background: #DD524D;
			// border-radius: 0 0 50% 50%;
			display: flex;
			align-items: center;
			.option{
				padding-left:@margin;
				display: flex;
				align-items: center;
				.portrait{
					width: 160rpx;
					height: 160rpx;
					background: #fff;
					border-radius: 50%;
					border:6rpx solid #333333;
					overflow: hidden; 
					 image{
						width:100%;
						height: 100%;
					}
				}
			.user_name{
                margin-top:60rpx;
				margin-left: 20rpx;
				font-size:38rpx;
				color: #fff;
			}
			}
		}

		.presonal_body {
			flex: 1;

			.tags {
				display: flex;
				justify-content: space-between;
				margin: 0 @margin;
				padding: 26rpx;
				background: #fff;
				border-radius: 12rpx;
				box-shadow: 2px 2px 2px #ddd;

				.tag {
					width: 20%;
					height: 100rpx;
					background: #F0AD4E;
				}
			}

			.setting {
				background: #fff;
				border-radius: 12rpx;
				box-shadow: 2px 2px 2px #ddd;
				margin: 36rpx 26rpx;
				padding: 20rpx;

				.row_bar {
					display: flex;
					border-bottom: 1rpx solid #ddd;
					margin: 18rpx 0;

					.list_left {
						width: 40%;
					}

					.list_right {
						flex: 1;
						display: flex;
						justify-content: flex-end;
					}
				}
			}
		}

	}
</style>

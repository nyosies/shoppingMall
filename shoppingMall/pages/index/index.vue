<template>
	<view class="more">
		<uni-nav-bar>
			<view class="search_box">
				<uni-search-bar class="searchBar" cancelButton='none' radius='20' />
			</view>
			<view slot="left">MALL</view>
			<view slot="right">right</view>
		</uni-nav-bar>
		<view class="index_body">
			<view class="swiper_box">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :circular='true' indicator-color='#fff' :duration="1000">
					<swiper-item v-for="item in banner" :key=item.id>
						<view class="swiper-item">
							<image :src="item.image" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="tab">
				<!-- <swiper>
					<swiper-item>
						<view class="tabs_item">
							<uni-grid :column="3" :square='false' :showBorder='false'>
								<uni-grid-item>
									<text class="text">文本</text>
								</uni-grid-item>
								<uni-grid-item>
									<text class="text">文本</text>
								</uni-grid-item>
								<uni-grid-item>
									<text class="text">文本</text>
								</uni-grid-item>
							</uni-grid>
						</view>
					</swiper-item>
				</swiper> -->
				<scroll-view scroll-x="true">
					<view class="banner_box">
					<view class="box"></view>
					<view class="box"></view>
					<view class="box"></view>
					<view class="box"></view>
					<view class="box"></view>
					<view class="box"></view>
					</view>
				</scroll-view>
			</view>
			<view class="banner">
				<image :src="item.image" v-for="item in tag" :key="item.id" mode="widthFix"></image>
			</view>
		</view>
		<view class="index_footer">
		<!-- 	<uni-segmented-control style-type='text' active-color='red' :current="current" :values="values" @clickItem='currentToggle'></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					选项卡1的内容
				</view>
				<view v-show="current === 1">
					选项卡2的内容
				</view>
			</view> -->
			
			 <view class="classList" v-for="item in recommend" :key='item.id'>
			 	<view class="goodsDesc">{{item.title?item.title:'精品沙发'}}</view>
			 	<view class="goodsShow">
					<scroll-view scroll-x="true">
						 <view class="banner_box">
					          <view class="goods_box" v-for="(demo,index) in item.products" :key='demo.id'>
					          	<image class="goodsImg" :src="demo.image[0]"></image>
					          	 <view class="paras_desc">
					          	 	<text class="desc" :selectable='true'>{{demo.title}}</text>
					          	 	<text class="price">￥{{demo.price?demo.price:'****'}}</text>
					          	 </view>
					          </view>
						 </view>
							<!-- <view class="tabs_item">
								<uni-grid :column="3" :show-border="false" :square='false'>
									<uni-grid-item v-for="(demo,index) in item.products" :key='demo.id' class='grid_box'>
										<image class="goodsImg" :src="demo.image[0]"></image>
										 <view class="paras_desc">
										 	<text class="desc">{{demo.title}}</text>
										 	<text class="price">￥{{demo.price?demo.price:'****'}}</text>
										 </view>
									</uni-grid-item>
								</uni-grid>
							</view> -->
					</scroll-view>
				</view>
			 </view>
		</view>

	</view>
</template>

<script>
	import navBar from '../../components/navBar/navBar.vue'
	import scrollBar from '../../components/scrollBar.vue'
	import {
		uniNavBar,
		uniSearchBar,
		uniGrid,
		uniGridItem,
		uniSegmentedControl
	} from "@dcloudio/uni-ui"
	export default {
		data() {
			return {
				swiperHeight: 300,
				title: '精品沙发',
				banner: [],
				tag: [],
				current: 0,
				values: ['分类精选', '产品多选'],
				recommend:[]
			}
		},
		components: {
			navBar,
			scrollBar,
			uniNavBar,
			uniSearchBar,
			uniGrid,
			uniGridItem,
			uniSegmentedControl,
			
		},
		onLoad() {
			let params = {
				nav_type: [0, 1, 2]
			}
			this.$http.getBanner(params, res => {
				this.banner = res[0]
				this.tag = res[2]
				console.log(res)
			}, err => {
				console.log(err)
			})
		
			this.$http.getHomeProducts({},res=>{
				this.recommend = res.home_recommend_products
				console.log(res.home_recommend_products)
			})
		},
		methods: {
			currentToggle(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style scoped>
	@import url("../../static/color/color.less");
	.search_box {
		width: 100%;
	}

	.more {
		/* background: Azure; */
		background:rgba(153,153,153,.2)
	}

	.swiper-item image {
		width: 100%;
	}

	.tabs_item {
		box-sizing: border-box;
		padding: 10rpx;
		/* border: 1px solid #2C405A; */
		display: flex;
		justify-content: space-between;
		background: #fff;
	}

	.banner {
		display: flex;
		justify-content: center;
	}

	.banner>image {
		width: 100%;
	}
	.classList{
		
	}
	.goodsDesc{
		margin:5rpx 0;
		background: #fff;
		font-size:26rpx;
		padding: 10rpx;
		font-weight: 600;
	}
	.banner_box{
		display: flex;
	}
	.goods_box{
		flex-shrink: 0;
		width: 33%;
		/* margin: 20rpx; */
		margin-left: 20rpx;
	}
	
	.goodsShow{
		margin:5rpx 0;
		background: #fff;
	}
	.goodsImg{
		width:100%;
		height: 200rpx;
	}
	.price{
		color:red;
		font-size: 18rpx;
		display: flex;
		justify-content: center;
	}

	.desc{
		box-sizing: border-box;
		width:100%;
		font-size: 16rpx;
		color: #333333;
	    padding:10rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: block;
		text-align: center;
	}
	.grid_box{
		display: flex;
	}
	.swiper_goods{
		display: flex;
	}
	.swiper_goods>view{
		width: 200rpx;
		height: 200rpx;
	}
</style>

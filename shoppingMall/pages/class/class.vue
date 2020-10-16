<template>
 <view class="class">
 	  <keep-alive>
		  <class-ification :list='list'></class-ification>
	  </keep-alive>
 </view>
</template>

<script>
	// classIfication
	import classIfication from '../../components/classIfication/classIfication.vue'
	export default{
		data(){
			return{
				list:[]
			}
		},
		components:{classIfication},
		onShow() {
			this.$http.category({},res=>{
				// console.log(res)
				this.list = res
			})
		}
	}
</script>

<style>
</style>

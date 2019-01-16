<template>
	<view class="pm50">
		<view class="pt40 pm20 cen fz30 z3">
			分享至
		</view>
		<view class="box cen mt20">
			<view class="box_a">
				 <image src="../../static/img/fenxiang_a.png" class="sd_jh_dertxrtytx"></image>
				 <view class="fz26 z3 ">
				 	微信好友
				 </view>
			</view>
			
			<view class="box_a">
				 <image src="../../static/img/fenxiang_b.png" class="sd_jh_dertxrtytx"></image>
				 <view class="fz26 z3 ">
				 	朋友圈
				 </view>
			</view>
			
			
			<view class="box_a">
				 <image src="../../static/img/fenxiang_c.png" class="sd_jh_dertxrtytx"></image>
				 <view class="fz26 z3 ">
				 	新浪微博
				 </view>
			</view>
			
			
			
			<view class="box_a">
				 <image src="../../static/img/fenxiang_d.png" class="sd_jh_dertxrtytx"></image>
				 <view class="fz26 z3 ">
				 	QQ
				 </view>
			</view>
		</view>
		
		
		<view class="mt40">
			<view class="dx_btn sd_jh_dertx" @tap="$emit('close')">
				取消
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {
			
		},
		methods: {
			
		},
		mounted() {
			
		},
	}
</script>
<style scoped>
	.sd_jh_dertxrtytx{
		width: 79upx;
		height: 79upx;
	}
	.sd_jh_dertx{
		width: 360upx;
		margin: auto;
		height: 70upx;
		line-height: 70upx;
	}
</style>

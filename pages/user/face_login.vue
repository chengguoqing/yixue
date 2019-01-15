<template>
	<view>
		<view class="bg_view_er"></view>
		<view class="pr pt80 sd_jh_rtytd">
				<view class="cen cf fz26">
						请使图像显示在边框区域内
				</view>
				<view class="renlinhgdr pr mt20">
					<view class="ghg_bg_rt"></view>
					<image src="../../static/img/renlian.png" class="renlian_tou "></image>
				</view>
				
				<view class="cen">
					<image src="../../static/img/shibie_a.png" mode="" class="shibie_a"></image>
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
	.bg_view_er{
		background: #6F7BFF;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.renlinhgdr{
		width: 600upx;
		margin: auto;
		height: 505upx;
		border-radius: 20upx;
		overflow: hidden;
	}
	.renlian_tou{
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 10;
	}
	.ghg_bg_rt{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #B3BCFF;
		z-index: 1;
	}
	.shibie_a{
		width: 566upx;
		height: 566upx;
	}
	.sd_jh_rtytd{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>

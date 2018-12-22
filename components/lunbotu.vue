<!-- 轮播图 -->
<template>

	<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular="true"
	 :indicator-active-color="active_color" :indicator-color="indicator">
		<block v-for="item in imgUrls">
			<swiper-item>
				<image :src="item" class="slide-image" width="355" height="150" />
			</swiper-item>
		</block>
	</swiper>

</template>
<script>
	export default {
		props:{
			imgUrls:""
		},
		data() {
			return {
				indicatorDots: true, //是否显示点点
				autoplay: true, //自动播放
				active_color: "#fff", //点选中的颜色
				indicator: "#B4B4B4", //点的颜色
				interval: 5000,
				duration: 1000,
			}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.slide-image {
		width: 100%;
		height: 100%;
	}

	swiper {
		height: 100%
	}
</style>

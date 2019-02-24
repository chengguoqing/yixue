<template>
	<view>
	

	<web-view :webview-styles="webviewStyles" :src="url_r+'lianxi'"></web-view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				url_r: "",
				webviewStyles: {
					progress: {
						color: '#707DFF'
					}
				}
			}
		},
		onNavigationBarButtonTap(e) {

		},
		components: {

		},
		methods: {

		},
		mounted() {
			this.url_r = this.url_d
		}
	}
</script>
<style scoped>
	.ssd_jh_derertx {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10000;
	}



</style>

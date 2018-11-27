<template>
	<view class="content">
		<van-button type="danger" @click="weixian">危险按钮</van-button>
		<van-row>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
		</van-row>

		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import Toast from '../../wxcomponents/toast/toast'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			weixian() {
			Toast.fail('失败文案');
			}
		}
	}
</script>

<style>

</style>

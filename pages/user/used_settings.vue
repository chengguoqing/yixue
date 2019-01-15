<template>
	<view class="pl40 pr40 pt40">

		<navigator class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " url="/pages/user/security_settings">
			<view class="dx_col_12">
				安全设置
			</view>
			<view class="dx_col_12 tr z9 fz26">
				修改手机号、密码
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</navigator>

		<navigator class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " url="/pages/user/account_authorization">
			<view class="dx_col_12">
				账号授权
			</view>
			<view class="dx_col_12 tr z9 fz26">
				修改微信号、微博、QQ
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</navigator>


		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " @click="qingchu">
			<view class="dx_col_12">
				存储空间管理
			</view>
			<view class="dx_col_12 tr z9 fz26">
				清除缓存
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>



	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		methods: {
			qingchu() {
				uni.showModal({
					title: '提示',
					content: '确定要清除缓存吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>

<template>
	<view>
		<view class="pr dsfs_jh_dert">
			<view class="cen pt100">
				<image src="../../static/img/logo.png" class="logo_kh_drt"></image>
				<view class="fz37 cf mt20">
					亿学实训平台
				</view>
			</view>

		</view>


		<view class="ddf_jh_deeret">
			<view class="yj4 bgff dsf_jh_feert">

				<view class="df_jh_drrttg">
					<view class="sd_jh_drttx">
						<image src="../../static/img/dfs_a.png" class="sd_jh_drtycx"></image>
					</view>
					<input type="number" v-model="form.phone" placeholder="请输入手机号" placeholder-class="" />
				</view>


				<view class="df_jh_drrttg mt20">
					<view class="sd_jh_drttx">
						<image src="../../static/img/dfs_b.png" class="sd_jh_drtycx ab"></image>
					</view>
					<input type="number" v-model="form.messageCode" placeholder="短信验证码" placeholder-class="" />
					<view class="df_hg_ghuoq fz26 ls" @click="get_yzma()" v-if="jhgg">
						获取验证码
					</view>

					<view class="df_hg_ghuoq fz26 ls" v-else>
						{{daoji}} s重新获取
					</view>


				</view>


				<view class="df_jh_drrttg mt20">
					<view class="sd_jh_drttx">
						<image src="../../static/img/dfs_c.png" class="sd_jh_drtycx ac"></image>
					</view>
					<input type="password" v-model="form.password" placeholder="设置登录密码" placeholder-class="" />
				</view>

				<view class="fz24 mt40">
					<checkbox-group class="f_b dsf_jj_drert">
						<checkbox :checked="checkboxChange" />
					</checkbox-group> 已阅读并同意
					<navigator class="f_b" style="color: #4ee7c8;" url="/pages/user/xiexi">《用户协议》</navigator>
				</view>

				<view class="dsf_jh_dffr" @click="zhuce_der">
					确定
				</view>


			</view>
		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				checkboxChange: true,
				form: {
					phone: "",
					messageCode: "",
					password: ""
				},
				daoji: 60, //倒计时
				jhgg: true,
			}
		},
		components: {},
		methods: {
			zhuce_der() { //注册按钮触发
			
				let th = this
				if (!th.form.phone) {
					uni.showToast({
						icon: "none",
						title: "请输入手机号码",
						duration: 2000
					});
					return
				}
				if (!this.yanza.phone(this.form.phone)) {
					uni.showToast({
						icon: "none",
						title: "请输入正确的手机号码",
						duration: 2000
					});
					return
				}
				if (!th.form.messageCode) {
					uni.showToast({
						icon: "none",
						title: "请输入验证码",
						duration: 2000
					});
					return
				}
				if (!th.form.password) {
					uni.showToast({
						icon: "none",
						title: "请输入密码",
						duration: 2000
					});
					return
				}
				this.post("userRegedit", this.form, function(data) {
					uni.showToast({
						title: data.message
					})
					setTimeout(a => {
						uni.redirectTo({
							url: '/pages/user/denglu'
						});
					}, 1000)
				})
			},
			get_yzma() { //获取验证码
				let th = this
				if (!th.form.phone) {
					uni.showToast({
						icon: "none",
						title: "请输入手机号码",
						duration: 2000
					});
					return
				}
				if (!this.yanza.phone(this.form.phone)) {
					uni.showToast({
						icon: "none",
						title: "请输入正确的手机号码",
						duration: 2000
					});
					return
				}


				if (th.jhgg == true) {
					th.jhgg = false
					th.daoji--
					this.post('sendVerifCode', {
						phone: th.form.phone
					}, function(data) {
						uni.showToast({
							title: data.message,
							duration: 2000
						});
						var sdf_wer = setInterval(function() {
							th.daoji--
							if (th.daoji < 0) {
								th.daoji = 60
								th.jhgg = true
								clearTimeout(sdf_wer)
							}
						}, 1000)
					})
				}
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.dsfs_jh_dert {
		height: 370upx;
		background: #697BFF;
	}

	.ddf_jh_deeret {
		padding-left: 40upx;
		padding-right: 40upx;
		margin-top: -50upx;
		position: relative;
		z-index: 100;
	}

	.dsf_jh_feert {
		padding: 110upx 100upx;
	}

	.sd_jh_drtycx {
		width: 22upx;
		height: 36upx;
		margin-top: 20upx;
	}

	.sd_jh_drtycx.ab {
		width: 32upx;
		height: 29upx;
	}

	.sd_jh_drtycx.ac {
		width: 28upx;
		height: 32upx;
	}



	.sd_jh_drttx {
		width: 80upx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0px;
		line-height: 70upx;
		text-align: center;
	}

	.df_jh_drrttg {
		border-bottom: 1px solid #F6F6F6;
	}

	.df_jh_drrttg input {
		top: 14upx;
		color: #333 !important;
	}

	.dsf_jj_drert {
		transform: scale(0.8)
	}

	.dsf_jh_dffr {
		height: 60upx;
		line-height: 60upx;
		background: #7D83FF;
		border-radius: 60upx;
		text-align: center;
		color: #fff;
		margin-top: 90upx;
	}
</style>

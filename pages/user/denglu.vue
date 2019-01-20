<template>
	<view>
		<view class="pr">
			<view class="cen pt100">
				<image src="../../static/img/logo.png" class="logo_kh_drt"></image>
				<view class="fz37 cf mt20">
					亿学实训平台
				</view>
			</view>

			<view class="sd_jh_dert">

			</view>

			<view class="sd_jh_derertx box pt30">
				<view class="box_a fz31 cf" :class="[sd.class_e,sd.cls]" v-for="(sd,idx) in tab_qe" @click="qiehuan(sd,idx)">
					<view class="f_b pr">
						{{sd.name}}
						<image src="../../static/img/down_icon.jpg" class="down_icon_drt" v-if="sd.cls"></image>
					</view>
				</view>
			</view>


			<view class="fg_hg_page pt70">

				<view class="df_hh_box_ert">


					<view class="sd_hhdf_box" v-if="isd_df==0">
						<view class="df_jh_drrttg">
							<view class="sd_jh_drttx">
								<image src="../../static/img/gfdg_a.png" class="sd_jh_drtycx"></image>
							</view>
							<input type="number" value="" placeholder="请输入手机号" placeholder-class="cf" />
						</view>


						<view class="df_jh_drrttg mt20">
							<view class="sd_jh_drttx">
								<image src="../../static/img/gfdg_b.png" class="sd_jh_drtycx ab"></image>
							</view>
							<input type="number" value="" placeholder="请输入验证码" placeholder-class="cf" />
							<view class="df_hg_ghuoq fz26 cf">
								获取验证码
							</view>
						</view>


					</view>

					<view class="sd_hhdf_box" v-if="isd_df==1">
						<view class="df_jh_drrttg">
							<view class="sd_jh_drttx">
								<image src="../../static/img/gfdg_c.png" class="sd_jh_drtycx ac"></image>
							</view>
							<input type="number" value="" placeholder="手机号/用户名" placeholder-class="cf" />
						</view>


						<view class="df_jh_drrttg mt20">
							<view class="sd_jh_drttx">
								<image src="../../static/img/gfdg_b.png" class="sd_jh_drtycx ab"></image>
							</view>
							<input type="password" value="" placeholder="请输入密码" placeholder-class="cf" />

						</view>


					</view>
					<navigator class="cen" v-if="isd_df==2" url="/pages/user/face_login">
						<image src="../../static/img/user_tou.png" class="user_tou_iconer"></image>
						<view class="fz26 cf mt20">
							刷下脸分析识别面部结构
						</view>
						<view class="fz28 cf mt20">
							快速登录
						</view>
					</navigator>


					<view class="sd_h_dertxrftyt box fz24" v-if="isd_df!=2">
						<view class="box_b ye">
							<image src="../../static/img/gandan.png" class="gantang_hao cz" mode=""></image>
							<text class="ml10">登入失败，用户不存在</text>
						</view>
						<view class="box_a tr  cf">
							忘记密码?
						</view>
					</view>

					<view class="" v-if="isd_df!=2">

						<navigator class="sd_jh_dff yj4 " url="/pages/user/improve_information">
							登录
						</navigator>



						<navigator class="sd_jh_dff yj4  ab mt20" url="/pages/user/zhuce">账号注册</navigator>

					</view>
				</view>
				<view class="dsf_jh_dert box cen">
					<view class="box_a">
						<image src="../../static/img/swdd_a.png" mode=""></image>
					</view>
					<view class="box_a">
						<image src="../../static/img/swdd_b.png" mode=""></image>
					</view>
					<view class="box_a">
						<image src="../../static/img/swdd_c.png" mode=""></image>
					</view>

				</view>



			</view>
			<view class="cen fz24 mt40 cf">

				注册/登入即表示你已阅，并同意 <navigator class="f_b" style="color: #4ee7c8;" url="/pages/user/xiexi">《用户协议》</navigator>
			</view>

		</view>


		<view class="bhg_ddrfrtx"></view>
		<image src="../../static/img/denglu.jpg" class="denglibg_e"></image>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				isd_df: 0, //0 手机登录 1账号登录 2人脸识别
				tab_qe: [{
					name: "手机登录",
					class_e: "tl",
					cls: "act"
				}, {
					name: "账号登录",
					class_e: "cen",
					cls: ""
				}, {
					name: "人脸识别",
					class_e: "tr",
					cls: ""
				}]
			}
		},
		components: {},
		methods: {
			qiehuan(sd, idx) {
				this.tab_qe.map(a => { 
					a.cls = ""
				})
				this.isd_df = idx
				sd.cls = "act"

			} 
		},
		mounted() { 
// 			console.log(2222)
// 			var info = plus.push.getClientInfo(); 
// 			console.log(JSON.stringify(info))
		},
	} 
</script>
<style scoped>
	.sd_h_dertxrftyt {
		height: 80upx;
		padding-top: 20upx;
	}

	.bhg_ddrfrtx {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #6F7BFF;
		z-index: 1;
	}

	.denglibg_e {
		position: fixed;
		left: 0;
		width: 100%;
		height: 481upx;
		bottom: 0;
		z-index: 2;
	}



	.sd_jh_dert {
		border-top: 1px solid #fff;
		margin-top: 90upx;
	}

	.sd_jh_derertx {
		width: 550upx;
		margin: auto;
	}

	.down_icon_drt {
		width: 28upx;
		height: 15upx;
		position: absolute;
		left: 50upx;
		marker: auto;
		top: -32upx;
	}

	.fg_hg_page {
		width: 470upx;
		margin: auto;

	}

	.df_hh_box_ert {
		min-height: 420upx;
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

	.sd_jh_drtycx {
		width: 22upx;
		height: 36upx;
		margin-top: 20upx;
	}



	.sd_jh_drtycx.ab {
		width: 28upx;
		height: 31upx;
	}

	.sd_jh_drtycx.ac {
		width: 34upx;
		height: 34upx;
	}

	.sd_jh_dff {
		background: #fff;
		color: #6F7BFF;
		border: 1px solid #fff;
		font-size: 30upx;
		line-height: 70upx;
		text-align: center;
	}

	.sd_jh_dff.ab {
		color: #fff;
		background: transparent;
	}

	.dsf_jh_dert {

		width: 290upx;
		margin: auto;
		margin-top: 80upx;
	}

	.dsf_jh_dert image {
		width: 48upx;
		height: 48upx;
	}

	.gantang_hao {
		width: 25upx;
		height: 25upx;

	}

	.user_tou_iconer {
		width: 211upx;
		height: 193upx;
	}
</style>

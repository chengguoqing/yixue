<template>
	<view class="pm50">
		<view class="we_xdf_drerttd "></view>

 

		<view class="pl40 pr40 dfs_jh_drtyxccvt">
			
			<view class="cen dfs_jh_ceererttx">
				<view class="pr f_b fg_jh_deertxert">
					<image src="../../static/img/user_icon.png"  class="yj user_icnsdrt"></image>
					<image src="../../static/img/sdf_a.png" class="sdf_a" mode=""></image>
				</view>
				<view class="fz28 z3">
					Amy
				</view>
			</view>
			
			<view class="mt20">
				
				<navigator url="/pages/user/cidian" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b">
						<image src="../../static/img/sdf_b.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						词典
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>
				
				
				<navigator url="/pages/user/used_settings" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b">
						<image src="../../static/img/dsfs_a.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						常用设置
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>



				<navigator url="/pages/user/message_center" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b ab">
						<image src="../../static/img/dsfs_b.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						消息中心
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>



				<navigator url="/pages/user/feedback" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b ac">
						<image src="../../static/img/dsfs_c.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						意见反馈
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>

				<navigator url="/pages/user/usinghelp" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b ad">
						<image src="../../static/img/dsfs_d.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						使用帮助
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>


				<view @tap="is_seert=true" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b ae">
						<image src="../../static/img/dsfs_e.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						分享APP
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</view>



				<navigator url="/pages/user/About_Us" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
					<view class="sd_jh_dertx cen h100 f_b af">
						<image src="../../static/img/dsfs_f.png" class="cz"></image>
					</view>
					<view class="f_b fz30 z6">
						关于我们 
					</view>
					<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
				</navigator>






				<view class="mt50">
					<view class="dx_btn">
						退出登录
					</view>
				</view>



			</view>


			<van-popup :show="is_seert" @close="is_seert=false" position="bottom">
				<fenxiang @close="is_seert=false"></fenxiang>
			</van-popup>
		</view>
	</view>

</template>
<script>
	import fenxiang from "@/components/yixue/fenxiang.vue"
	export default {
		data() {
			return {
				is_seert: false
			}
		},
		components: {
			fenxiang
		},
		methods: {

		},
		mounted() {

		}
	}
</script>
<style scoped>
	.dfs_jh_drtyxccvt{
		margin-top: -40upx;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		background: #F1F2FF;
	}
	.we_xdf_drerttd {
		height: 150upx;

		background: #6A7BFF;
		z-index: 1;
	}


	.user_pahjh_df {

		height: 210upx;
		padding: 30upx;
	}

	.user_imger {
		width: 130upx;
		height: 130upx;
		border: 10upx solid #949AFF;
	}

	.bhg_deerttx {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.bianji_dder {
		position: absolute;
		right: 20upx;
		bottom: 0upx;
		background: #fff;
		border-radius: 40upx;
		width: 100upx;
		height: 45upx;
		line-height: 45upx;
		text-align: center;
	}

	.dsf_jh_dertyct {
		height: 90upx;
		line-height: 90upx;
	}

	.sd_jh_dertx {
		width: 80upx;
		text-align: center;

	}

	.sd_jh_dertx image {
		width: 31upx;
		height: 34upx;
	}

	.rihg_deert {
		width: 13upx;
		height: 22upx;
		position: absolute;
		right: 30upx;
		top: 35upx;
	}

	.sd_jh_dertx.ab image {
		width: 38upx;
		height: 30upx;
	}

	.sd_jh_dertx.ac image {
		width: 33upx;
		height: 33upx;
	}

	.sd_jh_dertx.ad image {
		width: 32upx;
		height: 32upx;
	}

	.sd_jh_dertx.ae image {
		width: 33upx;
		height: 34upx;
	}

	.sd_jh_dertx.af image {
		width: 35upx;
		height: 35upx;
	}
	
	.user_icnsdrt,.fg_jh_deertxert{
		width: 154upx;
		height: 154upx;
	}
	
	.sdf_a{
		width: 35upx;
		height: 46upx;
		position: absolute;
		right: 0;
		bottom: 0upx;
	}
	.fg_jh_deertxert{
		margin-top: -77upx;
	}
	.sdf_b{
		width: 30upx;
		height: 37upx;
	}
</style>

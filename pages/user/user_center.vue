<template>
	<view class="pl40 pr40 pt40">

		<view class="user_pahjh_df pr">
			<image src="../../static/img/beij_sd.png" class="bhg_deerttx" mode=""></image>
			<view class="pr">
				<image src="../../static/img/user_img.png" class="user_imger yj fl mt20"></image>


				<view class="ov pl20 pt50">
					<view class="fz30 cf mt20">
						Amy
						<view class="mt10 df_dfgfggxd fz26">
							13538190372
						</view>
					</view>
				</view>


				<navigator url="/pages/user/improve_information" class="bianji_dder fz26 ls">编辑</navigator>

			</view>

		</view>


		<view class="mt40">


			<navigator url="/pages/user/used_settings" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b">
					<image src="../../static/img/dsfs_a.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					常用设置
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>



			<navigator url="" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b ab">
					<image src="../../static/img/dsfs_b.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					消息中心
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>



			<navigator url="" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b ac">
					<image src="../../static/img/dsfs_c.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					意见反馈
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>

			<navigator url="" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b ad">
					<image src="../../static/img/dsfs_d.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					使用帮助
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>


			<navigator url="" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b ae">
					<image src="../../static/img/dsfs_e.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					分享APP
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>



			<navigator url="" class="mb10 yj4 bgff pl20 pr40 dsf_jh_dertyct pr">
				<view class="sd_jh_dertx cen h100 f_b af">
					<image src="../../static/img/dsfs_f.png" class="cz"></image>
				</view>
				<view class="f_b fz30 z6">
					关于我们
				</view>
				<image src="../../static/img/dsfs_g.png" class="rihg_deert"></image>
			</navigator>






			<view class="mt100">
				<view class="dx_btn">
					退出登录
				</view>
			</view>



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

		},
		mounted() {

		}
	}
</script>
<style scoped>
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
</style>

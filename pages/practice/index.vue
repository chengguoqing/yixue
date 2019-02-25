<template>
	<view>
		<image src="../../static/img/banner.jpg" class="w100 cz" mode="widthFix"></image>

		<view class="mt20 dfs_jh_deret pr">





			<view class="dx_row sd_jhh_drert_row mb20">
				<view class="dx_col_12 sd_jhh_drert_col" :class="sd.cls" v-for="(sd,idx) in sd_jhcd" @tap="qiehuan(sd,idx)">
					{{sd.name}}
				</view>
			</view>
			<view v-if="idx_ddf==0">
				<image src="../../static/img/moni.png" class="sd_jh_derrttx" mode=""></image>
				<view class="dx_row df_df_row">
					<navigator class="dx_col_12  sdf_jh_derert" url="/pages/practice/ztlx">
						<view class="bgff h100 dfgf_jhj_ddfg aa">
							<image src="../../static/img/fsdd_sdf_a.png" class="fsdd_sdf_a"></image>
							<view class="fz26 z6 mt20">
								主题练习
							</view>
						</view>
					</navigator>

					<view class="dx_col_12  sdf_jh_derert">
						<navigator class="bgff h100 dfgf_jhj_ddfg tr ab" url="/pages/practice/zxlx">
							<image src="../../static/img/fsdd_sdf_b.png" class="fsdd_sdf_a"></image>
							<view class="fz26 z6 mt20">
								专项练习
							</view>
						</navigator>
					</view>




					<view class="dx_col_12  sdf_jh_derert">
					
						<navigator url="/pages/practice/sjlx" class="bgff h100 dfgf_jhj_ddfg ab ac">
							<image src="../../static/img/fsdd_sdf_c.png" class="fsdd_sdf_a"></image>
							<view class="fz26 z6 mt20">
								随机练习
							</view>
						</navigator>
					</view>





					<view class="dx_col_12  sdf_jh_derert">
						<navigator url="/pages/practice/sxlx" class="bgff h100 dfgf_jhj_ddfg tr aa ac">
							<image src="../../static/img/fsdd_sdf_d.png" class="fsdd_sdf_a"></image>
							<view class="fz26 z6 mt20">
								顺序练习
							</view>
						</navigator>
					</view>


				</view>



				<view class="mt20 bgff yj4 dx_row dsf_jh_drttxcerrtt">
					<view class="dx_col_12 pl40 brm">
						<image src="../../static/img/fsdd_sdf_e.png" class="fsdd_sdf_e cz"></image>
						<text class="fz24 z9 ml10">我的错题</text>
					</view>
					<view class="dx_col_12 pl40">
						<image src="../../static/img/fsdd_sdf_f.png" class="fsdd_sdf_e cz ab"></image>
						<text class="fz24 z9 ml10">我的收藏</text>
					</view>
				</view>


			</view>
 


			<view class="dx_row df_df_row" v-if="idx_ddf==1">
				<view class="dx_col_12  sdf_jh_derert yj4 ov ab" v-for="sd in 10">
					<image src="../../static/img/fneg_dref.png" class="fneg_dref_ert cz w100"></image>
					<view class="bgff diansan fz26 z6 ln msdf_jh_drerrt pd pt15">
						安徽省2018年度“亿学杯”商务英语实践技能大赛高校新闻报道
					</view>
				</view>

			</view>




		</view>


	</view>

</template>
<script>
	export default {
		data() {
			return {
				idx_ddf: 0,
				sd_jhcd: [{
					name: "线上平台竞赛",
					cls: "act"
				}, {
					name: "线下平台竞赛",
					cls: ""
				}]
			}
		},
		components: {

		},

		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/user/message_center'
			});
		},
		methods: {
			qiehuan(sd, idx) {
				this.sd_jhcd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.idx_ddf = idx

			}
		},
		mounted() {

		},
	}
</script>
<style scoped>
	.df_df_row {
		margin-left: -20upx;
		margin-right: -20upx;
	}

	.sdf_jh_derert {
		height: 290upx;
		padding-left: 10upx;
		padding-right: 10upx;
		margin-top: 20upx;
	}

	.sdf_jh_derert.ab {
		height: auto;
	}

	.dfgf_jhj_ddfg {

		padding: 40upx;
	}

	.dfgf_jhj_ddfg.aa {
		border-top-right-radius: 80upx;
		border-bottom-left-radius: 80upx;
	}

	.dfgf_jhj_ddfg.ab {
		border-top-left-radius: 80upx;
		border-bottom-right-radius: 80upx;
	}

	.dfgf_jhj_ddfg.ac {
		padding-top: 120upx;
	}

	.fsdd_sdf_a {
		width: 87upx;
		height: 87upx;
	}

	.sd_jh_derrttx {
		position: absolute;
		width: 252upx;
		height: 252upx;
		left: 0;
		right: 0;
		top: 0upx;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
		box-shadow: 0 0 20upx rgba(0, 0, 0, .1);
	}

	.fsdd_sdf_e {
		width: 38upx;
		height: 48upx;
	}

	.fsdd_sdf_e.ab {
		width: 54upx;
		height: 54upx;
	}

	.dsf_jh_drttxcerrtt {
		line-height: 80upx;
	}

	.fneg_dref_ert {
		height: 280upx;
	}

	.msdf_jh_drerrt {
		height: 140upx;
	}
</style>

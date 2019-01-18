<template>
	<view>

		<view class="sdd_jh_derrtt pt40 pm40">
			<view class="sd_jh_drrt_crtyy">
				<image src="../../static/img/xiaoren.png" class="xiaorener cz"></image>
				<text class="fz30 cf ml20">每天完成30道题目</text>
			</view>
		</view>

		<image src="../../static/img/jh_dfg.jpg" mode="widthFix" class="w100"></image>

		<view class="pt40 pl40 pr40">
			<view class="fz32 z3">
				学习计划执行周期：
			</view>
			<view class="fz26 z6 mt20">
				2018年11月2日 12：00 ~ 2018年11月25日 24：00
			</view>

			<view class="dx_row dsf_xdcf_ertt pt50">
				<view class="dx_col_12">
					<view class="sd_jh_drt_drrtx bgff">
						<view class="f_b sd_j_xer_kmd pt20">
							<text class="fz32">31/</text>
							<text class="fz24">题</text>
							<view class="fz22 mt5">
								今日完成
							</view>
						</view>
						<view class=" fz26 mt20 fg_jh_dertxr">
							待完成
						</view>
					</view>
					<view class="fz28 cen z3 mt30">
						11月5日
					</view>
				</view>


				<view class="dx_col_12">
					<view class="sd_jh_drt_drrtx bgff ab">
						<view class="f_b sd_j_xer_kmd pt20">
							<text class="fz32">31/</text>
							<text class="fz24">题</text>
							<view class="fz22 mt5">
								今日完成
							</view>
						</view>
						<view class=" fz26 mt20 fg_jh_dertxr">
							未完成
						</view>
					</view>
					<view class="fz28 cen z3 mt30">
						11月5日
					</view>
				</view>




				<view class="dx_col_12">
					<view class="sd_jh_drt_drrtx bgff ac">
						<view class="f_b sd_j_xer_kmd pt20">
							<text class="fz32">31/</text>
							<text class="fz24">题</text>
							<view class="fz22 mt5">
								今日完成
							</view>
						</view>

						<view class="qc">

						</view>
						<view class=" fz26 mt20 fg_jh_dertxr">
							正确15
						</view>

						<view class=" fz26 mt20 fg_jh_dertxr ye">
							错误15
						</view>
						<view class="qc">

						</view>


					</view>
					<view class="fz28 cen z3 mt30 dx_row">
						11月5日
					</view>
				</view>




				<view class="dx_col_12">
					<view class="sd_jh_drt_drrtx bgff ac">
						<view class="f_b sd_j_xer_kmd pt20">
							<text class="fz32">31/</text>
							<text class="fz24">题</text>
							<view class="fz22 mt5">
								今日完成
							</view>
						</view>
						<view class="qc">

						</view>
						<view class=" fz26 mt20 fg_jh_dertxr">
							正确15
						</view>

						<view class=" fz26 mt20 fg_jh_dertxr ye">
							错误15
						</view>
						<view class="qc">

						</view>

					</view>
					<view class="fz28 cen z3 mt30">
						11月5日
					</view>
				</view>

			</view>

		</view>

		<zizhu_pup v-if="sd_khdf" @close="sd_khdf=false"></zizhu_pup>
	</view>
</template>
<script>
	import zizhu_pup from "@/components/yixue/zizhu_pup.vue"
	export default {
		data() {
			return {
				sd_khdf: false
			}
		},
		components: {
			zizhu_pup
		},
		onNavigationBarButtonTap(e) {
			this.sd_khdf=true
		},
		methods: {

		},
		mounted() {

		},
	}
</script>
<style scoped>
	.sdd_jh_derrtt {
		background: #6A7BFF;
	}

	.sd_jh_drrt_crtyy {
		width: 450upx;
		margin: auto;
		border: 1px solid #fff;
		line-height: 80upx;
		height: 80upx;
		padding-left: 50upx;
	}

	.xiaorener {
		width: 87upx;
		height: 63upx;
	}

	.sd_jh_drt_drrtx {
		width: 226upx;
		height: 226upx;
		box-shadow: 0 0 10upx rgba(0, 0, 0, .1);
		margin: auto;
		position: relative;
		text-align: center;
		padding-top: 30upx;
	}

	.sd_j_xer_kmd {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		background: #45C8ED;
		color: #fff;
	}

	.fg_jh_dertxr {
		color: #45C8ED;
	}

	.dsf_xdcf_ertt .dx_col_12 {
		margin-bottom: 60upx;
	}

	.sd_jh_drt_drrtx.ab {
		background: #DDDCDD;
	}

	.sd_jh_drt_drrtx.ab .sd_j_xer_kmd {
		background: #939293;
	}

	.sd_jh_drt_drrtx.ab .fg_jh_dertxr {
		color: #939293;
	}



	.sd_jh_drt_drrtx.ac .sd_j_xer_kmd {
		background: #7988FF;
	}

	.sd_jh_drt_drrtx.ac .fg_jh_dertxr {
		color: #7988FF;
		float: left;
		width: 50%;
	}
</style>

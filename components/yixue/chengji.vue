<!-- 成绩 -->
<template>
	<view>
		<view class="mt100 df_jh_errtxert yj4">
			<view class="sd_jh_crt_dr cf fz36 cen ln pt20 yj4">
				2025
				<view class="fz26 mt10">
					累计做题数
				</view>
			</view>

			<view class="box cen">
				<view class="box_a">
					<view class="qsd_dxcrtxet">
						<image src="../../static/img/linhg_a.png" class="linhg_a cz"></image>
					</view>

					<view class="mt10 z6 fz26">
						及格次数
					</view>
					<view class="fz26 z3 mt10">
						22
					</view>
				</view>


				<view class="box_a">
					<view class="qsd_dxcrtxet">
						<image src="../../static/img/linhg_b.png" class="linhg_a ab cz"></image>
					</view>

					<view class="mt10 z6 fz26">
						及格次数
					</view>
					<view class="fz26 z3 mt10">
						22
					</view>
				</view>


				<view class="box_a">
					<view class="qsd_dxcrtxet">
						<image src="../../static/img/linhg_c.png" class="linhg_a ac cz"></image>
					</view>

					<view class="mt10 z6 fz26">
						及格次数
					</view>
					<view class="fz26 z3 mt10">
						22
					</view>
				</view>



			</view>

			<view class="mt40 pm20 ln fz26 pl40">
				<image src="../../static/img/linhg_d.png" class="wsd_jh_dee cz"></image>
				<text class=" ls cz ml10">您的历史最高成绩 </text>
				<text class="red">90</text> 分
				<text class="ml20 red">1000</text> 名
				<navigator url="" class="qug_deertxc fz24 cf ml20">去竞赛</navigator>
			</view>


		</view>


		<view class="df_jh_errtxert yj4 mt20  pt20">
			<view class="box cen df_jh_ddfrrtxc pl40">
				<view class="box_a fz34 z3 tl">
					本周做题数目
				</view>
				<view class="box_a fz26">
					达标 <text class="wsiu_ddrertxc cz">2</text> 天
				</view>

				<view class="box_a fz26">
					已连续做 <text class="ye">5</text> 天
				</view>
			</view>
			<view class="fz26 z9 mt20 pl40">
				80%的用户要每周坚持5天以上达标，才能通过考试哦！
			</view>
			<view class="mt40 pm10">
				<image src="../../static/img/tubiao_s.png" class="w100" mode="widthFix"></image>
			</view>

		</view>



		<view class="df_jh_errtxert yj4 mt20  pt20">

			<view class="sd_jh_ddeertxc pm20" v-for="sd in sd_ddffdf" @tap="sd_xddfff(sd)">
				<view class="box cen df_jh_ddfrrtxc pl40">
					<view class="box_a fz34 z3 tl">
						11.20-11.24
					</view>
					<view class="box_a fz26">
						达标 <text class="wsiu_ddrertxc cz">2</text> 天
					</view>

					<view class="box_a fz26">
						连续做题5天 <image src="../../static/img/down_eerrq.png" class="down_eerrq"></image>
					</view>
				</view>

				<view class="mt40 pm10" v-if="sd.cls">
					<image src="../../static/img/tubiao_s.png" class="w100" mode="widthFix" v-if="sd.type==0"></image>
					<view class="cen" v-if="sd.type==1">
						<image src="../../static/img/meiyoushuju.png" class="meiyoushuju"></image>
					</view>

				</view>

			</view>





		</view>





	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			sd_xddfff(sd) {
				this.sd_ddffdf.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.df_jh_errtxert {
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0 0 10upx rgba(0, 0, 0, .2);
	}

	.sd_jh_crt_dr {
		width: 144upx;
		height: 144upx;
		background: #2FC2EB;
		position: relative;
		top: -72upx;
		margin: auto;
		box-shadow: 0 0 10upx rgba(0, 0, 0, .2);
	}

	.linhg_a {
		width: 40upx;
		height: 45upx;
	}

	.linhg_a.ab {
		width: 62upx;
		height: 52upx;
	}

	.linhg_a.ac {
		width: 54upx;
		height: 50upx;
	}

	.qsd_dxcrtxet {
		height: 55upx;
		line-height: 55upx;
	}

	.wsd_jh_dee {
		width: 28upx;
		height: 35upx;
	}

	.qug_deertxc {
		display: inline-block;
		width: 87upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		background: #667AFF;
		border-radius: 40upx;
	}

	.wsiu_ddrertxc {
		width: 60upx;
		height: 30upx;
		border-radius: 30upx;
		text-align: center;
		line-height: 30upx;
		color: #fff;
		background: #F3AE2F;
		display: inline-block;
	}

	.df_jh_ddfrrtxc {
		line-height: 30upx;
	}

	.down_eerrq {
		width: 22upx;
		height: 13upx;
	}

	.meiyoushuju {
		width: 269upx;
		height: 53upx;
	}
</style>

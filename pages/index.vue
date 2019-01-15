<template>
	<view class="sdghjh_drrt pm50">
		<image src="../static/img/banner.jpg" class="w100 cz" mode="widthFix"></image>
		<view class="mt20 dfs_jh_deret">
			<view class="dx_row sd_jhh_drert_row mb20">
				<view class="dx_col_8 sd_jhh_drert_col" :class="sd.cls" v-for="sd in sd_jhcd" @click="qiehuan(sd)">
					{{sd.name}}
				</view>
			</view>



			<view class="sd_ul">
				<view class="sdd_li bgff   pt20 pm20 ov" v-for="sd in 2">
					<view class="sd_jYbgdsr">

					</view>
					<view class="ls fz30 dian">
						商务英语练考赛一体化平台
					</view>
					<view class="mt20 fz26 z6 dian">
						多种习题模式，海量题型，专注知识技能训练。
					</view>

					<view class="mt20 pr ">
						<view class="f_b">
							<image src="../static/img/yanjin.png" class="uamjjimder cz"></image>
							<text class="fz24 z9 ">1234</text>
						</view>
						<view class="f_b ml60">
							<image src="../static/img/dianzan.png" class="uamjjimder cz ab"></image>
							<text class="fz24 z9 ">120</text>
						</view>
						<view class="dsf_lih_df">
							立即体验
						</view>

					</view>
				</view>



				<view class="sdd_li bgff   pt20 pm20 ov ab" v-for="sd in 10">
					<view class="sd_jYbgdsr">

					</view>
					<view class="ls fz30 dian">
						商务英语练考赛一体化平台
					</view>
					<view class="mt20 fz26 z6 dian">
						多种习题模式，海量题型，专注知识技能训练。
					</view>

					<view class="mt20 pr ">
						<view class="f_b">
							<image src="../static/img/yanjin.png" class="uamjjimder cz"></image>
							<text class="fz24 z9 ">1234</text>
						</view>
						<view class="f_b ml60">
							<image src="../static/img/dianzan.png" class="uamjjimder cz ab"></image>
							<text class="fz24 z9 ">120</text>
						</view>
						<view class="dsf_lih_df">
							敬请期待
						</view>

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
				sd_jhcd: [{
					name: "商务英语",
					cls: "act"
				}, {
					name: "商务日语",
					cls: ""
				}, {
					name: "连锁经营",
					cls: ""
				}]
			};
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 1) {
				uni.navigateTo({
					url: '/pages/user/user_center'
				});
			}
		},
		methods: {
			qiehuan(sd) {
				this.sd_jhcd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"

			}
		}
	}
</script>

<style scoped="">
	.sdghjh_drrt {
		background: #EAEBFA;
	}

	.dfs_jh_deret {
		padding-left: 45upx;
		padding-right: 45upx;
	}

	.sd_jhh_drert_row {
		background: #B2B3F9;
		line-height: 72upx;
		height: 72upx;

		border-radius: 72upx;
	}

	.sd_jhh_drert_col {
		color: #fff;
		text-align: center;
		font-size: 28upx;

	}

	.sd_jhh_drert_col.act {
		color: #B2B3F9;
		background: #fff;
		border-radius: 72upx;
	}

	.uamjjimder {
		width: 30upx;
		height: 24upx;
		margin-right: 10upx;
	}

	.uamjjimder.ab {
		width: 25upx;
	}

	.dsf_lih_df {
		position: absolute;
		right: 0;
		top: 10upx;
		width: 112upx;
		height: 40upx;
		text-align: center;
		color: #fff;
		line-height: 40upx;
		border-radius: 40upx;
		background: #6277FF;
		font-size: 24upx;
	}

	.sdd_li {
		padding-left: 40upx;
		padding-right: 40upx;
		border-radius: 20upx;
		position: relative;
		margin-top: 20upx;
	}

	.sd_jYbgdsr {
		width: 40upx;
		height: 40upx;
		position: absolute;
		left: -20upx;
		top: 80upx;
		border-radius: 50%;
		background: #EAEBFA;
	}

	.sdd_li.ab .ls {
		color: #666 !important;
	}

	.sdd_li.ab .dsf_lih_df {
		background: #B3B3B3;
	}

	.sdd_li.ab {
		background: #DBDDEB !important;
	}
</style>

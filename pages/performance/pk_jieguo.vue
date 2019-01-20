<template>
	<view class="pl40 pr40 pt20">
		<view class="yj4 bgff sd_jh_ddeerer box cen">
			<view class="box_a">
				<image src="../../static/img/iu_sd.png" class="user_icd_er yj"></image>
				<view class="mt10 fz26">
					安元芬
				</view>
				<view class="mt10 ls fz32">
					80分
				</view>
			</view>

			<view class="box_a pt60">
				<image src="../../static/img/pk.png" class="pk_iconh_dert"></image>
				<view class="fz26 z6">
					(未获得名次）
				</view>
			</view>





			<view class="box_a">
				<image src="../../static/img/iu_sd.png" class="user_icd_er yj"></image>
				<view class="mt10 fz26">
					安元芬
				</view>
				<view class="mt10 ls fz32">
					80分
				</view>
			</view>
		</view>

		<view class="yj4 bgff pt70 mt20 pm50">

			<view class="sd_jh_derttxet ">

				<view class="pm20">
					<image src="../../static/img/ku_xjs.png" class="ku_xjs_der cz"></image>
					<text class="fz28 z6 ml10">挑战失败，强化一下继续再战！</text>
				</view>

				<view class="box cen fz28 mt30">
					<view class="box_a">
						安元芬
					</view>
					<view class="box_a ls">
						60分
					</view>
					<view class="box_a ls">
						01分21秒
					</view>
				</view>

				<view class="box cen fz28 mt30">
					<view class="box_a">
						张晓明
					</view>
					<view class="box_a ls">
						60分
					</view>
					<view class="box_a ls">
						01分21秒
					</view>
				</view>



				<view class="mt60">

					<navigator class="dx_btn dsf_drrttxw" url="/pages/performance/pk_zhong">
						继续挑战
					</navigator>
					<navigator class="dx_btn dsf_drrttxw ab mt20" >
						分享一下
					</navigator>

					<view class="fz24 z9 cen mt20">
						虽败犹荣，喊上好友一起来PK！
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
	.sd_jh_ddeerer {
		padding: 80upx 0upx 50upx 0;
	}

	.user_icd_er {
		width: 134upx;
		height: 134upx;
	}

	.pk_iconh_dert {
		width: 105upx;
		height: 49upx;
	}

	.sd_jh_derttxet {
		width: 480upx;
		margin: auto;
	}

	.dsf_drrttxw {
		height: 70upx;
		line-height: 70upx;
	}

	.ku_xjs_der {
		width: 62upx;
		height: 55upx;
	}

	.dsf_drrttxw.ab {
		background: #fff;
		color: #5b64fd;
		border: 1px solid #5b64fd;
	}
</style>

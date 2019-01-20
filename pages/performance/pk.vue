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
					(第一名）
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

				<view class="fz28 z6">
					<text class="ls fz30">竞赛时间：</text> 90分钟
				</view>
				<view class="fz28 z6 mt20">
					<text class="ls fz30">竞赛满分：</text> 90分</view>

				<view class="fz28 z6 ln fz28 mt20">
					<text class="ls fz30">竞赛规则：</text>
						每做对1题得2分，
						以得分高的获胜，如果得分相同，
						用时短的获胜。
				</view>
				
				<view class="mt60">
				
					<navigator class="dx_btn dsf_drrttxw" url="/pages/performance/pk_zhong">
						开始挑战
					</navigator>
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
		width: 460upx;
		margin: auto;
	}
	.dsf_drrttxw{
		height: 70upx;
		line-height: 70upx;
	}
</style>

<template>
	<view class="pl40 pr40 pt20">
		<view class="pd pt20 fz30  bgff yj8">
			<view class="ls">
				<image src="../../static/img/linhg_d.png" class="cz jiang_dsdert mr10"></image>
				您的历史最高成绩 <text class="red">90</text>分 <text class="red ml10">1000</text> 名
				<navigator url="/pages/performance/pk" class="fenghg_eertx cen ml10 cz">去竞赛</navigator>
			</view>


			<view class="box cen mt30 pm20">
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




		</view>

		<view class="yj8 bgff mt20">

			<navigator class="dx_row cen fz28 z6 df_kjj_deerder" v-for="sd in 10" url="/pages/performance/pk_jieguo">

				<view class="dx_col_6 fz26 ls">
					<text class="fz34">99</text> 分
				</view>
				<view class="dx_col_9">
					58分30秒(用时)
				</view>
				<view class="dx_col_9 z9">
					2018.11.11 17:30
				</view>
			</navigator>
			
			<view class="mt40 pm40 cen">
				<image src="../../static/img/meiyoushuju.png" class="meiyoushuju"></image>
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
	.jiang_dsdert {
		width: 28upx;
		height: 35upx;
	}

	.fenghg_eertx {
		display: inline-block;
		width: 86upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		background: #717FFF;
		color: #fff;
		font-size: 24upx;
	}
	.df_kjj_deerder{
		line-height: 70upx;
	}
	.df_kjj_deerder:nth-child(even){
		background: #F9FAFF;
	}
	.meiyoushuju{
		width: 270upx;
		height: 53upx;
	}
</style>

<!-- 生词本 -->
<template>
	<view class="pt20">
		<view class="pl30 pr30 dx_row">
			<view class="dx_col_18">
				<view class="sd_jh_ddfr yj4 bgff pr ls pl40 fz30">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>

					<image src="../../static/img/dsf_f_sdfd_c.png" class="add_icon"></image>
				</view>
			</view>
			<view class="dx_col_6 tr pt10">
				<image src="../../static/img/dsf_f_sdfd_a.png" class="sd_ddrertx"></image>
				<image src="../../static/img/dsf_f_sdfd_b.png" class="sd_ddrertx ml10"></image>
			</view>

			<view class="" v-for="(sd,ixd) in 10">
				<view class="fz24 z9 pt20 pm20 pd">
					2018/04/08 12:55
				</view>
				<van-swipe-cell right-width="60" v-for="(sd,ix) in 2">
					<view class="pl30 pr30 pt20 pm20 ln bgff yj4 mt20">
						<view class="dian ls fz28">
							aestehic
						</view>
						<view class="fz24 z6">
							adj. 美的；美学的；审美的，具有审美趣味的
						</view>
					</view>
					<view slot="right" class="eertx_jh_ddrt">删除</view>
				</van-swipe-cell>
			</view>

		</view>


		<view class="sd_jh_ddertyx">
			<view class="ls fz32 mt5 cen" v-for="(sd,idx) in airport.list" @tap="jhg_deert(sd.letter)">
				{{sd.letter}}
			</view>
		</view>


	</view>
</template>
<script>
	import airport from "@/static/js/airport.js"
	export default {
		data() {
			return {
				airport: "",
				index: 0,
				array: ['考研词汇', '四六级高频词汇', '四六级高频词汇', '剑桥商务英语高频词汇']

			}
		},
		components: {

		},
		methods: {
			jhg_deert(letter) {
				

				uni.showToast({
					title: letter,
					icon: "none",
					duration: 2000
				});
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
			}
		},
		mounted() {
			this.airport = airport
		}
	}
</script>
<style scoped>
	.sd_jh_ddfr {
		line-height: 70upx;
		height: 70upx;
		background: #fff;
		padding-left: 40upx;
		position: relative;
	}

	.add_icon {
		width: 23upx;
		height: 12upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}

	.sd_ddrertx {
		width: 64upx;
		height: 64upx;
	}

	.eertx_jh_ddrt {
		background: #EB7676;
		line-height: 120upx;
		color: #fff;
		text-align: center;
		font-size: 26upx;
		width: 100upx;
	}



	.sd_jh_ddertyx {
		position: fixed;
		right: 20upx;
		top: 80upx;
		z-index: 1000;
		width: 60upx;

	}

	.fg_df_dertx {
		background: #FCFCFF;
	}
</style>

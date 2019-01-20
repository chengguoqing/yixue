<template>
	<view class="pl30 pr30 pt40">

		<view class="yj4 bgff  pd pt50 pm30 dsf_deerrxe pr">

			<view class="sd_jh_deretxertx pr cen z6 bgff aa">
				<image src="../../static/img/a_ssd_a.png" class="a_ssd_a cz fl"></image>
				<text class="cz">0分</text>
				<view class="qc">

				</view>

			</view>


			<view class="sd_jh_deretxertx pr cen z6 bgff ab">
				<image src="../../static/img/time_d.png" class="a_ssd_a cz fl"></image>
				<text class="cz">01：59：23</text>
				<view class="qc">

				</view>

			</view>


			<view class="fz28 z3">
				<text class="sd_jh_xdertx mr10">单选</text>
				一般情况下，商业发票的金额应与（ ）一致。
			</view>

			<view class="mt40 pd z6">

				<view class="fz28">
					<text class="ls mr10">A</text>
					合同金额
				</view>
				<view class="fz28 mt20">
					<text class="ls mr10">B</text>
					信用证金额
				</view>
				<view class="fz28 mt20">
					<text class="ls mr10">C</text>
					保险金额
				</view>
				<view class="fz28 mt20">
					<text class="ls mr10">D</text>
					实际发货金额
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
	.dsf_deerrxe {
		min-height: 900upx;
	}

	.sd_jh_xdertx {
		font-size: 24upx;
		color: #2dc2eb;
		border: 1px solid #2dc2eb;
		padding: 2upx 6upx;
	}

	.sd_jh_deretxertx {
		line-height: 46upx;
		min-width: 150upx;
		font-size: 24upx;
		padding-right: 20upx;
		border-radius: 50upx;
		overflow: hidden;
		box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
		position: absolute;

		top: -25upx;
	}

	.sd_jh_deretxertx.aa {
		left: 0;
	}

	.sd_jh_deretxertx.ab {
		right: 0;
	}

	.a_ssd_a {
		width: 48upx;
		height: 46upx;
	}
</style>

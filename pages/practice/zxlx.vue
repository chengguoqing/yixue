<template>
	<view class="dx_body pt30">
		<view class="sd_sd_sdf bgff yj8 dx_row">
			<view class="dx_col_12">
				<image src="../../static/img/df_sdff_a.png" class="df_sdff_a cz"></image>
				<text class="ml10 z6 fz26">未做题练习</text>
			</view>
			<view class="dx_col_12">
				<image src="../../static/img/df_sdff_b.png" class="df_sdff_a cz ab"></image>
				<text class="ml10 z6 fz26">易错题</text>
			</view>

			<view class="qc"></view>
		</view>

		<view class="sd_sd_sdf bgff yj8 dx_row mt20 ab">

			<view class="dx_col_12 sdf_h_derertxer" v-for="(sd,idx) in sd_sdff">
				<text class="sd_jh_deert" :class="'a'+idx">{{idx+1}}</text>
				<text class="z6 fz28">{{sd.name}}</text>
				<text class="z9 fz22 ml5">{{sd.num}}</text>
			</view>

			<view class="qc">

			</view>

		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				sd_sdff: [{
					name: "单选题",
					num: "0/800 "
				},{
					name: "多选题",
					num: "0/800 "
				},{
					name: "判断题",
					num: "0/800 "
				},{
					name: "翻译题",
					num: "0/800 "
				},{
					name: "图片题",
					num: "0/800 "
				},{
					name: "图表题",
					num: "0/800 "
				},{
					name: "音频题",
					num: "0/800 "
				},{
					name: "视频题",
					num: "0/800 "
				},]
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {

		},
	}
</script>
<style scoped>
	.sd_sd_sdf {
		line-height: 100upx;
		height: 100upx;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.sd_sd_sdf.ab {
		height: auto;
		padding-left: 20upx;
		padding-right: 20upx;
	}

	.df_sdff_a {
		width: 54upx;
		height: 59upx;
	}

	.df_sdff_a.ab {
		width: 57upx;
		height: 56upx;
	}

	.sdf_h_derertxer {
		line-height: 90upx;
	}

	.sd_jh_deert {
		width: 45upx;
		height: 45upx;
		border-radius: 50%;
		background: #6699FF;
		color: #fff;
		line-height: 45upx;
		color: #fff;
		font-size: 26upx;
		margin-right: 20upx;
		display: inline-block;
		text-align: center;
	}

	.sd_jh_deert.a1 {
		background: #99CC00;
	}

	.sd_jh_deert.a2 {
		background: #FFCC66;
	}

	.sd_jh_deert.a3 {
		background: #9999FF;
	}

	.sd_jh_deert.a4 {
		background: #FF6666;
	}

	.sd_jh_deert.a5 {
		background: #4FE9C5;
	}

	.sd_jh_deert.a6 {
		background: #2EC1E7;
	}

	.sd_jh_deert.a7 {
		background: #8B75FD;
	}

	.sd_jh_deert.a8 {
		background: #FF6666;
	}

	.sd_jh_deert.a9 {
		background: #4FE9C5;
	}

	.sd_jh_deert.a10 {
		background: #2EC1E7;
	}

	.sd_jh_deert.a11 {
		background: #8B75FD;
	}


	.sd_jh_deert.a12 {
		background: #6699FF;
	}

	.sd_jh_deert.a13 {
		background: #8B75FD;
	}

	.sd_jh_deert.a14 {
		background: #99CC00;
	}

	.sd_jh_deert.a15 {
		background: #FFCC66;
	}
</style>

<template>
	<view>
		<image src="../../static/img/banner.jpg" class="w100 cz" mode="widthFix"></image>

		<view class="mt20 dfs_jh_deret">
			<view class="dx_row sd_jhh_drert_row mb20">
				<view class="dx_col_12 sd_jhh_drert_col" :class="sd.cls" v-for="sd in sd_jhcd" @click="qiehuan(sd)">
					{{sd.name}}
				</view>
			</view>

			<view class="dx_row df_df_row">
				<view class="dx_col_12  sdf_jh_derert" v-for="sd in 4">
					<view class="bgff h100">

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
		methods: {
			qiehuan(sd) {
				this.sd_jhcd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"

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
</style>

<template>
	<view class=" pt40 fg_df_dertx">

		<scroll-view class="scroll-view_H" scroll-y="true" :scroll-into-view="sd_dfrtyxc">
			<view class="pl40 pr40">
				<view class="sd_jh_der bgff pl40 pr40">
					<image src="../../static/img/fangdajin.png" class="fangdajine fl mt30" mode=""></image>
					<view class="ov pl30 pt30">
						<input type="text" placeholder="输入学校名称" class="fz30" />
					</view>
					<view class="qc">

					</view>
				</view>
			</view>


			<view class="" v-for="(sd,idx) in airport.list" :id="'dx_list'+sd.letter">
				<view class="pt20 pm20 pl40 pr40 fz30">
					{{sd.letter}}
				</view>
				<view class="pt30 pm30 fz30 bgff df_ddertyxret  pl40 pr40" v-for="(sd,idx_e) in sd.data" @tap="tiao_d()">
					{{sd}}
				</view>
			</view>


		</scroll-view>


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
				sd_dfrtyxc: ""
			}
		},
		components: {

		},
		methods: {
			jhg_deert(letter) {
				this.sd_dfrtyxc = 'dx_list' + letter
				console.log(this.sd_dfrtyxc)

				uni.showToast({
					title: letter,
					icon:"none",
					duration: 2000
				});
			},
			tiao_d() {
					this.$emit('close_d')
			}

		},
		mounted() {
			this.airport = airport
		},
	}
</script>
<style scoped>
	.scroll-view_H {
		height: 100vh;
	}

	.sd_jh_der {
		line-height: 100upx;
		height: 100upx;
	}

	.fangdajine {
		width: 44upx;
		height: 46upx;
	}

	.df_ddertyxret {
		border-top: #f8f8f8;
	}

	.df_ddertyxret:active {
		background: #f8f8f8 !important;
	}

	.sd_jh_ddertyx {
		position: fixed;
		right: 20upx;
		top: 80upx;
		z-index: 1000;
		width: 60upx;

	}
	.fg_df_dertx{
		background: #FCFCFF;
	}
</style>

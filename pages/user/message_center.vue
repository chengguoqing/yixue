<template>
	<view>


		<van-swipe-cell right-width="65" v-for="(sd,idx) in sd_ddfg">

			<van-cell-group>
				<van-cell is-link :title="'福建省2018年度“亿学杯”商务英语技能大赛开启'+idx" class="dian" />
			</van-cell-group>
			<view slot="right" class="jhg_dertxc" @tap="sanhg_drt(idx)">删除</view>
		</van-swipe-cell>



		<view class="cen s_jkh_dsrt" v-if="false">
			<image src="../../static/img/wuxiaoxi.png" class="wuxiaosert"></image>
		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				sd_ddfg: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
			}
		},
		components: {

		},
		methods: {
			sanhg_drt(sd) {
				this.sd_ddfg.splice(sd, 1);
			}
		},
		mounted() {

		},
	}
</script>
<style scoped>
	.wuxiaosert {
		width: 265upx;
		height: 271upx;
	}

	.s_jkh_dsrt {
		margin-top: 300upx;
	}

	.jhg_dertxc {
		background: #ED7676;
		color: #fff;
		text-align: center;
		line-height: 90upx;
		width: 130upx;
	}
</style>

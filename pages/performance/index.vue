<template>
	<view class="pm50">
		<view class="we_xdf_drerttd " :class="idx_sdf==1?'act':''"></view>
		<view class="pl30 pr30 pr">
			<view class="dx_row sd_jhh_drert_row mb20">
				<view class="dx_col_12 sd_jhh_drert_col" :class="sd.cls" v-for="(sd,idx) in sd_jhcd" @click="qiehuan(sd,idx)">
					{{sd.name}}
				</view>
			</view>


			<chengji v-if="idx_sdf==0"></chengji>
			<paighang v-if="idx_sdf==1"></paighang>


		</view>



	</view>
</template>
<script>
	import chengji from "@/components/yixue/chengji.vue"
	import paighang from "@/components/yixue/paighang.vue"
	export default {
		data() {
			return {
				idx_sdf: 0,
				sd_jhcd: [{
					name: "成绩",
					cls: "act"
				}, {
					name: "排行",
					cls: ""
				}],
				
			}
		},
		components: {
			chengji,
			paighang
		},
		methods: {
			qiehuan(sd,idx) {
				this.sd_jhcd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.idx_sdf=idx
			},

		},
		mounted() {},
	}
</script>
<style scoped>
	.we_xdf_drerttd {
		height: 470upx;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		background: #6A7BFF;
		z-index: 1;
	}
	.we_xdf_drerttd.act{
		height: 100upx;
	}
</style>

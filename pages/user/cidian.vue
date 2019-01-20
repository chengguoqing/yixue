<template>
	<view>
		<view class="dd_jh_derxrxcer pd">
			<view class="dx_row sd_jhh_drert_row mb20">
				<view class="dx_col_12 sd_jhh_drert_col" :class="sd.cls" v-for="(sd,idx) in sd_jhcd" @tap="qiehuan(sd,idx)">
					{{sd.name}}
				</view>
			</view>
		</view>

		<view class="sd_kj_body_de">
			<scb v-if="idx_sdf==0"></scb> 
			<hexincih v-if="idx_sdf==1"></hexincih>

		</view>



	</view>
</template>
<script>
	import scb from "@/components/yixue/scb.vue"
	import hexincih from "@/components/yixue/hexincih.vue"
	export default {
		data() {
			return {
				idx_sdf:0,
				sd_jhcd: [{
					name: "生词本",
					cls: "act"
				}, {
					name: "核心词汇",
					cls: ""
				}],
			}
		},
		components: {
			scb,
			hexincih
		},
		methods: {
			qiehuan(sd, idx) {
				this.sd_jhcd.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.idx_sdf = idx
			},
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.dd_jh_derxrxcer {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10000;
		height: 90upx;
		background: #6A7BFF;
	}

	.sd_kj_body_de {
		position: relative;
		z-index: 1;
		padding-top: 90upx;
	}
</style>

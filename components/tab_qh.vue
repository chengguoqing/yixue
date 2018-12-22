<!-- tab切换 -->
<template>
	<view class="box cen dsf_ddrertxc bbm" :class="is_sdf==1?'act':''">
		<view class="box_a df_fd_sdrert" :class="sd.cls" v-for="sd in sd_dfg" @click="sd_sddf(sd)">
			<text class="pd fz28 z9">{{sd.name}}</text>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			sd_dfg:'',
			is_sdf:""
		},
		data() {
			return {}
		},
		components: {},
		methods: {
			sd_sddf(sd){
				this.sd_dfg.map(a=>{
					a.cls=""
				})
				sd.cls="act"
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.dsf_ddrertxc{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10000;
		background: #fff;
		line-height: 100upx;
		height: 100upx;
		width: 100%;
	}
	.dsf_ddrertxc.act{
		position: relative;
	}
	.df_fd_sdrert.act text{
		padding-bottom: 26upx;
		color:#459FF7 ;
		border-bottom: 1px solid #459FF7;
	}
</style>

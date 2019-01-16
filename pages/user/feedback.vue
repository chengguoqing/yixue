<template>
	<view>
		<view class="pl40 pr40 pt40">
		
			<radio-group class="fz30" @change="radioChange">
				<label class="radio">
					<radio value="r1" checked="true" /><text class="df_drtrytxc ">Bug反馈</text>
				</label>
				<label class="radio ml100">
					<radio value="r2" /> <text class="df_drtrytxc ">功能建议</text>
				</label>
			</radio-group>

			<view class="ov">


				<textarea placeholder="比如在（   ）情况下，出现了（   ）异常" class=" f_jh_derrtcxc bgff mt20 pt20 pd fz30" v-show="sd_jh_df=='r1'"/>
					<textarea placeholder="比如我希望加入/完善（   ）功能，因为（   ）" class=" f_jh_derrtcxc bgff mt20 pt20 pd fz30" v-show="sd_jh_df=='r2'"/>
				</view>
			<view class="dx_btn mt40" @tap="gosd">
			   	提交 
			   </view>
			   
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				sd_jh_df:"r1"
			}
		},
		components: {

		},
		methods: {
			gosd(){
				uni.navigateBack({
					delta: 1
			});
			},
			radioChange(evt){
				this.sd_jh_df=evt.target.value
			}
		},
		mounted() {

		},
	}
</script>
<style scoped>
	.df_drtrytxc{
		position: relative;
		top: 5upx;
	}
	.f_jh_derrtcxc{
		height: 425upx;
		width: 100%;
	}
</style>

<template>
	<view class="pl40 pr40 pt40">

		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab ">
			<view class="dx_col_12">
				手机号
			</view>
			<view class="dx_col_12 tr z9 fz26">
				188******88
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>
		
		
		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " @tap="is_seert_r=true">
			<view class="dx_col_12">
				密码设置
			</view>
			<view class="dx_col_12 tr z9 fz26">
				
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>
		
		<van-popup :show="is_seert_r"    @close="is_seert_r=false">
			<view class="sd_jh_derttrert">
				<view class="sd_dff_drtyx">
					<input type="text" placeholder="请输入旧密码" password/>
				</view>
				
				<view class="sd_dff_drtyx">
					<input type="text" placeholder="请输入新密码" password/>
				</view>
				
				<view class="sd_dff_drtyx">
					<input type="text" placeholder="请确认新密码" password/>
				</view>
				
				<view class="mt40 pm20">
					<view class="dx_btn" @tap="is_seert_r=false">
						确定
					</view>
				</view>
			</view>
		</van-popup>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				is_seert_r:false
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
	.sd_jh_derttrert{
		width: 550upx;
		border-radius: 8upx;
		background: #fff;
		padding: 30upx;
	}
	.sd_dff_drtyx{
		border-radius: 8upx;
		border: 1px solid #e0e0e0;
		line-height: 80upx;
		height: 80upx;
		margin-top: 20upx;
		padding-top: 15upx;
		padding-left: 40upx;
		
	}
	.sd_dff_drtyx input{
		font-size: 28upx;
	}
</style>

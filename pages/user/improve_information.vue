<template>
	<view class="unfo_drrtxc pm100">

		<view class="  sd_jhg_ddrtt bgff dx_row fz30 mt30">
			<view class="dx_col_12">
				头像
			</view>
			<view class="dx_col_12 tr">
				<image src="../../static/img/user_icon.png" class="yj user_ixdrt cz" mode=""></image>
			</view>
		</view>


		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				昵称
			</view>
			<view class="dx_col_12 tr">
				<input type="text" value="Amy" class="sd_jh_dertxrtcr" />
			</view>
		</view>


		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				用户名
			</view>
			<view class="dx_col_12 tr">
				<input type="text" value="sd1" class="sd_jh_dertxrtcr" />
			</view>
		</view>



		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				中文姓名
			</view>
			<view class="dx_col_12 tr">
				<input type="text" value="安缘分" class="sd_jh_dertxrtcr" />
			</view>
		</view>


		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab ">
			<view class="dx_col_12">
				性别
			</view>
			<view class="dx_col_12 tr pr">


				<picker @change="bindPickerChange" :value="index" :range="array">
					{{array[index]}}
				</picker>


			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>

		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " @tap="is_seert_r=true">
			<view class="dx_col_12">
				院校名称
			</view>
			<view class="dx_col_12 tr ">
				厦门大学
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>



		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				班级
			</view>
			<view class="dx_col_12 tr">
				<input type="number" value="0502752" class="sd_jh_dertxrtcr" />
			</view>
		</view>



		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				学号
			</view>
			<view class="dx_col_12 tr">
				<input type="number" value="1234567" class="sd_jh_dertxrtcr" />
			</view>
		</view>



		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				联系方式
			</view>
			<view class="dx_col_12 tr">
				<input type="number" value="13538190372" class="sd_jh_dertxrtcr" />
			</view>
		</view>






		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab " @click="is_seert=true">
			<view class="dx_col_12">
				所在地区
			</view>
			<view class="dx_col_12 tr ">
				{{sdh_ed}}
			</view>
			<image src="../../static/img/right_icon.png" class="right_iconset" mode=""></image>
		</view>





		<view class="sd_jhg_ddrtt bgff dx_row fz30 mt20 ab">
			<view class="dx_col_12">
				电子邮箱
			</view>
			<view class="dx_col_12 tr">
				<input type="text" value="yixuesoft@qq.com" class="sd_jh_dertxrtcr" />
			</view>
		</view>


		<view class="mt50">
			
			<navigator url="/pages/index"  open-type="reLaunch" class="dx_btn">保存</navigator>
		</view>



		<van-popup :show="is_seert" @close="onClose"  position="bottom">
			<van-area :area-list=" areaList " columns-num="2" title="请选择地区"  @cancel="onClose" @confirm="wacse_eert"/>
		</van-popup>
		
		
		<van-popup :show="is_seert_r"   position="right">
			<yymc @close_d="is_seert_r=false"></yymc>
		</van-popup>
	</view>
</template>
<script>
	import areaList from "@/static/js/city.data.js"
	import yymc from"@/components/yixue/yymc.vue"
	export default {
		data() {
			return {
				array: ['男', '女'],
				index: 0,
				is_seert_r:false,
				areaList: [],
				is_seert:false,
				sdh_ed:"福建 厦门"
			}
		},
		components: {
			yymc
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			onClose(){
				this.is_seert=false
			},
			wacse_eert(e){
				this.sdh_ed=e.detail.values[0].name+" "+e.detail.values[1].name
				this.is_seert=false
			}
		},
		mounted() {
			this.areaList = areaList
		},
	}
</script>
<style scoped>
	

	.user_ixdrt {
		width: 78upx;
		height: 78upx;
	}

	.sd_jh_dertxrtcr {
		width: 100%;
		margin-top: 24upx;
	}

	
</style>

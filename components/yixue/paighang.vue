<!-- 排行 -->
<template>
	<view class=" pt10">
		<view class="box cen">
			<view class="box_a dsf_jh_defgx" :class="sd.cls" v-for="sd in sd_jhdf_d">
				{{sd.name}}
			</view>
		</view>
		<view class="yj8 bgff pt30 dfg_rjh_dexrt">

			<view class="we_sd_dercxx">
				<view class="dx_row sd_jhh_drert_row mb20">
					<view class="dx_col_8 sd_jhh_drert_col" :class="sd.cls" v-for="sd in sd_jhcd" @click="qiehuan(sd)">
						{{sd.name}}
					</view>
				</view>
			</view>

			<view class="dx_row dfs_jhjeertt pt20 pm20" v-for="sd in 10">
				<view class="dx_col_4 cen">
					<image src="../../static/img/jiang_a.png" class="jaingap_ddr"></image>
				</view>
				<view class="dx_col_6">
					<image src="../../static/img/user_icon.png" class="user_deert cz"></image>
					<view class="f_b ln cz">
						<view class="fz30">
							张晓明
						</view>
						<view class="ls fz24">
							100分
						</view>
					</view>
				</view>
				<view class="dx_col_10 tr fz26 cen ls">
					<text class="fz40">58</text>
					分
					<text class="fz40">30</text>
					秒
				</view>
				<view class="dx_col_4 cen">
					<image src="../../static/img/pk.png" class="pk_deertx"></image>
				</view>

			</view>


		</view>
		
		
		<view class="mt20 yj8 sd_jh_drrttxret dx_row">
			
			
					<view class="dx_col_4 cen">
				<text class="cf fz34">100+</text>
				</view>
				<view class="dx_col_6">
					<image src="../../static/img/user_icon.png" class="user_deert cz"></image>
					<view class="f_b ln cz">
						<view class="fz30 cf">
							安元芬
						</view>
						<view class="cf fz24">
							100分
						</view>
					</view>
				</view>
				<view class="dx_col_10 tr fz26 cen cf">
			
					<text class="fz40">30</text>
					秒
				</view>
				<view class="dx_col_4 cen">
					<navigator url="" class="fenghg_eertx">去分享</navigator>
				</view>
			
			</view>
			
			
			
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				sd_jhdf_d: [{
					name: "班级",
					cls: ""
				}, {
					name: "厦门市",
					cls: "act"
				}, {
					name: "全国",
					cls: ""
				}],
				sd_jhcd: [{
					name: "日排行",
					cls: "act"
				}, {
					name: "周排行",
					cls: ""
				}, {
					name: "月排行",
					cls: ""
				}],
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

			},
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.dsf_jh_defgx {
		font-size: 30upx;
		color: #6A7BFF;
		line-height: 60upx;
		height: 60upx;

	}

	.dsf_jh_defgx.act {
		background: #6A7BFF;
		color: #fff;
	}

	.we_sd_dercxx {
		width: 460upx;
		margin: auto;
	}

	.sd_jhh_drert_row {
		box-shadow: 0 0 20upx rgba(0, 0, 0, .2);
	}

	.jaingap_ddr {
		width: 47upx;
		height: 59upx;
	}

	.user_deert {
		width: 66upx;
		height: 66upx;
		margin-right: 15upx;
	}

	.pk_deertx {
		width: 52upx;
		height: 24upx;
	}

	.dfs_jhjeertt {
		line-height: 66upx;
	}

	.dfs_jhjeertt:nth-child(2n) {
		background: #F9FAFF;
	}

	.dfg_rjh_dexrt {
		height: 780upx;
		overflow: auto;
	}
	.sd_jh_drrttxret{
		height: 105upx;
		line-height: 105upx;
		background: #2EC3EA;
	}
	.fenghg_eertx{
		display: inline-block;
		width: 86upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		background: #717FFF;
		color: #fff;
		font-size: 24upx;
	}
</style>

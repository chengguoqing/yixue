<template>
	<view>
		<view class="bg_kh_deerrtt" @tap="close_sdf">

		</view>
		<view class="cz_w dsfg_kj_Dertxc">
			<view class="cz_a">



				<view class="sd_jh_ceertt yj4">
					<view class="fz32 z3 cen sd_kjh_dert">
						制定我的学习计划
					</view>
					<view class="btm sdf_jh_drt_rtyx ">

						<view class="dx_row  pl40 pr40">
							<view class="dx_col_7 fz28 z6 sd_jh_ddfgxd">
								开始时间
							</view>
							<view class="dx_col_17">
								<view class="sd_jh_ddfgxd pr br">

									<picker mode="date" :value="date" @change="bindDateChange">
										<view class="uni-input fz26 z6 tl ml20">{{date}}</view>
									</picker>


									<image src="../../static/img/time_icon.png" class="time_icon"></image>
								</view>
							</view>
						</view>


						<view class="dx_row  pl40 pr40 mt20">
							<view class="dx_col_7 fz28 z6 sd_jh_ddfgxd">
								结束时间
							</view>
							<view class="dx_col_17">
								<view class="sd_jh_ddfgxd pr br">
									<picker mode="date" :value="date" @change="bindDateChange">
										<view class="uni-input fz26 z6 tl ml20">{{date}}</view>
									</picker>
									<image src="../../static/img/time_icon.png" class="time_icon"></image>
								</view>
							</view>
						</view>

						<view class="ls fz28 mt30 tl pl70">
							学习目标：每日完成
							<view class="sd_jh_dffr f_b cz">
								<input type="number" value="30" class=" br" />
							</view>
							题
						</view>

						<view class="mt20 rsd_jh_dsdf pl40 pr40 dx_row fz28">
							<view class="dx_col_18 z6">
								每日练习时间提醒：
							</view>
							<view class="dx_col_6 ls">
								<image src="../../static/img/add_icon.png" class="add_icon cz"></image> 添加
							</view>
						</view>


						<view class=" rsd_jh_dsdf pl40 pr40 dx_row fz28 ab">
							<view class="dx_col_18 z6 fz14">
								<text class="cz">每日</text> <text class="fz32 cz ml10">08：00</text>
							</view>
							<view class="dx_col_6 ls">
								<view class="sdf_jh_deretxrt">
									<switch checked />
								</view>
							</view>
						</view>
						<view class=" rsd_jh_dsdf pl40 pr40 dx_row fz28 ab">
							<view class="dx_col_18 z6 fz14">
								<text class="cz">每日</text> <text class="fz32 cz ml10">20：00</text>
							</view>
							<view class="dx_col_6 ls">
								<view class="sdf_jh_deretxrt">
									<switch checked />
								</view>
							</view>
						</view>


						<view class="mt60 pl40 pr40">
							<view class="dx_btn" @tap="close_sdf">
								提交
							</view>

							<view class="mt40 pm40 fz28 z3 z9">
								已有 3688 为小伙伴制定了学习计划
							</view>
						</view>




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
				view: "",
				date: "2019-1-18"
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components: {

		},
		methods: {
			close_sdf() {
				this.view.close();
				this.$emit('close')
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},

		mounted() {


			this.view = new plus.nativeObj.View('test', {
					bottom: '0px',
					left: '0px',
					height: '56px',
					width: '100%',

				},
				[{
					tag: 'rect',
					id: 'rect',
					color: 'rgba(0,0,0,0.5)'
				}]);
			this.view.show();


		},
	}
</script>
<style scoped>
	.dx_btn {
		line-height: 75upx;
		height: 75upx;
	}

	.bg_kh_deerrtt {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
	}

	.dsfg_kj_Dertxc {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
	}

	.sd_jh_ceertt {
		background: #fff;
		position: relative;
		z-index: 1000;
		width: 580upx;
		z-index: 1000;
		margin: auto;
	}

	.sd_kjh_dert {
		line-height: 90upx;
	}

	.sdf_jh_drt_rtyx {
		padding-top: 60upx;
	}

	.sd_jh_ddfgxd,
	.sd_jh_dffr {
		line-height: 60upx;
		height: 60upx;
	}

	.sd_jh_dffr {
		width: 100upx;
		text-align: center;
	}


	.time_icon {
		width: 35upx;
		height: 29upx;
		position: absolute;
		right: 20upx;
		top: 15upx;
	}

	.rsd_jh_dsdf {
		height: 73upx;
		line-height: 73upx;
		background: #E6E6E6;
		text-align: left;
	}

	.add_icon {
		width: 30upx;
		height: 31upx;
	}

	.sdf_jh_deretxrt {
		transform: scale(0.8);
	}

	.rsd_jh_dsdf.ab {
		background: #fff;
	}

	.rsd_jh_dsdf.ab:nth-child(2n) {
		background: #F5F5F5;
	}
</style>

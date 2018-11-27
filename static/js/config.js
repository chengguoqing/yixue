exports.config = {
	apiUrl: "", //接口地址
	orderGroup: function(id) { //任务分组
		switch (id) {
			case 1:
				return '未完成';
				break;
			case 2:
				return '已完成';
				break;
			case 3:
				return '已撤销';
				break;
		}
	},
	orderStatus: function(id) { //任务状态
		switch (id) {
			case 1:
				return '待操作';
				break;
			case 2:
				return '待返款';
				break;
			case 3:
				return '待评价';
				break;
			case 4:
				return '待确认';
				break;
			case 5:
				return '已完成';
				break;
			case 6:
				return '已取消';
				break;
		}
	},
	cancelOrderReason: [ //取消原因 买家撤销任务选项从4-7项
		{
			id: 1,
			cls: "",
			name: "系统取消"
		}, {
			id: 2,
			cls: "",

			name: "管理员取消"
		}, {
			id: 3,
			cls: "",

			name: "商家撤销任务"
		}, {
			id: 4,
			cls: "",

			name: "商品找不到"
		}, {
			id: 5,
			cls: "",

			name: "达不到商家要求"
		}, {
			id: 6,
			cls: "",

			name: "不想做了"
		}, {
			id: 7,
			cls: "",
			name: "问题任务"
		}
	],
	platformType: function(id) { //平台类型
		switch (id) {
			case 1:
				return '淘宝';
				break;
			case 2:
				return '京东';
				break;
			case 3:
				return '蘑菇街';
				break;
			case 4:
				return '美丽说';
				break;
			case 5:
				return '拼多多';
				break;
		}
	},
	isPc: function(id) { //任务入口isPc
		switch (id) {
			case 1:
				return '手机淘宝';
				break;
			case 2:
				return '手机天猫';
				break;
			case 3:
				return '电脑淘宝';
				break;
		}
	},
	taskType: function(id) { //任务类型
		switch (id) {
			case 1:
				return '垫付任务';
				break;
			case 2:
				return '浏览任务';
				break;
			case 3:
				return '淘口令任务';
				break;
			case 4:
				return '活动任务';
				break;
			case 5:
				return '退款任务';
				break;
		}
	},
	positionType: function(id) { //排序方式
		switch (id) {
			case 1:
				return '销量';
				break;
			case 2:
				return '综合';
				break;
			case 3:
				return '综合直通车';
				break;
		}
	},
	doMode: function(id) { //做任务方式
		id == 1 ? '找短词（原来叫找关键字）' : '截图浏览'
	},
	gender: function(id) { //性别
		id == 1 ? '男' : '女'
	},
	showCategory: function(id) { //购买类目
		switch (id) {
			case 1:
				return '服装鞋包';
				break;
			case 2:
				return '手机数码';
				break;
			case 3:
				return '家用电器';
				break;
			case 4:
				return '美妆饰品';
				break;
			case 5:
				return '母婴用品';
				break;
			case 6:
				return '家居建材';
				break;
			case 7:
				return '百货食品';
				break;
			case 8:
				return '运动户外';
				break;
			case 9:
				return '文化娱乐';
				break;
			case 10:
				return '生活服务';
				break;
			case 11:
				return '汽摩配件';
				break;
			case 12:
				return '游戏话费';
				break;
		}
	},
	showCategory_json: [{
		id: 1,
		name: "服装鞋包",
		cls: ""
	}, {
		id: 2,
		name: "手机数码",
		cls: ""
	}, {
		id: 3,
		name: "家用电器",
		cls: ""
	}, {
		id: 4,
		name: "美妆饰品",
		cls: ""
	}, {
		id: 5,
		name: "母婴用品",
		cls: ""
	}, {
		id: 6,
		name: "家居建材",
		cls: ""
	}, {
		id: 7,
		name: "百货食品",
		cls: ""
	}, {
		id: 8,
		name: "运动户外",
		cls: ""
	}, {
		id: 9,
		name: "文化娱乐",
		cls: ""
	}, {
		id: 10,
		name: "生活服务",
		cls: ""
	}, {
		id: 11,
		name: "汽摩配件",
		cls: ""
	}, {
		id: 12,
		name: "游戏话费",
		cls: ""
	}, ],
	complaintStatus: function(id) { //申述状态
		switch (id) {
			case 1:
				return '处理中';
				break;
			case 2:
				return '已完结';
				break;
			case 3:
				return '已撤销';
				break;
		}
	},
	capitalType: function(id) { //买家本金账户类型
		switch (id) {
			case 1:
				return '管理员操作';
				break;
			case 2:
				return '返还本金';
				break;
			case 3:
				return '本金提现';
				break;
		}
	},
	commissionType: function(id) { //买家佣金账户类型
		switch (id) {
			case 1:
				return '管理员操作';
				break;
			case 2:
				return '任务佣金';
				break;
			case 3:
				return '推广佣金';
				break;
			case 4:
				return '佣金提现';
				break;
			case 5:
				return '被邀请奖励金';
				break;
		}
	},
	withdrawalStatus: function(id) { //买家提现申请状态
		switch (id) {
			case 1:
				return '申请中';
				break;
			case 2:
				return '付款完成';
				break;
			case 3:
				return '付款失败';
				break;
		}
	},
	taobaoGrade: function(id) { //买家等级
		switch (id) {
			case 1:
				return '3心';
				break;
			case 2:
				return '4心';
				break;
			case 3:
				return '5心';
				break;
			case 4:
				return '1钻';
				break;
			case 5:
				return '2钻';
				break;
			case 6:
				return '3钻以上';
				break;
		}
	},
	taobaoGrade_json: [ //买家等级
		{
			id: 1,
			name: "3心"
		}, {
			id: 2,
			name: "4心"
		}, {
			id: 3,
			name: "5心"
		}, {
			id: 4,
			name: "1钻"
		}, {
			id: 5,
			name: "2钻"
		}, {
			id: 6,
			name: "3钻以上"
		}
	],

	bankList: [ //银行列表
		{
			value: 1,
			label: "中国工商银行"
		},
		{
			value: 2,
			label: "中国农业银行"
		}, {
			value: 3,
			label: "中国建设银行"
		}, {
			value: 4,
			label: "中国银行"
		}, {
			value: 5,
			label: "交通银行"
		}, {
			value: 6,
			label: "招商银行"
		}, {
			value: 7,
			label: "平安银行"
		}, {
			value: 8,
			label: "中信银行"
		}, {
			value: 9,
			label: "兴业银行"
		}, {
			value: 10,
			label: "中国民生银行"
		}, {
			value: 11,
			label: "中国光大银行"
		}, {
			value: 12,
			label: "邮政储蓄银行"
		},
	],
	identityStatus: function(id) { //身份证审核状态
		switch (id) {
			case 0:
				return '默认值（未提交）';
				break;
			case 1:
				return '待审核';
				break;
			case 2:
				return '审核通过';
				break;
			case 3:
				return '审核失败';
				break;
		}
	},
	pingjiafs: function(id) { //评价方式
		switch (id) {
			case 1:
				return '普通好评';
				break;
			case 2:
				return '文字好评';
				break;
			case 3:
				return '图片好评';
				break;
		}
	},
	taskTypeApp: function(id) { //账号设置任务类型
		switch (id) {
			case 0:
				return '全部';
				break;
			case 1:
				return '垫付';
				break;
			case 2:
				return '浏览';
				break;
		}
	},
	pcMobile: function(id) { //账号设置入口类型
		switch (id) {
			case 0:
				return '全部';
				break;
			case 1:
				return '手机';
				break;
			case 2:
				return '电脑';
				break;
		}
	}
}

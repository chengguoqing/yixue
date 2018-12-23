var url_d = "https://api.cangniaowl.com/"
exports.base = {
	install: function(Vue, options) {
		Vue.prototype.version = "9.2.1"
		Vue.prototype.parseParam = function(data) {
			var _result = [];
			for (var key in data) {
				var value = data[key];
				if (value.constructor == Array) {
					value.forEach(function(_value) {
						_result.push(key + '=' + value);
					});
				} else {
					_result.push(key + '=' + value);
				}
			}
			return _result.join('&');
		};

		Vue.prototype.post = function(url, canshu, call, ty) {
			ajax_e(url, canshu, call, ty)
		}
		Vue.prototype.get_TE = function(call_back, kje) {
			var sd_der = {}
			sd_der.event = kje || 1
			ajax_e("/api/common/getQiniuToken", sd_der, function(data, all_data) {

				call_back(data)

			})
		}



		Vue.prototype.time_c = function(t) {
			let time = new Date()
			time.setTime(t * 1000)
			let Year = time.getFullYear(),
				Month = time.getMonth() + 1,
				Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
			Month < 10 ? Month = 0 + '' + Month : Month = Month
			return Year + "-" + Month + "-" + Data
		}


		Vue.prototype.yanza = {
			mail: function(a) {
				var b = !1;
				return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
			},
			phone: function(a) {
				var b = !1;
				return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
			},
			car_t: function(a) {
				var b = !1;
				return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
					.test(a) && (b = !0), b
			}
		};

		Vue.prototype.copyShareUrl = function(copy_content) { //复制
			uni.getSystemInfo({
				success: function(res) {
					if (res.platform == "android") {

						//安卓
						var context = plus.android.importClass("android.content.Context");
						var main = plus.android.runtimeMainActivity();
						var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
						plus.android.invoke(clip, "setText", copy_content);


					} else {
						//ios
						var UIPasteboard = plus.ios.importClass("UIPasteboard");
						var generalPasteboard = UIPasteboard.generalPasteboard();
						//设置/获取文本内容:
						generalPasteboard.plusCallMethod({
							setValue: copy_content,
							forPasteboardType: "public.utf8-plain-text"
						});
						generalPasteboard.plusCallMethod({
							valueForPasteboardType: "public.utf8-plain-text"
						});
					}
				},
			})

		}

		Vue.prototype.pz = function(call, kje) { //拍照 

			var sd_der = {}
			sd_der.event = kje || 1

			ajax_e("/api/common/getQiniuToken", sd_der, function(data, all_data) {
				let token = data.token,
					domain = data.domain
				uni.chooseImage({
					count: 1,
					success(res) {
						var key = res.tempFilePaths[0];
						key = Base64.encode(key);
						uni.showLoading({
							title: '图片上传中...',
							mask: true
						});
						uni.uploadFile({
							url: 'http://up.qiniu.com/', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								token: token,
								key: key
							},
							success: (uploadFileRes) => {
								uni.hideLoading();
								let sdf_dr = JSON.parse(uploadFileRes.data)

								call(domain + sdf_dr.data.url)
							}
						});
					}
				})
			})



		}




		Vue.prototype.yjpz = function(call_back) { //拍照 
			uni.chooseImage({
				count: 1,
				success(res) {
					call_back(res.tempFilePaths[0])
				}
			})
		}



		Vue.prototype.getClipbordText = function(call) {

			uni.getSystemInfo({
				success: function(res) {
					if (res.platform == "android") {
						var Context = plus.android.importClass("android.content.Context");

						var main = plus.android.runtimeMainActivity();
						var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
						call(plus.android.invoke(clip, "getText"));
					} else {
						var UIPasteboard = plus.ios.importClass("UIPasteboard");
						var generalPasteboard = UIPasteboard.generalPasteboard();
						var _val = generalPasteboard.plusCallMethod({
							valueForPasteboardType: "public.utf8-plain-text"
						});
						console.log("ios复制返回的数据是：", _val);
						call(_val || '');
					}
				},

			})


		}



	}
}


function copyShareUrl(copy_content) { //复制
	uni.getSystemInfo({
		success: function(res) {
			if (res.platform == "android") {

				//安卓
				var context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
				plus.android.invoke(clip, "setText", copy_content);


			} else {
				//ios
				var UIPasteboard = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				//设置/获取文本内容:
				generalPasteboard.plusCallMethod({
					setValue: copy_content,
					forPasteboardType: "public.utf8-plain-text"
				});
				generalPasteboard.plusCallMethod({
					valueForPasteboardType: "public.utf8-plain-text"
				});
			}
		},
	})

}



function ajax_e(url, canshu, call, ty) {
	let urlsd = url_d + url
	uni.showLoading({
		title: '处理中',
		mask: true
	});

	let user_fo = uni.getStorageSync('user_info')
	user_fo = JSON.parse(user_fo.rawData)
	if (!ty) { //为true可以不传token
		canshu.nickName = user_fo.nickName
		canshu.avatarUrl = user_fo.avatarUrl
		canshu.openId = user_fo.openId
	}
	console.log(JSON.stringify(canshu))
	uni.request({
		url: urlsd,
		method: "POST",
		header: {
			"content-type": "application/x-www-form-urlencoded"
		},
		data: canshu,
		success: (res) => {
			uni.hideLoading();
			call(res.data.data)
		}
	});
}

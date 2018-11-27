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

		Vue.prototype.Base64 = Base64
		Vue.prototype.getBase64Imageer = function(img) {
			getBase64Imageer(img)
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




		Vue.prototype.yjpz = function(dataer, kje, num) { //拍照 

			var sd_der = {}
			sd_der.event = kje || 1

			ajax_e("/api/common/getQiniuToken", sd_der, function(data, all_data) {
				let token = data.token,
					domain = data.domain
				uni.chooseImage({
					count: num,
					sourceType: ["album"],
					success(res) {

						res.tempFilePaths.map((a, idx) => {
							var key = a;
							key = Base64.encode(key);
							uni.showLoading({
								title: '图片上传中...',
								mask: true
							});
							uni.uploadFile({
								url: 'http://up.qiniu.com/', //仅为示例，非真实的接口地址
								filePath: a,
								name: 'file',
								formData: {
									token: token,
									key: key
								},
								success: (uploadFileRes) => {
									uni.hideLoading();
									let sdf_dr = JSON.parse(uploadFileRes.data)
									dataer[idx].url = domain + sdf_dr.data.url
									// call(domain + sdf_dr.data.url)
								}
							});

						})
					}
				})
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







var Base64 = {

	// private property
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode: function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr
				.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode: function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode: function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode: function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while (i < utftext.length) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}





//将图片压缩转成base64 
function getBase64Imageer(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;
	// calculate the width and height, constraining the proportions 
	if (width > height) {
		if (width > 640) {
			height = Math.round(height *= 640 / width);
			width = 640;
		}
	} else {
		if (height > 640) {
			width = Math.round(width *= 640 / height);
			height = 640;
		}
	}
	canvas.width = width; /*设置新的图片的宽度*/
	canvas.height = height; /*设置新的图片的长度*/
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height); /*绘图*/
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}

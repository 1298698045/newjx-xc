const host = 'https://jxactivetest.aplusx.com'
 
function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        // 'token':wx.getStorageSync('token'),
        'platform':'studentApp'
        // 'service-pre':wx.getStorageSync("schoolId")
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
 
function get (obj) {
  return request(obj.url, 'GET', obj.data)
}
 
function post (obj) {
  return request(obj.url, 'POST', obj.data)
}

function DELETE (obj) {
  return request(obj.url, 'DELETE', obj.data)
}
 
export default {
  request,
  get,
  post,
  DELETE,
  host
}
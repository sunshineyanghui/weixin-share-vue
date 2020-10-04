import request from '@/utils/request'
// 获取捐款类型 带详情
export function getCateData(query) {
  return request({
    url: '/getCateData',
    method: 'get',
    params: query
  })
}

// 获取捐款金额
export function getAmountData(query) {
  return request({
    url: '/getAmountData',
    method: 'get',
    params: query
  })
}

// 获取协议
export function getAgreement(query) {
  return request({
    url: '/getAgreement',
    method: 'get',
    params: query
  })
}

// 获取用户信息
export function getUserInfo(query) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params: query
  })
}

// 提交捐款表单
export function orderAdd(data) {
  return request({
    url: '/orderAdd',
    method: 'post',
    data
  })
}
// 授权登陆接口
export function getAuthorization(query) {
  return request({
    url: '/getAuthorization',
    method: 'get',
    params: query
  })
}
// getDonationList捐款明细

export function getDonationList(query) {
  return request({
    url: '/getDonationList',
    method: 'get',
    params: query
  })
}

export function getSignPackage(query) {
  return request({
    url: '/getSignPackage',
    method: 'get',
    params: query
  })
}
const apiURL = 'http://www.yunchehudong.com/yuncarcms/api';
const payURL = 'http://www.yunchehudong.com/yuncarcms/pay';

const wxRequest = (params, url) => {
  wx.request({
    url,
    method: params.method || 'POST',
    data: params.data || {},
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    success(res) {
      if (params.success) {
        params.success(res);
      }
    },
    fail(res) {
      if (params.fail) {
        params.fail(res);
      }
    },
    complete(res) {
      if (params.complete) {
        params.complete(res);
      }
    },
  });
};

const getWelfareTypeList = (params) => {
  wxRequest(params, `${apiURL}/v1/welfaretypelist.sdo`);
}
const getMerchantListByType = (params) => {
  wxRequest(params, `${apiURL}/v2/findWelfareList.sdo`);
}
const getAdByType = (params) => {
  wxRequest(params, `${apiURL}/searchAdvertisementByType.sdo`);
}
const searchWelfare = (params) => {
  wxRequest(params, `${apiURL}/v2/searchWelfareListByName.sdo`);
}
const getMerchantDetail = (params) => {
  wxRequest(params, `${apiURL}/findMerchantWelfareList.sdo`);
}
const getWelfareDetail = (params) => {
  wxRequest(params, `${apiURL}/showWelfareDetail.sdo`);
}
const getVIPInfo = (params) => {
  wxRequest(params, `${payURL}/findPayItemList.sdo`);
};
const getUserInfoByID = (params) => {
  wxRequest(params, `${apiURL}/users/${params.query.userId}/v2`);
};

module.exports = {
  getUserInfoByID,
  getWelfareTypeList,
  searchWelfare,
  getMerchantListByType,
  getMerchantDetail,
  getWelfareDetail,
  getVIPInfo,
  getAdByType
};

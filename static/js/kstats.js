var _ktac = {
    // KTA config 配置信息
    performanceMonitor: 1,
    userReport: 1 // 上报用户相关信息
  };
  var _ktacUser = (function() {
    function getQueryString(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        var val = r[2];
        if (val.indexOf('#')) {
          return val.split('#')[0];
        }
        return decodeURI(r[2]);
      }
      return '';
    }
    var uid = getQueryString('uid');
    var openid = getQueryString('openid');
    return {
      uid: uid || '', // 用户id
      id3Rd: openid || '' // 用户第三方id
    };
  })();
  (function() {
    var kta = document.createElement('script');
    kta.src = 'https://txwk.10010.com/KCard/framework/kta/stats-kta.min.js?v1.1.0';
    kta.setAttribute('name', 'KTAH5');
    // 配置appid
    kta.setAttribute('appid', '');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(kta, s);
  })();
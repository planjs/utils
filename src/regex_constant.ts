/**
 * 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @category RegExp
 */
export const REG_PHONE_LOOSE = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

/**
 * 座机(tel phone)
 * @category RegExp
 */
export const REG_TEL_PHONE = /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/;

/**
 * email
 * @category RegExp
 */
// eslint-disable-next-line
export const REG_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * 手机机身码(IMEI)
 * @category RegExp
 */
export const REG_IMEI = /^\d{15,17}$/;

/**
 * 身份证号, 支持1/2代(15位/18位数字)
 * @category RegExp
 */
export const REG_ID_CARD =
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

/**
 * 必须带端口号的网址(或ip)
 * @category RegExp
 */
export const REG_URI_WITH_PORT = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;

/**
 * 网址(url,支持端口和"?+参数"和"#+参数)
 * @note 没有协议也会校验通过
 * @category RegExp
 */
// eslint-disable-next-line
export const REG_URI_LOSE = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/;

/**
 * 网址校验，必须带有协议,或者相对协议
 * @category RegExp
 */
export const REG_URI = new RegExp(
  '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  'i',
);

/**
 * 子网掩码
 * @category RegExp
 */
export const REG_SUBNET_MASK =
  /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;

/**
 * md5 32
 * @category RegExp
 */
export const REG_MD532 = /^([a-f\d]{32}|[A-F\d]{32})$/;

/**
 * version x.y.z
 * @category RegExp
 */
export const REG_VERSION = /^\d+(?:\.\d+){2}$/;

/**
 * linux文件夹路径
 * @category RegExp
 */
// eslint-disable-next-line
export const REG_LINUX_FOLDER_PATH = /^\/(?:[^\/]+\/)*$/;

/**
 * linux文件路径
 * @category RegExp
 */
// eslint-disable-next-line
export const REG_LINUX_FILE_PATH = /^\/(?:[^\/]+\/)*[^\/]+$/;

/**
 * window"文件夹"路径
 * @category RegExp
 */
export const REG_WINDOWS_FOLDER_PATH = /^[a-zA-Z]:\\(?:\w+\\?)*$/;

/**
 * window下"文件"路径
 * @category RegExp
 */
export const REG_WINDOWS_FILE_PATH = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/;

/**
 * 银行卡号
 * 10到30位, 覆盖对公/私账户, 参考 https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1
 * @category RegExp
 */
export const REG_BANK_CARD_NUM = /^[1-9]\d{9,29}$/;

/**
 * 匹配中文
 * @category RegExp
 */
export const REG_CN = /[\u4e00-\u9fa5]$/;

/**
 * 匹配英文
 * @category RegExp
 */
export const REG_EN = /[a-zA-Z]$/;

/**
 * 中文名
 * @category RegExp
 */
export const REG_CN_NAME = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

/**
 * 英文名
 * @category RegExp
 */
export const REG_EN_NAME = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

/**
 * 统一社会信用代码
 * @category RegExp
 */
export const REG_UNIFIED_SOCIAL_CREDIT_CODE =
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

/**
 * 小数
 * @category RegExp
 */
export const REG_DECIMAL = /^\d+\.\d+$/;

/**
 * 数字
 * @category RegExp
 */
export const REG_NUMBER = /^\d{1,}$/;

/**
 * 英文字母
 * @category RegExp
 */
export const REG_ENGLISH = /^[a-zA-Z]+$/;

/**
 * ip-v4
 * @category RegExp
 */
export const REG_IPV4 =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * ip-v6
 * @category RegExp
 */
export const REG_IPV6 =
  /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;

/**
 * 16进制颜色
 * @category RegExp
 */
export const REG_HEX_COLOR = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * 颜色16进制颜色，rgb或rgba
 * @category RegExp
 */
export const REG_COLOR =
  /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/;

/**
 * 邮政编码(中国)
 * @category RegExp
 */
export const REG_POSTAL_CODEi =
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;

/**
 * 判断是否是base64
 * @category RegExp
 */
export const REG_BASE64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

/**
 * 判断是否data url
 * @category RegExp
 */
// eslint-disable-next-line
export const REG_DATA_URL = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

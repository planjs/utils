**@planjs/utils**

[Globals](../README.md) / "regex_constant"

# Module: "regex_constant"

## Index

### Variables

* [REG\_BANK\_CARD\_NUM](_regex_constant_.md#reg_bank_card_num)
* [REG\_CN\_NAME](_regex_constant_.md#reg_cn_name)
* [REG\_DECIMAL](_regex_constant_.md#reg_decimal)
* [REG\_EMAIL](_regex_constant_.md#reg_email)
* [REG\_ENGLISH](_regex_constant_.md#reg_english)
* [REG\_EN\_NAME](_regex_constant_.md#reg_en_name)
* [REG\_ID\_CARD](_regex_constant_.md#reg_id_card)
* [REG\_IMEI](_regex_constant_.md#reg_imei)
* [REG\_IPV4](_regex_constant_.md#reg_ipv4)
* [REG\_IPV6](_regex_constant_.md#reg_ipv6)
* [REG\_LINUX\_FILE\_PATH](_regex_constant_.md#reg_linux_file_path)
* [REG\_LINUX\_FOLDER\_PATH](_regex_constant_.md#reg_linux_folder_path)
* [REG\_MD532](_regex_constant_.md#reg_md532)
* [REG\_NUMBER](_regex_constant_.md#reg_number)
* [REG\_PHONE\_LOOSE](_regex_constant_.md#reg_phone_loose)
* [REG\_POSTAL\_CODEi](_regex_constant_.md#reg_postal_codei)
* [REG\_RGB](_regex_constant_.md#reg_rgb)
* [REG\_SUBNET\_MASK](_regex_constant_.md#reg_subnet_mask)
* [REG\_TEL\_PHONE](_regex_constant_.md#reg_tel_phone)
* [REG\_UNIFIED\_SOCIAL\_CREDIT\_CODE](_regex_constant_.md#reg_unified_social_credit_code)
* [REG\_URI](_regex_constant_.md#reg_uri)
* [REG\_URI\_WITH\_PORT](_regex_constant_.md#reg_uri_with_port)
* [REG\_VERSION](_regex_constant_.md#reg_version)
* [REG\_WINDOWS\_FILE\_PATH](_regex_constant_.md#reg_windows_file_path)
* [REG\_WINDOWS\_FOLDER\_PATH](_regex_constant_.md#reg_windows_folder_path)

## Variables

### REG\_BANK\_CARD\_NUM

• `Const` **REG\_BANK\_CARD\_NUM**: RegExp = /^[1-9]\d{9,29}$/

*Defined in [regex_constant.ts:75](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L75)*

银行卡号
10到30位, 覆盖对公/私账户, 参考 https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1

___

### REG\_CN\_NAME

• `Const` **REG\_CN\_NAME**: RegExp = /^(?:[\u4e00-\u9fa5·]{2,16})$/

*Defined in [regex_constant.ts:80](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L80)*

中文名

___

### REG\_DECIMAL

• `Const` **REG\_DECIMAL**: RegExp = /^\d+\.\d+$/

*Defined in [regex_constant.ts:95](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L95)*

小数

___

### REG\_EMAIL

• `Const` **REG\_EMAIL**: RegExp = /^(([^\<>()[\]\\.,;:\s@"]+(\.[^\<>()[\]\\.,;:\s@"]+)*)\|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])\|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

*Defined in [regex_constant.ts:14](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L14)*

email

___

### REG\_ENGLISH

• `Const` **REG\_ENGLISH**: RegExp = /^[a-zA-Z]+$/

*Defined in [regex_constant.ts:105](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L105)*

英文字母

___

### REG\_EN\_NAME

• `Const` **REG\_EN\_NAME**: RegExp = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/

*Defined in [regex_constant.ts:85](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L85)*

英文名

___

### REG\_ID\_CARD

• `Const` **REG\_ID\_CARD**: RegExp = /(^\d{8}(0\d\|10\|11\|12)([0-2]\d\|30\|31)\d{3}$)\|(^\d{6}(18\|19\|20)\d{2}(0[1-9]\|10\|11\|12)([0-2]\d\|30\|31)\d{3}(\d\|X\|x)$)/

*Defined in [regex_constant.ts:24](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L24)*

身份证号, 支持1/2代(15位/18位数字)

___

### REG\_IMEI

• `Const` **REG\_IMEI**: RegExp = /^\d{15,17}$/

*Defined in [regex_constant.ts:19](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L19)*

手机机身码(IMEI)

___

### REG\_IPV4

• `Const` **REG\_IPV4**: RegExp = /^(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)$/

*Defined in [regex_constant.ts:110](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L110)*

ip-v4

___

### REG\_IPV6

• `Const` **REG\_IPV6**: RegExp = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b)\.){3}(\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b))\|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b)\.){3}(\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b))\|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b)\.){3}(\b((25[0-5])\|(1\d{2})\|(2[0-4]\d)\|(\d{1,2}))\b))\|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})\|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})\|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i

*Defined in [regex_constant.ts:115](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L115)*

ip-v6

___

### REG\_LINUX\_FILE\_PATH

• `Const` **REG\_LINUX\_FILE\_PATH**: RegExp = /^\/(?:[^\/]+\/)*[^\/]+$/

*Defined in [regex_constant.ts:59](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L59)*

linux文件路径

___

### REG\_LINUX\_FOLDER\_PATH

• `Const` **REG\_LINUX\_FOLDER\_PATH**: RegExp = /^\/(?:[^\/]+\/)*$/

*Defined in [regex_constant.ts:54](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L54)*

linux文件夹路径

___

### REG\_MD532

• `Const` **REG\_MD532**: RegExp = /^([a-f\d]{32}\|[A-F\d]{32})$/

*Defined in [regex_constant.ts:44](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L44)*

md5 52

___

### REG\_NUMBER

• `Const` **REG\_NUMBER**: RegExp = /^\d{1,}$/

*Defined in [regex_constant.ts:100](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L100)*

数字

___

### REG\_PHONE\_LOOSE

• `Const` **REG\_PHONE\_LOOSE**: RegExp = /^(?:(?:\+\|00)86)?1[3-9]\d{9}$/

*Defined in [regex_constant.ts:4](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L4)*

手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可

___

### REG\_POSTAL\_CODEi

• `Const` **REG\_POSTAL\_CODEi**: RegExp = /^(0[1-7]\|1[0-356]\|2[0-7]\|3[0-6]\|4[0-7]\|5[1-7]\|6[1-7]\|7[0-5]\|8[013-6])\d{4}$/

*Defined in [regex_constant.ts:125](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L125)*

邮政编码(中国)

___

### REG\_RGB

• `Const` **REG\_RGB**: RegExp = /^#?([a-fA-F0-9]{6}\|[a-fA-F0-9]{3})$/

*Defined in [regex_constant.ts:120](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L120)*

16进制颜色

___

### REG\_SUBNET\_MASK

• `Const` **REG\_SUBNET\_MASK**: RegExp = /^(?:\d{1,2}\|1\d\d\|2[0-4]\d\|25[0-5])(?:\.(?:\d{1,2}\|1\d\d\|2[0-4]\d\|25[0-5])){3}$/

*Defined in [regex_constant.ts:39](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L39)*

子网掩码

___

### REG\_TEL\_PHONE

• `Const` **REG\_TEL\_PHONE**: RegExp = /^\d{3}-\d{8}$\|^\d{4}-\d{7,8}$/

*Defined in [regex_constant.ts:9](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L9)*

座机(tel phone)

___

### REG\_UNIFIED\_SOCIAL\_CREDIT\_CODE

• `Const` **REG\_UNIFIED\_SOCIAL\_CREDIT\_CODE**: RegExp = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/

*Defined in [regex_constant.ts:90](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L90)*

统一社会信用代码

___

### REG\_URI

• `Const` **REG\_URI**: RegExp = /^(((ht\|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/

*Defined in [regex_constant.ts:34](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L34)*

网址(url,支持端口和"?+参数"和"#+参数)

___

### REG\_URI\_WITH\_PORT

• `Const` **REG\_URI\_WITH\_PORT**: RegExp = /^((ht\|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/

*Defined in [regex_constant.ts:29](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L29)*

必须带端口号的网址(或ip)

___

### REG\_VERSION

• `Const` **REG\_VERSION**: RegExp = /^\d+(?:\.\d+){2}$/

*Defined in [regex_constant.ts:49](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L49)*

version x.y.z

___

### REG\_WINDOWS\_FILE\_PATH

• `Const` **REG\_WINDOWS\_FILE\_PATH**: RegExp = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/

*Defined in [regex_constant.ts:69](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L69)*

window下"文件"路径

___

### REG\_WINDOWS\_FOLDER\_PATH

• `Const` **REG\_WINDOWS\_FOLDER\_PATH**: RegExp = /^[a-zA-Z]:\\(?:\w+\\?)*$/

*Defined in [regex_constant.ts:64](https://github.com/planjs/utils/blob/af978cc/src/regex_constant.ts#L64)*

window"文件夹"路径

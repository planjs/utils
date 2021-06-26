---
id: "uploadrequestoption"
title: "Interface: UploadRequestOption<T>"
sidebar_label: "UploadRequestOption"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Properties

### action

• **action**: `string`

#### Defined in

[src/bom/xhr-upload.ts:29](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L29)

___

### data

• `Optional` **data**: `object`

#### Defined in

[src/bom/xhr-upload.ts:25](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L25)

___

### file

• **file**: `File`

#### Defined in

[src/bom/xhr-upload.ts:27](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L27)

___

### filename

• `Optional` **filename**: `string`

#### Defined in

[src/bom/xhr-upload.ts:26](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L26)

___

### headers

• `Optional` **headers**: [`UploadRequestHeader`](uploadrequestheader.md)

#### Defined in

[src/bom/xhr-upload.ts:30](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L30)

___

### method

• **method**: [`UploadRequestMethod`](../index.md#uploadrequestmethod)

#### Defined in

[src/bom/xhr-upload.ts:31](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L31)

___

### onAbort

• `Optional` **onAbort**: (`event`: [`UploadRequestError`](uploadrequesterror.md) \| `ProgressEvent`<`EventTarget`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`UploadRequestError`](uploadrequesterror.md) \| `ProgressEvent`<`EventTarget`\> |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:24](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L24)

___

### onError

• `Optional` **onError**: (`event`: [`UploadRequestError`](uploadrequesterror.md) \| `ProgressEvent`<`EventTarget`\>, `body?`: `T`) => `void`

#### Type declaration

▸ (`event`, `body?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`UploadRequestError`](uploadrequesterror.md) \| `ProgressEvent`<`EventTarget`\> |
| `body?` | `T` |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:22](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L22)

___

### onProgress

• `Optional` **onProgress**: (`event`: [`UploadProgressEvent`](uploadprogressevent.md)) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`UploadProgressEvent`](uploadprogressevent.md) |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:21](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L21)

___

### onSuccess

• `Optional` **onSuccess**: (`body`: `T`, `xhr`: `XMLHttpRequest`) => `void`

#### Type declaration

▸ (`body`, `xhr`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `T` |
| `xhr` | `XMLHttpRequest` |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:23](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L23)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

[src/bom/xhr-upload.ts:28](https://github.com/planjs/utils/blob/784afab/src/bom/xhr-upload.ts#L28)

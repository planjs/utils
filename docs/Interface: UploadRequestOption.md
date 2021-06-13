## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

## Table of contents

### Properties

- [action](../wiki/Interface:%20UploadRequestOption#action)
- [data](../wiki/Interface:%20UploadRequestOption#data)
- [file](../wiki/Interface:%20UploadRequestOption#file)
- [filename](../wiki/Interface:%20UploadRequestOption#filename)
- [headers](../wiki/Interface:%20UploadRequestOption#headers)
- [method](../wiki/Interface:%20UploadRequestOption#method)
- [onAbort](../wiki/Interface:%20UploadRequestOption#onabort)
- [onError](../wiki/Interface:%20UploadRequestOption#onerror)
- [onProgress](../wiki/Interface:%20UploadRequestOption#onprogress)
- [onSuccess](../wiki/Interface:%20UploadRequestOption#onsuccess)
- [withCredentials](../wiki/Interface:%20UploadRequestOption#withcredentials)

## Properties

### action

• **action**: `string`

#### Defined in

[src/bom/xhr-upload.ts:29](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L29)

___

### data

• `Optional` **data**: `object`

#### Defined in

[src/bom/xhr-upload.ts:25](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L25)

___

### file

• **file**: `File`

#### Defined in

[src/bom/xhr-upload.ts:27](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L27)

___

### filename

• `Optional` **filename**: `string`

#### Defined in

[src/bom/xhr-upload.ts:26](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L26)

___

### headers

• `Optional` **headers**: [UploadRequestHeader](../wiki/Interface:%20UploadRequestHeader)

#### Defined in

[src/bom/xhr-upload.ts:30](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L30)

___

### method

• **method**: [UploadRequestMethod](../wiki/Exports#uploadrequestmethod)

#### Defined in

[src/bom/xhr-upload.ts:31](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L31)

___

### onAbort

• `Optional` **onAbort**: (`event`: [UploadRequestError](../wiki/Interface:%20UploadRequestError) \| `ProgressEvent`<EventTarget\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [UploadRequestError](../wiki/Interface:%20UploadRequestError) \| `ProgressEvent`<EventTarget\> |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:24](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L24)

___

### onError

• `Optional` **onError**: (`event`: [UploadRequestError](../wiki/Interface:%20UploadRequestError) \| `ProgressEvent`<EventTarget\>, `body?`: `T`) => `void`

#### Type declaration

▸ (`event`, `body?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [UploadRequestError](../wiki/Interface:%20UploadRequestError) \| `ProgressEvent`<EventTarget\> |
| `body?` | `T` |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:22](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L22)

___

### onProgress

• `Optional` **onProgress**: (`event`: [UploadProgressEvent](../wiki/Interface:%20UploadProgressEvent)) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [UploadProgressEvent](../wiki/Interface:%20UploadProgressEvent) |

##### Returns

`void`

#### Defined in

[src/bom/xhr-upload.ts:21](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L21)

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

[src/bom/xhr-upload.ts:23](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L23)

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

[src/bom/xhr-upload.ts:28](https://github.com/planjs/utils/blob/f16b9fd/src/bom/xhr-upload.ts#L28)

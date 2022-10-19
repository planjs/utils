import { stripHtmlTags } from '../../src';

describe('strings', () => {
  test('stripHtmlTags', () => {
    expect(stripHtmlTags('<span>hello bob</span>')).toBe('hello bob');
    expect(
      stripHtmlTags('<p><span>hello bob</span></p>', {
        allowed: 'p',
      }),
    ).toBe('<p>hello bob</p>');

    const html = `<script type="text/javascript" src="//www.17track.net/externalcall.js"></script>
<script type="text/javascript">
function doTrack() {
    var num = document.getElementById("YQNum").value;
    if(num===""){
        alert("Enter your number.");
        return;
    }
    YQV5.trackSingle({
        //必须，指定承载内容的容器ID。
        YQ_ContainerId:"YQContainer",
        //可选，指定查询结果高度，最大为800px，默认为560px。
        YQ_Height:560,
        //可选，指定运输商，默认为自动识别。
        YQ_Fc:"0",
        //可选，指定UI语言，默认根据浏览器自动识别。
        YQ_Lang:"en",
        //必须，指定要查询的单号。
        YQ_Num:num
    });
}
</script>`;

    expect(stripHtmlTags(html, { deleted: ['script'] })).toBe('\n');

    expect(
      stripHtmlTags(
        `<script type="text/javascript" src="//www.17track.net/externalcall.js"></script><span>hello bob</span>`,
        { deleted: ['script'] },
      ),
    ).toBe('hello bob');
  });
});

import { ensure } from '../debug';

function appendScript({ src, ...rest }: Partial<HTMLScriptElement>) {
  ensure(!src, 'src required');

  const isExist = document.querySelector(`script[src='${src}']`) !== null;
  if (isExist) {
    console.error('不能重复添加 JS 文件：' + src);
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src!;
  for (const attr in rest) {
    script[attr] = rest[attr];
  }
  document.body.appendChild(script);

  return {
    script,
    remove() {
      document.body.removeChild(script);
    },
  };
}

export default appendScript;

import Tips from 'components/react-tips';

let instance;
let timer;
export default class TipsCtrl {
  static createInstance(inProps) {
    instance = instance || Tips.newInstance(inProps);
    return instance;
  }

  static show(inOptions) {
    console.log('inOptions:');
    console.log(inOptions);
    instance.component.show(inOptions);
    clearTimeout(timer);
    timer = setTimeout(function () {
      instance.component.hide();
    }, inOptions.timeout || 2000);
  }
}

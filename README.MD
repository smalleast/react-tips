#react-tips
> Tips for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## props:
| name | type | value | description |
| :----| :----| :----| :----|
| visible  | Boolean | true/false | v-show |
| theme  | String | default/info/error/warn/success | background |
| size  | String | font-size:12px | style |
| timeout  | String | timeout:2000 | setTimeOut |
| content  | String | '测试数据' | content |


## usage:
```html

 _show(status) {
    TipsCtrl.show({
      theme: status,
      content: 'Cool!,I am a very long text!!!',
      timeout: '3000'
    })
  }


          <button onClick={this._show.bind(this, 'default')}>Click to show - default</button>
          <button onClick={this._show.bind(this, 'success')}>Click to show - success</button>
          <button onClick={this._show.bind(this, 'warn')}>Click to show - warn</button>
          <button onClick={this._show.bind(this, 'info')}>Click to show - info</button>
          <button onClick={this._show.bind(this, 'error')}>Click to show - error</button>
```

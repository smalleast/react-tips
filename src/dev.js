import './dev.scss';
import {Tips, TipsCtrl} from './main';


class App extends React.Component {
  componentDidMount() {
    TipsCtrl.createInstance({
      size: '14px'
    });
  }

  _show(status) {
    TipsCtrl.show({
      theme: status,
      content: 'Cool!,I am a very long text!!!',
      timeout: '3000'
    })
  }

  render() {
    return (
      <div className="hello-react-tips">
        <button onClick={this._show.bind(this, 'default')}>Click to show - default</button>
        <button onClick={this._show.bind(this, 'success')}>Click to show - success</button>
        <button onClick={this._show.bind(this, 'warn')}>Click to show - warn</button>
        <button onClick={this._show.bind(this, 'info')}>Click to show - info</button>
        <button onClick={this._show.bind(this, 'error')}>Click to show - error</button>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

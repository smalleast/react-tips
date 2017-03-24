import './style.scss';
import classNames from 'classnames';
import documentAppend from 'react-document-append';

class Tips extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    timeout: React.PropTypes.string
  };

  static defaultProps = {
    visible: false,
    theme: 'default',
    size: '12px',
    timeout: '2000'
  };

  static newInstance(inProps) {
    return documentAppend(Tips, inProps, {
      className: 'tips-wrapper'
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      visible: this.props.visible,
      content: '',
      size: this.props.size,
      timeout: this.props.timeout
    };
  }

  show(inOptions) {
    this.setState({
      theme: inOptions.theme,
      content: inOptions.content,
      timeout: inOptions.timeout,
      visible: true
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  _onClick() {
    this.hide();
  }

  render() {
    return (
      <div data-visible={this.state.visible}
           data-theme={this.state.theme}
           data-timeout={this.state.timeout}
           onClick={this._onClick.bind(this)}
           style={{
             fontSize: this.state.size
           }}
           className={classNames('react-tips', this.props.className)}
           dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
    );
  }
}

export default Tips;

/* reactとreact-domの読み込み */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

/* アプリ本体となる「TextBoxコンポーネント」 */
interface TextBoxProps {
  hello: string;
}
interface TextBoxState {
  inputValue: string;
  outputValue: string;
}
export class TextBox extends React.Component<TextBoxProps, TextBoxState> {
  constructor(props: TextBoxProps) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e: any): void {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick(): void {
    this.setState({
      inputValue: '',
      outputValue: this.state.inputValue,
    });
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <br/>
        <Input value={this.state.inputValue} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output hello="Hello" value={this.state.outputValue} />
      </div>
      </MuiThemeProvider>
    );
  }
}

/* 入力フォームを出力する「Inputコンポーネント」 */
interface InputProps {
  value: string;
  handleChange(e: any): void;
}
const Input: React.StatelessComponent<InputProps> = (props) => {
  return (
    <TextField type="text" hintText="Please input something..." value={props.value} onChange={props.handleChange} />
  );
}

/* ボタンを出力する「Buttonコンポーネント」 */
interface ButtonProps {
  handleClick(): void;
}
const Button: React.StatelessComponent<ButtonProps> = (props) => {
  return (
    <FlatButton secondary={true} onClick={props.handleClick}>Display</FlatButton>
  );
}

/* テキストを出力する「Outputコンポーネント」 */
interface OutputProps {
  hello: string;
  value: string;
}
const Output: React.StatelessComponent<OutputProps> = (props) => {
  const value = (props.value !== '') ? <h1>{props.hello} {props.value} !</h1> : '';
  return (
    <div>{value}</div>
  );
}
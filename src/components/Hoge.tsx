import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class Hoge extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardHeader
            title="Hogeggege!!!"
            subtitle="Welocome to Hoge world!!!"
          />
        </Card>
      </MuiThemeProvider>
    );
  }
}
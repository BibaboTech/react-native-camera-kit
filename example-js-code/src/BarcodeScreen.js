import React, { Component } from 'react';
import {
  Alert
} from 'react-native';
import { CameraKitCameraScreen } from '../../src';
import CheckingScreen from './CheckingScreen';


export default class CameraScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      example: undefined
    };
  }

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    if (this.state.example) {
      const CameraScreen = this.state.example;
      return <CameraScreen />;
    }
    return (
      <CameraKitCameraScreen
        actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('./../images/flashOn.png'),
          off: require('./../images/flashOff.png'),
          auto: require('./../images/flashAuto.png')
        }}
        showFrame={true}
        scanBarcode={true}
        laserColor={"blue"}
        surfaceColor={"black"}
        frameColor={"yellow"}
        frameTop={100}
        frameLeft={100}
        frameHeight={100}
        frameWidth={100}
        onReadCode={((event) => this.setState({ example: CheckingScreen }))}
        hideControls={true}

        colorForScannerFrame={'blue'}
        
        frameHeight = {200}
        frameWidth = {200}
        frameLeft = {20}
        frameTop = {300}
        overlayColor = {'black'}
      />
    );
  }
}



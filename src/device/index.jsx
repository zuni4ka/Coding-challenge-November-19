import * as React from 'react';

class Device extends React.Component {
    render () {
        const props = this.props;
        const deviceId = Number(this.props.match.params.deviceId);

        console.log(props.getDevice(deviceId))

        return deviceId;
    };
}

export default Device;

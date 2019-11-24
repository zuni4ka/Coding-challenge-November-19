import * as React from 'react';
import { Link } from "react-router-dom";

class Device extends React.Component {
    render () {
        const props = this.props;
        const deviceId = Number(this.props.match.params.deviceId);
        const device = props.getDevice(deviceId);

        console.log(device);

        return (
            <React.Fragment>
                <Link to="/">
                    {'<'}
                </Link>
                <div>
                    <h1>{`Device ${device.name}`}</h1>
                    <dl>
                        <dt>Device ID</dt>
                        <dd>{device.id}</dd>
                        <dt>HW Key</dt>
                        <dd>{device.hwKey}</dd>
                    </dl>
                    <label>
                        Immobilizer
                        <input type="checkbox" checked={device.immobilizer} readOnly />
                    </label>
                    <label>
                        Key in holder
                        <input type="checkbox" checked={device.keyInHolder} readOnly />
                    </label>
                    <label>
                        Doors
                        <input type="checkbox" checked={device.doors} readOnly />
                    </label>
                    <label>
                        Fuelcard
                        <input type="checkbox" checked={device.fuelCard} readOnly />
                    </label>
                    <label>
                        Handbrake
                        <input type="checkbox" checked={device.handBrake} readOnly />
                    </label>
                    <label>
                        GPS
                        <input type="checkbox" checked={device.GPS} readOnly />
                    </label>
                    <label>
                        Ignition
                        <input type="checkbox" checked={device.ignition} readOnly />
                    </label>
                    <label>
                        LTE
                        <input type="checkbox" checked={device.LTE} readOnly />
                    </label>
                </div>
                <div>
                    <h2>Location</h2>
                    <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.6269185688543!2d13.405674315871698!3d52.5039926798111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f770258424b%3A0xe2238a7de65a344!2sProShare!5e0!3m2!1sen!2sde!4v1574634806861!5m2!1sen!2sde" width="600" height="450" frameBorder="0" />
                </div>
                <div>
                    <label>
                        Charge
                      <input 
                        type="range"
                        min="0"
                        max="100" 
                        defaultValue={device.charge}
                        readOnly
                      />  
                    </label>
                    <span>
                        {device.charge} %
                    </span>
                    <label>
                        Mileage
                      <input 
                        type="text"
                        defaultValue={device.mileage}
                        readOnly
                      />  
                    </label>
                    <span>
                        {device.mileage} km
                    </span>
                    <label>
                        Distance
                      <input 
                        type="number"
                        defaultValue={device.distance}
                        readOnly
                      />  
                    </label>
                    <span>
                        {device.distance} km
                    </span>
                </div>
            </React.Fragment>
        );
    };
}

export default Device;

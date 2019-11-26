import * as React from 'react';
import { Link } from "react-router-dom";
import './index.css';

class Device extends React.Component {
    render() {
        const props = this.props;
        const deviceId = Number(this.props.match.params.deviceId);
        const device = props.getDevice(deviceId);

        return (
            <React.Fragment>
                <Link className="return-button" to="/">
                    {'<'}
                </Link>
                <div className="edit-device-container">
                    <div className="cotrol-panel-container">
                        <h1 className="device-name">{`Device ${device.name}`}</h1>
                        <dl className="device-base-info">
                            <dt className="device-base-info-term">Device ID</dt>
                            <dd className="device-base-info-def">{device.id}</dd>
                            <dt className="device-base-info-term">HW Key</dt>
                            <dd className="device-base-info-def">{device.hwKey}</dd>
                        </dl>
                        <div className="device-extras">
                            <label className="device-extra">
                                <input type="checkbox" checked={device.immobilizer} readOnly />
                                Immobilizer
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.keyInHolder} readOnly />
                                Key in holder
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.doors} readOnly />
                                Doors
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.fuelCard} readOnly />
                                Fuelcard
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.handBrake} readOnly />
                                Handbrake
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.GPS} readOnly />
                                GPS
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.ignition} readOnly />
                                Ignition
                            </label>
                            <label className="device-extra">
                                <input type="checkbox" checked={device.LTE} readOnly />
                                LTE
                            </label>
                        </div>
                    </div>
                    <div className="readonly-container">
                        <div className="map-container">
                            <h2 className="map-header">Location</h2>
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.6269185688543!2d13.405674315871698!3d52.5039926798111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f770258424b%3A0xe2238a7de65a344!2sProShare!5e0!3m2!1sen!2sde!4v1574634806861!5m2!1sen!2sde" width="648" height="406" frameBorder="0" />
                        </div>
                        <div className="vital-statistics-container">
                            <label className="vital-statistics">
                                Charge
                                <input
                                    className="vital-output"
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
                            <label className="vital-statistics">
                                Mileage
                                <input
                                    className="vital-output"
                                    type="text"
                                    defaultValue={device.mileage}
                                    readOnly
                                />
                            </label>
                            <span>
                                km
                            </span>
                            <label className="vital-statistics">
                                Distance
                                <input
                                    className="vital-output"
                                    type="number"
                                    defaultValue={device.distance}
                                    readOnly
                                />
                            </label>
                            <span>
                                km
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Device;

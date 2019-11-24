import * as React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Device from './device';

import './App.css';

import data from './data.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      devices: data,
      removalQueue: null,
    };

    this.addRemovalQueue = this.addRemovalQueue.bind(this);
    this.remove = this.remove.bind(this);
    this.cleanQueue = this.cleanQueue.bind(this);
    this.getDevice = this.getDevice.bind(this);
  }

  remove() {
    this.setState({
      devices: this.state.devices.filter((device) => {
        return device.id !== this.state.removalQueue;
      }),
    });

    this.cleanQueue();
  }

  addRemovalQueue(event) {
    this.setState({
      removalQueue: Number(event.target.name),
    });
  }

  cleanQueue() {
    this.setState({
      removalQueue: null,
    });
  }

  getDevice(id) {
    return this.state.devices.find((device) => {
      return device.id === id;
    });
  }

  render() {
    const state = this.state;

    return (
      <React.Fragment>
        <header className="header"></header>
        <main className="dashboard-container">
          <Switch>
            <Route path="/" exact>
              <button className="add-device-button" type="button">
                ✚&nbsp;&nbsp;Add Device
              </button>
              <h1 className="dashboard-name">Device Simulator Dashboard</h1>
              {state.devices.length ?
                <div className="table" role="table">
                  <div className="table-row header-row" role="rowgroup">
                    <div className="table-column-header first-cell" role="columnheader">Name</div>
                    <div className="table-column-header" role="columnheader">Device ID</div>
                    <div className="table-column-header" role="columnheader">HW Key</div>
                    <div className="table-column-header" role="columnheader">Charge</div>
                    <div className="table-column-header" role="columnheader">GPS</div>
                    <div className="table-column-header" role="columnheader">Mileage</div>
                    <div className="table-column-header"></div>
                  </div>
                  {state.devices.map((device) => {
                    return (
                      <div className="table-row row-shadow" role="rowgroup" key={device.id}>
                        <div className="table-cell first-cell" role="cell">{device.name}</div>
                        <div className="table-cell" role="cell">{device.id}</div>
                        <div className="table-cell" role="cell">{device.hwKey}</div>
                        <div className="table-cell" role="cell">{`${device.charge}%`}</div>
                        <div className="table-cell" role="cell">{device.isGPSEnabled ? 'On' : 'Off'}</div>
                        <div className="table-cell" role="cell">{device.mileage}</div>
                        <div className="table-cell" role="cell">
                          <Link
                            className="device-action edit-device-button"
                            to={`/device/${device.id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="device-action delete-device-button" type="button"
                            name={device.id}
                            onClick={this.addRemovalQueue}
                          >
                            Delete
                    </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                :
                <p>
                  There is no devices yet.
                </p>
              }
              {state.removalQueue &&
                <div className="modal-wrap">
                  <div className="modal">
                    <div className="modal-text">
                      Are you sure you want to delete that device?
                    </div>
                    <button
                      className="button button-secondary"
                      type="button"
                      onClick={this.cleanQueue}
                    >
                      Cancel
                    </button>
                    <button
                      className="button button-primary" type="button"
                      onClick={this.remove}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              }
            </Route>
            <Route
             path="/device/:deviceId"
             component={(reactRouterProps) => {
               return (
                <Device
                  getDevice={this.getDevice}
                 {...reactRouterProps}
                />
               );
             }}
            />
          </Switch>
        </main>
      </React.Fragment>
    );
  }

}

export default App;

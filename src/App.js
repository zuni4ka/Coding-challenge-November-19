import React from 'react';
import './App.css';

import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="dashboard-container">
          <button className="add-device-button" type="button">
            ✚ Add Device
          </button>
          <h1 className="dashboard-name">Device Simulator Dashboard</h1>
          <div className="table" role="table">
            <div className="table-row header-row" role="rowgroup">
              <div className="table-column-header" role="columnheader">Name</div>
              <div className="table-column-header" role="columnheader">Device ID</div>
              <div className="table-column-header" role="columnheader">HW Key</div>
              <div className="table-column-header" role="columnheader">Charge</div>
              <div className="table-column-header" role="columnheader">GPS</div>
              <div className="table-column-header" role="columnheader">Mileage</div>
              <div className="table-column-header"></div>
            </div>
            {data.map((device) => {
              return (
                <div className="table-row" role="rowgroup">
                  <div className="table-cell" role="cell">{device.name}</div>
                  <div className="table-cell" role="cell">{device.id}</div>
                  <div className="table-cell" role="cell">{device.hwKey}</div>
                  <div className="table-cell" role="cell">{`${device.charge}%`}</div>
                  <div className="table-cell" role="cell">{device.isGPSEnabled ? 'On' : 'Off'}</div>
                  <div className="table-cell" role="cell">{device.mileage}</div>
                  <div className="table-cell" role="cell">
                    <button className="device-actions edit-device-button" type="button"></button>
                    <button className="device-actions delete-device-button" type="button"></button>
                    <span className="button-text">Edit</span>
                    <span className="button-text">Delete</span>
                  </div>
                </div>
              );
            })}
          </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

//charts
import BarChart from './ChartParts/ChartTypes/BarChart'
//datasets
import allTeamSeasonStats from './Datasets/allTeamSeasonStats.json'

function App() {
  return (
    <div className="App">
      <div className="App__charts">
        <BarChart
          data={allTeamSeasonStats}
        />
      </div>
    </div>
  );
}

export default App;

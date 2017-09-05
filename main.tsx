import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app';
import { Progress } from './components/progress';
import './assets/styles/global.scss';
// import GoogleChart from 'react-googlecharts';
import {DyGraph} from './components/dygraph/dygraph'; 

(() => {
    const title = 'OneNotePlot';
    const container = document.querySelector('#container');

    /* Render application after Office initializes */
    Office.initialize = () => {
        render(
            <App title={title} />,
            container
        );
    };

    /*
    var data = [
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ];
    
    var options = {
        chart: {
            title: 'Population of Largest U.S. Cities',
            subtitle: 'Based on most recent and previous census data'
        },
        hAxis: {
            title: 'Total Population',
            minValue: 0,
        },
        vAxis: {
            title: 'City'
        },
        bars: 'horizontal'
    };

    
     */

    // let graph = new DyGraph(null, null)
    
    /* Initial render showing a progress bar */
    // <GoogleChart type="column" data={data} options={options} /> 
    render(
        <div>
            this is different text
            <DyGraph></DyGraph>
            <Progress title={title} logo='assets/logo-filled.png' message='I added this Please sideload your addin to see app body.'/>
        </div>,
     container);
})();


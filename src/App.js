import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
import img from './1.png';

import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {

        state = {
        data: {},
        country: '',
        }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData (country);

        this.setState({data: fetchedData, country: country});
    }

    render(){
        const {data,country} = this.state;

        return(
            <div className={styles.container}>
                <img src={img} alt="covid-19" style={{height: "170px", width: "350px" }} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
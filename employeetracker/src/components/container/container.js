import { React, Component } from 'react';
import SearchBar from '../searchbar/searchBar.js';
import Table from '../table/tableConditional.js';
import API from '../../utils/API.js';

class Container extends Component {
    state = {
        search: "",
        employees: []
    };

    componentDidMount() {
        this.getUsers()
    };

    getUsers() {
        API.getUsers()
            .then(res => {
                const resultArray = [];
                res.data.results.forEach(element => {
                    resultArray.push({
                        first_name: element.name.first,
                        last_name: element.name.last,
                        image: element.picture.thumbnail,
                        phone: element.cell,
                        email: element.email,
                        dob: element.dob.date
                    });
                });
                this.setState({ employees: resultArray});
                console.log(this.state.employees);
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div className="container">
                <SearchBar handleInputChange = {this.handleInputChange}/>
                <Table search = {this.state.search} employees = {this.state.employees}/>
            </div>
        )
    };
};

export default Container;
import { React, Component } from 'react';
import SearchBar from '../searchbar/searchBar.js';
import Table from '../table/table.js';
import API from '../../utils/API.js';

import './container.css';

class Container extends Component {
    //setting the state for the react app
    state = {
        search: "",
        sort: "",
        employees: [],
        filteredEmployees: []
    };

    componentDidMount() {
        this.getUsers()
    };

    getUsers() {
        API.getUsers()
            .then(res => {
                const resultArray = [];
                res.data.results.forEach(element => {
                    let d = new Date(element.dob.date)

                    resultArray.push({
                        id: element.id.value,
                        first_name: element.name.first,
                        last_name: element.name.last,
                        image: element.picture.thumbnail,
                        phone: element.cell,
                        email: element.email,
                        dob: d
                    });
                });
                this.setState({ employees: resultArray, filteredEmployees: resultArray });
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, this.filterEmployees);
    };

    handleSortChange = event => {
        event.preventDefault();
        if(this.state.sort === ""){
            this.setState({
                sort: "ascending"
            }, this.sortEmployeesByDOB)
        } else if (this.state.sort === "ascending") {
            this.setState({
                sort: "descending"
            }, this.sortEmployeesByDOB)
        } else if (this.state.sort === "descending") {
            this.setState({
                sort: ""
            }, this.sortEmployeesByDOB)
        }
    }

    filterEmployees = () => {
        if (this.state.search !== " ") {
            this.setState({
                filteredEmployees: this.state.employees.filter(employee => employee.first_name.toLowerCase().includes(this.state.search))
            })
        } else {
            this.setState({
                filteredEmployees: this.state.employees
            })
        }
    };

    sortEmployeesByDOB = () => {
        if (this.state.sort === "ascending") {
            this.setState({
                filteredEmployees: this.state.filteredEmployees.sort(function (a, b) { return a.dob - b.dob })
            });
        } else if (this.state.sort === "descending") {
            this.setState({
                filteredEmployees: this.state.filteredEmployees.sort(function (a, b) { return b.dob - a.dob })
            });
        } else {
            this.getUsers();
        }
    };


    render() {
        return (
            <div className="container">
                <div className="clearfix">
                    <SearchBar handleInputChange={this.handleInputChange} />
                </div>

                <Table search={this.state.search} employees={this.state.filteredEmployees} sort={this.state.sort} handleSortChange={this.handleSortChange}/>
            </div>
        )
    };
};

export default Container;
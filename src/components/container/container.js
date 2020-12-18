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

    //calls API to get users
    componentDidMount() {
        this.getUsers()
    };

    //getting users from API
    getUsers() {
        API.getUsers()
            .then(res => {
                const resultArray = [];
                //pulls out the elements we want for our page
                res.data.results.forEach(element => {
                    //sets up a date to be used later on
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
                //sets the employee array and filtered employees array
                this.setState({ employees: resultArray, filteredEmployees: resultArray });
            })
            .catch(err => {
                console.log(err);
            });
    };

    //handles the search input change and sets the search state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, this.filterEmployees);
    };

    //handles the dob search change
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

    //filters the employees displayed to reflect a name that includes the search
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

    //sorts employees by ascending or descending order
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
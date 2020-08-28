import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import {Container, Card} from "react-bootstrap";

class Directory extends React.Component{

    state = {
        name: "",
        role: "",
        manager: "",
        users: [],
        search: "",
        sort: ""
    }

    updateSearch = (search) => {
        this.setState({ search})
    }

    updateSort = (sort)=>{
        this.setState({sort})
    }

    componentDidMount(){
        API
            .getUsers()
            .then( res => {
                console.log( res.data.results[0]);
                this.setState({users: res.data.results})
            });
    }

    render(){
        return (
            <Container>
                <Card body>
                        <SearchForm updateSearch={this.updateSearch} />
                </Card>
                <UserTable 
                users={this.state.users} 
                search={this.state.search}
                updateSort={this.updateSort}
                sort={this.state.sort}
                />
            </Container>
        )

    }

}

export default Directory;
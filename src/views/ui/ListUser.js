import React from 'react';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import ExpenseSave from "./ExpenseSave";
import UpdateUser from "./UpdateUser";


export default class ListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            click: false,
            selectedUser: {}
        }
        this.toggle = () => this.setState({click: !this.state.click});

    }


    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/users`)
            .then(res => {
                const users = res.data;
                this.setState({users});
                console.log(users);
            })
    }


    deleteRow(id) {
        axios.delete(`http://localhost:8085/api/v1/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const users = this.state.users.filter(item => item.userId !== id);
                this.setState({users});
            })
    }


    render() {
        return (
            <div>

                <Modal isOpen={this.state.click} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Kullanıcı Güncelle</ModalHeader>
                    <ModalBody>
                        <UpdateUser selectedUser={this.state.selectedUser}>

                        </UpdateUser>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>


                <Table>
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            StartDateToJob
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Level
                        </th>
                        <th>
                            Department
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Country
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Phone Number
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((value, index) => (
                            <tr>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    {value.name}
                                </td>
                                <td>
                                    {value.surName}
                                </td>
                                <td>
                                    {value.email}
                                </td>
                                <td>
                                    {value.startDateToJob}
                                </td>
                                <td>
                                    {value.title}

                                </td>
                                <td>
                                    {value.level}

                                </td>
                                <td>
                                    {value.department}

                                </td>
                                <td>
                                    {value.address}

                                </td>
                                <td>
                                    {value.country}

                                </td>
                                <td>
                                    {value.city}

                                </td>
                                <td>
                                    {value.phoneNumber}

                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={(e) => this.deleteRow(value.userId)}>Delete
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-warning" onClick={(e) => {
                                        this.setState({selectedUser: value})
                                        this.toggle()
                                    }}>Update
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>

                </Table>
            </div>
                )
    }
}



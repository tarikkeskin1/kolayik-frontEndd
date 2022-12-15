import React from 'react';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
// import modal from "bootstrap/js/src/modal";

import ExpenseSave from "./ExpenseSave";



export default class ListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={users: [],
            click:false,
            selectedUser:{}}
        this.toggle=() =>this.setState({click:!this.state.click});
    }



    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log(users);
            })}






    render() {
        return (
            <div>
                <Modal isOpen={this.state.click} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Harcama Kaydet</ModalHeader>
                    <ModalBody>
                        <ExpenseSave selectedUser={this.state.selectedUser}>

                        </ExpenseSave>
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
                            İsim
                        </th>
                        <th>
                            Soy İsim
                        </th>
                        <th>
                            Email
                        </th>

                        <th>
                            Ünvan
                        </th>
                        <th>
                            Seviye
                        </th>
                        <th>
                            Departman
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((value, index) =>(
                            <tr>
                                <th scope="row">
                                    {index+1}
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
                                    {value.title}

                                </td>
                                <td>
                                    {value.level}

                                </td>
                                <td>
                                    {value.department}

                                </td>
                                <td>
                                    <Button color="primary" onClick={()=>{this.setState({selectedUser:value})
                                        this.toggle()}}>
                                        Harcama Kaydet
                                    </Button>
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
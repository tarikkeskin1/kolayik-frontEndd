import React from 'react';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import UpdateUser from "./UpdateUser";
import UpdateDayOff from "./UpdateDayOff";


export default class ListDayOff extends React.Component {
    constructor(props) {
        super(props);
        this.state={dayOff: [],
            click: false,
            selectedDayOff: {}}
        this.toggle = () => this.setState({click: !this.state.click});

    }


    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/dayOff`)
            .then(res => {
                const dayOff = res.data;
                this.setState({ dayOff });
                console.log(dayOff);
            })
    }

    deleteRow(id){
        axios.delete(`http://localhost:8085/api/v1/dayOff/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const dayOff = this.state.dayOff.filter(item => item.dayOffId !== id);
                this.setState({dayOff});
            })}

    render() {
        return (
          <div>

            <Modal isOpen={this.state.click} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>İzni Güncelle</ModalHeader>
                <ModalBody>
                    <UpdateDayOff selectedDayOff={this.state.selectedDayOff}>

                    </UpdateDayOff>
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
                        Kullanıcı Adı
                    </th>
                    <th>
                        Kullanıcı Soyadı
                    </th>
                    <th>
                        Toplam Gün
                    </th>
                    <th>
                        İzin Başlangıcı
                    </th>
                    <th>
                        İzin Bitişi
                    </th>
                    <th>
                        İzin Açıklaması
                    </th>

                </tr>
                </thead>
                <tbody>
                {
                    this.state.dayOff.map((value, index) =>(
                        <tr>
                            <th scope="row">
                                {index+1}
                            </th>
                            <td>
                                {value.userName}
                            </td>
                            <td>
                                {value.surName}
                            </td>
                            <td>
                                {value.totalDay}
                            </td>
                            <td>
                                {value.startDate}
                            </td>
                            <td>
                                {value.finishDate}

                            </td>
                            <td>
                                {value.dayOffComment}

                            </td>

                            <td>
                                <button className="btn btn-danger" onClick={(e) => this.deleteRow(value.dayOffId)}>Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-warning" onClick={(e) => {
                                    this.setState({selectedDayOff: value})
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
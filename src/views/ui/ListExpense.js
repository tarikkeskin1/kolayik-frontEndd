import React from 'react';
import axios from 'axios';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import UpdateDayOff from "./UpdateExpense";
import UpdateExpense from "./UpdateExpense";


export default class ListExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state={expense: [],
            click: false,
            selectedExpense: {}}
        this.toggle = () => this.setState({click: !this.state.click});

    }


    componentDidMount() {
        axios.get(`http://localhost:8085/api/v1/expenses`)
            .then(res => {
                const expense = res.data;
                this.setState({ expense });
                console.log(expense);
            })
    }

    deleteRow(id){
        axios.delete(`http://localhost:8085/api/v1/expenses/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.status)
                console.log(res.data);
                const expense = this.state.expense.filter(item => item.expenseId !== id);
                this.setState({expense});
            })}

    render() {
        return (

            <div>

                <Modal isOpen={this.state.click} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Harcama Güncelle</ModalHeader>
                    <ModalBody>
                        <UpdateExpense selectedExpense={this.state.selectedExpense}>

                        </UpdateExpense>
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
                        Harcama Türü
                    </th>
                    <th>
                        Harcama Miktarı
                    </th>
                    <th>
                        Fiş Tarihi
                    </th>
                    <th>
                        Harcama Açıklaması
                    </th>

                </tr>
                </thead>
                <tbody>
                {
                    this.state.expense.map((value, index) =>(
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
                                {value.expenseType}
                            </td>
                            <td>
                                {value.expenseAmounth}
                            </td>
                            <td>
                                {value.voucherDate}

                            </td>
                            <td>
                                {value.expensesComment}

                            </td>

                            <td>
                                <button className="btn btn-danger" onClick={(e) => this.deleteRow(value.expenseId)}>Delete</button>
                            </td>
                            <td>

                                <button className="btn btn-warning" onClick={(e) => {
                                    this.setState({selectedExpense: value})
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
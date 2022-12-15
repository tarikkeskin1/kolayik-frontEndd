import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import axios from "axios";

export default class ExpenseSave extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
              // userId;
              expenseType:'',
              expenseAmounth:'',
              voucherDate:'',
              taxRate:'',
              expensesComment:''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render(){
        return (
            <Row>
                <Col>
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            {/*<i className="bi bi-bell me-2"> </i>*/}
                            Harcama Kaydet
                        </CardTitle>
                        <CardBody>
                            <Form>
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleNumber">
                                                Harcama Miktarı
                                            </Label>
                                            <Input
                                                id="exampleNumber"
                                                name="expenseAmounth"
                                                placeholder="number placeholder"
                                                type="number"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Harcama Türü
                                            </Label>
                                            <Input
                                                id="exampleSelect"
                                                name="expenseType"
                                                type="select"
                                                onChange={this.handleChange}
                                            >
                                                <option>
                                                    MASRAF
                                                </option>
                                                <option>
                                                    YEMEK
                                                </option>
                                                <option>
                                                    YOL
                                                </option>

                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleNumber">
                                                 Vergi Oranı
                                            </Label>
                                            <Input
                                                id="exampleNumber"
                                                name="taxRate"
                                                placeholder="number placeholder"
                                                type="number"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleDate">
                                                Fiş Tarihi
                                            </Label>
                                            <Input
                                                id="exampleDate"
                                                name="voucherDate"
                                                placeholder="20/01/1996"
                                                type="date"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Col md={12}>

                                    <FormGroup>
                                        <Label for="exampleText">
                                            Harcama Açıklaması
                                        </Label>
                                        <Input
                                            id="exampleText"
                                            name="expensesComment"
                                            type="textarea"
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>



                                    <Col md={12}>
                                        <div className="d-grid gap-2">
                                            <Button color="success" className="mb-4" onClick={(event) => {


                                                let data = {
                                                    userId: this.props.selectedUser.userId,
                                                    taxRate: this.state.taxRate,
                                                    expenseType: this.state.expenseType,
                                                    voucherDate: this.state.voucherDate,
                                                    expenseAmounth: this.state.expenseAmounth,
                                                    expensesComment: this.state.expensesComment,

                                                }

                                                console.log(data)

                                                axios.post("http://localhost:8085/api/v1/expenses",data)
                                                    .then(response => {
                                                        alert("Harcama Kaydedildi")
                                                    }).catch(reason => {
                                                    alert(reason)
                                                })
                                            }}>Kaydet</Button>
                                        </div>
                                    </Col>
                                </Col>



                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    };
}

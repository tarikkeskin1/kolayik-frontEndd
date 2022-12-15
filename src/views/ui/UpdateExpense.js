import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import React from "react";
import axios from "axios";


class UpdateExpense extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            expenseType: '',
            expenseAmounth: 0,
            voucherDate: '',
            taxRate: 0,
            expensesComment:'',
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render()
    {
        return (
            <Row>
                <Col>
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            {/*<i className="bi bi-bell me-2"> </i>*/}
                            Harcama Güncelle
                        </CardTitle>
                        <CardBody>
                            <Form>
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Harcamanın Tarihi</Label>
                                            <Input
                                                id="exampleEmail"
                                                name="voucherDate"
                                                placeholder="tarik@gmail.com"
                                                type="date"
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
                                            <Label for="exampleSalary">Harcama Miktarı</Label>
                                            <Input
                                                id="exampleSalary"
                                                name="expenseAmounth"
                                                placeholder="2500tl"
                                                type="number"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSalary">Vergi Oranı</Label>
                                            <Input
                                                id="exampleSalary"
                                                name="taxRate"
                                                placeholder="2500tl"
                                                type="number"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
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
                                    </Col>
                                </Row>

                                <Col md={12}>
                                    <hr className="my-4"/>

                                    <Button color="success" className="mb-4" onClick={(event) => {


                                        let data = {

                                            expenseType: this.state.expenseType,
                                            expenseAmounth: this.state.expenseAmounth,
                                            voucherDate:this.state.voucherDate,
                                            taxRate:this.state.taxRate,
                                            expensesComment:this.state.expensesComment
                                        }

                                        console.log(data)
                                        console.log(this.props.selectedExpense)



                                        axios.put('http://localhost:8085/api/v1/expenses/'.concat(this.props.selectedExpense.expenseId),data)
                                            .then(response => {
                                                alert("Harcama Güncellendi")
                                            }).catch(reason => {
                                            alert(reason)
                                        })
                                    }}>Kaydet</Button>

                                </Col>


                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default UpdateExpense;

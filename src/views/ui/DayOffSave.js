import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import axios from "axios";

export default class DayOffSave extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            // userId:'',
            totalDay: '',
            dayOffType: '',
            startDate: '',
            finishDate: '',
            dayOffComment: ''
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
                        İzin Oluştur
                    </CardTitle>
                    <CardBody>
                        <Form>
                           <Row>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleNumber">
                                        Toplam Gün
                                    </Label>
                                    <Input
                                        id="exampleNumber"
                                        name="totalDay"
                                        placeholder="number placeholder"
                                        type="number"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleSelect">
                                            İzin Türü
                                        </Label>
                                        <Input
                                            id="exampleSelect"
                                            name="dayOffType"
                                            type="select"
                                            onChange={this.handleChange}
                                        >
                                            <option>
                                                YOL
                                            </option>
                                            <option>
                                                YILLIK
                                            </option>
                                            <option>
                                                MAZERET
                                            </option>
                                            <option>
                                                ASKER
                                            </option>
                                            <option>
                                                DOGUM
                                            </option>
                                            <option>
                                                VEFAT
                                            </option>
                                        </Input>
                                    </FormGroup>
                                </Col>



                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate">
                                        Başlangıç Tarihi
                                    </Label>
                                    <Input
                                        id="exampleDate"
                                        name="startDate"
                                        placeholder="20/01/1996"
                                        type="date"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate">
                                        Bitiş Tarihi
                                    </Label>
                                    <Input
                                        id="exampleDate"
                                        name="finishDate"
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
                                        İzin Açıklaması
                                    </Label>
                                    <Input
                                        id="exampleText"
                                        name="dayOffComment"
                                        type="textarea"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>



                                <Col md={12}>
                                    <div className="d-grid gap-2">
                                        <Button color="success" className="mb-4" onClick={(event) => {


                                            let data = {
                                                userId: this.props.selectedUser.userId,
                                                totalDay: parseInt(this.state.totalDay),
                                                dayOffType: this.state.dayOffType,
                                                startDate: this.state.startDate,
                                                finishDate: this.state.finishDate,
                                                dayOffComment: this.state.dayOffComment,

                                            }

                                            console.log(data)

                                            axios.post("http://localhost:8085/api/v1/dayOff",data)
                                                .then(response => {
                                                    alert("İzin Kaydedildi")
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

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


class UpdateDayOff extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            dayOffComment: '',
            dayOffType: '',
            startDate: '',
            finishDate: '',
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
                            İzin Güncelle
                        </CardTitle>
                        <CardBody>
                            <Form>
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">İzin Başlangıç Tarihi</Label>
                                            <Input
                                                id="exampleEmail"
                                                name="startDate"
                                                placeholder="tarik@gmail.com"
                                                type="date"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSalary">İzin Bitiş Tarihi</Label>
                                            <Input
                                                id="exampleSalary"
                                                name="finishDate"
                                                placeholder="2500tl"
                                                type="date"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>

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
                                        </Col>
                                </Row>

                                <Col md={12}>
                                    <hr className="my-4"/>

                                    <Button color="success" className="mb-4" onClick={(event) => {


                                        let data = {

                                            dayOffComment: this.state.dayOffComment,
                                            dayOffType: this.state.dayOffType,
                                            startDate:this.state.startDate,
                                            finishDate:this.state.finishDate
                                        }

                                        console.log(data)

                                        axios.put('http://localhost:8085/api/v1/dayOff/'.concat(this.props.selectedDayOff.dayOffId),data)
                                            .then(response => {
                                                alert("İzin Güncellendi")
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

export default UpdateDayOff;

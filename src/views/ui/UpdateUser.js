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


class UpdateUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            salary: 0,
            department: '',


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
                            Kullanıcı Güncelle
                        </CardTitle>
                        <CardBody>
                            <Form>
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="tarik@gmail.com"
                                                type="text"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSalary">Maaş</Label>
                                            <Input
                                                id="exampleSalary"
                                                name="salary"
                                                placeholder="2500tl"
                                                type="number"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Departman
                                            </Label>
                                            <Input
                                                id="exampleSelect"
                                                name="department"
                                                type="select"
                                                onChange={this.handleChange}

                                            >
                                                <option>
                                                    IK
                                                </option>
                                                <option>
                                                    MUHASEBE
                                                </option>
                                                <option>
                                                    YONETIM
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Col md={12}>
                                    <hr className="my-4"/>

                                    <Button color="success" className="mb-4" onClick={(event) => {


                                        let data = {

                                            email: this.state.email,
                                            salary: parseInt(this.state.salary),
                                            department:this.state.department
                                        }

                                        console.log(data)

                                        axios.put('http://localhost:8085/api/v1/users/'.concat(this.props.selectedUser.userId),data)
                                            .then(response => {
                                                alert("Kullanıcı Güncellendi")
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

export default UpdateUser;

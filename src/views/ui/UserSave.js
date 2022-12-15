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


class UserSave extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surName: '',
      email: "",
      identityNumber: '',
      salary: 0,
      title: '',
      level:'J1',
      role: 'X',
      department: 'MUHASEBE',
      startDateToJob: '',
      birthDate: '',
      address: '',
      city: '',
      country: '',
      postCode: '',
      phoneNumber: ''

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
                  Kullanıcı Kaydet
                </CardTitle>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleUserName">İsim</Label>
                          <Input
                              id="exampleUserName"
                              name="name"
                              placeholder="Tarık"
                              type="text"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleUserName">Soy İsim</Label>
                          <Input
                              id="exampleUserName"
                              name="surName"
                              placeholder="Keskin"
                              type="text"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>

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
                          <Label for="identity">Kimlik No</Label>
                          <Input
                              id="identity"
                              name="identityNumber"
                              placeholder="109283933"
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

                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleDate">
                            İşe Başlama Tarihi
                          </Label>
                          <Input
                              id="exampleDate"
                              name="startDateToJob"
                              placeholder="date placeholder"
                              type="date"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleUserName">Ünvan</Label>
                          <Input
                              id="exampleUserName"
                              name="title"
                              placeholder="junior"
                              type="text"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>


                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleSelectMulti">
                            Seviye
                          </Label>
                          <Input
                              id="exampleSelectMulti"
                              multiple
                              name="level"
                              type="select"
                              onChange={this.handleChange}
                          >
                            <option>
                              J1
                            </option>
                            <option>
                              J2
                            </option>
                            <option>
                              J3
                            </option>
                            <option>
                              S1
                            </option>
                            <option>
                              S2
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>


                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleSelect">
                            Rol
                          </Label>
                          <Input
                              id="exampleSelect"
                              name="role"
                              type="select"
                              onChange={this.handleChange}
                          >
                            <option>
                              X
                            </option>
                            <option>
                              Y
                            </option>
                            <option>
                              Z
                            </option>
                            <option>
                              X
                            </option>
                            <option>
                              Z
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>


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


                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleDate">
                          Doğum Tarihi
                        </Label>
                        <Input
                            id="exampleDate"
                            name="birthDate"
                            placeholder="20/01/1996"
                            type="date"
                            onChange={this.handleChange}

                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <hr className="my-4"/>
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        İLETİŞİM BİLGİLERİ
                      </h6>

                      <FormGroup>
                        <Label for="exampleAddress">
                          Adres
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                            onChange={this.handleChange}

                        />
                      </FormGroup>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleCity">
                              Şehir
                            </Label>
                            <Input
                                id="exampleCity"
                                name="city"
                                onChange={this.handleChange}

                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">
                              Ülke
                            </Label>
                            <Input
                                id="exampleState"
                                name="country"
                                onChange={this.handleChange}

                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">
                              Posta Codu
                            </Label>
                            <Input
                                id="exampleState"
                                name="postCode"
                                onChange={this.handleChange}

                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail">Telefon Numarası</Label>
                            <Input
                                id="exampleEmail"
                                name="phoneNumber"
                                placeholder="109283933"
                                type="email"
                                onChange={this.handleChange}

                            />
                          </FormGroup>
                        </Col>

                      </Row>

                      <div className="d-grid gap-2">
                      <Button color="success" className="mb-4" onClick={(event) => {


                        let data = {
                          name: this.state.name,
                          surName: this.state.surName,
                          email: this.state.email,
                          identityNumber: this.state.identityNumber,
                          salary: parseInt(this.state.salary),
                          title: this.state.title,
                          level: this.state.level,
                          role: this.state.role,
                          startDateToJob: this.state.startDateToJob,
                          birthDate: this.state.birthDate,
                          address: this.state.address,
                          city:this.state.city,
                          country:this.state.country,
                          postCode:this.state.postCode,
                          phoneNumber:this.state.phoneNumber,
                          department:this.state.department
                        }

                        console.log(data)

                        axios.post("http://localhost:8085/api/v1/users",data)
                            .then(response => {
                              alert("Kullanıcı Kaydedildi")
                            }).catch(reason => {
                          alert(reason)
                        })
                      }}>Kaydet</Button>
                      </div>

                    </Col>


                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
      );
    }
  }

export default UserSave;

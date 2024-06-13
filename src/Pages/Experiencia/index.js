import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import dados from '../../dados.json';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Experiencia() {
    return (
        <div className='container-fluid conteudo'>
            <div className='col-md-8'>
                <div className="card card-apresentacao">
                    <div className="card-body">
                        <div className='d-flex'>
                            <div className='icone'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <div className='titulo'>Experiencias</div>
                            <hr />
                        </div>
                        <div className="">
                            <Tab.Container defaultActiveKey="0">
                                <Row>
                                    <Col sm={1}>
                                        <Nav variant="pills" className="flex-column">
                                            {dados.experiencia.map((item, index) =>
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={index} key={index} className="tab">{item.empresa}</Nav.Link>
                                                </Nav.Item>
                                            )}
                                        </Nav>
                                    </Col>
                                    <Col sm={6}>
                                        <Tab.Content>
                                            {dados.experiencia.map((item, key) =>
                                                <Tab.Pane eventKey={key} key={key} className="tab-pane">
                                                    <div className='funcao'>{item.funcao}</div>
                                                    <div className='periodo'>{item.periodo}</div>
                                                    <div className='experienciaDescricao'>
                                                        <ul>
                                                            {item.descricao.map((i, index) => <li key={index}>{i}</li>)}
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                            )}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiencia;
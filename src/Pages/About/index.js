import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import dados from '../../dados.json'

function About() {
    return (
        <div className='container-fluid conteudo'>
            <div className='row card-tecnologias'>
                <div className='col-md-12'>
                    <div className='row card-row'>
                        {dados.sobre.tecnologias.map((item, key) => 
                            <div key={key} className="li_tecnologias col-md-1">
                                 <FontAwesomeIcon className='icone-habilidades fa-5x' icon={item.icon}/>
                                 {item.title}
                            </div>
                        )}
                    </div>
                    </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className="card card-apresentacao">
                        <div className="card-body">
                            <div className='d-flex'>
                                <div className='icone '>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className='titulo'>Sobre</div>
                                <div className=''>
                                    <hr />
                                </div>
                            </div>
                            <div className='texto'>
                                {dados.sobre.descricao.map((item, index) => <p key={index}>{item}</p>)}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
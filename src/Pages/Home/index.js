import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import About from '../About';
import Projects from '../Projects';
import Experiencia from '../Experiencia';

function Home() {
    return (
        <div>
            <Header />
            {/* Seção 1 - Apresentação(Home)*/}
            <section id="home">
                <div className='container-fluid d-flex justify-content-center conteudo'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="card card-apresentacao">
                                <div className="card-body">
                                    <h5 className="card-title">Olá! Meu nome é</h5>
                                    <h2 className="card-subtitle mb-2 text-body-secondary">Dayanne</h2>
                                    <p className="card-text">Sou desenvolvedora de software front-end(ReactJs, Angular, Vue), mas que também desenvolve no back-end(Java) formada em engenharia da computação.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-logo'>
                            <div className="card card-logo">
                                <div className="card-body">
                                    <img src="./assets/img/logo-maior-clara.png" className="img-fluid" alt="logo" width="54%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seção 2 - Sobre */}
            <section id='sobre'>
                <About />
            </section>
            {/* Seção 3 - Experiencias */}
            <section id='experiencias'>
                <Experiencia />
            </section>
            {/* Seção 4 - Projetos */}
            <section id='projetos'>
                <Projects />
            </section>
            <Footer />
        </div >
    );
}

export default Home;
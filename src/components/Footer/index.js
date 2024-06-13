import React from 'react';
import { faDiscord, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import dados from '../../dados.json'
import ButtonRedeSocial from '../ButtonRedeSocial'

function Footer() {
    return (
        <div>
            <footer className="text-center text-footer">
                <div className="container p-2">
                    <section className="mb-4">
                        <ButtonRedeSocial dados={dados.redesSociais.linkedin} icone={faLinkedinIn} />
                        <ButtonRedeSocial dados={dados.redesSociais.github} icone={faGithub} />
                    </section>
                    <div className="text-center p-1">Desenvolvido por Dayanne </div>
                    <div>{dados.redesSociais.email}</div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
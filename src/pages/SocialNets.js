import React, { Component, Fragment } from 'react';
import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import './styles/SocialNets.css';

class SocialNets extends Component {
    render() {
        return (
            <div id='social-nets-form'>
                <Fragment>
                    <h1>
                        Redes sociales y<br />
                        de contacto de tu
                        <br />
                        tienda
                    </h1>
                    <div id='social-nets-wrapper'>
                        <SocialNetsInput snName='instagram' />
                        <SocialNetsInput snName='facebook' />
                        <SocialNetsInput snName='whatsapp' />
                        <SocialNetsInput snName='twitter' />
                        <SocialNetsInput snName='otra' />
                    </div>
                    <button>Continuar</button>
                </Fragment>
            </div>
        );
    }
}

export default SocialNets;

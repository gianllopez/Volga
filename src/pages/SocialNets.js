import React, { Component, Fragment } from 'react';
import SocialNetsInput from '../components/SocialNets/SocialNetInput';

class SocialNets extends Component {
    render() {
        return (
            <div id='social-nets-form'>
                <Fragment>
                    <h1>Redes sociales de tu tienda</h1>
                    <SocialNetsInput snName='instagram' />
                    <SocialNetsInput snName='facebook' />
                    <SocialNetsInput snName='whatsapp' />
                    <SocialNetsInput snName='twitter' />
                    <SocialNetsInput snName='otra' />
                </Fragment>
            </div>
        );
    }
}

export default SocialNets;

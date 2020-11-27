import React, {Component, Fragment} from 'react';
import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import './styles/SocialNets.css';

class SocialNets extends Component {
   
    state = {
        data: {
            instagram: undefined,
            facebook: undefined,
            whatsapp: undefined,
            twitter: undefined,
            other: undefined,
        }, 
        loading: false, 
        error: false
    }

    handleChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        });
    };

    render() {
        return (
            <div id='social-nets-form'>
                <Fragment>
                    <h1>
                        Redes sociales y<br/>
                        de contacto de tu<br/>
                        tienda
                    </h1>
                    <div id='social-nets-wrapper'>
                        <SocialNetsInput onChange={this.handleChange} snName='instagram'/>
                        <SocialNetsInput onChange={this.handleChange} snName='facebook'/>
                        <SocialNetsInput onChange={this.handleChange} snName='whatsapp'/>
                        <SocialNetsInput onChange={this.handleChange} snName='twitter'/>                        
                        <SocialNetsInput onChange={this.handleChange} snName='pinterest'/>                        
                    </div>
                    <button>Continuar</button>
                </Fragment>
            </div>
        );
    }
}

export default SocialNets;

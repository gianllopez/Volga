import React, {Component, Fragment} from 'react';
import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import Loader from '../components/global/Loader';
import './styles/SocialNets.css';

class SocialNets extends Component {
   
    state = {
        data: {
            instagram: undefined || 'thedrugshop_official',
            facebook: undefined|| 'The Drug Shop',
            whatsapp: undefined|| '3022365787',
            twitter: undefined|| 'thedrugshop',
            pinterest: undefined|| 'The Drug Shop',
        }, 
        errors_messages: undefined,
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

    handleSubmit = event => {
        
        event.preventDefault();

        this.setState({ loading: true })
        
        const shop_token = localStorage.getItem('shop-token')

        fetch(`https://volga-rest.herokuapp.com/social-networks/?token=${shop_token}`, {
            method: 'post',
            headers: {
                'Authorization': 'Token c0e03c9ce246125b4bf50cedf9d386f0bc517b23',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.data)
        })
            .then(response => {
                if (response.ok) {
                    this.setState({ loading: false })
                } else {
                    return response.json()
                }
            })
                .then(json => {
                    this.setState({ errors_messages: json })
                })

    };

    render() {
        return (
            <form id='social-nets-form' onSubmit={this.handleSubmit}>
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
                    {this.state.loading ? 
                        <Loader width={110} height={35}/> :                               
                        <button type='submit'>
                            Continuar
                        </button>
                    }
                </Fragment>
            </form>
        );
    }
}

export default SocialNets;

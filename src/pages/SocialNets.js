import React, {Component, Fragment} from 'react';
import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import Loader from '../components/global/Loader';
import './styles/SocialNets.css';

class SocialNets extends Component {
   
    state = {
        data: {
            instagram: undefined || 'thedrugshop_officialx',
            facebook: undefined|| 'The Drug Shopx',
            whatsapp: undefined|| '3022365787x',
            twitter: undefined|| 'thedrugshopx',
            pinterest: undefined|| 'The Drug Shopx',
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
                'Authorization': 'Token 007071b38dae7a95425fa0eaf65db37566adfe41',
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
                        <SocialNetsInput onChange={this.handleChange} snName='instagram' errorsObject={this.state.errors_messages}/>
                        <SocialNetsInput onChange={this.handleChange} snName='facebook' errorsObject={this.state.errors_messages}/>
                        <SocialNetsInput onChange={this.handleChange} snName='whatsapp' errorsObject={this.state.errors_messages}/>
                        <SocialNetsInput onChange={this.handleChange} snName='twitter' errorsObject={this.state.errors_messages}/> 
                        <SocialNetsInput onChange={this.handleChange} snName='pinterest' errorsObject={this.state.errors_messages}/>                        
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

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import Loader from '../components/global/Loader';
import ConfirmBlankModal from '../components/SocialNets/ConfirmBlankModal';
import formValidator from '../utils/validators';

import './styles/SocialNets.css';

class SocialNets extends Component {
   
    state = {
        data: {
            instagram: '',
            facebook: '',
            whatsapp: '',
            twitter: '',
            pinterest: '',
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

        this.setState({ loading: true });
        
        const shop_token = localStorage.getItem('shop-token');
        
        const makeFetch = () => {
            fetch(`https://volga-rest.herokuapp.com/social-networks/?token=${shop_token}`,
                {
                    method: 'post',
                    headers: {
                        'Authorization': 'Token d9be812eed5a7e14560d7adf975fbee2f2819190',
                        'Content-Type': 'application/json'                        
                    },
                    body: JSON.stringify(this.state.data)
                }
            ).then(response => {
                if (response.ok) {
                    // redirect to shop-tags
                } else {
                    return response.json()
                }
            }).then(json => {
                this.setState({
                    errors_messages: json
                });
            })
        };


        formValidator(
            this.state.data,
            () => makeFetch(),
            () => {
                this.setState({
                    blank_fields: true
                });                
            }

        )
        
    }
        

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
                    {this.state.blank_fields && (
                        ReactDOM.createPortal(
                            <ConfirmBlankModal/>,
                            document.getElementById('root')
                        )
                    )}

                </Fragment>
            </form>
        );
    }
}

export default SocialNets;

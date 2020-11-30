import React, {Component, Fragment} from 'react';
import swal from '@sweetalert/with-react';

import SocialNetsInput from '../components/SocialNets/SocialNetInput';
import Loader from '../components/global/Loader';

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
                const blankmsg = (
                    <Fragment>
                        <h2>
                            Las redes sociales son<br/>
                            indispensables en el alcance<br/>
                            de personas de tu tienda.
                        </h2>
                        <p>
                            Te recomendamos rellenar o crear<br/>
                            las redes sociales que te sugerimos.<br/>
                        </p>
                        <span>¿Deseas continuar sin rellenarlas todas?</span>
                    </Fragment>
                );
                swal({
                    title: 'Algunas redes sociales no se proveyeron.',
                    content: blankmsg,
                })          

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
                </Fragment>
            </form>
        );
    }
}

export default SocialNets;

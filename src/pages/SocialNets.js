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
        
        const shop_token = localStorage.getItem('shoptoken');
        
        const makeFetch = () => {                            
            this.setState({ loading: true });            
            fetch(`https://volga-rest.herokuapp.com/social-networks/?token=${shop_token}`,
                {
                    method: 'post',
                    headers: {
                        'Authorization': 'Token 86d97d29eafeec948c5dbca2c611be0a6d4c8190',
                        'Content-Type': 'application/json'                        
                    },
                    body: JSON.stringify(this.state.data)
                }
            ).then(response => {
                this.setState({ loading: false });
                if (response.ok) { 
                    this.props.history.push(`/${this.props.match.params['shop']}/tags`);
                } else {
                    return response.json()
                }
            }).then(json => {
                if (json) {
                    let errormsgs = (
                        <ul id='errors-list'>
                        {Object.values(json).map((error, id) => 
                            <li key={id}>
                                {error}
                            </li>
                        )}
                        </ul>
                    );
                    swal({
                        title: 'Error en el registro de tus redes',
                        content: errormsgs,
                        icon: 'error',
                        buttons: [false, 'Cerrar'],
                        dangerMode: true
                    });                
                }
            }).catch(error => console.error(error));
        };

        formValidator(
            this.state.data,
            () => makeFetch(),
            () => {
                this.setState({ loading: false });
                const confirmBlankMsg = (
                    <h2 style={{ marginTop: '-20px' }}>
                        Las redes sociales son<br/>
                        indispensables para el alcance<br/>
                        de personas de tu tienda.<br/>
                        <span style={{ color: '#e46519' }}>
                            ¿Deseas continuar sin<br/>
                            rellenarlas todas?
                        </span>
                    </h2>
                );
                swal({
                    title: 'Algunas redes sociales no se proveyeron.',
                    icon: 'warning',
                    content: confirmBlankMsg,
                    dangerMode: true,
                    buttons : {
                        cancel: 'No, rellenar',
                        catch: {
                            text: 'Si, continuar',
                            value: true,
                            className: 'allow-blank-btn'                         
                        }
                    }
                }).then(allowBlank => {
                    if (allowBlank) {                        
                        makeFetch();
                    };
                });
            }
        );
        
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
                        <SocialNetsInput onChange={this.handleChange} snName='instagram'/>
                        <SocialNetsInput onChange={this.handleChange} snName='facebook'/>
                        <SocialNetsInput onChange={this.handleChange} snName='whatsapp'/>
                        <SocialNetsInput onChange={this.handleChange} snName='twitter'/> 
                        <SocialNetsInput onChange={this.handleChange} snName='pinterest'/>                        
                    </div>
                    {this.state.loading ? 
                        <Loader/>: 
                        <button type='submit'>
                            Continuar
                        </button>
                    }                                        
                </Fragment>
            </form>
        );
    };

    componentDidMount() {
        document.title = `${this.props.match.params['shop']} - Redes Sociales`;
     };

}

export default SocialNets;

import React from 'react';
import './LoginScreen.css';
import logo from '../../assets/img/logoUsac.png';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        correo: '',
        pass: ''

    });
    const { correo, pass } = formValues;
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Ingresa</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Correo" name="correo" value={correo} onChange={handleInputChange} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña" name="pass" value={pass} onChange={handleInputChange} />
                        </div>
                        <input type="submit" value="Ingresar" className="btn solid" />

                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Universidad de San Carlos de Guatemala</h3>
                        <p>
                            Plataforma para el clima laboral.
                    </p>

                    </div>
                    <img src={logo} className="image" alt="" />
                </div>

            </div>
        </div>

    )
}

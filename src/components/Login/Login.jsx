import  { useState } from 'react';

import '../Login/Login.css';


const Login = () => {

    /*Animação container::before*/

    const [isSignUpMode, setIsSignUpMode] = useState(false);


    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    }

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    }


    /*Estrutura da página*/

    return (
        <section id="login_cadastro">
            <div className={`${isSignUpMode ? "sign_up_mode" : ''} container`}>
                <div className="signin_signup">
                    <form action="#" className="sign_in_form">
                       
                        <h2 className="title">Login</h2>
                        <div className="input_field">
                 
                            <input type='email' required placeholder='E-mail:' />
                        </div>
                        <div className="input_field">
                           
                            <input type="password" required placeholder='Senha:' />
                        </div>
                        <div className="remember">
                            <span>Esqueceu sua senha?</span>
                        </div>
                        <div className="input_submit">
                        
                            <input type="submit" id="submit" value='Entrar' className="botao5" />
                        </div>
                        <div className="remember2">
                         
                        </div>

                        <div className="social_media">
                            
                        </div>
                    </form>

                    <form action="#" className="sign_up_form2">
                        <h2 className="title2">Cadastro</h2>
                        <div className="input_field2">
                            <input type="text" placeholder='Nome completo:' required />
                        </div>
                        <div className="input_field2">
                            <input type="email" placeholder='E-mail:' required />
                        </div>
                        <div className="input_field2">
                            <input type="text" required placeholder='CPF:'/>
                        </div>
                        <div className="input_field2">
                            <input type="text" required placeholder='Data de Nascimento:'  />
                        </div>
                        <div className="input_field2">
                            <input type="password" required placeholder='Senha:' />
                        </div>
                        <div className="input_field2">
                            <input type="password" required placeholder='Confirmar senha:' />
                        </div>
                        <div className="support">
                            <div className="remember3">
                                <span>
                                    <input type="checkbox" name='opcao1' value='sim' required />
                                </span>
                                <p>Li e concordo com os <span>termos </span> e <span>serviços</span></p>
                            </div>
                            <input type="submit" value='Cadastre-se' className="botao6" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="botao">
                <div className="botao2">
                    <div className="botao3">
                        <button className="botao4" id="signin_button" onClick={handleSignInClick}>Login</button>
                    </div>
                </div>
                <div className="painel right_panel">
                    <div className="content">
                        <button className="botao4" id="signup_button" onClick={handleSignUpClick}>Cadastro</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
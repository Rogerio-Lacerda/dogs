import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const fetchUser = async () => {
    userLogin(username.value, password.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetchUser();
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" id="username" label="Nome" {...username} />
        <Input type="password" id="password" label="Senha" {...password} />
        {loading ? (
          <Button text="Carregando..." disabled />
        ) : (
          <Button text="Entrar" />
        )}
        <Error error={error && 'Dados Incorretos'} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadraste-se</h2>
        <p>Ainda não possui conta cadastre-se no site.</p>
        <Link
          to="/login/criar"
          className={`${stylesBtn.button} ${styles.buttonCriar}`}
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;

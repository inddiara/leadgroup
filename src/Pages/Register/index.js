import React, { useState } from 'react';
import usePasswordValidation from '../../hooks/usePasswordValidation';
import Logo from '../../assets/elo.png';
import './styles.css';

const Register = () => {
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });

  const [
    validLength,
    hasNumber,
    specialChar,
    match,
  ] = usePasswordValidation({
    firstPassword: password.firstPassword,
    secondPassword: password.secondPassword,
  });


  const setFirst = (event) => {
    setPassword({ ...password, firstPassword: event.target.value });
  };
  const setSecond = (event) => {
    setPassword({ ...password, secondPassword: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault();
    alert('Submissão realizada');
  };

  return (
    <div className="Border">
      <img className="ImgCenter" src={Logo} alt="Elo logo" />
      <form className="Form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input className="Input" type="text" required placeholder="Usuário*" />
            <input onChange={setFirst} className="Input" type="password" required placeholder="Senha*" />
            <input onChange={setSecond} className="Input" type="password" required placeholder="Confirmação de senha*" />
          </label>
        </div>

        <div>
          <ul>
            <p>
              Tamanho válido: {validLength ? <span>Verdadeiro</span> : <span>Falso</span>}
            </p>
            <p>
              Possui número: {hasNumber ? <span>Verdadeiro</span> : <span>Falso</span>}
            </p>
            <p>Ambas correspondem: {match ? <span>Verdadeiro</span> : <span>Falso</span>}
            </p>
            <p>
              Possui caractere especial:{" "}
              {specialChar ? <span>Verdadeiro</span> : <span>Falso</span>}
            </p>
          </ul>
        </div>

        <button className="button-register">Registrar</button>
      </form>
    </div>
  );
}

export default Register;

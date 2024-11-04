import { useState } from "react";
import { CheckIfPasswordIsCorrect, CheckIfEmailIsCorrect } from "../../../data/hooks/CheckCredentials";
import '../../../index.css';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function LoginForms() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordErrors, setPasswordErrors] = useState('');
  const [EmailErrors, setEmailErrors] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function HandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isPasswordValid = CheckCredentials(Password, 'Senha');
    const isEmailValid = CheckCredentials(Email, 'Email');

    if (isPasswordValid && isEmailValid) {
      console.log('passou');
    }
  }

  function HandleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function HandlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function CheckCredentials(Credential: string, NameOfCredential?: string): boolean {
    if (NameOfCredential === 'Senha') {
      const error = CheckIfPasswordIsCorrect(Credential);
      setPasswordErrors(error);
      return !error;
    }

    if (NameOfCredential === 'Email') {
      const error = CheckIfEmailIsCorrect(Credential);
      setEmailErrors(error);
      return !error;
    }

    return true;
  }

  return (
    <form onSubmit={HandleSubmit} className="w-full flex flex-col">
      {/* Campo de E-mail */}
      <section className="flex flex-col gap-3">
        <label className="CredentialLabelStyle">E-mail</label>
        <input
          type="email"
          value={Email}
          onChange={HandleEmailChange}
          className="CredentialInputStyle"
        />
        {EmailErrors && <span className="text-red-500">{EmailErrors}</span>}
      </section>

      {/* Campo de Senha */}
      <section className="flex flex-col gap-3 relative">
        <label className="CredentialLabelStyle">Senha</label>

        {/* Campo de entrada com ícone de visibilidade */}
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={Password}
            onChange={HandlePasswordChange}
            className="CredentialInputStyle pr-10" // Adiciona espaço à direita para o ícone
          />
          {/* Ícone de visibilidade */}
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <IoEyeSharp />}
          </button>
        </div>

        {PasswordErrors && <span className="text-red-500">{PasswordErrors}</span>}
      </section>

      {/* Botão de Entrar */}
      <button
        type="submit"
        className="bg-[#020080] w-2/4 rounded-md text-white text-center text-lg font-semibold px-4 py-2 mx-auto items-center mt-3"
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForms;

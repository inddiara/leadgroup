import { useState, useEffect } from 'react';

const usePasswordValidation = ({ firstPassword = "", secondPassword = "" }) => {
  const [validLenght, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);
  const [alphanumeric, setAlphanumeric] = useState(null);

  useEffect(() => {

    setValidLength(firstPassword.length >= 8 ? true : false);
    setHasNumber(/\d/.test(firstPassword));
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
    setMatch(firstPassword && firstPassword === secondPassword);
    setAlphanumeric(/^[a-zA-Z0-9_.-]+$/.test(firstPassword));

  }, [firstPassword, secondPassword]);

  return [validLenght, hasNumber, specialChar, match, alphanumeric];
}

export default usePasswordValidation;


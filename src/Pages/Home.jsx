import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(name,email,phone);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    window.location.href = '/apiPage';
  }

  const handleReset = (e) => {
    setEmail('');
    setName('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onChange={handleReset}>Reset</Button>
    </form>
  );
}

export default Form;

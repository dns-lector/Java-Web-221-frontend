import { useState } from 'react';

export default function Signup() {
    
      const [timestamp, setTimestamp] = useState("--");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [birthdate, setBirthdate] = useState("");
      const [password, setPassword] = useState("");
    
      const loadTimestamp = () => {
        fetch("http://localhost:8081/Java_Web_221/home")
        .then(r => r.json())
        .then(j => setTimestamp( j.message ));
      };
    
      const sendForm = () => {
        const data = {
          name,
          email,
          birthdate,
          phone,
          password
        };
        fetch(
          "http://localhost:8080/Java-Web-221/home", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )
        .then(r => r.json())
        .then(console.log);
        
        console.log(data);
      }
    
      return (
        <>
          <input 
            type='text'
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder="Введіть ім'я" />
          <br/>
          
          <input 
            type='email'
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="Введіть E-mail" />
          <br/>
          
          <input 
            type='date'
            value={birthdate} 
            onChange={e => setBirthdate(e.target.value)}
            placeholder="Дата народження" />
          <br/>
    
          <input 
            type='text'
            value={phone} 
            onChange={e => setPhone(e.target.value)}
            placeholder="Телефон" />
          <br/>
          
          <input 
            type='password'
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder="*********" />
          <br/>
    
          <button onClick={sendForm}>Реєстрація</button>
          <p>{timestamp}</p>
        </>
      );
}
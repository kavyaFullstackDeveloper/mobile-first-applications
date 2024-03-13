'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (username === 'kavya' && password === '1234') {
      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className='space-y-1.5 p-5 gap-0.5'>
      <h1 className='font-roboto text-slate-500 mb-2'>Login to the dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder=' enter user name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
            className="border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm
             font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 
             focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 
             focus:placeholder:opacity-100"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder=' enter password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal
             text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200
              focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
               placeholder:opacity-0 focus:placeholder:opacity-100" 
          />
        </div>


        <button type="submit" className='mt-2 flex h-full w-fullalign-self-end select-none !overflow-visible text-[16px] font-normal leading-tight text-gray-500 transition-all 
        before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent
         peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500'>Login</button>


        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

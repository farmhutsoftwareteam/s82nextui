// components/AuthForm.js
'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from './supabase'; 

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setError(null); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signIn({ email, password });
  console.log(data)
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data) {
        console.log(data)
        setLoading(false)
      router.push('/dashboard'); // Corrected to use useRouter hook
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          {isSignUp ? 'Create An Account' : 'Sign In'}
        </h2>
        <p className="text-center text-sm text-gray-600">
          {isSignUp
            ? 'Create an account to enjoy all the services without any ads for free!'
            : 'Sign in to access your account.'}
        </p>
        
        <form className="space-y-6 mt-8" onSubmit={handleAuth}>
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={email}
              onChange={handleInputChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Email Address" 
            />
          </div>
          
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              value={password}
              onChange={handleInputChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Password" 
            />
          </div>
          
          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <div>
            <button 
              type="submit" 
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
            >
              {loading ? 'Loading...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            {isSignUp
              ? 'Already have an account? '
              : 'Don’t have an account? '
            }
            <a href="#" onClick={toggleForm} className="font-medium text-green-600 hover:text-green-500">
              {isSignUp ? 'Sign In' : 'Create one'}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

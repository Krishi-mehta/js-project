import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Reuse your existing styles

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [serverType, setServerType] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setServerMessage(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const url = 'http://localhost:8080/api/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        sessionStorage.setItem('justLoggedIn', 'true'); 
        setTimeout(() => {
          navigate('/'); 
        }, 1000);
      }else if (error) {
        const details = error?.details?.[0]?.message || 'Invalid credentials';
        setServerMessage(details);
        setServerType('error');
      } else {
        setServerMessage(message || 'Login failed');
        setServerType('error');
      }
    } catch (err) {
      console.error(err);
      setServerMessage('Something went wrong. Please try again.');
      setServerType('error');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-card-content">
          <h2 className="signup-title">Login</h2>
          <form onSubmit={handleLogin} className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="signup-input"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}

            <button className="signup-button" type="submit">
              Login
            </button>

            <span>
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="link-button">
                Signup
              </Link>
            </span>
          </form>

          {serverMessage && (
            <div
              className={`server-message ${
                serverType === 'success' ? 'success' : 'error'
              }`}
            >
              {serverMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

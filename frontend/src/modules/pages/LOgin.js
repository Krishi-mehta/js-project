import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignupPage.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [serverType, setServerType] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // To toggle password visibility
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

        Swal.fire({
          title: 'Login Successful!',
          text: `Welcome back, ${name}!`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Invalid credentials';
        setServerMessage(details);
        setServerType('error');

        Swal.fire({
          title: 'Login Failed',
          text: details,
          icon: 'error',
        });
      } else {
        setServerMessage(message || 'Login failed');
        setServerType('error');

        Swal.fire({
          title: 'Login Failed',
          text: message || 'Something went wrong.',
          icon: 'error',
        });
      }
    } catch (err) {
      console.error(err);
      setServerMessage('Something went wrong. Please try again.');
      setServerType('error');

      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
      });
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

            <div className="password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="signup-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              >
                <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>} {/* Show error under password */}

            <button className="signup-button" type="submit">
              Login
            </button>

            <span>
              Don't have an account?{' '}
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

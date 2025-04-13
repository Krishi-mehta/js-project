import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [serverType, setServerType] = useState(""); 
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerMessage(null); 
  };

  const handleSignup = async () => {
    if (!validate()) return;

    try {
      const url = `http://localhost:8080/api/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        setServerMessage(message);
        setServerType("success");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "An error occurred";
        setServerMessage(details);
        setServerType("error");
      } else {
        setServerMessage(message || "Signup failed");
        setServerType("error");
      }

      console.log(result);
    } catch (err) {
      console.error(err);
      setServerMessage("Something went wrong. Please try again.");
      setServerType("error");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-card-content">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={(e) => e.preventDefault()} className="signup-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="signup-input"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}

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
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}

            <button className="signup-button" onClick={handleSignup}>
              Sign Up
            </button>

            <span>
              Already have an account?{" "}
              <Link to="/login" className="link-button">
                Login
              </Link>
            </span>
          </form>

          {serverMessage && (
            <div
              className={`server-message ${
                serverType === "success" ? "success" : "error"
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

export default SignUp;

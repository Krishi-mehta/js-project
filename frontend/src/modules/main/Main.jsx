import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../main/main.css";

export default function Main() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({ field: "", message: "" });

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Za-z\s]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && name.trim() === "") {
      setErrorMessage({ field: "name", message: "Name is required" });
      return;
    }

    if (!namePattern.test(name) && !isLogin) {
      setErrorMessage({ field: "name", message: "Please enter a valid name" });
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorMessage({ field: "email", message: "Please enter a valid email address" });
      return;
    }

    if (password.length < 6) {
      setErrorMessage({ field: "password", message: "Password must be at least 6 characters long" });
      return;
    }

    setErrorMessage({ field: "", message: "" });

    if (!isLogin) {
      alert("Account created successfully!");
      setTimeout(() => {
        setIsLogin(true);
        setName("");
        setEmail("");
        setPassword("");
      }, 1000);
    } else {
      alert("Logged in successfully!");
      setTimeout(() => {
        navigate("/");
      }, 500); // Added delay for better navigation
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage({ field: "", message: "" });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "24rem", padding: "1.5rem", background: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "1rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
          {isLogin ? "Login" : "Create Account"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"
                style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "0.5rem" }} />
              {errorMessage.field === "name" && <p style={{ color: "red", fontSize: "0.8rem" }}>{errorMessage.message}</p>}
            </div>
          )}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "0.5rem" }} />
            {errorMessage.field === "email" && <p style={{ color: "red", fontSize: "0.8rem" }}>{errorMessage.message}</p>}
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "0.5rem" }} />
            {errorMessage.field === "password" && <p style={{ color: "red", fontSize: "0.8rem" }}>{errorMessage.message}</p>}
          </div>
          <button type="submit" style={{ width: "100%", padding: "0.75rem", background: "#3b82f6", color: "white", border: "none", borderRadius: "0.5rem", cursor: "pointer", fontSize: "1rem", fontWeight: "600" }}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          {isLogin ? "New here?" : "Already have an account?"}
          <button onClick={toggleMode} style={{ background: "none", border: "none", color: "#3b82f6", textDecoration: "underline", cursor: "pointer" }}>
            {isLogin ? "Create an account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

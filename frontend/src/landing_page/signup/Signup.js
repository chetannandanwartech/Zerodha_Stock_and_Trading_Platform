import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/signup", form);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
  <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
    <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "420px" }}>
      <h4 className="text-center mb-4">Create your account</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  </div>
);

};

export default Signup;

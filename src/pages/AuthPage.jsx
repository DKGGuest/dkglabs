import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import robotImage from "../assets/benefits/benefitImage2.webp";
import "animate.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [resetStep, setResetStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    emailOrMobile: "",
    password: "",
    organisation: "",
    mobile: "",
  });

  const [resetData, setResetData] = useState({
    emailOrMobile: "",
    newPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedCredential = localStorage.getItem("lastCredential");
    if (savedCredential) {
      setFormData((prev) => ({ ...prev, emailOrMobile: savedCredential }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleResetChange = (e) => {
    setResetData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (!isLogin) {
      // Sign-up flow
      if (users[formData.emailOrMobile] || users[formData.mobile]) {
        alert("User already exists. Try logging in.");
        setIsLogin(true);
        setLoading(false);
        return;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password, salt);

      const newUser = {
        name: formData.name,
        email: formData.emailOrMobile.includes("@")
          ? formData.emailOrMobile
          : "",
        mobile: formData.emailOrMobile.includes("@")
          ? formData.mobile
          : formData.emailOrMobile,
        password: hashedPassword,
        organisation: formData.organisation,
      };

      if (newUser.email) users[newUser.email] = newUser;
      if (newUser.mobile) users[newUser.mobile] = newUser;

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("authStatus", "loggedIn");
      localStorage.setItem("lastCredential", formData.emailOrMobile);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      window.dispatchEvent(new Event("storage"));

      alert("Sign-up successful! Redirecting to home…");
      navigate("/Home");

      await notifyCompany(newUser, "New Sign-Up");
    } else {
      // Sign-in flow
      const storedUser = users[formData.emailOrMobile];

      if (!storedUser) {
        alert("User not found. Please sign up first.");
        setLoading(false);
        return;
      }

      const isMatch = await bcrypt.compare(
        formData.password,
        storedUser.password
      );

      if (isMatch) {
        localStorage.setItem("authStatus", "loggedIn");
        localStorage.setItem("lastCredential", formData.emailOrMobile);
        localStorage.setItem("currentUser", JSON.stringify(storedUser));
        window.dispatchEvent(new Event("storage"));

        alert("Sign-in successful! Redirecting to home…");
        navigate("/Home");
      } else {
        alert("Incorrect password. Please try again.");
      }
    }

    setLoading(false);
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let users = JSON.parse(localStorage.getItem("users")) || {};
    const user = users[resetData.emailOrMobile];

    if (!user) {
      alert("No user found with that email or mobile.");
      setLoading(false);
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(resetData.newPassword, salt);

    user.password = hashedNewPassword;
    users[resetData.emailOrMobile] = user;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful!");
    setIsReset(false);
    setResetStep(1);
    setResetData({ emailOrMobile: "", newPassword: "" });

    await notifyCompany(user, "Password Reset");
    setLoading(false);
  };

  // --- Web3Forms notification instead of local backend ---
  const notifyCompany = async (user, subject) => {
    try {
      const formData = new FormData();
      formData.append("access_key", "061dbcd5-2672-4821-a747-820c72257632"); // Replace with your Web3Forms key
      formData.append("subject", subject);
      formData.append("from_name", user.name);
      formData.append("email", user.email || "noemail@example.com");
      formData.append("message", `Organisation: ${user.organisation || "N/A"}\nMobile: ${user.mobile || "N/A"}\n(Note: password is hidden)`);
  
      // Send to Web3Forms
      const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const web3formsData = await web3formsResponse.json();
  
      // Convert to plain object for Google Sheets
      const jsonData = {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        organisation: user.organisation,
        event: subject,
      };
  
      // Send to Google Sheets
      await fetch("", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Avoids CORS errors (Google workaround)
      });
  
      if (web3formsData.success) {
        console.log("Notification sent successfully.");
      } else {
        console.error("Web3Forms Error:", web3formsData);
      }
    } catch (err) {
      console.error("Notification failed:", err);
    }
  };
  
  // ------------------------------------------------------------

  return (
    <div className="flex h-screen">
      <div className="w-full sm:w-1/2 flex justify-center items-center bg-[#0f172a]">
        <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg w-96 text-white animate_animated animatefadeIn animate_duration-350">
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isReset
              ? "Reset Password"
              : isLogin
              ? "Sign In"
              : "Sign Up"}
          </h2>

          {!isReset ? (
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-300">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white"
                      required
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block text-gray-300">
                  {isLogin
                    ? "Email or Mobile"
                    : "Email"}
                </label>
                <input
                  type="text"
                  name="emailOrMobile"
                  value={formData.emailOrMobile}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white"
                  required
                />
              </div>

              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-300">
                    Mobile (Optional)
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white"
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } text-lg`}
                    />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563eb] text-white py-2 rounded-lg hover:bg-[#1d4ed8]"
              >
                {loading
                  ? "Processing..."
                  : isLogin
                  ? "Sign In"
                  : "Sign Up"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetSubmit}>
              {resetStep === 1 ? (
                <>
                  <label className="block text-gray-300 mb-2">
                    Enter your Email or Mobile
                  </label>
                  <input
                    type="text"
                    name="emailOrMobile"
                    value={resetData.emailOrMobile}
                    onChange={handleResetChange}
                    className="w-full p-2 mb-4 border border-gray-600 bg-[#334155] rounded text-white"
                    required
                  />
                  <button
                    type="button"
                    className="w-full bg-blue-500 py-2 rounded"
                    onClick={() => setResetStep(2)}
                  >
                    Next
                  </button>
                </>
              ) : (
                <>
                  <label className="block text-gray-300 mb-2">
                    Enter New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="newPassword"
                      value={resetData.newPassword}
                      onChange={handleResetChange}
                      className="w-full p-2 mb-4 border border-gray-600 bg-[#334155] rounded text-white pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        } text-lg`}
                      />
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 py-2 rounded"
                  >
                    Reset Password
                  </button>
                </>
              )}
            </form>
          )}

          {!isReset && isLogin && (
            <p className="text-center mt-4 text-sm">
              <button
                onClick={() => setIsReset(true)}
                className="text-blue-400 hover:underline"
              >
                Forgot Password?
              </button>
            </p>
          )}

          {isReset && (
            <p className="text-center mt-4 text-sm">
              <button
                onClick={() => {
                  setIsReset(false);
                  setResetStep(1);
                }}
                className="text-blue-400 hover:underline"
              >
                Back to Login
              </button>
            </p>
          )}

          {!isReset && (
            <p className="text-center mt-4 text-gray-400">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:underline ml-1"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          )}

          <p className="text-center mt-4">
            <Link
              to="/Home"
              className="text-gray-400 hover:underline"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </div>

      <div
  className="w-1/2 bg-cover bg-center hidden sm:block animate_animated animatefadeInRight animate_duration-400"
  style={{
    backgroundImage: `url(${robotImage})`,
  }}
/>
    </div>
  );
};

export default AuthPage;
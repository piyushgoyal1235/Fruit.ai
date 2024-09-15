import React, { useState } from 'react';
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      window.location.href = '/home';  // Dummy redirection to homepage
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password === confirmPassword) {
      alert('Registered successfully!');
      setIsLogin(true);  // Switch back to login page after registration
    } else {
      alert('Please check your details. Passwords do not match.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={isLogin ? handleLogin : handleRegister}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <p>
          {isLogin 
            ? 'By signing in you are agreeing to our '
            : 'By registering you are agreeing to our '}
          <span>Term and privacy policy</span>
        </p>

        <div className="tabs">
          <a 
            href="#" 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </a>
          <a 
            href="#" 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </a>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {!isLogin && (
          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
        )}

        {isLogin && (
          <div className="password-options">
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <a href="#" className="forgot-password">Forgot password</a>
          </div>
        )}

        <button type="submit" className="login-btn">
          {isLogin ? 'Login' : 'Register'}
        </button>

        {isLogin && (
          <>
            <p>or connect with</p>
            <div className="social-login">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

            {/* Inline Fingerprint SVG */}
            <div className="fingerprint">
              <svg width="69" height="72" viewBox="0 0 69 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="68" height="62" rx="12.5" fill="#0386D0"/>
                <rect x="0.5" y="0.5" width="68" height="62" rx="12.5" stroke="white"/>
                <g clipPath="url(#clip0_103_87)">
                  <path d="M53.9333 19.438C53.5185 19.438 53.106 19.286 52.776 18.9725C47.7183 14.194 41.2283 11.5625 34.4999 11.5625C27.7716 11.5625 21.2816 14.194 16.2239 18.9749C15.5203 19.6375 14.4341 19.5829 13.7947 18.8585C13.1553 18.1318 13.2058 17.0036 13.907 16.341C19.6018 10.9616 26.9145 8 34.4999 8C42.0853 8 49.3981 10.9616 55.0928 16.341C55.7941 17.0036 55.8445 18.1294 55.2051 18.8585C54.866 19.2432 54.4008 19.438 53.9333 19.438Z" fill="white"/>
                  <path d="M56.8437 31.078C56.2914 31.078 55.746 30.8025 55.416 30.2895C50.6448 22.927 42.8256 18.5308 34.5 18.5308C26.1743 18.5308 18.3552 22.927 13.5839 30.2895C13.0545 31.1088 11.9843 31.3273 11.1983 30.7763C10.41 30.2277 10.1991 29.121 10.7285 28.304C16.1391 19.9558 25.0262 14.9707 34.5 14.9707C43.9737 14.9707 52.8608 19.9558 58.2714 28.3063C58.8008 29.1233 58.5923 30.2301 57.8016 30.7787C57.5083 30.9806 57.176 31.078 56.8437 31.078Z" fill="white"/>
                  <path d="M29.071 65C28.6287 65 28.1864 64.8243 27.8495 64.4728C27.4737 64.0809 18.6668 54.7638 18.6668 45.7934C18.6668 36.4834 25.7687 28.9095 34.4999 28.9095C43.2312 28.9095 50.3331 36.4834 50.3331 45.7934C50.3331 46.7767 49.5631 47.5747 48.6143 47.5747C47.6656 47.5747 46.8956 46.7767 46.8956 45.7934C46.8956 38.4475 41.336 32.472 34.4999 32.472C27.6639 32.472 22.1043 38.4475 22.1043 45.7934C22.1043 53.315 30.2099 61.8793 30.2924 61.9648C30.9616 62.663 30.957 63.7912 30.281 64.4847C29.9464 64.829 29.5087 65 29.071 65Z" fill="white"/>
                  <path d="M39.929 65C35.7948 65 26.2111 56.849 25.283 47.7717C24.9552 44.5631 25.9407 41.2808 27.9161 38.9913C29.6348 37.0011 31.9563 35.8967 34.4519 35.8825H34.5C36.9338 35.8825 39.2346 36.8728 40.9855 38.6755C42.8142 40.5588 43.8202 43.0882 43.8202 45.7934C43.8202 48.6585 42.7834 51.1097 41.5044 53.0113C40.2966 54.8071 38.5616 56.3941 36.9247 57.4142C36.1502 57.911 35.3708 58.2212 34.6546 58.2212C33.6954 58.2212 32.8558 57.7384 32.4231 56.9262C31.9166 55.9922 32.2747 54.7736 33.222 54.2335C34.1875 53.6825 35.7169 52.4955 37.0134 50.7896C38.2067 49.175 39.1801 47.3961 39.1801 45.7934C39.1801 44.0084 38.5205 42.4436 37.4203 41.2921C36.3147 40.132 35.0074 39.5334 33.6494 39.5334H33.6177C32.3671 39.5381 31.1225 40.0493 30.1267 41.0289C28.6612 42.4827 27.9993 44.829 28.2828 47.3547C29.0516 54.3517 37.426 61.229 39.929 61.229C40.8777 61.229 41.6493 62.027 41.6493 63.0104C41.6493 63.9937 40.8777 64.7917 39.929 64.7917V65Z" fill="white"/>
                  <path d="M34.4999 52.0688C33.5854 52.0688 32.7672 51.5716 32.3826 50.7566C32.0161 49.9766 32.2754 49.0432 32.9743 48.4507C33.6732 47.8582 34.6493 47.7834 35.4293 48.15C36.1973 48.5275 36.5722 49.471 36.3478 50.3387C36.106 51.2719 35.3461 52.0688 34.4999 52.0688Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_103_87">
                    <rect width="48" height="48" fill="white" transform="translate(10.5 12)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;

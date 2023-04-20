// import React, { useState } from 'react';

// const AuthForm = ({ title, handleСlick }) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   return (
//     <form className="modal">
//       <label className="modal__label">
//         Email address *
//         <input
//           type="email"
//           className="modal__input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email address"
//         />
//       </label>
//       <label className="modal__label">
//         Password *
//         <input
//           type="password"
//           className="modal__input"
//           value={pass}
//           onChange={(e) => setPass(e.target.value)}
//           placeholder="Password"
//         />
//       </label>
//       <div className="modal__item">
//         <label className="modal__item-label">
//           <input
//             type="checkbox"
//             className="modal__checkbox"
//           />
//           <span className="modal__checkbox-fake"></span>
//           <span className="modal__span">Remember me</span>
//         </label>
//         <a
//           href="#"
//           className="modal__link">
//           Forgot password?
//         </a>
//       </div>
//       <div className="modal__buttons">
//         <button
//           onClick={() => handleСlick(email, pass)}
//           type="submit"
//           className="modal__btn modal__btn-login">
//           Login
//         </button>
//         <button
//           type="submit"
//           className="modal__btn modal__btn-register">
//           Sign Up
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AuthForm;

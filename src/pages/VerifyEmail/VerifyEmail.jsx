import { Link } from "react-router-dom";

const VerifyEmail = () => (
  <div className="text-center my-20">
    <h2 className="text-2xl font-bold">Verify Your Email</h2>
    <p className="mt-4 mb-6">
      We've sent you a verification email. Please check your inbox and verify before logging in.
    </p>
    
    <Link to="/login">
      <button className="bg-[#07a698] hover:bg-[#01998c] text-white px-6 py-2 rounded-md">
        Go for Login
      </button>
    </Link>
  </div>
);

export default VerifyEmail;

import { ChangeEvent, useState } from "react";
import { isMatch } from "../utils/constants";

const Reset = () => {
  const [passwords, setPasswords] = useState({
    newPass: "",
    reNewPass: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChangeInputNew = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords((prev) => ({ ...prev, newPass: e.target.value }));
  };
  const handleChangeInputReNew = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords((prev) => ({ ...prev, reNewPass: e.target.value }));
  };

  const handleSubmit = () => {
    setIsSubmit(true);
    if (
      isMatch(passwords.newPass, passwords.reNewPass) &&
      passwords.newPass &&
      passwords.reNewPass
    ) {
      fetch(
        `https://api.e-butler.com/webservice_latest.php?type=resetPasswordViaEmail&newPassword=${passwords.newPass}&_token=MZeJi71pefcPQlfrZEW6uvq8BQqyJ6S1&UserType=Y21sa1pYST0&eSignUpType=Normal&UserId=8tFjBh8&apiKey=37b617a8-c56c-463a-b8b8-fbc44743e0ae`,
        {
          method: "GET",
          headers: {
            "EButler-API-Key": "1763e2ea-1e49-48c2-a3e9-d196d437bf43",
          },
        }
      );
    } else {
      setTimeout(() => {
        setIsSubmit(false);
      }, 2900);
    }
  };

  return (
    <main>
      <div className="reset-password">
        <h2>Reset Password</h2>
      </div>
      <div className="line">
        <div></div>
      </div>

      <div
        className={`${
          isSubmit && !isMatch(passwords.newPass, passwords.reNewPass)
            ? "show-animation"
            : "do-not-match"
        } not-match`}
      >
        <div className="pass-not-match">
          <p>Passwords do not match</p>
        </div>
      </div>
      <div
        className={`${
          isSubmit && !passwords.newPass && !passwords.reNewPass
            ? "show-animation"
            : "do-not-match"
        } not-match`}
      >
        <div className="pass-not-match">
          <p>Something went wrong with reset password</p>
        </div>
      </div>

      <div className="input-wrapper">
        <div>
          <input
            type="password"
            className="input-reset"
            placeholder="New Password"
            value={passwords.newPass}
            onChange={handleChangeInputNew}
          />
        </div>
        <div>
          <input
            type="password"
            className="input-reset"
            placeholder="Confirm Password"
            value={passwords.reNewPass}
            onChange={handleChangeInputReNew}
          />
        </div>
      </div>
      <div className="submit">
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </main>
  );
};
export default Reset;

import { ChangeEvent, useState } from "react";
import { isMatch } from "../utils/constants";
import base64 from "base-64";

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
  const queryParameters = new URLSearchParams(window.location.search);
  const _token = queryParameters.get("_token");
  const UserType = queryParameters.get("UserType");
  const userTypeDecoded = base64.decode(base64.decode(UserType as string));
  const UserId = queryParameters.get("UserId");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    if (
      isMatch(passwords.newPass, passwords.reNewPass) &&
      passwords.newPass &&
      passwords.reNewPass
    ) {
      fetch(
        `https://api.e-butler.com/webservice_latest.php?type=resetPasswordViaEmail&newPassword=${passwords.newPass}&_token=${_token}&UserType=${userTypeDecoded}&eSignUpType=Normal&UserId=${UserId}&apiKey=33666f4f-caed-42a0-911f-8e1b7629a2ea`,
        {
          method: "GET",
          headers: {
            "EButler-API-Key": "1763e2ea-1e49-48c2-a3e9-d196d437bf43",
            Cookie: "(PHPSESSID = jdv3fargpltinj9bd7nkrssqch)",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.Action) {
            setTimeout(() => {
              setIsSubmit(false);
            }, 2000);
          }
        });
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

      <div
        className={`${
          isSubmit && isMatch(passwords.newPass, passwords.reNewPass)
            ? "show-animation"
            : "do-not-match"
        } not-match`}
      >
        <div className="success">
          <p>Password Reset Successfully</p>
        </div>
      </div>

      <form className="input-wrapper" onSubmit={handleSubmit}>
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
        <div className="submit">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </main>
  );
};
export default Reset;

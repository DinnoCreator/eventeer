import classes from "../signup/SignUpView.module.css";

const SignUpView = () => {
  return (
    <>
      <div className={` mt-5 ${classes.bod}`}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        <div className="container">
          <form className="container">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="labfname" className="form-label">
                First name
              </label>
              <input type="text" className="form-control"
                autoComplete="off" id="labfname" />
            </div>
            <div className="mb-3">
              <label htmlFor="lablname" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control"
                autoComplete="off" id="lablname" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
                <input
                  type="password"
                  className="form-control me-2"
                  autoComplete="off"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                />
                <button className={`btn ${classes.login}`} type="button">
                  <i className="fa-regular fa-eye-slash"></i>
                </button>
              </span>
              <div id="emailHelp" className="form-text">min. 8 characters</div>
            </div>
            <div className={`d-grid gap-2 btn ${classes.login}`}>Signup</div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpView;

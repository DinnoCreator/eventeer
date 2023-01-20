import classes from "../login/LoginView.module.css";

const LoginView = () => {
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
                id="exampleInputEmail1"
                autoComplete="off"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
              <input
                type="password"
                className="form-control me-2"
                id="exampleInputPassword1"
                autoComplete="off"
              />
              <button className={`btn ${classes.login}`} type="button">
              <i className="fa-regular fa-eye-slash"></i>
              </button>
              </span>
              <div id="emailHelp" className="form-text">min. 8 characters</div>
            </div>
            <div className={`d-grid gap-2 btn shadowB ${classes.login}`}>
              Login
            </div>

            <hr/>
            <h4 className="center mb-3">or</h4>
            <div className={`d-grid gap-2 shadowB btn ${classes.signup}`}>
              Signup
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginView;

import classes from "../signup/SignUpView.module.css";

const SignUpView = () => {
  return (
    <>
      <div className={` mt-5 ${classes.bod}`}>
        <h1>Reventlify</h1>
        <h3>Never miss the fun...</h3>
        <div className="container">
          <form className="container">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="labfname" class="form-label">
                First name
              </label>
              <input type="text" class="form-control" id="labfname" />
            </div>
            <div class="mb-3">
              <label for="lablname" class="form-label">
                Last name
              </label>
              <input type="text" class="form-control" id="lablname" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
                <input
                  type="password"
                  class="form-control me-2"
                  id="exampleInputPassword1"
                />
                <button className={`btn ${classes.login}`} type="submit">
                  <i class="fa-regular fa-eye-slash"></i>
                </button>
              </span>
            </div>
            <br />
            <div class={`d-grid gap-2 btn ${classes.login}`}>Signup</div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpView;

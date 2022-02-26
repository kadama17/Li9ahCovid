import React from "react";
import "./login-component.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
//Include Sweetalert
import Swal from "sweetalert2";

//axios for api request
import axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log(this.state);
  }
  //Form Submission
  addFormData(evt) {
    evt.preventDefault();
    const fd = new FormData();
    fd.append("email", this.refs.myEmail.value);
    fd.append("password", this.refs.password.value);

    //call api
    axios.post(process.env.REACT_APP_API_URL + "api/login", fd).then((res) => {
      console.log(res.data);
      //Success alert
      if (res.data.success == false) {
        Swal.fire({
          title: "ECHEC DE CONNEXION",
          text: "Email/mot de passe incorrect",
          type: "warning",
        });
      } else {
        window.localStorage.setItem("user", JSON.stringify(res.data.data));

        Swal.fire({
          title: "Connexion reussi!",
          text: "Vous allez être redirgé vers le dashboard",
          type: "success",
        });
        window.location.replace("/dashboard");
      }

      this.myFormRef.reset();
    });
  }

  render() {
    return (
      <div
        className="maincontainer"
        style={{
          background: `url("images/login-background.jpg")`,
          minHeight: "100vh",
          minWidth: "104%",
          position: "relative",
        }}
      >
        <div class="login-card">
          <div class="login-card-content">
            <div class="header">
              <div class="logo">
                <img className="logo" src="/images/logo.png" />
              </div>
            </div>
            <form ref={(el) => (this.myFormRef = el)}>
              <div className="form">
                <div className="form-field username">
                  <div className="icon">
                    <PersonIcon />
                  </div>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="E-mail"
                    ref="myEmail"
                  />
                </div>
                <div class="form-field password">
                  <div class="icon">
                    <LockOpenIcon />
                  </div>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPass1"
                    aria-describedby="passHelp"
                    placeholder="mot de passe"
                    ref="password"
                  />
                </div>

                <button
                  type="submit"
                  className="button-login"
                  onClick={this.addFormData}
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
          <div class="login-card-footer"></div>
        </div>
      </div>
    );
  }
}

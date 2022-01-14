import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Include Sweetalert
import Swal from 'sweetalert2'

//axios for api request
import axios from 'axios';

export class Login extends React.Component {
  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }
  //Form Submission
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('email', this.refs.myEmail.value);
      fd.append('password', this.refs.password.value);
      
      //call api
      axios.post('http://127.0.0.1:8000/api/login', fd
      ).then(res=>
      {
          console.log(res.data)
      //Success alert
      if(res.data.success === false)
      {

        Swal.fire({
          title: 'ECHEC DE CONNEXION',
          text:   "Email/mot de passe incorrect",
          type: 'warning',
        
      });
      }
      else
      {
        window.sessionStorage.setItem("user", JSON.stringify(res.data.data))

        Swal.fire({
        title: 'Connexion reussi!',
        text:   "Vous allez être redirgé vers le dashboard",
        type: 'success',

        });
        window.location.replace("/dashboard");

    }

    this.myFormRef.reset();
    }
    );
    }
 
  render() {
   
    return (
    
      <div className="maincontainer">
        
        
        <div className="container p-5">
        <h1 className="text-center mb-5">Jassa therichpost</h1>
        <form ref={(el) => this.myFormRef = el}>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">Enter Email</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" ref="myEmail" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput3" class="form-label">Enter Password</label>
          <input type="password" name="password" class="form-control" id="exampleInputPass1" aria-describedby="passHelp" placeholder="Enter Password" ref="password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
      </form>

       
            
      </div>

     
      </div>
      
)
};
}


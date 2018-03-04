<template>
<div class="home">
  <header class='header_box'>
      <homeheader :userstate="emaillogeado"></homeheader>
    </header>
  <div class="login">
    <h3>Ingresar</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signIn">Entrar</button>
    <p>You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
  </div>

  <pre>{{$data}}</pre>
  </div>
</template>

<script>
import homeheader from "./homeheader";
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
      displayName:"",
      emaillogeado:"",
      emailVerified:"",
      photoURL:"",
      isAnonymous:"",
      uid:"",
      providerData:""
    };
  },
  components: {
    homeheader
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    },
     userState: function() {
       var self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("entroooo")
          // User is signed in.
          self.displayName = user.displayName;
          self.emaillogeado = user.email;
          self.emailVerified = user.emailVerified;
          self.photoURL = user.photoURL;
          self.isAnonymous = user.isAnonymous;
          self.uid = user.uid;
          self.providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
    }
  },
  created : function(){
     this.userState();
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
  margin: auto;
}
input {
  margin: 10px 0;
  width: 100%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 100px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}

.home {
  width: 100%;
  height: 100vh;
  /* border: solid 1px grey; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fff;
}

.header_box {
  width: 100%;
  height: 20vh;
  min-height: 150px;
  /* border: 1px solid red; */
}
</style>

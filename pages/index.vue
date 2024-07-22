<template>
  <div class="row gx-0">
    <!-- Banner Content -->
    <div class="col-lg-6">
      <div class="authentication-wrapper">
        <div class="authentication-content">
          <h1>Access to our dashboard, Please login to continue your session!</h1>
          <p>Effortless Invoice Management for Your Business</p>
        </div>
        <div class="authen-img">
          <img src="@/assets/img/saas-login-img.png" alt="" />
        </div>
        <div class="login-bg-img">
          <img
            src="@/assets/img/saas-login-bg-01.png"
            class="img-fluid vector-bg-one"
            alt="Img"
          />
          <img
            src="@/assets/img/saas-login-bg-02.png"
            class="img-fluid vector-bg-two"
            alt="Img"
          />
          <img
            src="@/assets/img/saas-login-bg-03.png"
            class="img-fluid vector-bg-three"
            alt="Img"
          />
          <img
            src="@/assets/img/saas-login-bg-04.png"
            class="img-fluid vector-bg-four"
            alt="Img"
          />
        </div>
      </div>
    </div>
    <!-- /Banner Content -->

    <!-- login Content -->
    <div class="col-lg-6">
      <div class="saas-login-wrapper p-0">
        <div class="login-content">
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="login-userset">
              <div class="login-logo">
                <img src="@/assets/img/saas-login-logo.svg" alt="img" />
              </div>
              <div class="login-card">
                <div class="login-heading">
                  <h3>Sign in to your account</h3>
                  <p>Welcome back, user</p>
                </div>
                <div class="input-block mb-3">
                  <label class="form-label">Email</label>
                  <Field
                    name="email"
                    type="text"
                    value="example@dreamstechnologies.com"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="input-block mb-3">
                  <label class="form-control-label">Password</label>
                  <div class="pass-group">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      value="123456"
                      class="form-control pass-input mt-2"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="input-block mb-0">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-check custom-checkbox mb-3">
                        <input type="checkbox" class="form-check-input" id="cb1" />
                        <label class="custom-control-label mb-0" for="cb1"
                          >Remember me</label
                        >
                      </div>
                    </div>
                    <div class="col-sm-6 text-sm-end mb-3">
                      <router-link class="forgot-link" to="/forgot-password"
                        >Forgot Your Password?</router-link
                      >
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
              <div class="acc-in">
                <p>
                  Don’t have an account?
                  <router-link to="/saas-register">Sign Up</router-link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <!-- /Login Content -->
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      password: null,
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.emailError = "";
      this.passwordError = "";

      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          this.$router.push("/dashboard/"); // Use this.$router instead of router
        } else {
          this.passwordError = "Incorrect password";
        }
      } else {
        this.emailError = "Email is not valid";
      }
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@dreamstechnologies.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    return {
      schema,
    };
  },
};
</script>

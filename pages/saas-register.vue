<template>
  <!-- Sign In -->
  <div class="row gx-0">
    <!-- Banner Content -->
    <div class="col-lg-6">
      <div class="authentication-wrapper">
        <div class="authentication-content">
          <h1>Take control of your invoicing process. Sign up for a account today.</h1>
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
          <Form
            class="register"
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors }"
          >
            <div class="login-userset">
              <div class="login-logo">
                <img src="@/assets/img/saas-login-logo.svg" alt="img" />
              </div>
              <div class="login-card">
                <div class="login-heading">
                  <h3>Create an Account</h3>
                  <p>Sign Up Instantly to get free trail for 14 days!!!</p>
                </div>
                <div class="input-block mb-3">
                  <label class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Enter Your Name" />
                </div>
                <div class="input-block mb-3">
                  <label class="form-label">Email</label>
                  <Field
                    name="email"
                    type="text"
                    class="form-control mt-2"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="input-block mb-3">
                  <label class="form-label">Domain Name </label>
                  <div class="url-text-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Domain Name"
                    />
                    <span class="url-text">kanakku.com</span>
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label class="form-label">Company Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Company name"
                  />
                </div>
                <div class="d-flex saas-pass-box">
                  <div class="input-block mb-3">
                    <label class="form-control-label">Password</label>
                    <div class="pass-group">
                      <Field
                        name="password"
                        type="password"
                        class="form-control pass-input mt-2"
                        :class="{ 'is-invalid': errors.password }"
                      />
                      <div class="invalid-feedback">{{ errors.password }}</div>
                      <div class="emailshow text-danger" id="password"></div>
                    </div>
                  </div>
                  <div class="input-block mb-3">
                    <label class="form-control-label">Confirm Password</label>
                    <div class="pass-group">
                      <Field
                        name="confirmpassword"
                        type="password"
                        class="form-control pass-input mt-2"
                        :class="{ 'is-invalid': errors.confirmpassword }"
                      />
                      <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                      <div class="emailshow text-danger" id="confirmpassword"></div>
                    </div>
                  </div>
                </div>

                <div class="input-block mb-3">
                  <div class="form-check custom-checkbox mb-0">
                    <input type="checkbox" class="form-check-input" id="cb1" />
                    <label class="custom-control-label mb-0" for="cb1"
                      >I agree to Terms of Service and Privacy Policy.</label
                    >
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
              <div class="acc-in">
                <p>
                  Already have an account?
                  <router-link to="/saas-login"> Sign IN</router-link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <!-- /Login Content -->
  </div>
  <!-- /Sign In -->
</template>
<script>
import { Form, Field } from "vee-validate";
import { router } from "@/router";
import * as Yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {};
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });
    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/saas-login");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };
    return {
      schema,
      onSubmit,
    };
  },
};
</script>

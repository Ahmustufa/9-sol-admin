import React, { useEffect } from "react";
import { Box, Grid, Paper, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import Text from "../Typography/Text";
import BlackButton from "../buttons/BlackButton";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "@/redux/slices/loginSlice";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((store) => store.login);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { data, router };
    const response = await dispatch(loginApi(newData));
    const success = response?.meta?.requestStatus;
    // console.log("response", response.meta.requestStatus);
    if (success === "fulfilled") {
      toast.success(`🦄 Successfully Logging you in!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("An unexpected error has occured!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Paper elevation={16} sx={{ padding: "50px" }}>
        <Grid container>
          <Grid item xs={6}>
            <Image
              alt="loginImg"
              height={500}
              // width={400}
              src={require("/public/images/login.png")}
            />
          </Grid>
          <Grid xs={6}>
            <Form component="form">
              {/* <div className="w-full rounded-md p-4 h-20 bg-gradient-to-r from-darkMagenta via-magenta to-magenta">
          <Text className="text-white" fontSize="22px">
            Login
          </Text>
        </div> */}
              <Text
                className="text-magenta text-center font-semibold"
                variant="h5"
              >
                Admin Login
              </Text>
              <Stack spacing={2} p={5}>
                <Input
                  label="Email"
                  control={control}
                  name="email"
                  pattern={`/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`}
                />
                <Input
                  label="Password"
                  control={control}
                  name="password"
                  pattern={`/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/`}
                />
                <Link
                  href="/"
                  className="text-magenta"
                  style={{ marginLeft: "auto" }}
                >
                  Forgot Password?
                </Link>
                {!isLoading ? (
                  <BlackButton
                    onClick={handleSubmit(onSubmit)}
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    Submit
                  </BlackButton>
                ) : (
                  <div className="flex justify-center items-center w-full">
                    <CircularProgress color="secondary" />
                  </div>
                )}
              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Login;

const Form = styled(Box)`
  /* padding: 20px; */
  /* border-radius: 10px;
  border: 1px solid grey; */
`;

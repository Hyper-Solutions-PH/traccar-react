import React, { FC } from 'react';
import {
  Container,
  CssBaseline,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'store';
import { authsActions } from 'store/modules';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: FC = () => {
  const { paper, form, submit } = useStyles();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit((data) => {
    dispatch(authsActions.login(data));
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
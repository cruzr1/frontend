import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateAuthStatus, setEmail } from './user.slice';
import { setToken} from '../../services/token';
import { clearErrorAction } from '../error/error.actions';
import { NameSpace, Action, APIPath, AuthStatus, ErrorMessage} from '../../const';
import { StateType, AppDispatchType, UserType, LoggedUserType, SigninType, LoginType } from '../../types';


export const signinUserAction = createAsyncThunk<void, SigninType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Create}`,
  async (newUser, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.post<UserType>(APIPath.Signin, newUser);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(newUser.email));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.FailedUserSignin}: ${message}`));
    }
  },
);

export const authoriseUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Get}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {email}} = await axiosApi.post<UserType>(APIPath.Verify, {});
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(email));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.UserUnauthorised}: ${message}`));
    }
  },
);

export const loginUserAction = createAsyncThunk<void, LoginType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Login}`,
  async (loginUser, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {accessToken}} = await axiosApi.post<LoggedUserType>(APIPath.Login, loginUser);
      setToken(accessToken);
      dispatch(updateAuthStatus(AuthStatus.Auth));
      dispatch(setEmail(loginUser.email));
    } catch (message) {
      dispatch(updateAuthStatus(AuthStatus.NoAuth));
      dispatch(clearErrorAction(`${ErrorMessage.FailedUserLogin}: ${message}`));
    }
  }
);
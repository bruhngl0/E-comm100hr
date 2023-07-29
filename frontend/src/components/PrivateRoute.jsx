import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;




// Outlet is basically what we want to return, if we are logged in, if there is a user. it will put out whatever screen or page,
//that we are trying to load,
//if we are not logged in, we will use the navigate component to redirect us
// replace is used to replace any past history


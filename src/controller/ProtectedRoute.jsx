
const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    console.log("Please provide token");
    return window.location.href="/login"
  }

  return children;
};

export default ProtectedRoute;

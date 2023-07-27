// Create an HOC named "withAuth" to handle authentication check
// and pass the authenticated state as a prop to the wrapped component.

const withAuth = (WrappedComponent) => {
  // Perform authentication check here.
  const isAuthenticated = checkIfUserIsAuthenticated();

  // Return a new functional component that wraps the original component.
  return (props) => {
    return isAuthenticated ? <WrappedComponent {...props} /> : <LoginPage />;
  };
};

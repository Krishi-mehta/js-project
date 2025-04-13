import { useEffect } from "react";

const RefrshHandler = ({ setIsAuthenticated }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return null;
};

export default RefrshHandler;
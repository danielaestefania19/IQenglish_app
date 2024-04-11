import { useContext, useState, useEffect } from 'react';
import Context from '../../context/advisor.context.jsx';
import getAllAdvisors from "../../views/advisors/getAvisors.jsx"
import { deleteAdvisors, updateAdvisors } from "../../views/advisors/optional.jsx";

export default function useAdvisors() {
    const { jwt } = useContext(Context);
    const [advisors, setAdvisors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (jwt && jwt !== "" && jwt !== "null") {
        getAllAdvisors({ token: jwt })
          .then(data => {
            setAdvisors(data);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
      }
    }, [jwt]);
  
    const deleteAdvisor = useCallback(async (id) => {
      try {
        await deleteAdvisors({ id, token: jwt });
        setAdvisors(prevAdvisors => prevAdvisors.filter(advisor => advisor.id !== id));
      } catch (err) {
        console.error(err);
      }
    }, [jwt]);
  
    const updateAdvisor = useCallback(async ({ id, username, password, userType }) => {
      try {
        const updatedAdvisor = await updateAdvisors({ id, username, password, userType, token: jwt });
        setAdvisors(prevAdvisors => prevAdvisors.map(advisor => advisor.id === id ? updatedAdvisor : advisor));
      } catch (err) {
        console.error(err);
      }
    }, [jwt]);
  
    return { advisors, loading, error, deleteAdvisor, updateAdvisor };
  }
  




  
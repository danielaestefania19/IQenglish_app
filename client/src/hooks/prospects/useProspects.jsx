import { useContext, useState, useEffect, useCallback } from 'react';
import Context from '../../context/advisor.context.jsx';
import getProspects from "../../views/prospects/getProspects.js"
import { deleteProspects, updateProspects } from "../../views/prospects/optional.js";

export default function useProspects() {
    const { jwt } = useContext(Context);
    const [prospects, setProspects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (jwt && jwt !== "" && jwt !== "null") {
        getProspects({ token: jwt })
          .then(data => {
            setProspects(data);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
       }
    }, []);  [jwt] 
  
    const deleteProspect = useCallback(async (id) => {
      try {
        await deleteProspects({ id, token: jwt }); 
        setProspects(prevProspects => prevProspects.filter(prospect => prospect.id !== id));
      } catch (err) {
        console.error(err);
      }
    }, []); [jwt] 
  
    const updateProspect = useCallback(async ({ id, name, lastname, email, phone_number, age, addresses }) => {
      try {
        const updatedProspect = await updateProspects({ id, name, lastname, email, phone_number, age, addresses , token: jw });
        setProspects(prevProspects => prevProspects.map(prospect => prospect.id === id ? updatedProspect : prospect));
      } catch (err) {
        console.error(err);
      }
    }, []); [jwt]
  
    return { prospects, loading, error, deleteProspect, updateProspect };
}

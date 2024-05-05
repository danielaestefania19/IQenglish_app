import React from "react";
import useAdvisors from "../../../hooks/advisors/useAdvisors.jsx";
import { Spinner } from "@material-tailwind/react";
import logo_admin from "../../../assets/admin.jpg"
import logo_advisor from "../../../assets/advisor.jpg"
import Error from "./Error.jsx";

const Advisors = () => {
    const { advisors, loading, error } = useAdvisors();

    console.log(advisors)

    if (loading) return (  
        <div className="flex items-center justify-center h-screen">
            <Spinner className="h-10 w-10" color="blue" />
        </div>
    )
    console.log(error)
    if (error) return <Error message={error.message} />;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {advisors.map((advisor) => (
                <div key={advisor.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ margin: '10px' }}>
                    <div className="flex justify-end px-4 pt-4">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={advisor.user_type === 'admin' ? logo_admin : logo_advisor} alt="Advisor image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{advisor.username}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{advisor.user_type}</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar</a>
                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Editar</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    
}

export default Advisors;

import React from "react";
import { Card } from "flowbite-react";

const Cards = ({ currentProspects }) => {
  return (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '15rem', marginTop: '-1rem' }}>

    {currentProspects.map((prospect, index) => (
      <Card key={index} className="sm:max-w-xs bg-white text-black" style={{ width: '100%', maxWidth: '18rem', marginBottom: '5cm', margin: '1rem' }}>
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Propecto  #{prospect.id}
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Name: {prospect.name}
                    </p>
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Lastname: {prospect.lastname}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Email: {prospect.email}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Phone Number: {prospect.phone_number}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Address: {prospect.addresses ? prospect.addresses : "No disponible"}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Age: {prospect.age}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

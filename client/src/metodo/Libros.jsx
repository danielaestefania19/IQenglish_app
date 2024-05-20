const Libros = () => {
    return (
      <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-8 flex justify-center">
          <div className="flex items-center justify-center space-x-64">
              <div>
                  {/* Ajustamos el tamaño de la imagen y agregamos clases CSS */}
                  <img src="https://gateway.pinata.cloud/ipfs/QmZt6Zzki6RQJYJLig65NNB8kGsSfCkuCgmQfyRNPwMtNU" alt="Descripción de la imagen" className="w-auto h-auto mb-8" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center">
                      <h2 className="text-2xl font-bold text-primary mb-4 text-center">¿Por qué elegirnos?</h2>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">IQ English®</h3>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Principales Ventajas</h4>
                      <ul className="space-y-2">
                          <li className="flex items-center text-gray-600">
                              <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                              </svg>
                  Sistema audiovisual
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  Grupos reducidos
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  100% aprovechamiento
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  Horarios flexibles
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  Certificador TOEFL
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  Garantía del 200%
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 4.707a1 1 0 00-1.414-1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd"></path>
                  </svg>
                  Tarjeta Dorada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    )
}

export default Libros
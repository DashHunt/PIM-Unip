import React from 'react'

import {TbError404} from 'react-icons/tb'

const NotFoundPae = () => {
  return (
    <div className="container text-center mt-5" style={{ fontWeight: "bold", fontFamily: 'Poppins, sans-serif'}}>
        <h2 className="text-dark mt-3">Page not found!</h2>
        <h5 className="text-secondary mt-5 mb-5">A pagina que você está procurando foi removida, deletada ou possivelmente nunca existiu.</h5>
        <div>
            {<TbError404 style={{height: "200px", width: "200px", color: "#FFBF8F"}}></TbError404>}
        </div>
    </div>
  )
}

export default NotFoundPae
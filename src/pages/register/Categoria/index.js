import React from 'react' ;
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';



function RegisterCategory() {
    return (
        <PageDefault>
           <h1>Register Category</h1>

            <label>
            Name Category:
            <input
            type="text"
            />

            <button>
              Register
            </button>
            </label>
           <Link to="/">
             Ir para home
           </Link>
        </PageDefault>

  
    )
  }

export default RegisterCategory;
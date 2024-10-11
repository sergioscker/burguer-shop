import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle` 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
}



button, a {
    cursor: pointer;
}

/* Estilos para scrollbar personalizado em telas maiores */

  ::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #060606;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #FA12E3, #7312FA, #415CA7);
    border-radius: 6px;
    transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(0deg, #FA12E3, #7312FA, #415CA7);
    border-radius: 10px;
}

@media (max-width: 768px) {
    ::-webkit-scrollbar {
        display: none;
    }
}


`;

export default globalStyles;

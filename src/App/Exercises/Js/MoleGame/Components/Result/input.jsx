/* eslint-disable prettier/prettier */
import './styles.css';

export const Result = ({ score = 0, duration = 0 }) => {
    return (
        <span className='mole-result' >
            Gratulacje! Twój wynik to {score} złapane krety w czasie {duration}!
        </span>
    );
};

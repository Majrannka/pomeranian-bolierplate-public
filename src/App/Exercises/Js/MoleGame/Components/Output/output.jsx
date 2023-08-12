/* eslint-disable prettier/prettier */
import './styles.css';

export const Output = ({ value = 'empty' }) => {
    return (
        <span className='output-span' >
            {value}
        </span>
    );
};

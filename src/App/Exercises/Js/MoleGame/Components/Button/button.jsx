/* eslint-disable prettier/prettier */
import './styles.css';

export const Button = ({ value, variant, onClick }) => {
    if (
        !(
            variant === 'primary' ||
            variant === 'secondary' ||
            // eslint-disable-next-line prettier/prettier
            variant === 'tertiary'
        )
    ) {
        console.log('Błędny parametr variant', variant);
    }

    return (
        <button className={`mole-button mole-button-${variant}`} onClick={onClick}>
            {value}
        </button>
    );
};

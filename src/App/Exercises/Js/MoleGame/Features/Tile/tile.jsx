/* eslint-disable prettier/prettier */
import './styles.css';

export const Tile = ({ hasMole, variant, onClick }) => {
    if (
        !(
            variant === 'correct' ||
            variant === 'incorrect' ||
            variant === 'neutral'
        )
    ) {
        console.log('Błędny parametr variant', variant);
    }

    let moleClass = ''
    if (hasMole) moleClass = 'tile-has-mole';

    return (
        <button
            className={`tile tile-${variant} ${moleClass}`}
            onClick={onClick}
        />

    );
};

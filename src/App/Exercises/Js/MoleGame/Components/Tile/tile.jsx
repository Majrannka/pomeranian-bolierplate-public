/* eslint-disable prettier/prettier */
import './styles.css';

export const Tile = ({ hasMole, variant }) => {
    if (
        !(
            variant === 'correct' ||
            variant === 'not-correct' ||
            variant === 'neutral'
        )
    ) {
        console.log('Błędny parametr variant', variant);
    }

    let moleClass = ''
    if (hasMole) moleClass = 'tile-has-mole';

    return (
        <button className={`tile tile-${variant} ${moleClass}`} />

    );
};

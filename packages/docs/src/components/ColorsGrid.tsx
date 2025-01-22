import { colors } from '@ignite-ui/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
    function contrastingTextColor(color: string) {
        if (getContrast(color, '#fff') < 3.5) {
            return '#000';
        }

        return '#fff';
    }

    return Object.entries(colors).map(([key, color]) => {
        return (
            <div
                key={key}
                style={{
                    backgroundColor: color,
                    padding: '2rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color: contrastingTextColor(color),
                    }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        );
    });
}

import '../styles/tokes-grid.css';

interface TokensGridProps {
    tokens: Record<string, string>;
    hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
    function convertRemToPixel(numberRem: string) {
        return Number(numberRem.replace('rem', '')) * 16;
    }

    return (
        <table className='tokens-grid'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    {hasRemValue && <th>Pixels</th>}
                </tr>
            </thead>

            <tbody>
                {Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                            {hasRemValue && (
                                <td>{convertRemToPixel(value)}px</td>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

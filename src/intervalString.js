const intervalString = interval => {
    const timeFractions = [
        { fraction: 60, unit: 's' },
        { fraction: 60, unit: 'm' },
        { fraction: 24, unit: 'hr' },
        { fraction: 7, unit: 'd' }
    ];
    return (
        timeFractions
            .reduce(
                (acc, { fraction }, idx) => {
                    acc.push(parseInt(acc[idx] / fraction, 10));
                    acc[idx] %= fraction;
                    return acc;
                },
                [interval]
            )
            .reduceRight((acc, int, idx) => {
                if (int > 0 && !acc) return `${int}${timeFractions[idx].unit}`;
                return acc;
            }, null) || 'Now'
    );
};

export default intervalString;

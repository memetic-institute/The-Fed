const twitterFeed = (
    totalMoney,
    printRate,
    { name: { first: firstName, last: lastName } }
) => [
    {
        text: 'Thank you Kanye, very cool!',
        time: -1
    },
    {
        text: `I'd like to welcome ${firstName} ${lastName} as the new Fed Chair. I know they'll do absolutely tremendous and make our country proud!`,
        time: 3
    },
    {
        text: `I really wish Fed Chairman ${lastName} would pick up the pace on growing our economy. We need to see BIG LEAGUE money printing FAST!`,
        time: 10
    },
    {
        text:
            "The haters and losers say it's impossible to see the U.S. dollar inflate as bigly as the Venezuelan bolívar. I say THINK BIGGER and PRINT BABY PRINT!",
        time: 30
    },
    {
        text: `I hope ${firstName} over at the Fed understands monetary policy as well as I do—get smart!`,
        time: 60
    },
    {
        text:
            'Stop ruining my perfect economy! The Fed needs to DROP interest rates to get out the spending!',
        time: 90
    },
    {
        text:
            'I once saw a "YouTube" video on "quantitative easing". Seems simple. Don\'t know why we aren\'t doing more of it!',
        time: 120
    },
    {
        text: `The dems will try to tell you we can't "inflate the economy"! With ${firstName} printing so much money at The Fed and giving it to the American people, I think they need to think bigger and MAGA!`,
        time: 150
    },
    {
        text: `${firstName} ${lastName} is doing a great job, I am very proud of them. Their predecessor, Little Jerome, didn’t have the mental capacity needed. He was dumb as a dog and I couldn’t get rid of him fast enough. He was lazy as hell. Now it is a whole new ballgame, great spirit at The Fed! `,
        time: 180
    }
];

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

const atLeast = (a, b) => a >= b;
const lessThan = (a, b) => a < b;

const trumpTwitter = game => {
    const { totalMoney, printRate, player, time } = game;
    const tweetAttributeFilter = (attributes, filter) =>
        attributes
            ? Object.keys(attributes).reduce(
                  (acc, attribute) =>
                      acc && filter(game[attribute], attributes[attribute]),
                  true
              )
            : true;
    return twitterFeed(totalMoney, printRate, player)
        .filter(
            ({
                time: tweetTime,
                atLeast: atLeastAttributes,
                lessThan: lessThanAttributes
            }) =>
                (tweetTime ? atLeast(time, tweetTime) : true) &&
                tweetAttributeFilter(atLeastAttributes, atLeast) &&
                tweetAttributeFilter(lessThanAttributes, lessThan)
        )
        .map(({ text, time: tweetTime }) => ({
            key: text,
            text,
            time: intervalString(time - tweetTime)
        }))
        .reverse();
};

export default trumpTwitter;

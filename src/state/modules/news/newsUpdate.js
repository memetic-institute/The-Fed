import uuid from 'uuid/v3';

const atLeast = (a, b) => a >= b;
const lessThan = (a, b) => a < b;

const newsUpdate = (updates, game) => {
    const { player, time } = game;
    const attributeFilter = (attributes, filter) =>
        attributes
            ? Object.keys(attributes).reduce(
                  (acc, attribute) =>
                      acc && filter(game[attribute], attributes[attribute]),
                  true
              )
            : true;
    const update = updates(player).find(
        ({
            time: updateTime,
            atLeast: atLeastAttributes,
            lessThan: lessThanAttributes
        }) =>
            (updateTime ? time === updateTime : true) &&
            attributeFilter(atLeastAttributes, atLeast) &&
            attributeFilter(lessThanAttributes, lessThan)
    );
    return update
        ? [
              {
                  id: `news-${uuid(
                      update.text,
                      process.env.REACT_APP_UUID_V3_NAMESPACE
                  )}`,
                  text: update.text,
                  time: update.time
              }
          ]
        : [];
};

export default newsUpdate;

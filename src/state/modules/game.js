import uuid from 'uuid/v4';
import { push } from 'connected-react-router';
import ciaUpdate from './news/ciaUpdate';
import trumpTweet from './news/trumpTweet';

import rubberStamp from '../../storeImages/rubber-stamp.jpg';
import accountant from '../../storeImages/accountant.png';
import moneyPress from '../../storeImages/money-press.jpg';
import bribe from '../../storeImages/bribe.jpg';
import mint from '../../storeImages/mint.jpg';
import espionage from '../../storeImages/espionage.jpg';
import blackOp from '../../storeImages/black-op.jpg';
import propaganda from '../../storeImages/propaganda.jpg';
import insuranceFraud from '../../storeImages/insurance-fraud.jpg';
import oligarch from '../../storeImages/oligarch.jpg';
import northKorea from '../../storeImages/north-korea.png';
import cuba from '../../storeImages/cuba.png';
import jpm from '../../storeImages/jpm.png';
import iran from '../../storeImages/iran.gif';
import apple from '../../storeImages/apple.png';

// Action Types
const SET_PLAYER = 'thefed/game/SET_PLAYER';
const START_GAME = 'thefed/game/START_GAME';
const END_GAME = 'thefed/game/END_GAME';
const INCREMENT_TIMER = 'thefed/game/INCREMENT_TIMER';
const PRINT_MONEY = 'thefed/game/PRINT_MONEY';
const PURCHASE_PRODUCT = 'thefed/game/PURCHASE_PRODUCT';

const initialState = {
    active: false,
    player: {},
    money: 0,
    totalMoney: 0,
    printMoneyDenomination: 1,
    printRate: 0,
    time: 0,
    store: [
        {
            name: 'Rubber Stamp',
            image: rubberStamp,
            rate: 2,
            price: 9,
            count: 0,
            reveal: true
        },
        {
            name: 'Accountant',
            image: accountant,
            rate: 7,
            price: 32,
            count: 0,
            reveal: true
        },
        {
            name: 'Money Press',
            image: moneyPress,
            rate: 213,
            price: 920,
            count: 0,
            reveal: true
        },
        {
            name: 'Bribe',
            image: bribe,
            rate: 1190,
            price: 5000,
            count: 0,
            reveal: true
        },
        {
            name: 'Mint',
            image: mint,
            rate: 20975,
            price: 86000,
            count: 0,
            reveal: true
        },
        {
            name: 'Espionage',
            image: espionage,
            rate: 98750,
            price: 395000,
            count: 0,
            reveal: true
        },
        {
            name: 'Black Op',
            image: blackOp,
            rate: 733333,
            price: 2860000,
            count: 0,
            reveal: true
        },
        {
            name: 'Propaganda Campaign',
            image: propaganda,
            rate: 20815789,
            price: 79100000,
            count: 0,
            reveal: false
        },
        {
            name: 'Insurance Fraud',
            image: insuranceFraud,
            rate: 246216216,
            price: 911000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Russian Oligarch',
            image: oligarch,
            rate: 2722222222,
            price: 9800000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Invade North Korea',
            image: northKorea,
            rate: 4714285714,
            price: 16500000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Invade Cuba',
            image: cuba,
            rate: 25588235294,
            price: 87000000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Commercial Bank',
            image: jpm,
            rate: 112727272727,
            price: 372000000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Invade Iran',
            image: iran,
            rate: 137187500000,
            price: 439000000000,
            count: 0,
            reveal: false
        },
        {
            name: 'Tech Company',
            image: apple,
            rate: 321000000000,
            price: 963000000000,
            count: 0,
            reveal: false
        }
    ],
    news: {
        cia: [],
        trump: []
    }
};

// Reducer
const printMoneyReducer = (state, amount) => ({
    ...state,
    money: state.money + amount,
    get totalMoney() {
        return this.money;
    }
});

const newsReducer = (state, key, newsFunc) => ({
    [key]: [...state.news[key], ...newsFunc(state)]
});

export default (state = initialState, action = {}) => {
    const product =
        action.type === PURCHASE_PRODUCT
            ? state.store.find(({ name }) => name === action.productName)
            : null;
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                player: {
                    ...state.player,
                    ...action.player
                }
            };
        case START_GAME:
            return {
                ...state,
                id: uuid(),
                active: true
            };
        case END_GAME:
            return initialState;
        case INCREMENT_TIMER:
            return {
                ...printMoneyReducer(state, state.printRate),
                time: state.time + 1,
                news: {
                    ...state.news,
                    ...newsReducer(state, 'cia', ciaUpdate),
                    ...newsReducer(state, 'trump', trumpTweet)
                }
            };
        case PRINT_MONEY:
            return printMoneyReducer(
                state,
                state.printMoneyDenomination * action.amount
            );
        case PURCHASE_PRODUCT:
            return {
                ...state,
                money: state.money - product.price,
                printRate: state.printRate + product.rate,
                store: state.store.reduce((acc, curProduct, idx) => {
                    const newProduct =
                        curProduct.name === action.productName
                            ? {
                                  ...curProduct,
                                  price: Math.round(curProduct.price * 1.15),
                                  count: curProduct.count + 1
                              }
                            : curProduct;
                    if (idx > 0 && acc[idx - 1].name === action.productName)
                        newProduct.reveal = true;
                    acc.push(newProduct);
                    return acc;
                }, [])
            };
        default:
            return state;
    }
};

// Action Creators
export const setPlayer = player => ({
    type: SET_PLAYER,
    player
});

export const startGame = () => dispatch => {
    dispatch({ type: START_GAME });
    dispatch(push('/'));
};

export const endGame = () => ({ type: END_GAME });

export const incrementTimer = () => ({ type: INCREMENT_TIMER });

export const printMoney = amount => ({
    type: PRINT_MONEY,
    amount
});

export const purchaseProduct = productName => ({
    type: PURCHASE_PRODUCT,
    productName
});

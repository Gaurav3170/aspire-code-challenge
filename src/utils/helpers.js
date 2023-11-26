import FileStorage from '../assets/images/file-storage.svg';
import Flights from '../assets/images/flights.svg';
import megaphone from '../assets/images/megaphone.svg';

export const transactionListData = [
    {
      id: 1,
      transactionIcon: FileStorage,
      transactionName: "Hamleys",
      transactionDate: "20 May 2020",
      transactionAmount: "+ S$ 150",
      transactionStatus: "Refund on debit card",
    },
    {
      id: 2,
      transactionIcon: Flights,
      transactionName: "Travel",
      transactionDate: "21 June 2020",
      transactionAmount: "- S$ 150",
      transactionStatus: "Charged to debit card",
    },
    {
      id: 3,
      transactionIcon: megaphone,
      transactionName: "Broadcast",
      transactionDate: "20 May 2020",
      transactionAmount: "- S$ 150",
      transactionStatus: "Charged to debit card",
    },
    {
      id: 4,
      transactionIcon: FileStorage,
      transactionName: "Cooking",
      transactionDate: "20 May 2020",
      transactionAmount: "- S$ 150",
      transactionStatus: "Charged to debit card",
    },
];

export const initialCardData = [
    {
      id: 1,
      name: 'Mark Henry',
      cardNumber: '401234894812',
      expiryDate: '12/20',
      cvv: '305',
      freeze: false
    },
    {
      id: 2,
      name: 'Gaurav Keswani',
      cardNumber: '401234897212',
      expiryDate: '11/23',
      cvv: '385',
      freeze: false
    },
    {
      id: 3,
      name: 'Kiara Keswani',
      cardNumber: '401234892020',
      expiryDate: '08/24',
      cvv: '807',
      freeze: false
    },
];
import Home from "../assets/images/Home.svg";
import Card from "../assets/images/Card.svg";
import Credit from "../assets/images/Credit.svg";
import Account from "../assets/images/Account.svg";
import Payments from "../assets/images/Payments.svg";

const sidebarIconsList = [
  { route: "/", icon: Home, title: "Home" },
  { route: "/card", icon: Card, title: "Card" },
  { route: "/payments", icon: Payments, title: "Payments" },
  { route: "/credit", icon: Credit, title: "Credit" },
  { route: "/settings", icon: Account, title: "Settings" },
];

export default sidebarIconsList;

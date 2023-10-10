import { useSelector } from "react-redux";


const SubNavbar = () => {

  const moneySelector = state => state.money.amount;
  const money = useSelector(moneySelector);

  const songs = useSelector(state => state.songs.list);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-0">
      <div className="container">
        <span className="navbar-text">
          My Wallet Amount: <span className="badge bg-light text-dark">${money}</span>
        </span>
        <span className="navbar-text">
          My Playlist Count: <span className="badge bg-primary">{songs.length}</span>
        </span>
      </div>
    </nav>
  );
}

export default SubNavbar;
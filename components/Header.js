import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={headerStyles.hero}>
        <h1 className={headerStyles.linear__w}>Services</h1>
      </div>
    </>
  );
};

export default Header;

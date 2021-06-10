import headerStyles from "../styles/Header.module.css";
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>
          <ReactTypingEffect
            text={["Eco"]}
            speed={90}
            eraseSpeed={100}
            eraseDelay={10000000}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          />
        </span>
        Finder
      </h1>
      <p className={headerStyles.description}>
        Looking for top quality green businesses or would like to keep up to
        date with news?
      </p>
      <p className={headerStyles.description}>We've got you.</p>
      <br></br>
    </div>
  );
};

export default Header;

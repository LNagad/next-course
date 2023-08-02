interface Props {
  setToggleMenu: (value: React.SetStateAction<boolean>) => void;
}
const ToggleMenu = ({ setToggleMenu }: Props) => {
   return (
      <>
         <input
            onClick={() => setToggleMenu((val) => !val)}
            hidden
            className="check-icon"
            id="check-icon"
            name="check-icon"
            type="checkbox"
         />
         <label className="icon-menu" htmlFor="check-icon">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
         </label>
      </>
   );
};

export default ToggleMenu;

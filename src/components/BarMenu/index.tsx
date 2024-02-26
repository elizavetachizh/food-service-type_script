import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { SearchBar } from "../SerachBar";

export default function BarMenu() {
  return (
    <Menu>
      <Logo size={"50px"} inverse={"rgb(1, 95, 156)"}>
        <img
          style={{ width: "50px" }}
          src={require("../../assets/mingaz_logo_white.png")}
          alt={"logo"}
        />
      </Logo>
      <SearchBar type={"date"} />
      <div>ФИО</div>
    </Menu>
  );
}

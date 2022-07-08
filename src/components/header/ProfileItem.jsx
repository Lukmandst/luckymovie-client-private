import { NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";
import Image from "next/image";
import dummy from "../../assets/img/dummy.png";
import useRouter from "next/router"

const ProfileItem = () => {
    const router = useRouter();
  return (
    <NavDropdown>
      <Image src={dummy} alt="profileImage" />
      <NavDropdown.Item onClick={() => {
              router.push("/profile");
            }}>
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item 
      onClick={() => {
        router.push("/");
      }}
      >
        Dasboard
      </NavDropdown.Item>    
      <NavDropdown.Item 
      onClick={() => {
        router.push("/");
      }}
      >
        Log Out
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default ProfileItem;

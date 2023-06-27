import { useNavigate } from "react-router-dom";
import { ActionIcon, Flex } from "@mantine/core";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as UsersIcon } from "../icons/users.svg";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        sx={{
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <ActionIcon
          radius="50%"
          sx={{
            background: "#F0F2FE",
            padding: "10px",
            ":hover": { background: "#d4d3ff" },
            height: "60px",
            width: "60px"
          }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </ActionIcon>
        <ActionIcon
          size={"xl"}
          radius="50%"
          sx={{
            background: "#F0F2FE",
            padding: "10px",
            ":hover": { background: "#d4d3ff" },
            height: "60px",
            width: "60px"
          }}
          onClick={() => navigate("users")}
        >
          <UsersIcon />
        </ActionIcon>
      </Flex>
    </>
  );
};

export default Sidebar;

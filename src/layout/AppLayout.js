import { Stack } from "@mantine/core";
import MainContent from "./MainContent";
import Sidebar from "./sidebar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "row"
        }}
      >
        <Sidebar />
        <MainContent>{children}</MainContent>
      </Stack>
    </>
  );
};

export default AppLayout;

import {
  Tabs,
  createStyles,
  Group,
  Container,
  Text,
  Select,
  Image,
  Button
} from "@mantine/core";

import filterIcon from "../../icons/filter-icon.svg";
import dropdownIcon from "../../icons/dropdown.svg";
import addIcon from "../../icons/add-icon.svg";

const UsersHeaderSection = () => {
  const { classes } = useStyles();
  return (
    <Group sx={{ justifyContent: "space-between", width: "100%" }}>
      <Container sx={{ alignSelf: "flex-start", margin: "0" }}>
        <Tabs
          defaultValue="1"
          sx={{ width: "100%" }}
          classNames={{
            root: classes.root,
            tab: classes.tab,
            tabsList: classes.tabsList,
            panel: classes.panel
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="1">Users</Tabs.Tab>
            <Tabs.Tab value="2">Profiles</Tabs.Tab>
            <Tabs.Tab value="3">Roles</Tabs.Tab>
            <Tabs.Tab value="4">Teams</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>
      <Group sx={{ marginRight: "50px", gap: "0" }}>
        <Text
          weight="500"
          sx={{
            fontSize: "12px",
            margin: 0
          }}
        >
          102 Users
        </Text>
        <Container sx={{ position: "relative" }}>
          <Select
            classNames={{
              rightSection: classes.rightSection,
              dropdown: classes.dropdown,
              icon: classes.icon
            }}
            placeholder="All"
            data={[
              { value: "all", label: "All" },
              { value: "owners", label: "Owners" },
              { value: "others", label: "Others" }
            ]}
            defaultValue={"all"}
            icon={
              <>
                <Image src={filterIcon} height="14px" width="14px" />
              </>
            }
            sx={{
              width: "85px",

              input: {
                padding: "0",
                paddingLeft: "23px !important",
                fontSize: "11px"
              }
            }}
          />
          <Image
            src={dropdownIcon}
            height="14px"
            width="14px"
            sx={{ position: "absolute", right: "23px", top: "12px" }}
          />
        </Container>
        <Button
          sx={{
            width: "85px",
            height: "36px",
            padding: 0,
            fontSize: "12px",
            fontWeight: "500",
            backgroundColor: "#1C18DF"
          }}
        >
          <Image src={addIcon} height="18x" width="18px" />
          Add User
        </Button>
      </Group>
    </Group>
  );
};

const useStyles = createStyles((theme) => ({
  root: { marginTop: "5px" },
  tabsList: { padding: "0" },
  tab: {
    borderColor: "#f8fafd",
    color: "#1A06DF",
    "&[data-active], &[data-active]:hover, &[data-active]:active": {
      borderColor: "#1A06DF"
    },
    width: "25%"
  },
  panel: { padding: "20px 0", paddingTop: "20px !important" },
  rightSection: {
    display: "none"
  },

  icon: { width: "fit-content", marginLeft: "8px" }
}));

export default UsersHeaderSection;

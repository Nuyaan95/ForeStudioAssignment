import { Container, Stack, TextInput, Image, Loader } from "@mantine/core";

import UsersHeaderSection from "./HeaderSection";
import searchIcon from "../../icons/search-icon.svg";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";

const Users = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingContacts, setLoadingContacts] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        console.log("filtered - fetched contacts", jsonData);
        setContacts(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingContacts(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value?.toLowerCase());
  };

  return (
    <>
      {loadingContacts ? (
        <Loader sx={{ margin: "auto", height: "100vh" }} />
      ) : (
        <Stack sx={{ padding: "35px" }}>
          <UsersHeaderSection />
          <Container sx={{ margin: 0, background: "#ffffff", padding: "20px" }}>
            <TextInput
              icon={<Image maw="1.4rem" src={searchIcon} />}
              size="md"
              placeholder="Search users"
              sx={{ width: "50%" }}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </Container>
          <UsersTable contacts={contacts} searchQuery={searchQuery} />
        </Stack>
      )}
    </>
  );
};

export default Users;

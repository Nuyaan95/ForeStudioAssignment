import { Table, Text, Flex } from "@mantine/core";

const UsersTable = ({ contacts, searchQuery }) => {
  const generateInitials = (name) => {
    const partedName = name.split(" ");
    const firstInitial = partedName[0] ? partedName[0][0].toUpperCase() : "";
    const lastInitial = partedName[1] ? partedName[1][0].toUpperCase() : "";

    return `${firstInitial}${lastInitial}`;
  };

  const rows = contacts
    .filter(
      (contact) =>
        !searchQuery ||
        contact.name.toLowerCase().includes(searchQuery) ||
        contact.email.toLowerCase().includes(searchQuery)
    )
    .map((contact) => (
      <tr key={contact.id}>
        <td>
          <Flex
            sx={{
              padding: "0",
              maxWidth: "40px",
              width: "40px",
              height: "40px",
              background: "#F0F2FE",
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              weight="600"
              sx={{
                fontSize: "14px",
                margin: 0,
                color: "#1900E0"
              }}
            >
              {generateInitials(contact.name)}
            </Text>
          </Flex>
        </td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{`${contact.address?.suite}, ${contact.address?.street}, ${contact.address?.city}`}</td>
        <td>{contact.company?.name}</td>
      </tr>
    ));

  return (
    <Table
      id="contacts"
      highlightOnHover
      style={{
        thead: {
          background: "#F8FAFD"
        },
        td: {
          border: "none"
        }
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th />
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default UsersTable;

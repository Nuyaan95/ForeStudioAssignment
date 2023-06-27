import { Stack, Text, Image } from "@mantine/core";

const HomeCard = ({ icon, title, description, handleClick }) => {
  return (
    <>
      <Stack
        sx={{
          justifyContent: "flex-start",
          padding: "25px",
          width: "386px",
          height: "160px",
          borderRadius: "5px",
          background: "#ffffff",
          border: "1px solid #F1EDED",
          gap: "8px",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          }
        }}
        onClick={handleClick}
      >
        <Image
          src={icon}
          height="62px"
          width="62px"
          sx={{ marginLeft: "-12px" }}
        />
        <Text
          weight="600"
          sx={{
            fontSize: "20px",
            margin: 0
          }}
        >
          {title}
        </Text>
        <Text
          weight="400"
          sx={{
            fontSize: "14px",
            color: "#657384"
          }}
        >
          {description}
        </Text>
      </Stack>
    </>
  );
};

export default HomeCard;

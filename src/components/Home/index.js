import { useNavigate } from "react-router-dom";
import { SimpleGrid, Stack, Text } from "@mantine/core";

import { ReactComponent as ProfileLogo } from "../../icons/profile-logo.svg";
import insightIcon from "../../icons/insight.svg";
import prospectIcon from "../../icons/prospects.svg";
import learnIcon from "../../icons/learn.svg";
import calenderIcon from "../../icons/calender.svg";
import contentIcon from "../../icons/content.svg";
import opportunitiesIcon from "../../icons/opportunities.svg";

import HomeCard from "./HomeCard";

const cards = [
  {
    icon: insightIcon,
    title: "Create an Insight",
    description: "Generate a customer specific, benchmark reports."
  },
  {
    icon: prospectIcon,
    title: "Prospecting",
    description: "Search 720M professionals across 35M companies, worldwide."
  },
  {
    icon: learnIcon,
    title: "Learn",
    description: "Short, on-demand bite-sized lessons."
  },
  {
    icon: calenderIcon,
    title: "Activities",
    description: "Create, assign, and manage activities."
  },
  {
    icon: contentIcon,
    title: "Content AI",
    description: "General and summarize content with poewr of AI."
  },
  {
    icon: opportunitiesIcon,
    title: "Opportunities",
    description: "View your most recent opportunities."
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          padding: "3rem",
          height: "100%",
          background: "#F8FAFD"
        }}
      >
        <ProfileLogo />
        <Text
          weight="400"
          sx={{
            fontSize: "16px"
          }}
        >
          Welcome, oz!
        </Text>
        <Text
          weight="600"
          sx={{
            fontSize: "20px"
          }}
        >
          What would you like to do today?
        </Text>

        <SimpleGrid cols={2}>
          {cards.map((card) => (
            <HomeCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              key={card.title}
              handleClick={() => navigate("users")}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Home;

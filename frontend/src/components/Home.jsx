import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./Home.css";
import { Link } from "react-router-dom";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from "../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems={"center"}
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing={"8"}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={"2xl"} />
            <Text
              fontFamily={"cursive"}
              textAlign={["center", "left"]}
              children="Find Valuable content at reasonable price"
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={
              "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png"
            }
            objectFit={"contain"}
          />
        </Stack>
      </div>
      <Box padding={"8"} bg="blackAlpha.800">
        <Heading
          textAlign={"center"}
          fontFamily={"body"}
          color={"yellow.400"}
          children="OUR BRANDS"
        />
        <HStack
          className="brandBanner"
          justifyContent={"space-evenly"}
          marginTop={"4"}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;

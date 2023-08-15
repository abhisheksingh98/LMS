import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize={60} objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW={"200px"}
        size={"sm"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform={"uppercase"}
          children={"Creator"}
        />
        <Text
          fontFamily={"body"}
          textTransform={"uppercase"}
          children={creator}
        />
      </HStack>
      <Heading
        textTransform={"uppercase"}
        textAlign={"center"}
        size={"xs"}
        children={`Lectures - ${lectureCount}`}
      />
      <Heading
        textTransform={"uppercase"}
        size={"xs"}
        children={`Views - ${views}`}
      />
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          onClick={() => addToPlaylistHandler(id)}
          variant={"ghost"}
          colorScheme="yellow"
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Data Structures",
    "Web Development",
    "Artificial Intelligence",
    "Data Structures",
  ];

  const addToPlaylistHandler = () => {
    console.log("Added to playlist");
  };

  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
      <Heading children="All Courses" m={"8"} />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={"auto"}
        paddingY={"8"}
        // css={{
        //   "&::-webkit-scrollbar": {
        //     display: "none",
        //   },
        // }}
      >
        {categories.map((item, i) => (
          <Button key={i} onClick={() => setCategory(item)} minW={"60"}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title={"Sample"}
          lectureCount={"2"}
          description={"Sample"}
          views={23}
          creator={"Sample"}
          imageSrc={
            "https://cdn.pixabay.com/photo/2018/03/08/05/07/training-3207841_640.jpg"
          }
          id="Sample"
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;

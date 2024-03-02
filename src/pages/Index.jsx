import { Box, Heading, Text, Button, Image, SimpleGrid, Flex, Icon, Link, Container, AspectRatio } from "@chakra-ui/react";
import { FaPlay, FaStar, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  // Example movie data
  const movie = {
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    rating: "8.8",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    posterUrl: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmNlcHRpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwwfHx8fDE3MDkzODgxMTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    streamingServices: [
      { name: "Netflix", url: "https://www.netflix.com" },
      { name: "Amazon Prime", url: "https://www.primevideo.com" },
      { name: "Hulu", url: "https://www.hulu.com" },
    ],
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flexShrink={0}>
          <Image src={movie.posterUrl} alt={`${movie.title} Poster`} borderRadius="lg" width={{ base: "100%", md: "300px" }} />
        </Box>
        <Box flexGrow={1}>
          <Heading as="h1" mb={2}>
            {movie.title}
          </Heading>
          <Flex alignItems="center" mb={4}>
            <Icon as={FaStar} color="yellow.400" />
            <Text ml={2} fontSize="lg" fontWeight="semibold">
              {movie.rating}
            </Text>
          </Flex>
          <Text fontSize="md" mb={4}>
            {movie.description}
          </Text>
          <Heading as="h3" size="md" mb={2}>
            Watch Trailer
          </Heading>
          <AspectRatio ratio={16 / 9} mb={4}>
            <iframe title="Trailer" src={movie.trailerUrl} allowFullScreen />
          </AspectRatio>
          <Heading as="h3" size="md" mb={2}>
            Stream Now
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {movie.streamingServices.map((service) => (
              <Link href={service.url} isExternal key={service.name}>
                <Button leftIcon={<FaExternalLinkAlt />} colorScheme="teal" variant="outline" width="full">
                  {service.name}
                </Button>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;

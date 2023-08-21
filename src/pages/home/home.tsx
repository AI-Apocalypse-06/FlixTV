import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Card, Flex, LoadingOverlay, ScrollArea, SegmentedControl, Space, Title } from '@mantine/core';

import { Movie } from 'modules/home/hooks';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { movies, isLoading } = Movie.useList();

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <Box>
      <Title>Home Page</Title>
      <SegmentedControl color="blue" data={['student', 'teacher']} />
      <Space h={10} />
      <ScrollArea h={500}>
        <Flex direction="column" h="100%" gap={10}>
          {movies.map(movie => (
            <Card key={movie.slug}>
              <Avatar src={movie.photo} />
              <Title>{movie.title}</Title>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
      <Button to="/dashboard" component={Link} loading={false} loaderPosition="center" size="xs">
        Go To Dashboard
      </Button>
    </Box>
  );
};

export default Home;

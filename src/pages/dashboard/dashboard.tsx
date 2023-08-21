import { Badge, Box, Button, Title } from '@mantine/core'

import { useAuth } from 'modules/auth/context/auth'

const Dashboard = () => {
  const { user, methods } = useAuth()

  return (
    <Box>
      <Title>Dashboard Page</Title>
      {user && <Badge>{user?.firstName}</Badge>}
      <br />
      <Button onClick={methods.logout}>Logout</Button>
    </Box>
  )
}

export default Dashboard

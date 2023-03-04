import { Spinner, Center } from 'native-base'

export function Loading() {
  return (
    <Center flex={1} bg="background">
      <Spinner color="primary.700" />
    </Center>
  )
}

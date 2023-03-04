import { Box, FlatList, Heading, HStack, Text, VStack } from "native-base";
import { UserPlus, Calendar, PlusCircle, ChevronRight } from 'lucide-react-native';
import { TouchableOpacity } from "react-native";

const transactions = [
  {
    id: 1,
    title: 'Salário',
    description: 'Recebido do trabalho',
    amount: 1000,
    type: 'income',
    category: 'work',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Spotify',
    description: 'Pagamento mensal',
    amount: 20,
    type: 'outcome',
    category: 'entertainment',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Amazon',
    description: 'Compra de um livro',
    amount: 50,
    type: 'outcome',
    category: 'shopping',
    date: new Date(),
  },
  {
    id: 4,
    title: 'Amazon',
    description: 'Compra de um livro',
    amount: 50,
    type: 'outcome',
    category: 'shopping',
    date: new Date(),
  }
];

export function Home() {
  return (
    <Box flex={1} paddingX={4} pt={16} bg="background">
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>
          <Text 
            color="text"
            fontFamily="Poppins_400Regular"
          >
            Bom dia,
          </Text>

          <Heading
            color="text"
            fontSize={20}
            fontFamily="Poppins_600SemiBold"
          >
            Gustavo Souza
          </Heading>
        </VStack>

        <TouchableOpacity>
          <UserPlus size={24} color="#fff" />
        </TouchableOpacity>
      </HStack>

      <VStack
        w="100%"
        h="180px"
        mt={4}
        bg="primary.900"
        rounded={16}
      >
        <Box padding={4}>
          <Text
            color="primary.700"
            fontFamily="Poppins_400Regular"
          >
            Saldo disponível
          </Text>

          <Text
            color="text"
            fontSize={32}
            fontFamily="Poppins_600SemiBold"
            mt={2}
          >
            1.108,00
          </Text>
        </Box>

        <HStack
          bg="#4471E8"
          h="75px"
          w="100%"
          rounded={16}
          alignItems="center"
          justifyContent="space-around"
          px={10}
        >
          <TouchableOpacity>
            <VStack alignItems="center">
              <Calendar size={24} color="#fff" />
              <Text
                color="#FEFCFD"
                fontFamily="Poppins_600SemiBold"
                fontSize={14}
                mt={1}
              >
                Relatório
              </Text>
            </VStack>
          </TouchableOpacity>

          <Box w="1px" h="35px" bg="#CDD9F8" />

          <TouchableOpacity>
            <VStack alignItems="center">
              <PlusCircle size={24} color="#fff" />
              <Text
                color="#FEFCFD"
                fontFamily="Poppins_600SemiBold"
                fontSize={14}
                mt={1}
              >
                Transação
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
      </VStack>

      <VStack mt={10} flex={1}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading
            color="text"
            fontSize={20}
            fontFamily="Poppins_600SemiBold"
          >
            Transações
          </Heading>

          <TouchableOpacity>
            <ChevronRight size={24} color="#fff" />
          </TouchableOpacity>
        </HStack>

        <FlatList
          mt={4}
          data={transactions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <HStack
              bg="primary.900"
              w="100%"
              rounded={16}
              padding={5}
              mb={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack>
                <Text
                  color="text"
                  fontSize={18}
                  fontFamily="Poppins_500Medium"
                >
                  {item.title}
                </Text>

                <Text
                  color="primary.700"
                  fontFamily="Poppins_400Regular"
                >
                  {item.description}
                </Text>
              </VStack>

              <VStack alignItems="flex-end">
                <Text
                  color={item.type === 'income' ? 'deposit' : '"withdraw"'}
                  fontSize={18}
                  fontFamily="Poppins_500Medium"
                >
                  {item.type === 'outcome' &&'-'}R${item.amount}
                </Text>

                <Text
                  color="primary.700"
                  fontFamily="Poppins_400Regular"
                >
                  Jun 14
                </Text>
              </VStack>
            </HStack>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </VStack>
    </Box>
  )
}
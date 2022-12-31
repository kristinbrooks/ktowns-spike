// import { NativeNavigation } from 'app/navigation/native'
// import { Provider } from 'app/provider'
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    // <Provider>
    //   <NativeNavigation />
    // </Provider>
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  )
}

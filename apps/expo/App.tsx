import { NativeNavigation } from 'app/navigation/native'
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      {/*<NativeNavigation />*/}
    </NativeBaseProvider>
  );
}
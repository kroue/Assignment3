import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from './pages/login';
import Register from './pages/register';
import ResetPass from './pages/resetpass';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1, height: '100%'}}>
            <Login />
          </SafeAreaView>
        </SafeAreaProvider>
    </PaperProvider>
  );
}

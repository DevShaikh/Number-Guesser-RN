import { loadAsync } from 'expo-font'

const fetchFonts = async () => {
  return await loadAsync({
    GemunuLibre: require('../assets/Fonts/GemunuLibre-Regular.ttf'),
    'GemunuLibre-Bold': require('../assets/Fonts/GemunuLibre-Bold.ttf'),
  })
}
export default fetchFonts

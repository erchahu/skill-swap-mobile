import { memo } from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>
        你好
      </Text>
    </SafeAreaView>
  )
}

export default memo(LoginScreen)
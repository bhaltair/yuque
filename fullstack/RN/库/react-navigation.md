# react-navigation

# react-navigation


[https://reactnavigation.org/docs/hello-react-navigation/](https://reactnavigation.org/docs/hello-react-navigation/)



中文文档



[https://juejin.cn/post/6850418114379644942](https://juejin.cn/post/6850418114379644942)



# 基本


```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
```

## Header buttons
## Configuring the header bar
## Passing parameters to routes
## Moving between screens
## hello-react-navigation
## Glossary


Navigator

Screen

Route

Navigation Prop

Route Prop

Header

# Guides
Tab navigation

Drawer navigation

Authentication

Safe areas

Hiding tab bar in specific screens

Different status bar configuration

Custom Android back button behavior

Preventing going back

Navigating without the navigation prop

Screen tracking for analytics

Themes



# API Reference
### NavigationContainer
> The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
>

管理应用状态和链接顶级导航器到应用程序环境

```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{/* ... */}</Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Stack.Screen
### Navigation prop
### Navigation events
```javascript
function Profile({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
    });

    return unsubscribe;
  }, [navigation]);

  return <ProfileContent />;
}

// 2

<Tab.Screen
  name="Chat"
  component={Chat}
  listeners={{
    tabPress: e => {
      // Prevent default action
      e.preventDefault();
    },
  }}
/>
```

### Navigators
**createBottomTabNavigator**

**createDrawerNavigator**

**createNativeStackNavigator**

**createStackNavigator**

```javascript
		const Stack = createStackNavigator<RootStackParamList>();

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
```

### Hooks


useNavigation

useScrollToTop



```javascript
import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
```



### Actions
# example
[https://github.com/react-navigation/react-navigation/tree/main/example](https://github.com/react-navigation/react-navigation/tree/main/example)



> 更新: 2021-05-20 11:52:56  
> 原文: <https://www.yuque.com/u3641/dxlfpu/ngf1u6>
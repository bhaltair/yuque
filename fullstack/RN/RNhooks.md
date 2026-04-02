# RN hooks

# cheatsheet
[https://react-hooks-cheatsheet.com/](https://react-hooks-cheatsheet.com/)

# useAppStateListener
```typescript
import { useCallback, useEffect, useState } from 'react'
import { AppState, AppStateStatus } from 'react-native'

export const useAppStateListener = (onForeground?: () => void, onBackground?: () => void) => {
  // 当前状态
  const [appState, setAppState] = useState(AppState.currentState)
  
  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      // 在前台
      if (appState === 'background' && nextAppState === 'active' && onForeground) {
        onForeground()
      } else if (
        // 在后台
        appState.match(/active|inactive/) &&
        nextAppState === 'background' &&
        onBackground
      ) {
        onBackground()
      }
      setAppState(nextAppState)
    },
    [onBackground, onForeground, appState],
  )
  
  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    
    return () => {
      // Following if-else logic is to support RN >= 0.65 and RN < 0.65 versions.
      // https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#:~:text=EventEmitter%23removeSubscription%20is%20now%20deprecated.%20(cb6cbd12f8%20by%20%40yungsters)
      if (subscription?.remove) {
        subscription.remove()
      } else {
        AppState.removeEventListener('change', handleAppStateChange)
      }
    }
  }, [handleAppStateChange])
}

```

# useIsMountedRef
```typescript
import { useEffect, useRef } from 'react';

/**
 * Returns mount status of component. This hook can be used for purpose of avoiding any
 * setState calls (within async operation) after component gets unmounted.
 *
 * @example
 * ```
 * const isMounted = useIsMountedRef();
 * const [dummyValue, setDummyValue] = useState(false);
 *
 * useEffect(() => {
 *  someAsyncOperation().then(() => {
 *    if (isMounted.current) setDummyValue(true);
 *  })
 * })
 * ```
 *
 * @returns isMounted {Object} Mount status ref for the component.
 */
export const useIsMountedRef = () => {
  // Initial value has been set to true, since this hook exist only for sole purpose of
  // avoiding any setState calls (within async operation) after component gets unmounted.
  // Basically we don't need to know about state change from component being initialized -> mounted.
  // We only need a state change from initialized or mounted state -> unmounted state.
  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  return isMounted;
};

```



> 更新: 2023-03-24 14:21:00  
> 原文: <https://www.yuque.com/u3641/dxlfpu/cpmq8g>
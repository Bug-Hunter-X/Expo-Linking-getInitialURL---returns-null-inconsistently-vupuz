The provided solution uses `Linking.addEventListener` to listen for URL changes and handles the initial URL asynchronously.  This ensures that even if `getInitialURL()` returns null immediately, the deep link will be captured once available.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = async ({ url }) => {
      setInitialUrl(url);
    };

    Linking.addEventListener('url', handleUrlChange);

    const initialUrl = await Linking.getInitialURL();
    setInitialUrl(initialUrl);

    return () => {
      Linking.removeEventListener('url', handleUrlChange);
    };
  }, []);

  if (initialUrl) {
    console.log('Initial URL:', initialUrl);
  }

  return (
    <View>
      {/* Your app content here */}
    </View>
  );
}
```
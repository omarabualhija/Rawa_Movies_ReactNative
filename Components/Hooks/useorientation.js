import React from 'react';
import {Dimensions} from 'react-native';
export default function useorientation() {
  const [screenInfoSize, setScreenInfo] = useState();

  const onratechange = () => {
    setSize(() => Dimensions.get('window'));
  };

  useEffect(() => {
    dimentions.addEventListener('change', onratechange);
  }, []);

  return {};
}

import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/RootStackProps';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useCustomNavigation = (screenName: keyof RootStackParamList) => {
  type Props = NativeStackNavigationProp<RootStackParamList, typeof screenName>;
  const navigation = useNavigation<Props>();
  return navigation;
};

export default useCustomNavigation;

import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  const previousToken = await AsyncStorage.getItem('pushtoken');
  console.log('previous token', previousToken);
  if (previousToken !== null) {
    return;
  } 

  const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

  if (status !== 'granted') {
    return;
  }
//  Notifications.getExpoPushTokenAsync()
  const token = await Notifications.getExpoPushTokenAsync();
  //post to your own api endpoint here /api/tokens
  await axios.post(PUSH_ENDPOINT, { token: { token } });
  AsyncStorage.setItem('pushtoken', token);
};

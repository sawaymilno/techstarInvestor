componentDidMount() {
  registerForNotifications();
  Notifications.addListener((notification) => {
    const { data: { text }, origin } = notification;
    if (origin === 'received' && text) {
      Alert.alert(
        'New Push Notification',
        text,
        [{ text: 'Ok.' }]
      );
    }
  });
}
import { ScrollView } from 'react-native';
import HeaderBar from '../../components/common/HeaderBar';

export default function GiftAll({ navigation }) {
  const handlePressArrow = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <HeaderBar
        showBackArrow={true}
        onPressArrow={handlePressArrow}
        title={null}
        showLogout={false}
        showBell={false}
        showThreeDots={false}
        onPressRight={null}
      />
    </ScrollView>
  );
}

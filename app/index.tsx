import {Text, View, StyleSheet} from 'react-native';
import News from '../components/News';
import App from '../components/Scrollview';
import Switch from '../components/Switch'
import ToggleComponent from '../components/Toggle';


export default function Index() {
    return (
        <>
            <News />
            <App />
            <Switch />
            <ToggleComponent />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
});
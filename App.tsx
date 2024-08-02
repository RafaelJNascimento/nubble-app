import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import {
    View,
    SafeAreaView
} from 'react-native';
import { theme } from './src/theme/theme';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 24 }}>
                    <Text
                        italic
                        bold
                        preset="headingLarge">
                        Coffstack
                    </Text>
                    <Button
                        title="Primary"
                        marginBottom="s12" />
                    <Button
                        title="Outline"
                        preset="outline"
                        marginBottom="s12" />
                    <Button
                        title="Primary"
                        disabled
                        marginBottom="s12" />
                    <Button
                        title="Outline"
                        preset="outline"
                        disabled
                        marginBottom="s12" />
                    <Button
                        loading
                        title='Loading'
                        marginBottom="s12"
                    />
                    <Button
                        loading
                        title="Outline"
                        preset="outline"
                        marginBottom="s12" />
                </View>
            </SafeAreaView>
        </ThemeProvider>
    );
}


export default App;

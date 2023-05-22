import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function MySlider() {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderValueChange = (value) => {
        setSliderValue(value);
    };

    return (
        <View>
            <Text>Slider Value: {sliderValue}</Text>
            <Slider
                value={sliderValue}
                onValueChange={handleSliderValueChange}
                minimumValue={0}
                maximumValue={100}
                step={1}
            />
        </View>
    );
}

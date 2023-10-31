import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
    {
        name: 'Matemática',
        percent: 67,
        color: '#ff5454',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Humanas',
        percent: 32,
        color: '#FF8C00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Linguagens',
        percent: 20,
        color: '#3AA2CE',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Natureza',
        percent: 25,
        color: '#9370DB',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
];

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const ChartScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor="percent"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );
};

export default ChartScreen;

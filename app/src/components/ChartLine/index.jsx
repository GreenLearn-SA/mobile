import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartLine = ({ subjects, percentages }) => {
    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    };

    const chartData = {
        labels: subjects,
        datasets: [
            {
                data: percentages,
                color: (opacity = 1) => `rgba(255, 69, 0, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };

    return (
        <View>
            <LineChart
                data={chartData}
                width={screenWidth}
                height={220}
                yAxisSuffix="%"
                chartConfig={chartConfig}
            />
        </View>
    );
};

const styles = {
    chartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
};

export default ChartLine;
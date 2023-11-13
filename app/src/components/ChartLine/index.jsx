import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartLine = ({ subjects, percentages }) => {
    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#8dc53d',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    };

    const chartData = {
        labels: subjects,
        datasets: [
            {
                data: percentages,
                color: (opacity = 1) => `rgba(79, 129, 8, ${opacity})`,
                strokeWidth: 1,
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
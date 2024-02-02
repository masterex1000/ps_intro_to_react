import { ResponsiveContainer, CartesianGrid, Legend, Tooltip, XAxis, YAxis, BarChart, Bar, Rectangle } from 'recharts';
import { CountyData } from '../library/DataSources';

const data = generateLetterChartData();

export default function CountyHistogramChart() {

    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </ResponsiveContainer >
    );
}


function generateLetterChartData() {    
    let data = [];
    const lengths = collectNameLengthTotals();

    for (let length in lengths) {
        data.push({
            name: length,
            amt: lengths[length]
        });
    }
    
    return data;
}

function collectNameLengthTotals() {
    let lengths = [];


    for (let county of CountyData) {
        let length = county.name.length;

        if (length in lengths)
            lengths[length] += 1;
        else
            lengths[length] = 1;
    }

    return lengths;
}
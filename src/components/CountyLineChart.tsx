import { ResponsiveContainer, LineChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import { CountyData } from '../library/DataSources'

const data = generateLetterChartData()

export default function CountyLineChart() {

    return (
        <ResponsiveContainer width='100%' height={350}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 50,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="length" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
        </ResponsiveContainer >
    )
}


function generateLetterChartData() {
    const data = []

    for (const county of CountyData) {
        data.push({
            name: county.name,
            length: county.name.length,
        })
    }

    return data
}
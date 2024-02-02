import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { CountyData } from '../library/DataSources'

const vowelList = ['A', 'E', 'I', 'O', 'U']

const data = generateStartLetterData()
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="black"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export default function ExampleLineChart() {

    return (
        <ResponsiveContainer width='100%' height={350}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}


function generateStartLetterData() {
    let startWithVowel = 0
    let startWithConsonant = 0

    for (const value of CountyData) {
        if (vowelList.indexOf(value.name.charAt(0).toUpperCase()) != -1)
            startWithVowel++
        else
            startWithConsonant++
    }

    return [
        { name: 'Vowels', value: startWithVowel },
        { name: 'Consonant', value: startWithConsonant }
    ]
}
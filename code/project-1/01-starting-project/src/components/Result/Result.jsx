
const Result = (props) => {
    return (
    <div>
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((ele,i)=>{
                    return(
                    <tr>
                    <td>{ele.year}</td>
                    <td>{ele.savingsEndOfYear}</td>
                    <td>{ele.yearlyInterest}</td>
                    <td>{ele.savingsEndOfYear - props.initialInvest - ele.yearlyContribution*ele.year}</td>
                    <td>{props.initialInvest + ele.yearlyContribution* ele.year}</td>
                </tr>
                    )
                })}
                {/* <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr> */}
            </tbody>
        </table>
    </div>
    )
}
export default Result;
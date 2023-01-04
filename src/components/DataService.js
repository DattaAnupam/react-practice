import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class DataService extends React.Component {
  state = {
    datas: []
  }

  componentDidMount() {
    const url = "http://ec2-3-20-29-91.us-east-2.compute.amazonaws.com:9001/dynamoDb/getAllOpenJobs"
    axios.get(url)
      .then(res => {
        const datas = res.data;
        this.setState({ datas });
      })
      .then(() => swal({
        title: "complete",
        text: "Data feted successfully",
        icon: "success"
      }))
  }

  render() {
    return (
        <div className="DataService">
            <table>
                <tr>
                    <th>Location</th>
                    <th>Overview</th>
                    <th>Responsibilities</th>
                    <th>Skills</th>
                    <th>Department</th>
                    <th>WorkStatus</th>
                    <th>Position</th>
                    <th>JobID</th>
                </tr>
                {this.state.datas.map(data => {
                    return(
                        <tr>
                            <td>{data.location}</td>
                            <td>{data.overview}</td>
                            <td>{data.responsibilities}</td>
                            <td>{data.skills}</td>
                            <td>{data.department}</td>
                            <td>{data.workStatus}</td>
                            <td>{data.position}</td>
                            <td>{data.jobId}</td>
                        </tr>
                        
                    );
                })}
            </table>
        </div>
    //     <ul>
    //     {
    //       this.state.datas
    //         .map(person =>
    //           <li key={person.jobId}>
    //                 {person.location}, 
    //                 {person.overview},
    //                 {person.responsibilities},
    //                 {person.skills},
    //                 {person.department},
    //                 {person.workStatus},
    //                 {person.position},
    //                 {person.jobId},
    //             </li>
    //         )
    //     }
    //   </ul>
    )
  }
}
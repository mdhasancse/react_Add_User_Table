import { React, Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      title : "my react app",
      employeeData : [],
      act : 0,
      index : ''
    }
  }

    handleSubmit= (e) => { //arrow function for onclick button
      e.preventDefault();
      let employeeData = this.state.employeeData;
      let name = this.refs.txtName.value;
      let age = this.refs.txtAge.value;

      if(this.state.act === 0)
      {
        let newEmployee = {
          "name" : name,
          "age" : age
        }
        employeeData.push(newEmployee);
      }
      else
      {
        let index = this.state.index;
        employeeData[index].name = name;
        employeeData[index].age = age;
      }
 
      this.setState({
        employeeData : employeeData,
        act:0
      })
    
      this.refs.myForm.reset();
    }

    // handleEdit = (i) =>{
    //   let employeeData=this.state.employeeData[i];
    //   this.refs.txtName.value=employeeData.name;
    //   this.refs.txtAge.value=employeeData.age;

    //   this.setState({
    //     employeeData : employeeData,
    //     act : 1,
    //     index : i
    //   });
    // }

    // handleDelete= (i) =>{
    //   let employeeData = this.state.employeeData;
    //   employeeData.splice(i,1); // it will go that particular next and delete that record
    //   // After deleted the data will be update all
    //   this.setState({
    //     employeeData : employeeData
    //   });
    // }

    

   
  
  render(){
    let employeeData = this.state.employeeData;
    return(
      <div>
        
        <form ref="myForm" className='myForm'>
        <h1>{this.state.title}</h1>
          <label>Name</label>
          <input type="text" ref="txtName" placeholder="Enter Name" required className='formField'/>
          <label>Age</label>
          <input type="number" ref="txtAge" placeholder="Enter Age" required className='formField'/>
          <button onClick={e => this.handleSubmit(e)} className="myButton">Save</button>
        </form>

        <table className='table'>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {
            employeeData.map( (data,i) =>
            <tr key = {i}>
              <td>{data.name}</td>
              <td>{data.age}</td>

              {/* <td>
                <button onClick={this.handleEdit(i)}>Edit</button>
              </td>
              <td>
                <button onClick={this.handleDelete(i)}>Delete</button>
              </td> */}
            </tr> )
          }
        </table>
      </div>
    )
  }
}
export default App;
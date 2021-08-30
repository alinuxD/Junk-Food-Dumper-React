/*eslint-disable*/
import React ,{useState}from "react";
import {
    Container,
    Row,
    Col, InputGroup, Input, CardBody,
} from "reactstrap";






function RecommendIntake(props){

    const radioInput = {
        marginRight: '0px',
        // marginLeft: '-20px',
        marginTop:'5px'
    }
    const radionValue = {
        fontSize: '15px',
        // marginRight: '50px',
        // marginLeft:'-20px'
    }

    const guideline = {
        "under13":{
            "Male":{"sed":"1,600 - 2,000","mod":"1,800 - 2,200","act":"2,000 - 2,600"},
            "Female":{"sed":"1,400 - 1,600","mod":"1,600 - 2,000","act":"1,800 - 2,200"}
        },
        "over13":{
            "Male":{"sed":"2,000 - 2,400","mod":"2,400 - 2,800","act":"2,800 - 3,200"},
            "Female":{"sed":"1,800","mod":"2,000","act":"2,400"}
        }
    }


    const [ageLine,setAgeLine]= useState(props.age<=13 ? "under13":"over13")
    const [activity,setActivity]= useState("mod")

    return (
        <>

            <div>
                <InputGroup >
                    <h3 style={{marginRight: '15px',marginLeft: '-10px',textAlign: 'left'}}>
                        Your calorie:
                    </h3>
                    <h3 className="text-center" style={{color:"#ffbe00",fontWeight: 700}}>{guideline[ageLine][props.gender][activity]}     </h3>
                    <h3 >
                        &nbsp;Kcal Per Day
                    </h3>
                </InputGroup>

                <h4  style={{marginRight: '-40px',fontWeight:'600', marginTop:"65px",marginBottom:"40px"}}>Your Child's Activity Level:</h4>
                            <InputGroup >

                                <Input style={radioInput}
                                       label="Male" type='Radio' checked={activity === 'sed'} value="sed"
                                       onChange={() => setActivity('sed') }/>
                                <div style={radionValue}>Not Active</div>
                                <br/>
                                <Input style={radioInput}
                                       label="Female" type='Radio' checked={activity === 'mod'} value="mod"
                                       onChange={() => setActivity('mod')}/>
                                <div style={radionValue}>Moderately Active</div>
                                <br/>
                                <Input style={radioInput}
                                       label="Female" type='Radio' checked={activity === 'act'} value="act"
                                       onChange={() => setActivity('act')}/>
                                <div style={radionValue}>Active</div>

                            </InputGroup>
            </div>
        </>
    )

}

export default RecommendIntake;

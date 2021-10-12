/*eslint-disable*/
import React ,{useState}from "react";
import {
    Container,
    Row,
    Col, InputGroup, Input, CardBody,
} from "reactstrap";
import Checkbox from "react-custom-checkbox";






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
            "Female":{"sed":"1,600 - 1,800","mod":"1,800 - 2,000","act":"2,000 - 2,400"}
        }
    }


    const [ageLine,setAgeLine]= useState("under13")
    const [activity,setActivity]= useState("mod")
    window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])
    return (
        <>

            <div>
                <p  style={{marginRight: '-40px',fontWeight:'700',fontSize:'2em', marginTop:"65px",marginBottom:"40px",marginLeft:'15px'}}>Your Child's Activity Level:</p>
                <p >
                    <InputGroup >
                        <Checkbox
                            style={{marginBottom:'20px',marginLeft:'160px',transitionDuration:"1s"}}
                            icon={<img src={require("assets/img/check.png").default} style={{ width:'30px',height:'30px' }} alt="" />}
                            borderColor="#D7C629"
                            borderRadius={30}
                            size={30}
                            label={<p style={{fontSize: '1.2em',color:'black',fontWeight:'700',paddingLeft:'0px',marginLeft:'15px',marginRight:'100px'}}>&nbsp;Less Active</p>}
                            right={false}
                            onChange={() => {setActivity('sed')
                                setAgeLine(props.age<=13 ? "under13":"over13")
                                window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])}}
                            checked={activity === 'sed'}
                            value="sed"
                        />

                        {/*<Input style={radioInput}*/}
                        {/*       label="Male" type='Radio' checked={activity === 'sed'} value="sed"*/}
                        {/*       onChange={() => {setActivity('sed')*/}
                        {/*           setAgeLine(props.age<=13 ? "under13":"over13")*/}
                        {/*           window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])} }/>*/}
                        {/*<div style={radionValue}>Sedentary Active</div>*/}
                        <br/>
                        <Checkbox
                            style={{marginBottom:'20px',marginLeft:'20px', transitionDuration:"1s"}}
                            icon={<img src={require("assets/img/check.png").default} className="newCheckbox" alt="" />}
                            borderColor="#D7C629"
                            borderRadius={30}
                            size={30}
                            label={<p style={{fontSize: '1.2em',color:'black',fontWeight:'700',paddingLeft:'0px',marginLeft:'15px',marginRight:'100px'}}>&nbsp;Moderately Active</p>}
                            right={false}
                            onChange={() => {setActivity('mod')
                                setAgeLine(props.age<=13 ? "under13":"over13")
                                window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])}}
                            checked={activity === 'mod'}
                            value="mod"
                        />
                        {/*<Input style={radioInput}*/}
                        {/*       label="Female" type='Radio' checked={activity === 'mod'} value="mod"*/}
                        {/*       onChange={() => {setActivity('mod')*/}
                        {/*           setAgeLine(props.age<=13 ? "under13":"over13")*/}
                        {/*           window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])}}/>*/}
                        {/*<div style={radionValue}>Moderately Active</div>*/}
                        <br/>
                        <Checkbox
                            style={{marginBottom:'20px',marginLeft:'20px', transitionDuration:"1s"}}
                            icon={<img src={require("assets/img/check.png").default} style={{ width:'30px',height:'30px' }} alt="" />}
                            borderColor="#D7C629"
                            borderRadius={30}
                            size={30}
                            label={<p style={{fontSize: '1.2em',color:'black',fontWeight:'700',paddingLeft:'0px',marginLeft:'15px',marginRight:'100px'}}>&nbsp;Very Active</p>}
                            right={false}
                            onChange={() => {setActivity('act')
                                setAgeLine(props.age<=13 ? "under13":"over13")
                                window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])}}
                            checked={activity === 'act'}
                            value="act"
                        />
                        {/*<Input style={radioInput}*/}
                        {/*       label="Female" type='Radio' checked={activity === 'act'} value="act"*/}
                        {/*       onChange={() => {setActivity('act')*/}
                        {/*           setAgeLine(props.age<=13 ? "under13":"over13")*/}
                        {/*           window.sessionStorage.setItem("Cal",guideline[ageLine][props.gender][activity])}}/>*/}
                        {/*<div style={radionValue}>Very Active</div>*/}

                    </InputGroup>
                </p>
                <CardBody >
                    <span style={{textAlign: 'left',fontWeight: '700',fontSize: '2em',marginLeft:'180px'}}>
                        Your child's calorie intake is
                    </span>
                    <span className="text-center" style={{color:"#ffbe00",fontWeight: 700,textAlign: 'left',fontSize: '2em',marginLeft:'15px'}}>{guideline[ageLine][props.gender][activity]} </span>
                    <span style={{textAlign: 'left',fontWeight: '700',fontSize: '2em'}}>
                        &nbsp;Kcal Per Day
                    </span>
                </CardBody>



            </div>
        </>
    )

}

export default RecommendIntake;

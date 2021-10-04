import React from "react";

//img import
import searchLogo from 'assets/img/demo.png';
// import Parent from "./views/DietPlanPage";

// reactstrap components
import {
    Button,
    Container, Input, InputGroup
} from "reactstrap";
import Javascript from "../../views/index-sections/Javascript";





function FoodSearchHeader(props) {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                // let windowScrollTop = window.pageYOffset / 3;
                // pageHeader.current.style.transform =
                //     "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    // const setFoodInput = props;
    const [query, setQuery] = React.useState('')
    const {setQueryFather} = props


    function onclickButton(){
        setQueryFather(query)
        // window.sessionStorage.removeItem("goBack")
        window.sessionStorage.setItem("goBack",query)

    }

    const handleKeypress = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onclickButton()
        }
    };

    return (
        <>
            <div className="page-header page-header-small">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/search_back_ground.jpg").default + ")",
                    }}
                    ref={pageHeader}
                ></div>
                <div  className="content-center">
                    <Container >
                        <h1 style={{color: 'white',fontSize: '35px'}}  className="title">
                            Enter your choice of Ingredients!
                        </h1>
                        <form>
                            <Input
                                   style ={{float:'left',fontSize: '1.5em', width: '500px',borderRadius: '15px', marginLeft: '160px',backgroundColor:'white'}}
                                   type="text"
                                   name="condition"
                                   placeholder="  What’s in your refrigerator?"
                                   onChange = {e => setQuery(e.target.value)}
                                   value={query}
                                   onKeyPress={handleKeypress}
                            ></Input>
                            <Button
                                onClick={onclickButton}
                                style={{border:'none',backgroundColor:'none',background:'none', marginLeft:'-200px',marginTop:'3px',borderRadius: '25px'}}>
                                <img src = {searchLogo} alt=" " style={{width:'23px',border:"none",marginTop:'-7px'}} ></img>

                            </Button>
                        </form>

                    </Container>
                </div>
            </div>
        </>
    );
}
export default FoodSearchHeader;







// import React from "react";
//
// //img import
// import searchLogo from 'assets/img/demo.png';
// // import Parent from "./views/DietPlanPage";
//
// // reactstrap components
// import {
//     Button,
//     Container, Input
// } from "reactstrap";

// import DietPlanPage from "../../views/DietPlanPage";



//
// function FoodSearchHeader(props) {
//
//     // const setFoodInput = props;
//     const [query, setQuery] = React.useState('')
//     const {setRes} = props
//
//     return (
//         <>
//             <div className="page-header page-header-small">
//                 <div  className="content-center">
//                     <Container>
//                         <h1 style={{color: 'white',fontSize: '35px'}}  className="title">
//                             Enter your choice of Ingredients!
//                         </h1>
//                         <form>
//                             <Input style={{fontSize: '1.5em', width: '500px',borderRadius: '15px', marginLeft: '5px',backgroundColor:'white'}}
//                                    type="text"
//                                    name="condition"
//                                    placeholder="  What’s in your refrigerator?"
//                                    onChange = {e => setQuery(e.target.value)}
//                                    value={query}
//                             ></Input>
//                             <Button
//                                 onClick={()=>setRes(query)}
//                                 style={{border:'none',backgroundColor:'none',background:'none', marginLeft:'-40px',borderRadius: '25px'}}>
//                                 <img src = {searchLogo} alt=" " style={{width:'23px',border:"none",marginTop:'-7px'}} ></img>
//
//                             </Button>
//                         </form>
//                     </Container>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default FoodSearchHeader;



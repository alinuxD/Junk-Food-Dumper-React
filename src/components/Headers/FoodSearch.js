import React from "react";
import {
    Button,
    Container, Input, InputGroup
} from "reactstrap";
import {FaSearch} from 'react-icons/fa';


function FoodSearch(props) {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
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
                    style={{
                        backgroundImage:"none",
                    }}
                    ref={pageHeader}
                ></div>
                <div  className="content-center">
                    {/* Search bar style */}
                    <Container >
                        <h1 style={{color: 'Black',fontSize: '35px', fontWeight:'bold'}}>
                            Looking for healthy recipes? Just Type
                        </h1>
                        <form>
                            <Input
                                   style ={{float:'left',fontSize: '1.5em', width: '850px',height:'50px', borderRadius: '20px', marginLeft: '0px',backgroundColor:'white'}}
                                   type="text"
                                   name="condition"
                                   placeholder="Type in the ingrident name here"
                                   onChange = {e => setQuery(e.target.value)}
                                   value={query}
                                   onKeyPress={handleKeypress}
                            ></Input>
                            <Button onClick={onclickButton}
                                style={{border:'none',backgroundColor:'black',borderRadius: '10px'}}>
                                        <i><FaSearch/></i>
                            </Button>
                        </form>


                    </Container>
                
                </div>
            </div>
        </>
    );
}
export default FoodSearch;

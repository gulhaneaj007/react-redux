import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/action'
import Home from "../components/Home";


const mapDispatchToProps =dispatch=>({
    addTocartHandler :data=>dispatch(addToCart(data ))
})

const mapStateToProps =state=>({
    data:state.cardItem
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home
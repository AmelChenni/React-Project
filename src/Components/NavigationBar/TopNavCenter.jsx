import axios from 'axios';
import React, {useState } from 'react'
import style from './NavigationBar.module.css'


export default function TopNavCenter() {
const[stores,setStores] = useState([]);
const [visible, setVisible] = useState(2);
const[show,setShow]=useState(true)

const options = {
  method: 'GET',
  url: 'https://kohls.p.rapidapi.com/stores/list',
  params: {
    latitude: '33.9733',
    longitude: '-118.2487',
    radius: '25'
  },
  headers: {
    'X-RapidAPI-Key': '4779e8ecd9mshe1ef9f9f64eee3cp1b926fjsna0085423d1aa',
    'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
  }
};
   // Function get Category from API
   async function getStors(){
    try {
      const response = await axios.request(options);
        // console.log(response.data.payload.stores);
        setStores(response.data.payload.stores);
        show?setShow(false):setShow(true);
        // console.log("show "+ show)
    } catch (error) {
        console.error(error);
    }
}

const loadMore = () => {
    setVisible(visible + 2);
  };

return (
    <div className={`${style.topNavCenter}`}>
      <i className="fa-solid fa-star"></i>
      <button onClick={()=>{getStors()}} className={`${style.btn}`}>My store :{stores.length>0? stores[0].storeName :""}</button>
      {
        show?<ul className={`${style.storeList} list-group`}>
        {stores.slice(0, visible).map((store,index)=>{
            return(
                <li className="list-group-item"><span className={`${style.name}`}>{index +1}</span> {store.storeName} 
                                                <span className={`${style.distnc}`}>approx{ Number(store.distanceFromOrigin).toFixed(3)}mi</span>
                <p>{store.address.addr1}</p>
                <p>{store.address.city}, {store.address.state},{store.address.countryCode}</p>

                <p>{store.address.phoneNumber}</p>
                </li>
                
            )
        })}
        
          {visible < stores.length && (
                <button onClick={loadMore}>View More Stores</button>
              )}
      </ul>:""
      }
    </div>
  )
}

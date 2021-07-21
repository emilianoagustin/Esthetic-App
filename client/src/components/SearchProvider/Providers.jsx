import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProviders, getServices , handleKeyword} from "../../Redux/actions/actions";
import ProviderCard from "./ProviderCard";
import PendingServices from "../HomeProviders/PendingServices/PendingServices";
import SearchBar from "../Searchbar/Searchbar";


import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const options = [
  "Zona Norte ",
  "Zona Sur",
  "Centro",
  "Zona Este",
  "Zona Oeste",
];





function Providers({ data }) {
  const dispatch = useDispatch();

  const allProviders = useSelector((state) => state.allProviders);
  const services = useSelector((state) => state.services);
  const keyword = useSelector((state) => state.keyword);
  
  const city =  allProviders.data?.map((z) => z.addresses[0]).map(x => x ? x.city : "")
 const city1 = city.map(x => x).indexOf(keyword) !== -1


  useEffect(() => {
    dispatch(getAllProviders());
    dispatch(getServices());
  }, [dispatch]);


  useEffect(() => {
    dispatch(handleKeyword())
  }, [])


  
  
  return (
    <div>
      <SearchBar /> 
      <div key="data" className="services-container">
       
        {allProviders.data &&
          allProviders.data
            .filter((dato) => {
              console.log(dato.addresses[0]?.city)
              return keyword?.length > 0
                ? dato.firstName?.concat(" " , dato.lastName).indexOf(keyword) !==
                    -1  
                : dato;
            }) 
            .map((firstName, index) => (
              <>
                <ProviderCard data={firstName} key={index} />
              </>
            ))
            
            }

        {services.data &&
          services.data
            .filter((dato) => {
              return keyword?.length > 0
                ? dato.name?.indexOf(keyword) !== -1
                : dato;
            })
            .map((name, index) => (
              <>
                <PendingServices data={name} key={index} />
              </>
            ))}
           

          {allProviders.data &&
          allProviders.data
            .filter((dato) => {
              console.log(dato)
              return keyword?.length > 0
                ? dato.addresses[0]?.city.indexOf(keyword) !== -1 
                || dato.addresses[0]?.state.indexOf(keyword) !== -1 
              : dato;
            })
            .map((firstName, index) => (
              <div>
                <ProviderCard data={firstName} key={index} />
              </div>
            ))}   
      </div>
      <div>
              
              </div>
      {/* /* <Link to={`/providers/providers/${data.name}`}>
        <div className='service-title-btn'>
          <button>
            <span className='service-title'>{data.name}</span>
          </button>
        </div>
        <div>
          {data.image ? (
            <img className='img' src={data.image} alt='Service Image'></img>
          ) : (
            <img className='img' src={defaultImg} alt='Default Image'></img>
          )}
        </div>
      </Link>
      <span className='service-text'>{`Contrata servicios de ${data.name} a domicilio`}</span>
      <Link to={`/services/details/${data._id}`}>
        <button className='more-details'>
          <span className='more-details-text'>Ver Detalles</span>
        </button>
      </Link>  */}
    </div>
  );
}

export default Providers;

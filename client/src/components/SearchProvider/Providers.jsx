import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProviders, getServices , handleKeyword} from "../../Redux/actions/actions";
import ProviderCard from "./ProviderCard";
import PendingServices from "../HomeProviders/PendingServices/PendingServices";
import SearchBar from "../Searchbar/Searchbar";

function Providers({ data }) {
  const allProviders = useSelector((state) => state.allProviders);
  console.log(allProviders)
  const services = useSelector((state) => state.services);
  console.log(services);
  const keyword = useSelector((state) => state.keyword);
 
  const dispatch = useDispatch();

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
              console.log(dato.firstName.concat(" ", dato.lastName))
              return keyword?.length > 0
                ? dato.firstName?.concat(" " , dato.lastName).indexOf(keyword) !==
                    -1
                : dato;
            })
            .map((firstName, index) => (
              <>
                {/* <Service key={index} data={service} /> */}
                <ProviderCard data={firstName} key={index} />
              </>
            ))}
        {services.data &&
          services.data
            .filter((dato) => {
              return keyword?.length > 0
                ? dato.name?.indexOf(keyword) !== -1
                : dato;
            })
            .map((name, index) => (
              <>
                {/* <Service key={index} data={service} /> */}
                <PendingServices data={name} key={index} />
              </>
            ))}
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

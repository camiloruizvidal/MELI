import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import SearchItem from '../../components/search/SearchItem';
import { searchItems } from '../../services/Items.services';


const Search = () => {
    console.log('======SEARCH======');
    const { query } = useParams();

    const [list, setList] = useState({items:[]});

    useEffect(() => {
        searchItems(query)
        .then((response) =>{

            setList(response.data)
        }
        )
        .catch((error) =>{

            console.log(error)
        }
        );
    }, [setList]);

    return (
      <div className="App">
        <div>
          {list.items.map((item, index) => (
              <div key={index.toString()}>
                <SearchItem
                    data={item}
                />
              </div>
          ))}
        </div>
      </div>
    );
  }

export default Search;
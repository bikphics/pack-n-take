import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {width} from '../config/Style';
import {useSelector} from 'react-redux';
import axios from 'axios';
import ResturantsCard from '../components/PT/ResturantsCard';
import Loader from '../components/PT/Loader';

function Store(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [resturantsData, setResturantsData] = useState([]);

  const loginUser = useSelector((state) => state.loginUser);
  useEffect(() => {
    setIsLoading(true);
    getResturants();
  }, []);

  const getResturants = () => {
    axios
      .get('https://www.packntake.com/api/restaurants', {
        params: {
          token: loginUser.user.access_token,
        },
      })
      .then((response) => {
        setResturantsData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (resturantsData.length === 0) {
    return <Loader />;
  } else {
    return (
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {resturantsData.map(
            (resturant, index) => (
              console.log('Resturants===>', resturant),
              (
                <ResturantsCard
                  key={index}
                  isCentered
                  priceTag
                  cardStyle={{width: width - 20}}
                  onPress={() =>
                    props.navigation.push('ProductDetailed', {hideBuyNow: true})
                  }
                  isStoreCard={true}
                  itemDetails={resturant}
                />
              )
            ),
          )}
        </ScrollView>
      </View>
    );
  }
}
export default Store;

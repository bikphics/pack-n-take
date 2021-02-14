import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {width} from '../config/Style';
import StoreProductCard from '../components/PT/StoreProductCard';
import {fetchPackages} from '../redux/actions/PackagesAction';
import {useSelector, connect, useDispatch} from 'react-redux';

const Packages = ({packageData, fetchPackages, navigation}) => {
  const loginUser = useSelector((state) => state.loginUser);
  const packagesData = useSelector((state) => state.PackagesReducer);
  useEffect(() => {
    console.log('LogIn User------>', loginUser);
    fetchPackages(loginUser.access_token);
  }, []);

  const handleLoadMore = () => {
    fetchPackages(loginUser.access_token);
  };

  const renderItem = ({item}) => (
    <StoreProductCard
      itemDetails={item}
      isCentered
      priceTag
      corner
      cardStyle={{width: width - 20}}
      onPress={() =>
        navigation.push('ProductDetails', {
          hideBuyNow: true,
          itemId: item.PackageID,
        })
      }
    />
  );
  if (packagesData.packages.length === 0) {
    return (
      <View>
        <ActivityIndicator size="large" color="#ddd" />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <FlatList
          data={packagesData.packages}
          keyExtractor={(resturant) => resturant.PackageID}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndThreshold={0}
        />
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    packageData: state.PackagesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPackages: (token) => dispatch(fetchPackages(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Packages);

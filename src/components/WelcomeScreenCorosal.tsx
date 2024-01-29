import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import tw from "../lib/tailwind";
import G from '../../assets/icons/girl2'
import T from '~/../assets/icons/girl2'



const carouselData = ['image1','image2','image3']


const WelcomeScreenCorosal = ({ data }: any) => {
  const { width, height } = useWindowDimensions();
  const demoCorousaldata:any = {
    image1:require('../../assets/welcomImages/carouselImage3.jpg'),
    image2:require('../../assets/welcomImages/corosalImage1.jpg'),
    image3:require('../../assets/welcomImages/corosalImage2.jpg'),
}

const CarouselComponent = ({ item }: any) => {

    return <View style={tw`bg-red h-full w-full`}>
      {/* <Image source={demoCorousaldata?.[`${item}`]} style={tw`h-full w-full`} /> */}
      <T/>
    </View>;
  };

  return (
    <View>
      <Carousel
        data={carouselData}
        vertical={false}
        width={width}
        height={height * 60/100}
        style={tw``}
        loop={false}
        autoPlay={false}
        scrollAnimationDuration={100}
        mode="parallax"
        renderItem={CarouselComponent}
      />
    </View>
  );
};

export default WelcomeScreenCorosal;

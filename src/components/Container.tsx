import React, { Children, PropsWithChildren } from 'react'
import { View } from 'react-native'
import tw from '../lib/tailwind'

type Props = {
    removeXPading?:boolean;
    removeYpading?:boolean;
    backGroundColor?:string;
}

const Container:React.FC<PropsWithChildren<Props>> = ({children,removeXPading,removeYpading,backGroundColor="white"}) => {
  return (
    <View style={tw`flex-1 h-screen bg-${backGroundColor} relative`}>
        <View style={tw`${removeXPading?'':'px-4'} ${removeYpading?'pt-6':'py-6'}  `}>
      {children}
      </View>
    </View>
  )
}

export default Container
